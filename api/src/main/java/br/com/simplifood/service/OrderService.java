package br.com.simplifood.service;

import br.com.simplifood.config.WppConnectConfig;
import br.com.simplifood.enums.OrderStatus;
import br.com.simplifood.mapper.*;
import br.com.simplifood.model.*;
import br.com.simplifood.repository.*;
import br.com.simplifood.representation.order.*;
import br.com.simplifood.representation.product.ProductOrderResponse;
import br.com.simplifood.representation.wppapi.ConfirmNumberResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductOrderRepository productOrderRepository;

    @Autowired
    private WppConnectService wppConnectService;

    @Autowired
    private WppConfigService wppConfigService;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private RestaurantRepository restaurantRepository;

    private SimpMessagingTemplate simpMessagingTemplate;

    public CreateOrderResponse createOrder(){
        OrderModel orderModel = new OrderModel();
        orderModel.setOrderStatus(OrderStatus.OPEN);
        Integer idOrder = orderRepository.save(orderModel).getId();
        return new CreateOrderResponse(idOrder);
    }

    public CreateOrderResponse addProduct(AddProductRequest addProductRequest){
        OrderModel orderModel = orderRepository.getById(addProductRequest.getIdOrder());
        ProductModel productModel = productRepository.getById(addProductRequest.getIdProduct());
        ProductOrderModel productOrderModel = new ProductOrderModel();
        productOrderModel.setOrderModel(orderModel);
        productOrderModel.setProductModel(productModel);
        for (int i = 0; i < addProductRequest.getQuantityProduct(); i++) {
            productOrderRepository.save(productOrderModel);
        }
        return new CreateOrderResponse(addProductRequest.getIdOrder());
    }

    public BasicOrderResponse getBasicOrderResponse(Integer idOrder){
        List<ProductOrderModel> productOrderModels = productOrderRepository.findByOrderModel(idOrder);

        BigDecimal totalPrice = BigDecimal.ZERO;
        Integer totalItems = productOrderModels.size();

        for (int i = 0; i < productOrderModels.size() ; i++) {
            totalPrice = totalPrice.add(productOrderModels.get(i).getProductModel().getPrice());
        }

        return new BasicOrderResponse(totalItems, totalPrice);
    }

    public OrderItensReponse getOrderItens(Integer idOrder){
        List<ProductOrderModel> productOrderModels = productOrderRepository.findByOrderModel(idOrder);

        OrderItensReponse orderItensReponse = new OrderItensReponse();
        productOrderModels
                .stream()
                .map(x -> orderItensReponse.
                        getOrderItemResponses()
                        .add(new ProductOrderMapper(x.getProductModel())
                                .toResponse()))
                .collect(Collectors.toList());
        return orderItensReponse;
    }

    public AllOrdersResponse getAllOrders(){
        List<OrderModel> orderModelList = orderRepository.findAll();
        AllOrdersResponse allOrdersResponse = new AllOrdersResponse();

        orderModelList.stream().forEach(x -> {
            List<ProductOrderModel> productOrderModelList = productOrderRepository
                    .findByOrderModel(x.getId());

            ProductToOrderMapper productToOrderMapper = new ProductToOrderMapper(productOrderModelList);
            List<ProductOrderResponse> productOrderResponses = productToOrderMapper.toResponse();

            AddressModel addressModel = addressRepository.getById(orderModelList.get(0).getAddressModel().getId());
            AddressMapper addressMapper = new AddressMapper(addressModel);

            LocalDateTime hourOrder = orderModelList.get(0).getHourOrder();

            OrderMapper orderMapper = new OrderMapper(x.getId()
                    ,productOrderResponses,
                    addressMapper.toResponse(),
                    hourOrder,
                    x.getOrderStatus()
                    );
            allOrdersResponse.getOrderResponseList().add(orderMapper.toResponse());
        });
        return allOrdersResponse;
    }

    public boolean saveAddressToOrder(AddAddressToOrderRequest addAddressToOrderRequest){
        OrderModel orderModel = orderRepository.getById(addAddressToOrderRequest.getOrderId());
        AddressMapper addressMapper = new AddressMapper(addAddressToOrderRequest);
        AddressModel addressModel = addressMapper.toModel();
        orderModel.setAddressModel(addressModel);
        orderRepository.save(orderModel);
        return true;
    }

    public void getVerifyNumber(String phone, Integer orderId){
        OrderModel orderModel = orderRepository.getById(orderId);
        orderModel.setPhone(phone);
        orderRepository.save(orderModel);
        Random random = new Random();
        int numberVerification = random.nextInt(9999);
        WppConnectConfig.verifyNumber = numberVerification;
        String message = "Olá! Seu código de verificação do simplifood é " + numberVerification;
        MessageMapper messageMapper = new MessageMapper(phone, message);
        wppConnectService.sendMessage("Bearer " + wppConfigService.getToken(), messageMapper.getSendMessageRequest());
    }

    public ConfirmNumberResponse confirmNumber(Integer numberOfVerification, Integer orderId){
        if(numberOfVerification.equals(WppConnectConfig.verifyNumber)){
            OrderModel orderModel = orderRepository.getById(orderId);
            orderModel.setOrderStatus(OrderStatus.LOADING);
            orderRepository.save(orderModel);
            return new ConfirmNumberResponse(true);
        }
        return new ConfirmNumberResponse(false);
    }

    public AllOrdersResponse updateStatusOrder(Integer idOrder){
        OrderModel orderModel = orderRepository.getById(idOrder);
        String nameRestaurant = restaurantRepository.getById(1).getFantasyName();
        String phone = orderModel.getPhone();
        String message = "";

        if(orderModel.getOrderStatus() == OrderStatus.LOADING){
            orderModel.setOrderStatus(OrderStatus.INITIATED);
            orderRepository.save(orderModel);
            message = "Olá! Seu pedido do restaurante "+ nameRestaurant  +" foi iniciado.";
        }else if(orderModel.getOrderStatus() == OrderStatus.INITIATED){
            orderModel.setOrderStatus(OrderStatus.DONE);
            List<ProductOrderModel> productOrderModelList = productOrderRepository.findByOrderModel(idOrder);
            productOrderRepository.deleteAll(productOrderModelList);
            orderRepository.delete(orderModel);
            message = "Olá! Seu pedido do restaurante "+ nameRestaurant  +" saiu para entrega.";
        }

        MessageMapper messageMapper = new MessageMapper(phone, message);
        wppConnectService.sendMessage("Bearer " + wppConfigService.getToken(), messageMapper.getSendMessageRequest());

        return getAllOrders();
    }

}


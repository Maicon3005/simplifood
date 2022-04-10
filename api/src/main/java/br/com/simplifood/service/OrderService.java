package br.com.simplifood.service;

import br.com.simplifood.config.WppConnectConfig;
import br.com.simplifood.enums.OrderStatus;
import br.com.simplifood.mapper.AddressMapper;
import br.com.simplifood.mapper.MessageMapper;
import br.com.simplifood.mapper.ProductOrderMapper;
import br.com.simplifood.model.AddressModel;
import br.com.simplifood.model.OrderModel;
import br.com.simplifood.model.ProductModel;
import br.com.simplifood.model.ProductOrderModel;
import br.com.simplifood.repository.OrderRepository;
import br.com.simplifood.repository.ProductOrderRepository;
import br.com.simplifood.repository.ProductRepository;
import br.com.simplifood.representation.order.*;
import br.com.simplifood.representation.wppapi.ConfirmNumberResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
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

    public boolean saveAddressToOrder(AddAddressToOrderRequest addAddressToOrderRequest){
        OrderModel orderModel = orderRepository.getById(addAddressToOrderRequest.getOrderId());
        AddressMapper addressMapper = new AddressMapper(addAddressToOrderRequest);
        AddressModel addressModel = addressMapper.toModel();
        orderModel.setAddressModel(addressModel);
        orderRepository.save(orderModel);
        return true;
    }

    public void getVerifyNumber(String phone){
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
            broadcastNews("deu certo!");
            return new ConfirmNumberResponse(true);
        }
        return new ConfirmNumberResponse(false);
    }

    public void broadcastNews(String message) {
        this.simpMessagingTemplate.convertAndSend("/topic/order", message);
    }
}


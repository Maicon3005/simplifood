package br.com.simplifood.service;

import br.com.simplifood.enums.OrderStatus;
import br.com.simplifood.model.OrderModel;
import br.com.simplifood.model.ProductModel;
import br.com.simplifood.model.ProductOrderModel;
import br.com.simplifood.repository.OrderRepository;
import br.com.simplifood.repository.ProductOrderRepository;
import br.com.simplifood.repository.ProductRepository;
import br.com.simplifood.representation.order.AddProductRequest;
import br.com.simplifood.representation.order.BasicOrderResponse;
import br.com.simplifood.representation.order.CreateOrderResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductOrderRepository productOrderRepository;

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
        /*OrderModel orderModel = orderRepository.getById(idOrder);
        BigDecimal totalPrice = new BigDecimal(0);

        for (int i = 0; i < orderModel.getModelList().size(); i++) {
            totalPrice.add(orderModel.getModelList().get(i).getPrice());
        }

        System.out.println("Quantidade de produtos:" + orderModel.getModelList().size());
        orderModel.getModelList().stream().forEach(x -> System.out.println(x.getName()));
        System.out.println("**********************************************************");

        Integer totalQantityOfProducts = orderModel.getModelList().size();*/
        return new BasicOrderResponse(0, new BigDecimal(0));
    }
}

/*


public CreateOrderResponse createOrder(Integer idProduct, Integer quantity){
        ProductModel productModel = new ProductModel();
        productModel = productRepository.getById(idProduct);
        List<ProductModel> productModels = new ArrayList<>();
        for(int i = 0; i < quantity; i++){
            productModels.add(productModel);
        }
        OrderModel orderModel = new OrderModel();
        orderModel.setProductModels(productModels);

        System.out.println("Quantidade de produtos:" + productModels.size());

        Integer idOrder = orderRepository.save(orderModel).getId();
        return  new CreateOrderResponse(idOrder);
    }

    public CreateOrderResponse addProduct(AddProductRequest addProductRequest){
        ProductModel productModel = productRepository.getById(addProductRequest.getIdProduct());
        List<ProductModel> productModels = new ArrayList<>();
        for(int i = 0; i < addProductRequest.getQuantityProduct(); i++){
            productModels.add(productModel);
        }
        OrderModel orderModel = orderRepository.getById(addProductRequest.getIdOrder());
        List<ProductModel> productModelList = orderModel.getProductModels();
        System.out.println("quantidade de produtos dentro da ordem: " + productModelList.size());
        productModelList.addAll(productModels);
        orderModel.setProductModels(productModelList);
        orderRepository.save(orderModel).getId();
        System.out.println("Quantidade de produtos:" + productModelList.size());
        return new CreateOrderResponse(addProductRequest.getIdOrder());
    }
 */

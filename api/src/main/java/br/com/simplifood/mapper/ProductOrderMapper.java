package br.com.simplifood.mapper;

import br.com.simplifood.model.ProductModel;
import br.com.simplifood.representation.order.OrderItemResponse;

public class ProductOrderMapper {

    private OrderItemResponse orderItemResponse;

    public ProductOrderMapper(ProductModel productModel) {
        orderItemResponse = new OrderItemResponse(
                productModel.getId(),
                productModel.getName(),
                productModel.getPrice(),
                productModel.getUrlImage());
    }

    public OrderItemResponse toResponse(){
        return orderItemResponse;
    }
}

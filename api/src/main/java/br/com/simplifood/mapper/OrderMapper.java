package br.com.simplifood.mapper;

import br.com.simplifood.enums.OrderStatus;
import br.com.simplifood.representation.address.AddressResponse;
import br.com.simplifood.representation.order.OrderResponse;
import br.com.simplifood.representation.product.ProductOrderResponse;

import java.time.LocalDateTime;
import java.util.List;

public class OrderMapper {

    private OrderResponse orderResponse;

    public OrderMapper(Integer id, List<ProductOrderResponse> productOrderResponses, AddressResponse addressResponse, LocalDateTime date, OrderStatus orderStatus) {
        this.orderResponse = new OrderResponse();
        orderResponse.setId(id);
        orderResponse.setProductOrderModelList(productOrderResponses);
        orderResponse.setAddressResponse(addressResponse);
        orderResponse.setHourToOrder(date);
        orderResponse.setOrderStatus(orderStatus);
    }

    public OrderResponse toResponse(){
        return orderResponse;
    }
}

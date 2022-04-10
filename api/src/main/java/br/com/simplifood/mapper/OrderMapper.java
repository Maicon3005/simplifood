package br.com.simplifood.mapper;

import br.com.simplifood.representation.address.AddressResponse;
import br.com.simplifood.representation.order.OrderResponse;
import br.com.simplifood.representation.product.ProductOrderResponse;

import java.util.Date;
import java.util.List;

public class OrderMapper {

    private OrderResponse orderResponse;

    public OrderMapper(Integer id, List<ProductOrderResponse> productOrderResponses, AddressResponse addressResponse, Date date) {
        this.orderResponse = new OrderResponse();
        orderResponse.setId(id);
        orderResponse.setProductOrderModelList(productOrderResponses);
        orderResponse.setAddressResponse(addressResponse);
        orderResponse.setHourToOrder(date);
    }

    public OrderResponse toResponse(){
        return orderResponse;
    }
}

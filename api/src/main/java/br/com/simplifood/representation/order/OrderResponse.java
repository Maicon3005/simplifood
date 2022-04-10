package br.com.simplifood.representation.order;

import br.com.simplifood.enums.OrderStatus;
import br.com.simplifood.representation.address.AddressResponse;
import br.com.simplifood.representation.product.ProductOrderResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderResponse {

    private Integer id;

    private List<ProductOrderResponse> productOrderModelList;

    private AddressResponse addressResponse;

    private LocalDateTime hourToOrder;

    private OrderStatus orderStatus;
}

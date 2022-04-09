package br.com.simplifood.representation.order;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddAddressToOrderRequest {

    private Integer orderId;
    private String cep;
    private String city;
    private String state;
    private String district;
    private String street;
    private Integer number;
}

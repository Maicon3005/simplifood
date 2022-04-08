package br.com.simplifood.representation.order;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderItemResponse {

    private Integer id;

    private String nameProduct;

    private BigDecimal priceProduct;

    private String urlImage;
}

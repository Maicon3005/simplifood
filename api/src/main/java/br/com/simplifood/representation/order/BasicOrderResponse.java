package br.com.simplifood.representation.order;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BasicOrderResponse {

    public Integer quantityOfProducts;

    public BigDecimal totalPriceOrder;
}

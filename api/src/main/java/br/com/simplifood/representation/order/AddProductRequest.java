package br.com.simplifood.representation.order;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddProductRequest {
    private Integer idOrder;
    private Integer idProduct;
    private Integer quantityProduct;
}

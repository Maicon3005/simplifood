package br.com.simplifood.representation.product;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateProductRequest {

    private Integer idProduct;
    private Integer idCategory;
    private String name;
    private String quantity;
    private BigDecimal price;
    private String description;
    private String imageUrl;
}

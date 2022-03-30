package br.com.simplifood.representation.product;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductResponse {
    private Integer id;
    private String urlImage;
    private String productName;
    private String quantity;
    private BigDecimal price;
    private String description;
}

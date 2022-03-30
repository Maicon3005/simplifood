package br.com.simplifood.representation.product;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AllProductsResponse {
    private List<ProductResponse> productResponses;
}

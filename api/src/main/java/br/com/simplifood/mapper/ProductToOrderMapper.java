package br.com.simplifood.mapper;

import br.com.simplifood.model.ProductOrderModel;
import br.com.simplifood.representation.product.ProductOrderResponse;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class ProductToOrderMapper {

    private List<ProductOrderResponse> productOrderResponse;

    public ProductToOrderMapper(List<ProductOrderModel> productModels) {
        this.productOrderResponse = new ArrayList<>();
        productModels.stream().map(x -> productOrderResponse
                .add(new ProductOrderResponse(x.getProductModel().getName())))
                .collect(Collectors.toList());
    }

    public List<ProductOrderResponse> toResponse(){
        return productOrderResponse;
    }
}

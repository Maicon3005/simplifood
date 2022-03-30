package br.com.simplifood.mapper;

import br.com.simplifood.model.ProductModel;
import br.com.simplifood.representation.product.CreateProductRequest;

public class ProductMapper {

    private ProductModel productModel;

    public ProductMapper(CreateProductRequest createProductRequest) {
        this.productModel = new ProductModel();
        this.productModel.setName(createProductRequest.getName());
        this.productModel.setQuantity(createProductRequest.getQuantity());
        this.productModel.setPrice(createProductRequest.getPrice());
        this.productModel.setDescription(createProductRequest.getDescription());
        this.productModel.setUrlImage(createProductRequest.getImageUrl());
    }

    public ProductModel toModel() {
        return productModel;
    }
}

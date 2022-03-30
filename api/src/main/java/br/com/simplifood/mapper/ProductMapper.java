package br.com.simplifood.mapper;

import br.com.simplifood.model.ProductModel;
import br.com.simplifood.representation.product.CreateProductRequest;
import br.com.simplifood.representation.product.ProductResponse;

public class ProductMapper {

    private ProductModel productModel;
    private ProductResponse productResponse;

    public ProductMapper(CreateProductRequest createProductRequest) {
        this.productModel = new ProductModel();
        this.productModel.setName(createProductRequest.getName());
        this.productModel.setQuantity(createProductRequest.getQuantity());
        this.productModel.setPrice(createProductRequest.getPrice());
        this.productModel.setDescription(createProductRequest.getDescription());
        this.productModel.setUrlImage(createProductRequest.getImageUrl());
    }

    public ProductMapper(ProductModel productModel) {
        this.productResponse = new ProductResponse();
        this.productResponse.setId(productModel.getId());
        this.productResponse.setUrlImage(productModel.getUrlImage());
        this.productResponse.setProductName(productModel.getName());
        this.productResponse.setQuantity(productModel.getQuantity());
        this.productResponse.setPrice(productModel.getPrice());
        this.productResponse.setDescription(productModel.getDescription());
    }

    public ProductModel toModel() {
        return productModel;
    }

    public ProductResponse toResponse() {
        return productResponse;
    }
}

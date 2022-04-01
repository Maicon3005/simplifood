package br.com.simplifood.service;

import br.com.simplifood.mapper.ProductMapper;
import br.com.simplifood.model.CategoryModel;
import br.com.simplifood.model.ProductModel;
import br.com.simplifood.repository.CategoryRepository;
import br.com.simplifood.repository.ProductRepository;
import br.com.simplifood.representation.product.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    public CreateProductResponse saveProduct(CreateProductRequest createProductRequest) {
        CategoryModel categoryModel = categoryRepository.getById(createProductRequest.getIdCategory());
        ProductMapper productMapper = new ProductMapper(createProductRequest);
        ProductModel productModel = productMapper.toModel();
        productModel.setCategoryModel(categoryModel);
        categoryModel.setQuantityProducts(categoryModel.getQuantityProducts() + 1);
        return new CreateProductResponse(productRepository.save(productModel).getId());
    }

    public CreateProductResponse updateProduct(UpdateProductRequest updateProductRequest){
        ProductModel productModel = productRepository.getById(updateProductRequest.getIdProduct());
        productModel.setUrlImage(updateProductRequest.getImageUrl());
        productModel.setName(updateProductRequest.getName());
        productModel.setQuantity(updateProductRequest.getQuantity());
        productModel.setPrice(updateProductRequest.getPrice());
        productModel.setDescription(updateProductRequest.getDescription());

        return new CreateProductResponse( productRepository.save(productModel).getId());
    }

    public ProductResponse getProduct(Integer idProduct){
        ProductModel productModel = productRepository.getById(idProduct);

        if(productModel != null){
            ProductMapper productMapper = new ProductMapper(productModel);
            return productMapper.toResponse();
        }
        return new ProductResponse();
    }

    public AllProductsResponse getAllProducts(Integer idCategory) {
        List<ProductModel> productModels = productRepository.findByCategoryModelId(idCategory);

        if (productModels.isEmpty()) {
            return new AllProductsResponse();
        }

        List<ProductResponse> allProductsResponses = productModels
                .stream()
                .map( x -> new ProductMapper(x).toResponse()).collect(Collectors.toList());

        return new AllProductsResponse(allProductsResponses);
    }

    public boolean deleteProduct(Integer idProduct){
        ProductModel productModel = productRepository.getById(idProduct);
        CategoryModel categoryModel = productModel.getCategoryModel();
        categoryModel.setQuantityProducts(categoryModel.getQuantityProducts() - 1);
        if(productModel != null) {
            productRepository.delete(productModel);
            categoryRepository.save(categoryModel);
            return true;
        }
        return false;
    }
}

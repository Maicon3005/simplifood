package br.com.simplifood.service;

import br.com.simplifood.mapper.ProductMapper;
import br.com.simplifood.model.CategoryModel;
import br.com.simplifood.model.ProductModel;
import br.com.simplifood.repository.CategoryRepository;
import br.com.simplifood.repository.ProductRepository;
import br.com.simplifood.representation.product.CreateProductRequest;
import br.com.simplifood.representation.product.CreateProductResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}

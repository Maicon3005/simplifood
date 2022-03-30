package br.com.simplifood.service;

import br.com.simplifood.mapper.ProductMapper;
import br.com.simplifood.model.CategoryModel;
import br.com.simplifood.model.ProductModel;
import br.com.simplifood.repository.CategoryRepository;
import br.com.simplifood.repository.ProductRepository;
import br.com.simplifood.representation.product.AllProductsResponse;
import br.com.simplifood.representation.product.CreateProductRequest;
import br.com.simplifood.representation.product.CreateProductResponse;
import br.com.simplifood.representation.product.ProductResponse;
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
}

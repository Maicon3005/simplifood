package br.com.simplifood.controller;

import br.com.simplifood.representation.product.CreateProductRequest;
import br.com.simplifood.representation.product.CreateProductResponse;
import br.com.simplifood.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/create")
    public ResponseEntity<CreateProductResponse> createProduct(@RequestBody CreateProductRequest createProductRequest) {
        CreateProductResponse createProductResponse = productService.saveProduct(createProductRequest);
        return createProductRequest != null ? ResponseEntity.ok().body(createProductResponse) : ResponseEntity.notFound().build();
    }
}

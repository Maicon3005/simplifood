package br.com.simplifood.controller;

import br.com.simplifood.representation.product.AllProductsResponse;
import br.com.simplifood.representation.product.CreateProductRequest;
import br.com.simplifood.representation.product.CreateProductResponse;
import br.com.simplifood.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/getall/{idCategory}")
    public ResponseEntity<AllProductsResponse> getAllProducts(@PathVariable Integer idCategory){
        AllProductsResponse allProductsResponse = productService.getAllProducts(idCategory);
        return allProductsResponse != null ? ResponseEntity.ok().body(allProductsResponse) : ResponseEntity.notFound().build();
    }
}

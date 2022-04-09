package br.com.simplifood.controller;

import br.com.simplifood.representation.order.CalculatePriceResponse;
import br.com.simplifood.representation.product.*;
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

    @GetMapping("/get/{idProduct}")
    public ResponseEntity<ProductResponse> getProduct(@PathVariable Integer idProduct){
        ProductResponse productResponse = productService.getProduct(idProduct);
        return productResponse != null ? ResponseEntity.ok().body(productResponse) :ResponseEntity.notFound().build();
    }

    @GetMapping("/getall/{idCategory}")
    public ResponseEntity<AllProductsResponse> getAllProducts(@PathVariable Integer idCategory){
        AllProductsResponse allProductsResponse = productService.getAllProducts(idCategory);
        return allProductsResponse != null ? ResponseEntity.ok().body(allProductsResponse) : ResponseEntity.notFound().build();
    }

    @GetMapping("/calculateprice/{idProduct}/{quantity}")
    public ResponseEntity<CalculatePriceResponse> getPricePerProduct(@PathVariable Integer idProduct,
                                                                     @PathVariable Integer quantity) {
        CalculatePriceResponse calculatePriceResponse = productService.getPricePerProduct(idProduct,quantity);
        return calculatePriceResponse != null ? ResponseEntity.ok().body(calculatePriceResponse) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{idProduct}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Integer idProduct){
        boolean result = productService.deleteProduct(idProduct);
        return result ? ResponseEntity.ok().build() :ResponseEntity.notFound().build();
    }

    @PutMapping("/update")
    public ResponseEntity<CreateProductResponse> updateProduct(@RequestBody UpdateProductRequest updateProductRequest) {
        CreateProductResponse updateProductResponse = productService.updateProduct(updateProductRequest);
        return updateProductResponse != null ? ResponseEntity.ok().body(updateProductResponse) : ResponseEntity.notFound().build();
    }
}

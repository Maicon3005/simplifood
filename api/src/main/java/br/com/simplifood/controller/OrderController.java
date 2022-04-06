package br.com.simplifood.controller;

import br.com.simplifood.representation.order.CalculatePriceResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/order")
public class OrderController {

    /*@PostMapping("/addProduct")
    public ResponseEntity<CreateCategoryResponse> addProduct(@RequestBody AddProductRequest addProductRequest) {
        CreateCategoryResponse createCategoryResponse = categoryService.saveCategory(createCategoryRequest);
        return createCategoryResponse != null ? ResponseEntity.ok().body(createCategoryResponse) : ResponseEntity.notFound().build();
    }*/

}

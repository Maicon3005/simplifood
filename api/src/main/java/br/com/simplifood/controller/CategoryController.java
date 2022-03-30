package br.com.simplifood.controller;

import br.com.simplifood.representation.category.CreateCategoryRequest;
import br.com.simplifood.representation.category.CreateCategoryResponse;
import br.com.simplifood.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping("/create")
    public ResponseEntity<CreateCategoryResponse> createCategory(@RequestBody CreateCategoryRequest createCategoryRequest) {
        CreateCategoryResponse createCategoryResponse = categoryService.saveCategory(createCategoryRequest);
        return createCategoryResponse != null ? ResponseEntity.ok().body(createCategoryResponse) : ResponseEntity.notFound().build();
    }
}

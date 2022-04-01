package br.com.simplifood.controller;

import br.com.simplifood.representation.category.AllCategoriesResponse;
import br.com.simplifood.representation.category.CreateCategoryRequest;
import br.com.simplifood.representation.category.CreateCategoryResponse;
import br.com.simplifood.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/getall")
    public ResponseEntity<AllCategoriesResponse> getAllCategories(){
        AllCategoriesResponse allCategoriesResponse = categoryService.getAllCategories();
        return allCategoriesResponse != null ? ResponseEntity.ok().body(allCategoriesResponse) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{idCategory}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Integer idCategory){
        boolean result = categoryService.deleteCategory(idCategory);
        return result ? ResponseEntity.ok().build() :ResponseEntity.notFound().build();
    }
}

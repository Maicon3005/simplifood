package br.com.simplifood.mapper;

import br.com.simplifood.model.CategoryModel;
import br.com.simplifood.representation.category.CategoryResponse;
import br.com.simplifood.representation.category.CreateCategoryRequest;

public class CategoryMapper {

    private CategoryModel categoryModel;
    private CategoryResponse categoryResponse;

    public CategoryMapper(CreateCategoryRequest createCategoryRequest) {
        this.categoryModel = new CategoryModel();
        this.categoryModel.setCategoryName(createCategoryRequest.getNameCategory());
    }

    public CategoryMapper(CategoryModel categoryModel) {
        this.categoryResponse = new CategoryResponse(categoryModel.getId(), categoryModel.getCategoryName());
    }

    public CategoryModel toModel() {
        return categoryModel;
    }

    public CategoryResponse toResponse() {
        return categoryResponse;
    }
}

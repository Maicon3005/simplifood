package br.com.simplifood.mapper;

import br.com.simplifood.model.CategoryModel;
import br.com.simplifood.representation.category.CreateCategoryRequest;

public class CategoryToModelMapper {

    private CategoryModel categoryModel;

    public CategoryToModelMapper(CreateCategoryRequest createCategoryRequest) {
        this.categoryModel = new CategoryModel();
        this.categoryModel.setCategoryName(createCategoryRequest.getNameCategory());
    }

    public CategoryModel toModel(){
        return categoryModel;
    }
}

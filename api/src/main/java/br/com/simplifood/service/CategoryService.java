package br.com.simplifood.service;

import br.com.simplifood.mapper.CategoryToModelMapper;
import br.com.simplifood.model.CategoryModel;
import br.com.simplifood.repository.CategoryRepository;
import br.com.simplifood.representation.category.CreateCategoryRequest;
import br.com.simplifood.representation.category.CreateCategoryResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public CreateCategoryResponse saveCategory(CreateCategoryRequest createCategoryRequest){
        CategoryToModelMapper categoryToModelMapper = new CategoryToModelMapper(createCategoryRequest);
        CategoryModel categoryModel = categoryToModelMapper.toModel();
        CreateCategoryResponse createCategoryResponse = new CreateCategoryResponse(categoryRepository.save(categoryModel).getId());
        return createCategoryResponse;
    }
}

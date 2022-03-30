package br.com.simplifood.service;

import br.com.simplifood.mapper.CategoryMapper;
import br.com.simplifood.model.CategoryModel;
import br.com.simplifood.repository.CategoryRepository;
import br.com.simplifood.representation.category.AllCategoriesResponse;
import br.com.simplifood.representation.category.CategoryResponse;
import br.com.simplifood.representation.category.CreateCategoryRequest;
import br.com.simplifood.representation.category.CreateCategoryResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public CreateCategoryResponse saveCategory(CreateCategoryRequest createCategoryRequest){
        CategoryMapper categoryMapper = new CategoryMapper(createCategoryRequest);
        CategoryModel categoryModel = categoryMapper.toModel();
        CreateCategoryResponse createCategoryResponse = new CreateCategoryResponse(categoryRepository.save(categoryModel).getId());
        return createCategoryResponse;
    }

    public AllCategoriesResponse getAllCategories(){
        List<CategoryModel> categoryModels = new ArrayList<>();
        categoryModels.addAll(categoryRepository.findAll());

        if(categoryModels.isEmpty()){
            return new AllCategoriesResponse();
        }

        List<CategoryResponse> categoryResponses = categoryModels
                .stream()
                .map( x -> new CategoryMapper(x).toResponse()).collect(Collectors.toList());

        return new AllCategoriesResponse(categoryResponses);
    }
}

package br.com.simplifood.representation.category;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AllCategoriesResponse {

    private List<CategoryResponse> categories;
}

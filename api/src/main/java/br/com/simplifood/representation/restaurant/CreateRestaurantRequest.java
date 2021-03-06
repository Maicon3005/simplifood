package br.com.simplifood.representation.restaurant;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateRestaurantRequest {
    private Integer userId;
    private String corporateName;
    private String fantasyName;
    private String cnpj;
    private String cep;
    private String city;
    private String state;
    private String district;
    private String street;
    private Integer number;
}

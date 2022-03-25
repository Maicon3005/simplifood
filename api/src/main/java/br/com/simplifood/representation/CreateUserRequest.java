package br.com.simplifood.representation;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateUserRequest {
    private String name;
    private String lastName;
    private String email;
    private String password;
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

package br.com.simplifood.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Restaurant")
public class RestaurantModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String corporateName;
    private String fantasyName;
    private String cnpj;

    @OneToOne
    @JoinColumn(name = "user_model_id")
    private UserModel userModel;
}

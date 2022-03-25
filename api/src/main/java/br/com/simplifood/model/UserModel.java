package br.com.simplifood.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "User_owner")
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    @Column(name = "last_name")
    private String lastName;
    @Column(unique = true)
    private String email;
    private String password;

    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "restaurant_model_id")
    private RestaurantModel restaurantModel;

    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "address_model_id")
    private AddressModel addressModel;
}

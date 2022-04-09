package br.com.simplifood.model;

import br.com.simplifood.enums.OrderStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity(name = "Order_model")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class OrderModel {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Integer id;

        private OrderStatus orderStatus;

        @OneToOne(cascade = CascadeType.ALL)
        @JoinColumn(name = "address_model_id")
        private AddressModel addressModel;

        private String phone;
}

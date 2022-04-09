package br.com.simplifood.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@NamedNativeQuery(name = "ProductOrderModel.findByOrderModel",
        query = "select * from product_order_model p where p.order_model_id  = ?",
        resultClass = ProductOrderModel.class)
public class ProductOrderModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "product_model_id")
    private ProductModel productModel;

    @ManyToOne
    @JoinColumn(name = "order_model_id")
    private OrderModel orderModel;
}

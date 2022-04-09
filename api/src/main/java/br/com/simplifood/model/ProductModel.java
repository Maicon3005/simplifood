package br.com.simplifood.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity(name = "Product")
public class ProductModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private String quantity;

    private BigDecimal price;

    private String description;

    private String urlImage;

    @ManyToOne
    @JoinColumn(name = "category_model_id")
    private CategoryModel categoryModel;
}

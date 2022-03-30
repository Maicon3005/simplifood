package br.com.simplifood.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
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

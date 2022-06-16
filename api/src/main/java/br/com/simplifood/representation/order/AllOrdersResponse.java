package br.com.simplifood.representation.order;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AllOrdersResponse {

    private List<OrderResponse> orderResponseList = new ArrayList<>();
}

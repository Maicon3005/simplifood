package br.com.simplifood.controller;

import br.com.simplifood.representation.order.AddProductRequest;
import br.com.simplifood.representation.order.BasicOrderResponse;
import br.com.simplifood.representation.order.CreateOrderResponse;
import br.com.simplifood.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/create")
    public ResponseEntity<CreateOrderResponse> createOrder() {
        CreateOrderResponse createOrderResponse = orderService.createOrder();
        return createOrderResponse != null ? ResponseEntity.ok().body(createOrderResponse) : ResponseEntity.notFound().build();
    }

    @PostMapping("/addproduct")
    public ResponseEntity<CreateOrderResponse> addProduct(@RequestBody AddProductRequest addProductRequest) {
        CreateOrderResponse createOrderResponse = orderService.addProduct(addProductRequest);
        return createOrderResponse != null ? ResponseEntity.ok().body(createOrderResponse) : ResponseEntity.notFound().build();
    }

    @GetMapping("/getbasicorder/{idOrder}")
    public ResponseEntity<BasicOrderResponse> getBasicOrder(@PathVariable Integer idOrder){
        BasicOrderResponse basicOrderResponse = orderService.getBasicOrderResponse(idOrder);
        return basicOrderResponse != null ? ResponseEntity.ok().body(basicOrderResponse) : ResponseEntity.notFound().build();
    }
}

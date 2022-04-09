package br.com.simplifood.controller;

import br.com.simplifood.representation.order.*;
import br.com.simplifood.representation.wppapi.ConfirmNumberResponse;
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

    @GetMapping("/getitens/{idOrder}")
    public ResponseEntity<OrderItensReponse> getItens(@PathVariable Integer idOrder){
        OrderItensReponse orderItensReponse = orderService.getOrderItens(idOrder);
        return orderItensReponse != null ? ResponseEntity.ok().body(orderItensReponse) : ResponseEntity.notFound().build();
    }

    @PostMapping("/saveaddress")
    public ResponseEntity<Void> saveAddressToOrder(@RequestBody AddAddressToOrderRequest addAddressToOrderRequest){
        boolean result = orderService.saveAddressToOrder(addAddressToOrderRequest);
        return result ? ResponseEntity.ok().build():ResponseEntity.notFound().build();
    }

    @GetMapping("/getnumberverify/{phone}")
    public ResponseEntity<Void> getVerifyNumber(@PathVariable String phone){
        orderService.getVerifyNumber(phone);
        return null;
    }

    @PostMapping("/confirmnumber/{number}/{idOrder}")
    public ResponseEntity<ConfirmNumberResponse> confirmNumber(@PathVariable Integer number, @PathVariable Integer idOrder){
        ConfirmNumberResponse confirmNumberResponse = orderService.confirmNumber(number, idOrder);
        return  confirmNumberResponse.isResultVerification() ? ResponseEntity.ok().body(confirmNumberResponse): ResponseEntity.badRequest().build();
    }
}

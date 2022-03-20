package br.com.simplifood.controller;

import br.com.simplifood.representation.StartSessionResponse;
import br.com.simplifood.service.WppConnectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WppConnectController {

    @Autowired
    private WppConnectService wppConnectService;

    @PostMapping("/gettoken")
    private ResponseEntity<StartSessionResponse> getStartSession(){
        StartSessionResponse startSessionResponse = wppConnectService.getTokenWPPConnect();
        return startSessionResponse != null ? ResponseEntity.ok().body(startSessionResponse): ResponseEntity.notFound().build();
    }

    @PostMapping("/startsession")


}

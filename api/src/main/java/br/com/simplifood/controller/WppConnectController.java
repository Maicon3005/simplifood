package br.com.simplifood.controller;

import br.com.simplifood.wppconnect.StartSessionResponse;
import br.com.simplifood.wppconnect.WppConnectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WppConnectController {

    @Autowired
    private WppConnectService wppConnectService;

    @PostMapping("/iniciarsessao")
    private ResponseEntity<StartSessionResponse> getStartSession(){
        StartSessionResponse startSessionResponse = wppConnectService.getTokenWPPConnect();
        return startSessionResponse != null ? ResponseEntity.ok().body(startSessionResponse): ResponseEntity.notFound().build();
    }
}

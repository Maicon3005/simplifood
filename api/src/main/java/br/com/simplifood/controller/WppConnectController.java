package br.com.simplifood.controller;

import br.com.simplifood.representation.wppapi.QRCodeResponse;
import br.com.simplifood.representation.wppapi.StartSessionResponse;
import br.com.simplifood.representation.wppapi.StatusConnectionResponse;
import br.com.simplifood.representation.wppapi.WPPTokenRequest;
import br.com.simplifood.service.WppConfigService;
import br.com.simplifood.service.WppConnectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WppConnectController {

    @Autowired
    private WppConnectService wppConnectService;

    @Autowired
    private WppConfigService wppConfigService;

    @PostMapping("/generatetoken")
    private ResponseEntity<StartSessionResponse> getGenerateToken(){
        StartSessionResponse startSessionResponse = wppConnectService.getStartSession();
        wppConfigService.setToken(startSessionResponse);
        return startSessionResponse != null ? ResponseEntity.ok().body(startSessionResponse): ResponseEntity.notFound().build();
    }

    @PostMapping("/startsession")
    private ResponseEntity<QRCodeResponse>  getStartSession(@RequestBody WPPTokenRequest wppTokenRequest){
        QRCodeResponse QRCodeResponse = wppConnectService.getTokenWPPConnect(wppTokenRequest.getToken());
        return QRCodeResponse != null ? ResponseEntity.ok().body(QRCodeResponse) : ResponseEntity.notFound().build();
    }

    @PostMapping("/getqrcode")
    private ResponseEntity<QRCodeResponse> getResponseToken(@RequestBody WPPTokenRequest wppTokenRequest){
        wppConnectService.getTokenWPPConnect(wppTokenRequest.getToken());
        QRCodeResponse QRCodeResponse =  wppConnectService.getTokenWPPConnect(wppTokenRequest.getToken());
        return QRCodeResponse != null ? ResponseEntity.ok().body(QRCodeResponse) : ResponseEntity.notFound().build();
    }

    @PostMapping("/getStatusConnection")
    private ResponseEntity<StatusConnectionResponse> getStatusConnection(@RequestBody WPPTokenRequest wppTokenRequest){
        StatusConnectionResponse statusConnectionResponse = wppConnectService.getStatusConnection(wppTokenRequest.getToken());
        return statusConnectionResponse != null ? ResponseEntity.ok().body(statusConnectionResponse) : ResponseEntity.notFound().build();
    }

}

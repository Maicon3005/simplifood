package br.com.simplifood.service;

import br.com.simplifood.representation.wppapi.QRCodeResponse;
import br.com.simplifood.representation.wppapi.SendMessageRequest;
import br.com.simplifood.representation.wppapi.StartSessionResponse;
import br.com.simplifood.representation.wppapi.StatusConnectionResponse;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(url = "http://localhost:21465/api/mySession/", name = "wppconnect")
public interface WppConnectService {

    @PostMapping("TOKEN_WPP_CONNECT/generate-token")
    StartSessionResponse getStartSession();

    @PostMapping(value="start-session")
    @Cacheable("placementUseCase")
    QRCodeResponse getTokenWPPConnect(@RequestHeader(value = "Authorization", required = true) String authorizatiomHeader);

    @GetMapping(value = "/check-connection-session")
    @Cacheable("placementUseCase")
    StatusConnectionResponse getStatusConnection(@RequestHeader(value = "Authorization") String authorizationHeader);

    @PostMapping(value = "/send-message")
    @Cacheable("placementUseCase")
    void sendMessage(@RequestHeader(value = "Authorization") String AuthorizationHeader, @RequestBody SendMessageRequest sendMessageRequest);
}

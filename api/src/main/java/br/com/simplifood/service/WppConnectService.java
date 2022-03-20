package br.com.simplifood.service;

import br.com.simplifood.representation.StartSessionResponse;
import br.com.simplifood.representation.QRCodeResponse;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(url = "http://localhost:21465/api/mySession/", name = "wppconnect")
public interface WppConnectService {

    @PostMapping("TOKEN_WPP_CONNECT/generate-token")
    StartSessionResponse getStartSession();

    @PostMapping(value="start-session")
    @Cacheable("placementUseCase")
    QRCodeResponse getTokenWPPConnect(@RequestHeader(value = "Authorization", required = true) String authorizatiomHeader);

   /* @FeignClient(name="mde", url="${MDE.campaignServiceEndpoint}")
    public interface CampaignClientService {
        @RequestMapping(method = RequestMethod.GET, value = "/useCases/search/findByName?name={name}")
        @Cacheable("placementUseCase")
        PlacementUseCase findUseCaseByName(@RequestHeader(value = "Authorization", required = true) String authorizationHeader, @PathVariable("name") String name);*/
}

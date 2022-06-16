package br.com.simplifood.mapper;

import br.com.simplifood.representation.wppapi.SendMessageRequest;

public class MessageMapper {

    private SendMessageRequest sendMessageRequest;

    public MessageMapper(String phone, String message) {
        this.sendMessageRequest = new SendMessageRequest(phone, message);
    }

    public SendMessageRequest getSendMessageRequest() {
        return sendMessageRequest;
    }
}

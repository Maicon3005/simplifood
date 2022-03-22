package br.com.simplifood.representation;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QRCodeResponse {
    private String status;
    private String qrcode;
    private String urlcode;
}

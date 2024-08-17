function gerarQRcode() {
    var inputTexto = document.querySelector('#inputTexto').value;
    var qrCodeAPI = 'https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=' + encodeURIComponent(inputTexto);
    document.querySelector('#QRcodeimage').src = qrCodeAPI;
}
import './style.css'
import QRCode from 'qrcode'

// Seleciona os elementos do DOM
const qrInput = document.querySelector<HTMLInputElement>('.qr-input')!
const generateBtn = document.querySelector<HTMLButtonElement>('.generate-btn')!
const qrImage = document.querySelector<HTMLImageElement>('.qr-image img')!

// Verifica se os elementos foram encontrados
let data:string = qrInput.value
let sanitizedString = data.replace(/[^a-zA-Z0-9]+/g, '_').toLowerCase();

// Adiciona um listener de evento ao campo de entrada do QR Code para o botão enter
qrInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        generateBtn.click();
    }
});

// Adiciona um listener de evento ao botão de geração do QR Code
generateBtn.addEventListener('click', () => {
    console.log('QR Input:', qrInput.value)
    data = qrInput.value
    sanitizedString = data.replace(/[^a-zA-Z0-9]+/g, '_').toLowerCase();
    generateQrCode(data)
    qrInput.value = ''
})

// Adiciona um listener de evento ao campo de entrada do QR Code
function generateQrCode(data: string) {
    QRCode.toDataURL(data, { errorCorrectionLevel: 'H' })
        .then(url => {
            qrImage.src = url
            qrImage.alt = sanitizedString
            console.log('QR Code URL:', url)
            console.log('Sanitized String:', sanitizedString)
            console.log('QR Code gerado com sucesso!')
        })
        .catch(err => {
            console.error('Erro ao gerar o QR Code:', err)
        })
}
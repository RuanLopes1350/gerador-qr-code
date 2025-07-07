import './style.css'
import QRCode from 'qrcode'

const qrInput = document.querySelector<HTMLInputElement>('.qr-input')!
const generateBtn = document.querySelector<HTMLButtonElement>('.generate-btn')!
const qrImage = document.querySelector<HTMLImageElement>('.qr-image img')!

let data:string = ''

generateBtn.addEventListener('click', () => {
    console.log('QR Input:', qrInput.value)
    data = qrInput.value
    generateQrCode(data)
})

function generateQrCode(data: string) {
    QRCode.toDataURL(data, { errorCorrectionLevel: 'H' })
        .then(url => {
            qrImage.src = url
            console.log('QR Code gerado com sucesso!')
        })
        .catch(err => {
            console.error('Erro ao gerar o QR Code:', err)
        })
}


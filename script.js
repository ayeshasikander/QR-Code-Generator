const qrText = document.getElementById("inputText");
const qrGenerate = document.getElementById("generate");
const qrDownload = document.getElementById("download");
const qrBody = document.querySelector(".QR");
const dismissContainer=document.querySelector(".dismiss");

qrGenerate.addEventListener("click", () => {
    qrCode();
})

qrDownload.addEventListener("click", () => {
    downloadQRCode();
});

dismissContainer.addEventListener("click", () => {
    location.reload(); 
});

function qrCode() {
    const inputValue = qrText.value.trim();

    if (inputValue === "") {
        qrBody.innerHTML = "<p class='error'>Please enter text or URL</p>";
    } else {
        qrBody.innerHTML = "";
        new QRCode(qrBody, {
            text: qrText.value,
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",

        })
    }
}

function downloadQRCode() {
    const qrImage = qrBody.querySelector("img");

    if (qrImage) {
        const dataURL = qrImage.src;
        const a = document.createElement("a");
        a.href = dataURL;
        a.download = "qrcode.png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } else {
        alert("Please generate a QR code first.");
    }
}


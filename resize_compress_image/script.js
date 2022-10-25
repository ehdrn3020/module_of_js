const uploadBox = document.querySelector(".upload-box");
const previewImg = document.querySelector("img");
const fileInput = uploadBox.querySelector("input");
const widthInput = document.querySelector(".width input");
const heigthInput = document.querySelector(".height input");
const ratioInput = document.querySelector(".ratio input");
const qualityInput = document.querySelector(".quality input");
const downloadBtn = document.querySelector(".download-btn");

let ogImageRatio;

const loadFile = (e) => {
    const file = e.target.files[0];
    if(!file) return;
    previewImg.src = URL.createObjectURL(file);
    previewImg.addEventListener("load", ()=>{
        widthInput.value = previewImg.naturalWidth;
        heigthInput.value = previewImg.naturalHeight;
        ogImageRatio = previewImg.naturalWidth / previewImg.naturalHeight;
        document.querySelector(".wrapper").classList.add("active");
    });
}

// adjust ratio of image
widthInput.addEventListener("keyup", () => {
    const height = ratioInput.checked ? widthInput.value / ogImageRatio : heigthInput.value;
    heigthInput.value =  Math.floor(height);
});
heigthInput.addEventListener("keyup", () => {
    const width = ratioInput.checked ? heigthInput.value / ogImageRatio : widthInput.value;
    widthInput.value =  Math.floor(width);
});

const resizeAndDownload = () => {
    // setting canvas
    const canvas = document.createElement("canvas");
    canvas.width = widthInput.value;
    canvas.height = heigthInput.value;

    // draw image into canvas
    const ctx = canvas.getContext("2d");
    ctx.drawImage(previewImg, 0, 0, canvas.width, canvas.height);

    // adjust image quality
    const imgQuality = qualityInput.checked ? 0.7 : 1.0;
    
    // passing canvas data url as href value <a>
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/jpeg", imgQuality);
    a.download = new Date().getTime();
    a.click();
}

uploadBox.addEventListener("click", () => fileInput.click());
fileInput.addEventListener("change", loadFile);
downloadBtn.addEventListener("click", resizeAndDownload)
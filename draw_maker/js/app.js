const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
let isPainting = false;

const lineWidth = document.querySelector("#line-width");
const color = document.querySelector("#color");
const colorOptions = Array.from(document.querySelectorAll(".color-option"));
ctx.lineWidth = lineWidth.value;

const modeBtn = document.querySelector("#mode-btn");
let isFilling = false;
const refeshBtn = document.querySelector("#refresh-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const saveBtn = document.querySelector("#save-btn");

function onMove(event) {
    if (isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}
function onMouveDown() {
    isPainting = true;
}
function onMouveUp() {
    isPainting = false;
    ctx.beginPath();
}
function onLineWidthChange(event) {
    ctx.lineWidth = event.target.value;
}
function onColorChange(event) {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}
function onColorClick(event) {
    const colorValue = event.target.dataset.color
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    // input color에 click한 색으로 변경
    color.value = colorValue;
}
function onModeClick(){
    if(isFilling) {
        isFilling = false
        modeBtn.innerText = "Fill"
    } else {
        isFilling = true
        modeBtn.innerText = "Draw"
    }
}
function onCanvasClick() {
    if(isFilling){
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    }
}
function onRefreshClick() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
function onEraserClick() {
    ctx.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "Fill";
}
function onSaveClick() {
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.href = url;
    a.download = "myDrawing.png";
    a.click();
}

// 그리기
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouveDown);
canvas.addEventListener("mouseup", onMouveUp);
// 마우스가 캔버스를 떠날 때
canvas.addEventListener("mouseleave", onMouveUp);
//
canvas.addEventListener("click", onCanvasClick);
// 선 굵기 변경
lineWidth.addEventListener("change", onLineWidthChange);
// 색 변경
color.addEventListener("change", onColorChange);
// 제시된 파레트 색 변경
colorOptions.forEach(color=> color.addEventListener("click", onColorClick));
// 선 채우기 
modeBtn.addEventListener("click", onModeClick);
// 새로고침
refeshBtn.addEventListener("click", onRefreshClick);
// 지우개
eraserBtn.addEventListener("click", onEraserClick);
// 저장
saveBtn.addEventListener("click", onSaveClick);
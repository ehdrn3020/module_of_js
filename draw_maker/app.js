const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

const lineWidth = document.querySelector("#line-width");
ctx.lineWidth = lineWidth.value;
let isPainting = false;

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

canvas.addEventListener("mousemove", onMove)
canvas.addEventListener("mousedown", onMouveDown)
canvas.addEventListener("mouseup", onMouveUp)
// 마우스가 캔버스를 떠날 때
canvas.addEventListener("mouseleave", onMouveUp)
// 선 굵이 변경
lineWidth.addEventListener("change", onLineWidthChange);

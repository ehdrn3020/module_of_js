const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(0, 0, 100, 100);
ctx.rect(50, 50, 100, 100);
ctx.stroke();
ctx.rect(150, 150, 100, 100);
ctx.fill();

// 이전 경로와 독립적인 path설정
ctx.beginPath();
ctx.rect(200, 200, 100, 100);
ctx.fillStyle = "red";
ctx.fill();
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

//몸통
ctx.fillRect(200, 200, 15, 100);
ctx.fillRect(400, 200, 15, 100);
ctx.fillRect(280, 200, 60, 200);
//머리
ctx.arc(310, 120, 50, 0, 2 * Math.PI);
ctx.fill();
//눈
ctx.beginPath()
ctx.fillStyle = "white";
ctx.arc(290, 110, 10, Math.PI, 2 * Math.PI);
ctx.arc(320, 110, 0, Math.PI, 2 * Math.PI);
ctx.fill();
const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

canvas.width = 720;
canvas.height = 720;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

c.arc(centerX, centerY, 200, 0, Math.PI * 2);
c.moveTo(centerX + 100, centerY);
c.fillStyle = "white";
c.fill();

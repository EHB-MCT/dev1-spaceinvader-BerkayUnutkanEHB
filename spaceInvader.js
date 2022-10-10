"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawSpaceInvader();

function drawSpaceInvader() {

    //The background is a black rectangle with a size of 300x300 pixels
    context.beginPath();
    context.rect(0, 0, 300, 300);
    context.fill();
    context.stroke();

    //The color of the invader is bright green.
    context.fillStyle = "#66FF00";
    //The size of the individual squares is 50x50 pixels
    context.beginPath();
    context.rect(20, 20, 50, 50);
    context.fill();

    context.beginPath();
    context.rect(70, 20, 50, 50);
    context.fill();

    context.beginPath();
    context.rect(170, 20, 50, 50);
    context.fill();

    context.beginPath();
    context.rect(220, 20, 50, 50);
    context.fill();

    context.beginPath();
    context.rect(20, 70, 50, 50);
    context.fill();

    context.beginPath();
    context.rect(120, 70, 50, 50);
    context.fill();

    context.beginPath();
    context.rect(220, 70, 50, 50);
    context.fill();

    context.beginPath();
    context.rect(20, 120, 50, 50);
    context.fill();

    context.beginPath();
    context.rect(70, 120, 50, 50);
    context.fill();

    context.beginPath();
    context.rect(120, 120, 50, 50);
    context.fill();

    context.beginPath();
    context.rect(170, 120, 50, 50);
    context.fill();
    
    context.beginPath();
    context.rect(220, 120, 50, 50);
    context.fill();

    context.beginPath();
    context.rect(20, 170, 50, 50);
    context.fill();

    context.beginPath();
    context.rect(70, 170, 50, 50);
    context.fill();

    context.beginPath();
    context.rect(120, 170, 50, 50);
    context.fill();

    context.beginPath();
    context.rect(170, 170, 50, 50);
    context.fill();

    context.beginPath();
    context.rect(220, 170, 50, 50);
    context.fill();

    context.beginPath();
    context.rect(20, 220, 50, 50);
    context.fill();

    context.beginPath();
    context.rect(70, 220, 50, 50);
    context.fill();

    context.beginPath();
    context.rect(120, 220, 50, 50);
    context.fill();

    context.beginPath();
    context.rect(170, 220, 50, 50);
    context.fill();

    context.beginPath();
    context.rect(220, 220, 50, 50);
    context.fill();
}
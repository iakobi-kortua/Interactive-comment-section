import './addComment.js'
import "../css/style.css"
import './reply.js'
import './edit.js'
import "./deleteComment.js"
import "./volUpDown.js"
import data from '../data.json';


const amyPoint = document.querySelector("#amyPoint");
const amyName = document.querySelector("#amyName");
const amyDate = document.querySelector("#amyDate");
const amyCom = document.querySelector("#amyCom");

amyPoint.textContent = data.comments[0].score;
amyName.textContent = data.comments[0].user.username;
amyDate.textContent = data.comments[0].createdAt;
amyCom.textContent = data.comments[0].content;


const maxPoint = document.querySelector("#maxPoint");
const maxName = document.querySelector("#maxName");
const maxDate = document.querySelector("#maxDate");
const maxCom = document.querySelector("#maxCom");

maxPoint.textContent = data.comments[1].score;
maxName.textContent = data.comments[1].user.username;
maxDate.textContent = data.comments[1].createdAt;
maxCom.textContent = data.comments[1].content;


const ramPoint = document.querySelector("#ramPoint");
const ramName = document.querySelector("#ramName");
const ramDate = document.querySelector("#ramDate");
const ramCom = document.querySelector("#ramCom");

ramPoint.textContent = data.comments[1].replies[0].score;
ramName.textContent = data.comments[1].replies[0].user.username;
ramDate.textContent = data.comments[1].replies[0].createdAt;
ramCom.textContent = data.comments[1].replies[0].content;


const julPoint = document.querySelector("#julPoint");
const julName = document.querySelector("#julName");
const julDate = document.querySelector("#julDate");
const julCom = document.querySelector("#julCom");

julPoint.textContent = data.comments[1].replies[1].score;
julName.textContent = data.comments[1].replies[1].user.username;
julDate.textContent = data.comments[1].replies[1].createdAt;
julCom.textContent = data.comments[1].replies[1].content;


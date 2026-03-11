const questions = [

{
q:"金城龙同志最突出的精神品质是？",
options:["无私奉献","逃避责任","个人主义","消极工作"],
answer:0
},

{
q:"本次活动主题是？",
options:[
"科技创新未来",
"英雄永不谢幕·青春薪火相传",
"青年科技发展",
"数字中国"
],
answer:1
},

{
q:"活动鼓励使用什么形式传播英雄故事？",
options:["代码、影像、AI","纸质报纸","广播","电话"],
answer:0
},

{
q:"学习英雄事迹的意义是？",
options:[
"娱乐消遣",
"传承精神、激励青年",
"获得奖励",
"完成任务"
],
answer:1
},

{
q:"新时代青年应该？",
options:[
"勇于担当",
"逃避挑战",
"只关注个人",
"停止学习"
],
answer:0
}

]

let current = 0
let score = 0

function showPage(id){
document.querySelectorAll(".page").forEach(p=>{
p.classList.remove("active")
})
document.getElementById(id).classList.add("active")
}

function startGame(){
showPage("intro")
}

function startQuiz(){
showPage("quiz")
loadQuestion()
}

function loadQuestion(){

const q = questions[current]

document.getElementById("question").innerText =
`第 ${current+1} 题：${q.q}`

const optionsDiv = document.getElementById("options")
optionsDiv.innerHTML=""

q.options.forEach((opt,index)=>{

const btn = document.createElement("button")
btn.innerText = opt

btn.onclick = ()=>{
checkAnswer(index)
}

optionsDiv.appendChild(btn)

})

updateProgress()

}

function checkAnswer(i){

if(i === questions[current].answer){
score++
document.getElementById("result").innerText="回答正确 ✅"
}else{
document.getElementById("result").innerText="回答错误 ❌"
}

setTimeout(()=>{

current++

if(current < questions.length){
document.getElementById("result").innerText=""
loadQuestion()
}else{
endGame()
}

},800)

}

function updateProgress(){

const percent = (current/questions.length)*100
document.querySelector("#progress").style.setProperty(
"--width", percent + "%"
)

document.querySelector("#progress").innerHTML =
`<div style="width:${percent}%;height:100%;background:#c40000"></div>`

}

function endGame(){

showPage("end")

document.getElementById("score").innerText =
`你的得分：${score} / ${questions.length}`

}

function restart(){

current=0
score=0

showPage("home")

}
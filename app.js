var btn = document.getElementsByTagName('button')[0]
var bot = document.getElementsByTagName('button')[1]
var gg = document.getElementsByTagName('button')[2]
var p = document.getElementsByTagName('h2')[0]
var i = 0
function nemeh(){
    i++
    p.innerText = i
    if(i>0){
        p.style.color="green"
    }
    if(i==0){
        p.style.color="black"
    }
}
function hasah(){
    i--
    p.innerText = i
    if(i<0){
        p.style.color="red"
    }
    if(i>0){
        p.style.color="green"
    }
    if(i==0){
        p.style.color="black"
    }
}
function reset(){
    i = 0
    p.innerText = i 
    if(i>=0){
        p.style.color="black"
    }
}


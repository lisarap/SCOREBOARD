
let count = 0
let clicks =0 

let marks1 = document.getElementById('score1')
let marks2 = document.getElementById('score2')
let intervalId = null

function one(){
    marks1.innerText = count+=1  
    leading()  
}

function one1(){
    marks2.innerText = clicks+=1
    leading()
}

function two(){
    marks1.innerText = count+=2   
    leading()
}

function two2(){
    marks2.innerText = clicks+=2
    leading()

}

function three(){
    marks1.innerText = count+=3   
    leading()

}

function three3(){
    marks2.innerText = clicks+=3
    leading()
}


function restart(){
    count = 0
    clicks = 0
    marks1.innerText= count
    marks2.innerText = clicks
    leading()
}


function leading(){

let a = parseInt(marks1.innerText);
let b = parseInt(marks2.innerText);    

if (a>b){
    score1.style.color = 'yellow'
    score2.style.color = 'white'

} 
else if(a < b ){
    score1.style.color = 'white'
    score2.style.color = 'yellow'

} else{
    score1.style.color = 'white'
    score2.style.color = 'white'
}
}

function countdown(){
    var hour = 1
    var minute = 59;
    var sec = 59;
    if(intervalId!== null){
    return;

    }
    intervalId = setInterval(function() {
        document.getElementById("timer").innerHTML = "0" + hour + ":" + minute + ":" + sec;
        sec--;
        if (sec < 10 ){
            document.getElementById("timer").innerHTML = "0" + hour + ":" + minute + ":" + "0" + sec;

        }
        if (minute < 10 ){
            document.getElementById("timer").innerHTML = "0" + hour + ":" + "0" + minute + ":" + sec;

        }


            if (sec == 0){
                minute--;
                sec= 59;
            

            if(minute == 0){
                hour--;
                minute = 59;
            

            if (hour < 0) {
                clearInterval(intervalId);
                hour = 0;
                minute = 0;
                sec = 0;
                document.getElementById("timer").innerHTML = "00:00:00";
            }  
        }
    }   
},1000)
}


function endCountdown(){
    clearInterval(intervalId);
    document.getElementById("timer").textContent = "00" + ":" + "00" + ":" + "00";
    intervalId = null; 

}

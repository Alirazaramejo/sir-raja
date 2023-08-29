var score = 0;
if(prompt("What is the meaning of Pakistan? 1/ Holy Land 2/ Holy place 3/ Holy places") =="1"){
    score = score +1;
}
if(prompt("Which is the national animal of Pakistan? 1/ lion 2/ Markhor 3/ Chakor") =="2"){
    score = score +1;
}
if(prompt("Which is the national bird of Pakistan? 1/ Chakor 2/ Markhor 3/ Parrot") =="1"){
    score = score +1;
}
if(prompt("Name the capital of Pakistan? 1/ Karachi  2/ Islamabad 3/ Lahore") =="2"){
    score = score +1;
}
if(prompt("According to population which is the largest city of Pakistan? 1/ Lahore  2/ Peshawar 3/ Karachi") =="3"){
    score = score +1;
}
if(prompt("Which is the national language of Pakistan? 1/ Sindhi 2/ Pashto 3/ Urdu") =="3"){
    score = score +1;
}
document.getElementById('result').innerHTML = "calculating.....";
function showAnswer(){
    if(score == 6){
        alert("your position is 1st");
        document.getElementById('result').innerHTML = score;
    }
    if(score == 5){
        alert("your position is 2nd");
        document.getElementById('result').innerHTML = score;
    }
    if(score == 4){
        alert("your position is 3rd");
        document.getElementById('result').innerHTML = score;
    }
    if(score < 3){
        alert("your are not qualified");
        document.getElementById('result').innerHTML = score;
    }
}
setTimeout(showAnswer , 2000);
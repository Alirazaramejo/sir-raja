var score = 0;
var ary = [
    ["What is the meaning of Pakistan? 1/ Holy Land 2/ Holy place 3/ Holy places"],
    ["Which is the national animal of Pakistan? 1/ lion 2/ Markhor 3/ Chakor"],
    ["Which is the national bird of Pakistan? 1/ Chakor 2/ Markhor 3/ Parrot"],
    ["Name the capital of Pakistan? 1/ Karachi  2/ Islamabad 3/ Lahore"],
    ["According to population which is the largest city of Pakistan? 1/ Lahore  2/ Peshawar 3/ Karachi"],
    ["Which is the national language of Pakistan? 1/ Sindhi 2/ Pashto 3/ Urdu"],
]

if(prompt(ary[0][0]) =="1"){
    score = score +1;
}
if(prompt(ary[1][0]) =="2"){
    score = score +1;
}
if(prompt(ary[2][0]) =="1"){
    score = score +1;
}
if(prompt(ary[3][0]) =="2"){
    score = score +1;
}
if(prompt(ary[4][0]) =="3"){
    score = score +1;
}
if(prompt(ary[5][0]) =="3"){
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
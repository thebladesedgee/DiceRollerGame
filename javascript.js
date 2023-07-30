
var score1 = 0
var score2 = 0



function Reset()
{
    score1 = 0
    score2 = 0

    document.getElementById("score1").innerHTML = "1. Player Score = 0"
    document.getElementById("score2").innerHTML = "2. Player Score = 0"
    document.getElementById("result").innerHTML = ""

    document.getElementById("firstdice").innerHTML = ""
    document.getElementById("seconddice").innerHTML = ""
}




function DiceRoll()
{
    var dice1
    var dice2

    dice1 = Math.floor(Math.random()*6 +1) // 
    
    dice2 = Math.floor(Math.random()*6 +1) // 

document.getElementById("firstdice").innerHTML = "<img id=one src=image/"+dice1+".png>"

document.getElementById("seconddice").innerHTML = "<img id=two src=image/"+dice2+".png>"

if(dice1>dice2)
{
    document.getElementById("result").innerHTML = "1st player won..."
    score1++
    document.getElementById("score1").innerHTML = "1. Player Score = "+score1

}
else if(dice1==dice2)
{
    document.getElementById("result").innerHTML = "Tie..."
}
else
{
    document.getElementById("result").innerHTML = "2nd player won..."
    score2++
    document.getElementById("score2").innerHTML = "2. Player Score = "+score2
}

}
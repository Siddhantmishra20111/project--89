player1_name = localStorage.getItem("player1_name")
player2_name = localStorage.getItem("player2_name")



player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";


document.getElementById("player1_score").innerHTML = player1_score + " : ";
document.getElementById("player2_score").innerHTML = player2_score + " : ";


document.getElementById("player_question").innerHTML = "Question turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name ;


function send() {
get_word = document.getElementById("word").value;
word = get_word.toLowerCase();
console.log("word in lowerCase = " + word);


charAT1 = word.charAT1(1);
console.log(charAT1);


length_divide_2 = Math.floor(word.length/2);
charAT2 = word.charAT(length_divide_2);
console.log(charAT2);

length_minus_1 = word.length - 1;
charAT3 = word.charAT(length_minus_1);
console.log(charAT3);

remove.charAT1 = word.replace(charAT1, "_");
remove.charAT2 = remove_charAT1.replace(charAT2, "_")
remove.charAT3 = remove_charAT2.replace(charAT3, "_")
console.log(charAT3);




}

function check()
{
get_answer = document.getElementById)("input_check_box").value;
answer = get_answer.toLowerCase();
console.log("answer in lower case - " + answer);
if(answer == word)
{

if(answer_turn == "player1")
{
player1_score = player1_score +1;
document.getElementById("player1_score").innerHTML = player2_score;

}
else
{
player2_score = player2_score +1;
document.getElementById("player2_score").innerHTML = player2_score;

}


}
if(question_turn = "player2")
{

question_turn =  "player2"
document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name

}
else
{
    question_turn =  "player1"
    document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name
}


if(answer_turn == "player1")
{
    answer_turn = "player2"
    document.getElementById("player_answer").innerHTML = "Answer Turn -" + player2_name ;
}
else
{
    answer_turn = "player1"
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;


}

document.getElementById("output").innerHTML = "";

}




$(".hiddenQuestionContainer").hide();

var counter = 0;

var answerArray = ["c", "b", "d", "a"];

var playerAnswers = [];

var quizCycle;

var gradeCounter = 4;

function grading() { 

    var gradeCounter = 4;

	for (i = 0; i > answerArray.length; i++) {

	if (playerAnswers[i] !== answerArray[i]) {

    gradeCounter--;

    }

};

console.log("gradeCounter: " + gradeCounter);
console.log("You answered " + ((gradeCounter / 4) * 100) + "% of the questions correctly.");
$("#results").html("You answered " + gradeCounter + "/" + answerArray.length + " questions correctly" + "<br>" + 
"Your score is " + ((gradeCounter / answerArray.length) * 100));


};

$('#loadGame').click(function() { 
    gradeCounter = 4;
    counter = 0;
    $("#loadGame").hide();
    $("#announcements").hide();
    //appendDiv();

    quizCycle = setInterval(appendDiv, 3000); });

function appendDiv() {

    counter++;
    console.log("Counter: " + counter);
    $(".activeQuestionDiv").appendTo(".hiddenQuestionContainer");
    playerAnswers.push($('input[name=answer]:checked').val());
    console.log(playerAnswers);
    console.log(playerAnswers[counter] === playerAnswers[counter]);
    console.log($('input[name=answer]:checked').val());
    $("input[type='radio']").prop('checked', false);
    //alert(playerAnswers);
    //alert($(".hiddenQuestionContainer:first-child").attr("class"));

    //alert("Hello, world!")

    $(".questionDiv:first").appendTo(".activeQuestionContainer");
    $(".questionDiv:first").addClass("activeQuestionDiv");
    $(".activeQuestionDiv").removeClass("questionDiv");
    $(".activeQuestionDiv").attr("id", "currentQuestion");

    if (counter === 5) {
        clearInterval(quizCycle);
        playerAnswers.shift();
        $("#loadGame").show();
        $("#announcements").html("The quiz is over. You answered " + playerAnswers);
        $("#announcements").show();
        // console.log("Player answers: " + playerAnswers);
        // console.log("Answer array " + answerArray);
        // alert(playerAnswers === answerArray);
        grading();
        console.log("answerArray length is: " + answerArray.length);


    }

    /* $('div.questionDiv input').on('change', function() {

        console.log($("input[type='radio']:checked").val());

    }); */

};




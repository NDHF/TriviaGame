$(".hiddenQuestionContainer").hide();

var counter = 0;

var answerArray = ["c", "b", "d", "a"];

var playerAnswers = [];

var quizCycle = setInterval(appendDiv, 3000);

function grading() { 

	for (i = 0; i < answerArray.length; i++) {

	var gradeCounter = 4;

	if (playerAnswers[i] !== answerArray[i]) {

    gradeCounter--;
    
    }
     
};

console.log("You answered " + ((gradeCounter / 4) * 100) + "% of the questions correctly.")

};

grading();

function appendDiv() {

    counter++;

    $(".activeQuestionDiv").appendTo(".hiddenQuestionContainer");
    playerAnswers.push($('input[name=answer]:checked').val());
    //console.log(typeof($('input[name=answer]:checked').val()));
    $("input[type='radio']").prop('checked', false);
    //alert(playerAnswers);
    //alert($(".hiddenQuestionContainer:first-child").attr("class"));

    //alert("Hello, world!")

    $(".questionDiv:first").appendTo(".activeQuestionContainer");
    $(".questionDiv:first").addClass("activeQuestionDiv");
    $(".activeQuestionDiv").removeClass("questionDiv");

    if (counter === 5) {
        clearInterval(quizCycle);
        playerAnswers.shift();
        $("#announcements").html("The quiz is over. You answered " + playerAnswers);
        // console.log("Player answers: " + playerAnswers);
        // console.log("Answer array " + answerArray);
        // alert(playerAnswers === answerArray);
        grading();

    }

    /* $('div.questionDiv input').on('change', function() {

        console.log($("input[type='radio']:checked").val());

    }); */

};




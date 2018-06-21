$(".hiddenQuestionContainer").hide();

var counter;

var answerArray = ["c", "b", "d", "a"];

var playerAnswers;

//var quizCycle = setInterval(appendDiv, 3000);
var quizCycle;

var gradeCounter;

var interval = 15000;

function grading() { 

    gradeCounter = playerAnswers.length;
    console.log("playerAnswers length: " + playerAnswers.length);
    console.log("gradeCounter: " + gradeCounter);

	for (i = 0; i < answerArray.length; i++) {

	if (playerAnswers[i] !== answerArray[i]) {

    gradeCounter--;
    
    }
     
};

console.log("Grade counter: " + gradeCounter);
console.log("playerAnswers length: " + playerAnswers.length);
console.log("You answered " + ((gradeCounter / playerAnswers.length) * 100) + "% of the questions correctly.");
$("#announcements").show();
$("#announcements").html("The quiz is over.");
$("#results").show();
$("#results").html("You answered " + gradeCounter + "/" + answerArray.length + " questions correctly.<br>" +
    "Your score is " + ((gradeCounter / answerArray.length) * 100) + "%.");

};

$('#loadGame').click(function() { 
    //Result html elements
    $("#announcements").html("");
    $("#results").html("");
    //Reset variables
    counter = 0;
    playerAnswers = [];
    //Hide html elements
    $("#loadGame").hide();
    $("#announcements").hide();
    $("#results").hide();

    //Set the interval 
    quizCycle = setInterval(appendDiv, interval); 
    //Append tutorial div
    $(".questionDiv:first").appendTo(".activeQuestionContainer");
    $(".questionDiv:first").addClass("activeQuestionDiv");
    $(".activeQuestionDiv").removeClass("questionDiv");
    $(".activeQuestionContainer h3").html("The quiz will begin shortly. You will have " + (interval / 1000) + " seconds per question.");

});

function appendDiv() {

    counter++;
    //console.log(counter);
    //Remove the active question div from view
    $(".activeQuestionDiv").appendTo(".hiddenQuestionContainer");
    //Now the the user cannot change their input, save the value
    playerAnswers.push($('input[name=answer]:checked').val());
    //console.log(typeof($('input[name=answer]:checked').val()));
    //Reset radio buttons
    $("input[type='radio']").prop('checked', false);
    //alert(playerAnswers);
    //alert($(".hiddenQuestionContainer:first-child").attr("class"));

    //alert("Hello, world!")

    $(".questionDiv:first").appendTo(".activeQuestionContainer");
    $(".questionDiv:first").addClass("activeQuestionDiv");
    $(".activeQuestionDiv").removeClass("questionDiv");
    $(".activeQuestionContainer h3").html("Question " + counter + "/" + answerArray.length);


    if (counter === answerArray.length + 1) {
        clearInterval(quizCycle);
        playerAnswers.shift();
        //$("#announcements").html("The quiz is over. You answered " + playerAnswers);
        console.log("Player answers: " + playerAnswers);
        console.log("Answer array " + answerArray);
        console.log(playerAnswers === answerArray);
        grading();
        //Reset classes
        $(".activeQuestionDiv").addClass("questionDiv");
        $(".questionDiv").removeClass("activeQuestionDiv");
        //Reverse elements in hiddenQuestionContainer, bringing them back into proper order
        //Credit: anurag on Stack Overflow: https://stackoverflow.com/a/5347903
        var list = $('.hiddenQuestionContainer');
        var listItems = list.children();
        list.append(listItems.get().reverse());
        $("#loadGame").show();

    }

    /* $('div.questionDiv input').on('change', function() {
        console.log($("input[type='radio']:checked").val());
    }); */

};

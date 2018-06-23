# TriviaGame

This is a basic program for delivering a timed multiple-choice quiz and grading it.

1. Questions are HTML divs, stored in a hidden div. Answers are given by clicking one of four radio buttons.

2. Each question has the same amount of time to answer. Time left is displayed using a CSS-animated progress bar.

3. The user may wait for the timer to run out, or click a button to skip to the next question.

4. When the next question is loaded, the old question is put back in the hidden div, and the value of the last radio button clicked is pushed into an array.

5. When the last question is loaded out, the array of the user's answers is checked against an array of the correct answers.
    The number of correct answers is divided by the total number of questions to give a score. 

6. The program will then display all questions the user got wrong, with their answers highlighted in red, and the correct answers highlighted in green. 


NOTES: 

- The program has flexibility. The functions themselves make no reference to any specific number of questions. Numbers and grades are based on the length of the answer array, and values in the player answer array. 

- The length of the interval is set as a variable. I hope to eventually use jQuery to use that same interval to set the CSS animation duration.

- Player may take the full time allotted for each question, or answer as fast as they please. 
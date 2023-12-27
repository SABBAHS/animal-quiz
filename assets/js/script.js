/**Fetch API 
 * Code learnt to input API from: https://reqbin.com/code/javascript/wc3qbk0b/javascript-fetch-json-example and Youtube: https://www.youtube.com/watch?v=-cX5jnQgqSM&list=RDCMUCcbrqMDyUZAD0zUnqbWjG0w&start_radio=1&rv=-cX5jnQgqSM&t=0
 */

let Questions;
let score = 0;

async function startQuiz() {

    //go and fetch (get) the question from the api server;
    await fetch("https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple")
        //parse the response from the server
        .then((response) => response.json().then((data) => ({
            data: data
        })))
        //after parsing the response, store the questions in the Question variable(which is an array)
        .then((res) => {
            Questions = res.data.results
        })
        //if anything goes wrong with getting the questions from api display the error in console.
        .catch((err) => console.log(err));

    console.log('que', Questions);
    //after fetching starting creating the question cards
    generateQuestionCards();
}
//using this I can go through each question in the question array
var currentQuestion = 0;

function generateQuestionCards() {

    const questionText = document.getElementById("questiontext");
    const options = document.getElementById("options");

    //display the question in the header H2 element
    questionText.innerHTML = Questions[currentQuestion].question;
    options.innerHTML = "";
    //loop through each options(incorrect_answers) to display it to the user. Name that value, and create button. Append to child (button).
    Questions[currentQuestion].incorrect_answers.forEach((value, index) => {
        const button = document.createElement("button");
        button.innerHTML = value;
        button.classList.add('answer-btn');
        button.addEventListener("click", (e) => checkanswer(e));
        options.appendChild(button);
    });
    //display the correct option by accessing the [currentquestion] array. Create button.
    const button = document.createElement("button");
    button.innerHTML = Questions[currentQuestion].correct_answer;
    button.addEventListener("click", (e) => checkanswer(e));
    button.classList.add('answer-btn');
    options.appendChild(button);
}

//Highlighting correct / incorrect answers 
function checkanswer(e) {
    console.log(e);
    const selectedanswer = e.target.innerText;
    const correctanswer = Questions[currentQuestion].correct_answer;
    console.log('select', selectedanswer);
    console.log('corre', correctanswer);
    if (selectedanswer == correctanswer) {
        e.target.classList.add("correctcolour");
        score++;
        const yourscore = document.getElementById('yourscore');
        yourscore.textContent = score;

    } else {
        e.target.classList.add("incorrectcolour");
    }
    const buttonoptions = document.getElementsByClassName("answer-btn");
    for (i = 0; i < buttonoptions.length; i++) {
        buttonoptions[i].disabled = true;
    }
}

//next question button // style.visibility = 'hide' code taken from here: https://stackoverflow.com/questions/8685107/hiding-a-button-in-javascript

const nextQuestion = document.getElementById("nextQuestion");
nextQuestion.addEventListener("click", function() {
    currentQuestion++;
    if (currentQuestion < Questions.length) {
        generateQuestionCards();
    } else {
        const scoredpoints = document.getElementById("scoredpoints");
        scoredpoints.innerHTML = "<p class='scoredpoints'>" + score + "</p>";

        const scoremessage = document.getElementById("scoredmessage");
        scoremessage.classList.remove("hide");

        const nextbutton = document.getElementById('next-btn');
        nextbutton.style.visibility = 'hide';

    }
});

//The start of the quiz
startQuiz();

//button click sound. Code from here: https://dev.to/shantanu_jana/how-to-play-sound-on-button-click-in-javascript-3m48
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/6");
const button = document.querySelectorAll("button");

button.forEach(button => {
    button.addEventListener("click", () => {
        audio.play();
    });
});

//retstart button. Code from here: https://teamtreehouse.com/community/any-one-know-how-to-make-a-restart-button
document.querySelector('.restart-btn').addEventListener('click', function() {
    window.location.reload();
    return false;
});
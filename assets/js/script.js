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
            Questions = res.data.results;
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

    // Display the question in the header H2 element
    questionText.innerHTML = Questions[currentQuestion].question;
    options.innerHTML = "";

    // Combine incorrect and correct answers into one array
    const allAnswers = [...Questions[currentQuestion].incorrect_answers, Questions[currentQuestion].correct_answer];

    // Shuffle the array
    const shuffledAnswers = shuffleArray(allAnswers);

    shuffledAnswers.forEach((value, index) => {
        const button = document.createElement("button");
        button.innerHTML = value;
        button.classList.add('answer-btn');
        button.addEventListener("click", (e) => checkanswer(e));
        options.appendChild(button);
    });

    buttonClickEventListener();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//Highlighting correct / incorrect answers / disable other options once selected
function checkanswer(e) {
    console.log(e);
    const selectedanswer = e.target.innerText;
    const correctanswer = Questions[currentQuestion].correct_answer;
    if (selectedanswer == correctanswer) {
        e.target.classList.add("correctcolour");
        score++;
        const yourscore = document.getElementById('yourscore');
        yourscore.textContent = score;

    } else {
        e.target.classList.add("incorrectcolour");
    }
    let i = 0;
    const buttonoptions = document.getElementsByClassName("answer-btn");
    for (i = 0; i < buttonoptions.length; i++) {
        buttonoptions[i].disabled = true;
    }
    document.getElementById("nextQuestion").disabled = false
}


//next question button // style.visibility = 'hide' inspired from here but not copied: https://stackoverflow.com/questions/8685107/hiding-a-button-in-javascript

const nextQuestion = document.getElementById("nextQuestion");
nextQuestion.addEventListener("click", function () {
    currentQuestion++;
    document.getElementById("nextQuestion").disabled = true
    if (currentQuestion < Questions.length) {
        generateQuestionCards();
    } else {
        const scoredpoints = document.getElementById("scoredpoints");
        scoredpoints.innerHTML = "<p class='scoredpoints'>" + score + "</p>";

        const scoremessage = document.getElementById("scoredmessage");
        scoremessage.classList.remove("hide");

        const nextbutton = document.getElementById('nextQuestion');
        nextbutton.style.display = 'none';

    }
});


//button click sound. Code from here: https://dev.to/shantanu_jana/how-to-play-sound-on-button-click-in-javascript-3m48
function buttonClickEventListener() {
    const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/6");
    const buttons = document.querySelectorAll("button");

    console.log(buttons);

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            audio.play();
        });
    });

}

//The start of the quiz
startQuiz();

//retstart button. Code from here: https://teamtreehouse.com/community/any-one-know-how-to-make-a-restart-button
document.querySelector('.restart-btn').addEventListener('click', function () {
    window.location.reload();
    return false;
});

/**Fetch API 
 * Code learnt to input API from: https://reqbin.com/code/javascript/wc3qbk0b/javascript-fetch-json-example and Youtube: https://www.youtube.com/watch?v=-cX5jnQgqSM&list=RDCMUCcbrqMDyUZAD0zUnqbWjG0w&start_radio=1&rv=-cX5jnQgqSM&t=0
*/
 
let Questions;

async function startQuiz() {

    //go and fetch (get) the question from the api server;
  await fetch("https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple")
  //parse the response from the server
  .then((response) => response.json().then((data) => ({data: data})))
  //after parsing the response store the questions in the Question variable(which is an array)
  .then((res)=> {Questions = res.data.results})
  //if anything goes wrong with getting the questions from api display the error in console.
  .catch((err) => console.log(err));

  console.log('que', Questions);
  //after fetching starting creating the question cards
  generateQuestionCards();
}
//using this I can go through each question in the question array
var currentQuestion = 0 

function generateQuestionCards() {

const quizContainer = document.getElementById("quizcontainer")
const questionText = document.getElementById("questiontext")
const options = document.getElementById("options")

//display the question in the header H2 element
questionText.innerHTML = Questions[currentQuestion].question

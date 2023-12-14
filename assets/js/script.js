
{
    "response_code": 0,
    "results": [{
        "type": "multiple",
        "difficulty": "medium",
        "category": "Animals",
        "question": "The now extinct species &quot;Thylacine&quot; was native to where?",
        "correct_answer": "Tasmania, Australia",
        "incorrect_answers": ["Baluchistan, Pakistan", "Wallachia, Romania", "Oregon, United States"]
    }, {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Animals",
        "question": "For what reason would a spotted hyena &quot;laugh&quot;?",
        "correct_answer": "Nervousness",
        "incorrect_answers": ["Excitement", "Aggression", "Exhaustion"]
    }, {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Animals",
        "question": "What is the name of the family that the domestic cat is a member of?",
        "correct_answer": "Felidae",
        "incorrect_answers": ["Felinae", "Felis", "Cat"]
    }, {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Animals",
        "question": "What type of animal is a natterjack?",
        "correct_answer": "Toad",
        "incorrect_answers": ["Bird", "Fish", "Insect"]
    }, {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Animals",
        "question": "What is the scientific name of the Common Chimpanzee?",
        "correct_answer": "Pan troglodytes",
        "incorrect_answers": ["Gorilla gorilla", "Pan paniscus", "Panthera leo"]
    }, {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Animals",
        "question": "&quot;Decapods&quot; are an order of ten-footed crustaceans.  Which of these are NOT decapods?",
        "correct_answer": "Krill",
        "incorrect_answers": ["Lobsters", "Shrimp", "Crabs"]
    }, {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Animals",
        "question": "What is the scientific name for the &quot;Polar Bear&quot;?",
        "correct_answer": "Ursus Maritimus",
        "incorrect_answers": ["Polar Bear", "Ursus Spelaeus", "Ursus Arctos"]
    }, {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Animals",
        "question": "A carnivorous animal eats flesh, what does a nucivorous animal eat?",
        "correct_answer": "Nuts",
        "incorrect_answers": ["Nothing", "Fruit", "Seaweed"]
    }, {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Animals",
        "question": "What is the world&#039;s longest venomous snake?",
        "correct_answer": "King Cobra",
        "incorrect_answers": ["Green Anaconda", "Inland Taipan", "Yellow Bellied Sea Snake"]
    }, {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Animals",
        "question": "What is the fastest animal?",
        "correct_answer": "Peregrine Falcon",
        "incorrect_answers": ["Golden Eagle", "Cheetah", "Horsefly"]
    }]
}


/**Fetch API */
 
 fetch("https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple", {
    method: 'POST'
})
   .then(response => response.json())
   .then(json => console.log(JSON.stringify(json)))



/**Start quiz */ 
//should it wrap around fetch API?
function () {
var startQuiz = document.getElementById('start');
startQuiz.addEventListener('click', start);
}

var questionBox = document.getElementsByClassName('answer-btn');

/**Showing Questions */
var questionIndex = 0;
function showQuestion (); {
questionBox.innerHTML = + currentQuestion.question + ;

}
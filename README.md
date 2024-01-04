<img src=assets/images/quiz-logo.jpg width=100% height=auto alt="logo">

[Animal Quiz](https://sabbahs.github.io/animal-quiz/)

<img src=assets/images/mainscreen.jpg max-width= 500px; height= 400px; alt="Desktop view 1024 x 768">

# Summary
Animal quiz is a trivia multiple choice question quiz, which is designed to test users' animal knowledge. The quiz features four choices of answers, which highlight green or red to indicate the correct or incorrect option, and finally a score at the end. 
The website is brightly styled, features a consistent theme and is clear for users to read and understand.
<br>

# Wireframes

Before coding the game, I used Cacoo and Balsamic to create wireframes to get an idea of how I wanted to create a realistic and achievable design. The idea is to outline a basic visual structure before writing the markup and style the CSS.

Below you will find a colour and text style scheme featuring white, black and orange, a webpage layout of the quiz (please note I wrote 'questions' where the 'answers' would be in error), the score pop-up message, and a mobile view which is similar to the desktop views, using media queries I can downsize it. 
 

<table>
<tr>
<td><img src=assets/images/wireframe.jpg width=100% height=auto alt="colour and text styles"></td>
<td><img src=assets/images/wireframe1.jpg width=100% height=auto alt="wireframe showcasing a pop-up score message at the end"></td>
</tr>
<tr>
<td><img src=assets/images/wireframe2.jpg width=100% height=auto alt="wireframe showcasing main quiz page layout"></td>
<td><img src=assets/images/mobile-view.jpg width=100% height=auto alt="wireframe for mobile screen"></td>
</tr>
</table>

# Features

<table>
<tr>
<td><img src=assets/images/correct-laptop-desktop.jpg width=100% height=auto alt="laptop/desktop view showing quiz when answer is correct"></td>
<td><td><img src=assets/images/incorrect-desktop.jpg width=100% height=auto alt="laptop/desktop view showing quiz when answer is incorrect"></td>
<ul>
<li>The quiz features a logo, a section for questions, four buttons with options of answers for use to select from, and a next question button. 
<li>Users will not be allowed to skip a question, the Next button is disabled until an option has been selected. 
<li>As shown, once the selection is chosen, the user will immediately be able to see whether their answer is correct (highlighted in green) or incorrect (highlighted in red).
<li>Once an answer selection is made, the other options will be disabled, which stops the user from cheating i.e. deselecting and selecting. 
<li>Throughout the page the buttons display a clicking sound. 
<li>Once the user has answered the question, there is a 'Next Question' button, this will return another set of questions and answers.
<li>Code has been appropriately added to ensure that the quiz randomly displays correct and incorrect answers, as initially all the correct answers were displayed at the bottom. 
</ul>
</tr>
</table>

<table>
<tr>
<td><img src=assets/images/ipad-animal.jpg width=100% height=auto alt="iPad view"></td>
<td><img src=assets/images/phone.jpg width=100% height=auto alt="Phone view"></td>
<ul>
<li>Media queries have been placed to ensure that the quiz looks size appropriate in smaller screen sizes and that the question and answer text are readable by the user.
<li>Whilst the background image features silhouettes of animals, I've decided to keep the image zoomed in as the images looked a bit distracting and too busy, the orange tones looked nice as it is, and complimented the theme of the webpage. 
<li>The 'Next' button is disabled until the user selects an answer.
<li>Users may exit the quiz by clicking the refresh button on their browsers, however I intended not to add this button to ensure users are focussed on ending the quiz.
</tr>
</table>

<table>
<tr>
<td><img src=assets/images/ipad-end.jpg width=100% height=auto alt="End of quiz pop-up message displaying user score on iPad"></td>
<td><img src=assets/images/nesthub-animal.jpg width=100% height=auto alt="End of quiz pop-up message displaying user score on nest hub"></td>
<ul>
<li> Once the user has gotten through all 10 questions, the 'Next button' will disappear and reveal a black box with orange text letting the user know that they've completed the quiz, and display the number of correct answers they've scored. 
<li>Within the black box, users will have the option to click the 'Play Again' button which will restart the quiz, and shuffle the questions and answers.
<li>There is no stopping the user from restarting the quiz mid-way by refreshing the page which will automatically restart, however, I expect the user to complete it by the end. 
<li> All buttons feature a 'click' sound, adding to the interactivity.
</ul>
</tr>
</table>


# Technologies used
Languages used: 

<ul>
<li>HTML
<lI>CSS
<li>JavaScript

Libraries, websites and frameworks:

<Li>Fontawesome
All of the icons for the footer and contacts page were taken from Fontawesome.
<Li>Github
Used frequently to commit, and push codes.
<Li>Google Fonts
Used to style header and innerHTML throughout the website.
<li>Cacoo and Balsamic
Used to create wireframes before coding in to have a visual example.
<li>Stackoverflow
Used to find existing issues to help fix minor issues with code, any code taken has been referenced. 
<li>Vecteezy - https://www.vecteezy.com/vector-art/
For the background image, I used this website.
<li>responsive test tool - https://responsivetesttool.com/
 Used to test website on multiple and most common screens 
<li>YouTube
I've searched for tutorials, any code used has been referenced.
<li>codebeautify - https://codebeautify.org/
 I used this link to format code


# Testing

## Browsers and Screen sizes
- I've confirmed that the pages are all responsive, and look good on multiple large screen sizes, especially starting from 1700px to the smallest being 360px. 
- I've gone through the majority of the screens on devtools, and even further on [responsivetesttool](https://responsivetesttool.com/).
- I've confirmed that the text, especially for questions and answers is readable, and the colour scheme does not clash or cause any issues to the user's ability to smoothly navigate around the page.
- I've confirmed that the website is easy to navigate for a user, and accurately displays a score at the end of the quiz, and responds quickly indicating the right or wrong answer. The quiz also offers to start again at the end which in turn reshuffles the questions.
- Code has been placed to disable the next button when an answer has not been selected to prevent user from skipping, and the other options have been disabled when an option has been selected to prevent users from cheating. 
  
## Bugs encountered 
  
- There were quotation marks around questions, I fixed this by changing the ‘text content’ to ‘innerHTML’. 
- Once my website was deployed to GitHub, the game area disappeared. The way I got it to work was to remove “/“ from the script file in HTML.
- I tried 4 different tutorials from YouTube to get click sounds to work and tried writing the code myself with no avail before copying the code from the link provided in the code library section. 
- The code I input for the click sound effects was not working for all the buttons, it only worked for the next button. Thanks to my Tutor, Sean who helped me learn that this was a timing issue and that I needed to add an event listener AFTER the buttons have been generated on the page. It worked once that code was placed in a function and called after the cards are generated. 
- To hide the ‘next question’ button once the score message pops up, I found a code online which I have added the link to. The code suggested to write [functionname].style.visibility = ‘hidden’;. I fixed this by changing the code to .style.display = 'none'; which I’ve used before, but in CSS.
- For the title logo, I chose Cairo Play Google font text, however, it was not working on the smaller screens, so I changed it to another font that looks suitable and matches the brand. 

## Bugs left unfixed

- On my personal phone, iPhone 14 pro max, when you click on a button once it makes echoeing sound which is unlike anything ive tested anywhere else, issue is left unresolved. 


## Validation 

- I've confirmed that no errors were flagged when passing all pages of my HTML code by direct input through the [official W3C Validator](https://validator.w3.org/#validate_by_input)
- I've confirmed that with using //jshint esversion:8 above my code, no errors were flagged when passing my CSS code by direct input through the [official Jigsaw Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
- I've confirmed that no errors were flagged when passing my JavaScript code by direct input through the [JShint](https://jshint.com/), adding /*jshint esversion: 8 */ above my code. 
- I've run the lighthouse tool via devtools to test the performance of the website with good results.
  <br>
<img src=assets/images/css.jpg width=40% height=auto>
<img src=assets/images/jshint.jpg width=40% height=auto>
<img src=assets/images/lighthouse.jpg width=40% height=auto>
  

# Credits
- Trivia API, provided by Mentor: https://opentdb.com/api_config.php
- How to fetch API data, link provided by Mentor: https://reqbin.com/code/javascript/wc3qbk0b/javascript-fetch-json-example 
- E.target explanation: https://www.altcademy.com/blog/what-is-e-target-in-javascript/#:~:text=In%20JavaScript%2C%20e%20typically%20stands,click%20or%20a%20keystroke%2C%20happened
- Mouse click: https://www.fesliyanstudios.com/royalty-free-sound-effects-download/mouse-click-2
- Mouse click how to: https://dev.to/shantanu_jana/how-to-play-sound-on-button-click-in-javascript-3m48
- Restart button: https://teamtreehouse.com/community/any-one-know-how-to-make-a-restart-button 
- Code inspired from here but not copied: https://stackoverflow.com/questions/8685107/hiding-a-button-in-javascript

# Deployment
To deploy my webpage, I took the following steps:
1) head to the web page's repository, and select 'settings'
2) from settings, select 'pages' on the left-hand corner
3) Under Source select 'deploy from branch'
4) Under Branch select the publishing source, in my case I've selected 'main' and '/(root)', then click save
5) After a few seconds, and refreshing the webpage, I was able to see a link to my website on the top of the webpage.
6) Using git commit and git push to send my changes to GitHub I was able to see any changes made to the website.

   
The site was deployed to github and can be found here: https://sabbahs.github.io/animal-quiz/
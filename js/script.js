// Sample data
const questions = [
    {
    text: "Which language is primarily used for web app development?",
    options: ["C#", "Python", "JavaScript", "Swift"],
    correct: 2
},
{
    text: "Which of the following is a relational database management system?",
    options: ["Oracle", "Scala", "Perl", "Java"],
    correct: 0
},
{
    text: "In which language is memory management provided by JVM?",
    options: ["Java", "C", "C++", "Python"],
    correct: 0
},
{
    text: "What does HTML stand for?",
    options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
    correct: 2
},
{
    text: "Which of the following is not a valid variable name in Python?",
    options: ["_myVar", "myVar2", "2myVar", "my_var"],
    correct: 2
},
{
    text: "Which of the following is not an object-oriented programming language?",
    options: ["Java", "C#", "Scala", "C"],
    correct: 3
},
{
    text: "Which tool is used to ensure code quality in JavaScript?",
    options: ["JSLint", "TypeScript", "Babel", "Webpack"],
    correct: 0
},
{
    text: "In which data structure, elements are added at one end and removed from the other?",
    options: ["Array", "Stack", "Queue", "LinkedList"],
    correct: 2
},
{
    text: "What is the primary use of the Git command 'clone'?",
    options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
    correct: 1
},
{
    text: "What does API stand for in the context of programming?",
    options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
    correct: 1
}
];

let currentQuestionIndex=0
let score=0;
const submitButton=document.getElementById("submit")
submitButton.addEventListener("click", () => {
    // Write the JS code that you want to be executed each time the Submit button is clicked.
   const selectedOption=document.querySelector('input[name="option"]:checked');
   if(selectedOption){
    console.log(selectedOption.value)
    const isCorrect=Number(selectedOption.value)===questions[currentQuestionIndex].correct;
 
   if(isCorrect){

    console.log(`Correct! You selected: ${selectedOption.value}`);
    score++;
   }
   else{
    console.log(`Wrong! You selected: ${selectedOption.value}. The correct answer is: ${questions[currentQuestionIndex].correct}`);
   }

   const listItems = document.querySelectorAll("#answer-list li");
    
   listItems.forEach(item => {
       const radioInput = item.querySelector('input[type="radio"]');
       
       if (Number(radioInput.value) === questions[currentQuestionIndex].correct) {
           item.style.backgroundColor = 'lightgreen'; // Highlight correct answer
       }  else {
           item.style.backgroundColor = ''; // Reset other answers
       }
   });

   document.getElementById('next').style.display = 'block'; // Show Next button
   document.getElementById('submit').style.display = 'none'; // Hide Submit button
}
});

const nextButton=document.getElementById("next")
nextButton.addEventListener("click", () => {
    // Write the JS code that you want to be executed each time the Next button is clicked.
    if(currentQuestionIndex<9){
    currentQuestionIndex++;
    document.getElementById("question").textContent=""
    document.getElementById("answer-list").innerHTML=""
    createQuestion(currentQuestionIndex)
    }
    else{
        alert(`Quiz finished! Your score is: ${score}/${questions.length}`)
        currentQuestionIndex=0
        score=0;
        document.getElementById("question").textContent=""
        document.getElementById("answer-list").innerHTML=""
        loadInitialData()
    }
});
function loadInitialData(){

    /*
  1. iterate through questions array
  2. forEach question, do the DOM Manupulation for adding question details to the UI
 3. iterate through options to add li inside ul
    */
 createQuestion(0)

}

function createQuestion(index){
    document.getElementById('next').style.display = 'none'; // Show Next button
    document.getElementById('submit').style.display = 'block'; // Hide Submit button
    let question=questions[index];
    document.querySelector("#question").textContent=question.text;
    const list=document.querySelector("#answer-list")
    const optionsList=questions[index].options
    for(let j=0;j<optionsList.length;j++){
        const li=document.createElement("li")
        const rd=document.createElement("input");
        rd.setAttribute("type","radio")
        rd.setAttribute("name", "option");
        rd.setAttribute("id", optionsList[j]); // Unique ID for each radio button
        // rd.value=optionsList[j]
        rd.value=j;
        const label=document.createElement("label");
        label.setAttribute("for",optionsList[j])
        label.innerHTML=optionsList[j]
        li.appendChild(rd)
        li.appendChild(label)
        list.appendChild(li);
    }
}
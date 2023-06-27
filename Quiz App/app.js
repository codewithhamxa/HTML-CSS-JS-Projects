const quizDB = [
    {
      question: "Q1: What is the correct HTML element for the largest heading?",
      a: "<h1>", 
      b: "<heading>", 
      c: "<h6>", 
      d: "<head>",
      ans: "ans1"
    },
    {
      question: "Q2: Which CSS property is used to control the spacing between individual letters?",
      a: "text-spacing",
      b: "letter-spacing",
      c: "line-height",
      d: "word-spacing",
      ans: "ans2"
    },
    {
      question: "Q3: What is the purpose of JavaScript in web development?",
      a: "To style web pages",
      b: "To make web pages interactive",
      c: "To create database queries",
      d: "To define the layout of web pages",
      ans: "ans2"
    },
    {
      question: "Q4: Which of the following is NOT a valid JavaScript data type?",
      a: "String",
      b: "Boolean",
      c: "Number",
      d: "Array",
      ans: "ans4"
    },
    {
      question: "Q5: What does CSS stand for?",
      a: "Creative Style Sheets",
      b: "Cascading Style Sheets",
      c: "Computer Style Sheets",
      d: "Colorful Style Sheets",
      ans: "ans2"
    },
    {
      question: "Q6: Which HTML tag is used to link an external JavaScript file?",
      a: "<script>",
      b: "<javascript>",
      c: "<link>",
      d: "<js>",
      ans: "ans1"
    },
    {
      question: "Q7: Which CSS property is used to change the background color of an element?",
      a: "color",
      b: "background-color",
      c: "text-color",
      d: "fill",
      ans: "ans2"
    },
    {
      question: "Q8: What is the purpose of the CSS box-sizing property?",
      a: "To control the size of the border box",
      b: "To control the size of the content box",
      c: "To control the size of the margin box",
      d: "To control the size of the padding box",
      answer: "ans1"
    },
    {
      question: "Q9: What is the correct syntax for referring to an external JavaScript file called 'script.js'?",
      a: "<script src='script.js'>",
      b: "<script href='script.js'>",
      c: "<script name='script.js'>",
      d: "<script file='script.js'>",
      ans: "ans1"
    },
    {
      question: "Q10: Which of the following is NOT a valid CSS positioning property?",
      a: "relative",
      b: "static",
      c: "fixed",
      d: "up",
      ans: "ans4"
    }
  ];

  const questions = document.querySelector(".questions");
  const option1 = document.querySelector("#option1");
  const option2 = document.querySelector("#option2");
  const option3 = document.querySelector("#option3");
  const option4 = document.querySelector("#option4");
  const submit = document.querySelector("#submit");
  const answers = document.querySelectorAll(".answer");
  const showScore = document.querySelector("#score");

  let questionCount = 0;
  let score = 0;

  const loadQuestion = () =>{
    const quetionList = quizDB[questionCount];
    questions.innerText = quetionList.question;
    option1.innerText = quetionList.a;
    option2.innerText = quetionList.b;
    option3.innerText = quetionList.c;
    option4.innerText = quetionList.d;
  }
  loadQuestion();

  const getCheckedAnswer = () =>{
    let answer;
    answers.forEach((curAnsElem) => {
      if(curAnsElem.checked){
        answer = curAnsElem.id;
      };
    });
    return answer;
  };

  const deSelectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false)
  }
  submit.addEventListener("click", () =>{
    const checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer === quizDB[questionCount].ans){
      score++;
    };

    questionCount ++;
    deSelectAll();
    if(questionCount < quizDB.length){
      loadQuestion();
    }
    else{
      showScore.innerHTML = `
        <h3> You Scored ${score}/${quizDB.length}✌️</h3>
        <button class="btn" onClick="location.reload()"> Play Again </button>
      `;
      showScore.classList.remove("score_area")
    }
  });
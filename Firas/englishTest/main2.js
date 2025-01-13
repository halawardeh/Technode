let questions = [];
let card = document.getElementById("cardDivID");
let questionElement = document.getElementById("question");
let options = document.getElementById("options");
let nextBtn = document.getElementById("next-button");
let counter = 0;
let scourEng = 0;
let currentQuestion;
let reviewDiv = document.getElementById("reviewDivEng");

let selected;
let answerEng = [];

async function readTestData() {
  let response = await fetch("english.json");
  questions = await response.json();

  currentQuestion = questions[counter];

  questionElement.innerHTML = `Q.${counter + 1}/${questions.length}<br> ${
    currentQuestion.question
  }`;
  options.innerHTML = "";
  options.innerHTML = `
        <input id="option1" class="radio-button" onchange='next()' type='radio' class='input' name='option' value='${currentQuestion.option1}'>
        <label class="radio-label" for='option1'>${currentQuestion.option1}</label><br><br>
        <input id="option2" class="radio-button" onchange='next()' type='radio' class='input' name='option' value='${currentQuestion.option2}'>
        <label class="radio-label" for='option2'>${currentQuestion.option2}</label><br><br>
        <input id="option3" class="radio-button" onchange='next()' type='radio' class='input' name='option' value='${currentQuestion.option3}'>
        <label class="radio-label" for='option3'>${currentQuestion.option3}</label><br><br>
        <input id="option4" class="radio-button" onchange='next()' type='radio' class='input' name='option' value='${currentQuestion.option4}'>
        <label class="radio-label" for='option4'>${currentQuestion.option4}</label><br><br>
    
    `;
}

function next() {
  document.getElementById("next-button").style.display = "block";
}

function NextBtn() {
  answerEng.push(document.querySelector('input[name="option"]:checked').value);

  counter++;

  if (
    currentQuestion.answer ==
    document.querySelector('input[name="option"]:checked').value
  ) {
    scourEng++;
  }

  console.log(
    "Your awnser: " +
      document.querySelector('input[name="option"]:checked').value
  );

  console.log("The correct: " + currentQuestion.answer);
  console.log("Your scour: " + scourEng);

  if (counter > questions.length - 1) {
    localStorage.setItem("answersEng", JSON.stringify(answerEng));

localStorage.setItem('EngQuizTaken',true);

    alert("Your finish You Exam.. ." + scourEng);
    if (scourEng < 5) {
      card.style.backgroundColor = "rgb(255, 39, 39)";
      card.classList = "fail";
      card.innerHTML = "";
      card.innerHTML = `
                    <button class="close-button" id="closeButton" onclick='closeBtn()'>×</button>

            <h1>Better Luck next time!</h1><br<br><br>
            <h3>Your answered ${scourEng} questions currect.</h3>

                    <button onclick="reviewBtn()" id="reviewBtn" class="reviewBtn">Review Your Exam</button>

        `;
    } else {
      card.style.backgroundColor = "rgb(43, 171, 0)";
      card.classList = "pass";
      card.innerHTML = "";

      card.innerHTML = `
              <button class="close-button" id="closeButton" onclick='closeBtn()'>×</button>

            <h1>Gongratulations!</h1><br<br><br>
            <h3>Your answered ${scourEng} questions currectly.</h3>

                    <button onclick="reviewBtn()" id="reviewBtn" class="reviewBtn">Review Your Exam</button>

        `;
    }
    return;
  }
  currentQuestion = questions[counter];
  questionElement.innerHTML = `Q.${counter + 1}/${questions.length}<br> ${
    currentQuestion.question
  }`;
  options.innerHTML = "";

  options.innerHTML = `
        <input id="option1" class="radio-button" onchange='next()' type='radio' class='input' name='option' value='${currentQuestion.option1}'>
        <label class="radio-label" for='option1'>${currentQuestion.option1}</label><br><br>
        <input id="option2" class="radio-button" onchange='next()' type='radio' class='input' name='option' value='${currentQuestion.option2}'>
        <label class="radio-label" for='option2'>${currentQuestion.option2}</label><br><br>
        <input id="option3" class="radio-button" onchange='next()' type='radio' class='input' name='option' value='${currentQuestion.option3}'>
        <label class="radio-label" for='option3'>${currentQuestion.option3}</label><br><br>
        <input id="option4" class="radio-button" onchange='next()' type='radio' class='input' name='option' value='${currentQuestion.option4}'>
        <label class="radio-label" for='option4'>${currentQuestion.option4}</label><br><br>
    
    `;
  nextBtn.style.display = "none";
}

function closeBtn() {
  card.style.display = "none";
}

function reviewBtn() {
  let answerss = JSON.parse(localStorage.getItem("answersEng"));

  for (let i = 0; i < answerss.length; i++) {
    selected = answerss[i];

    reviewDiv.innerHTML += `
  <p>Q${i + 1}.${questions[i].question}</p>

  <p  style="color:${getColor(questions[i].option1, i)}" >A) <b>${
      questions[i].option1
    }.</b>
  
  
  <p  style="color:${getColor(questions[i].option2, i)}" >B) <b>${
      questions[i].option2
    }.</b>


  <p  style="color:${getColor(questions[i].option3, i)}"  >C) <b>${
      questions[i].option3
    }.</b>


  <p  style="color:${getColor(questions[i].option4, i)}"  >D) <b>${
      questions[i].option4
    }.</b>


  <p> <b style="color:green">${questions[i].answer} (correct).</b><br>
  
`;
  }

  function getColor(option, index) {
    console.log(selected);
    const currentQuestion22 = questions[index];

    if (selected == option && option == currentQuestion22.answer)
      return "green";
    else if (selected == option && selected != currentQuestion22.answer)
      return "red";
    else if (option == currentQuestion22.answer) return "green";
    else return "black";
  }

  reviewDiv.style.display = "block";
}

function closeButtonReviewDiv() {
  window.location.href="/Firas/mainCards/firasCards.html";
  reviewDiv.style.display = "none";
}


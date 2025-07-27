const questions = [
  { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Hyper Link Markup Language", "Hyper Link and Tag Language"], answer: 0 },
  { q: "What does <code>&lt;!DOCTYPE html&gt;</code> do?", options: ["It links CSS", "It creates a comment", "It defines the document type"], answer: 2 },
  { q: "Choose the correct HTML element for the largest heading:", options: ["H6", "H1", "H4"], answer: 1 },
  { q: "What is the correct HTML element for inserting a line break?", options: ["<code>&lt;hr/&gt;</code>", "<code>&amp;nbsp;</code>", "<code>&lt;br/&gt;</code>"], answer: 2 },
  { q: "What is the correct syntax for an empty or self-closing tag in HTML?", options: ["<code>&lt;tagName/&gt;</code>", "<code>&lt;tagName&gt; Content &lt;/tagName&gt;</code>", "<code>&lt;br/&gt;</code>"], answer: 0 },
  { q: "What does the <code>&lt;head&gt;</code> tag contain?", options: ["Meta data", "Body tag", "Hyperlinks"], answer: 0 },
  { q: "Which tag is used to define the document's title?", options: ["<code>&lt;p&gt;</code>", "<code>&lt;body&gt;</code>", "<code>&lt;title&gt;</code>"], answer: 2 },
  { q: "Which tag is used to define emphasized text?", options: ["<code>&lt;i&gt;</code>", "<code>&lt;em&gt;</code>", "<code>&lt;strong&gt;</code>"], answer: 1 },
  { q: "Which tag is used to add an icon to a website?", options: ["<code>&lt;a&gt;</code>", "<code>&lt;meta&gt;</code>", "<code>&lt;link&gt;</code>"], answer: 2 },
  { q: "What is the correct syntax for an HTML attribute?", options: ["<code>&lt;tagName/&gt;</code>", "<code>&lt;abbr/&gt;</code>", "<code>name=\"value\"</code>"], answer: 2 },
  { q: "Which tag is used to define an image in HTML?", options: ["<code>&lt;img&gt;</code>", "<code>&lt;image&gt;</code>", "<code>&lt;picture&gt;</code>"], answer: 0 },
  { q: "Which attribute specifies alternate text for an image?", options: ["src", "height", "alt"], answer: 2 },
  { q: "How do you insert a comment in HTML?", options: ["--Comment--", "<code>&lt;!-- Comment --&gt;</code>", "<code>&lt;br/&gt;</code>"], answer: 1 },
  { q: "Which tag is used to define a list item?", options: ["<code>&lt;ul&gt;</code>", "<code>&lt;list&gt;</code>", "<code>&lt;li&gt;</code>"], answer: 2 },
  { q: "Which tag is used to create a numbered list?", options: ["<code>&lt;dl&gt;</code>", "<code>&lt;ol&gt;</code>", "<code>&lt;ul&gt;</code>"], answer: 1 },
  { q: "How do you create a hyperlink in HTML?", options: ["<code>&lt;a&gt;</code>", "<code>&lt;link&gt;</code>", "<code>&lt;HyperLink&gt;</code>"], answer: 0 },
  { q: "Which tag defines a table in HTML?", options: ["<code>&lt;tr&gt;</code>", "<code>&lt;th&gt;</code>", "<code>&lt;table&gt;</code>"], answer: 2 },
  { q: "Which tag is used to create scrolling text?", options: ["<code>&lt;Scroll&gt;</code>", "<code>&lt;marquee&gt;</code>", "<code>&lt;mark&gt;</code>"], answer: 1 },
  { q: "Which tag is used to define a table row?", options: ["<code>&lt;tr&gt;</code>", "<code>&lt;th&gt;</code>", "<code>&lt;table&gt;</code>"], answer: 0 },
  { q: "What does the 'required' attribute do in a form field?", options: ["Highlights the field", "Submits the form", "Makes a field mandatory"], answer: 2 },
  { q: "How many types does the <code>&lt;button&gt;</code> element have, and what are they?", options: ["2 (reset, submit)", "3 (get, post, action)", "1 (action)"], answer: 0 },
  { q: "What is the correct HTML to create a text area?", options: ["<code>&lt;input/&gt;</code>", "<code>&lt;area&gt;</code>", "<code>&lt;textarea&gt;</code>"], answer: 2 },
  { q: "Which tag is used to define a drop-down list?", options: ["<code>&lt;select&gt;</code>", "<code>&lt;option&gt;</code>", "<code>&lt;dropdown&gt;</code>"], answer: 0 },
  { q: "Which attribute displays a placeholder in an input field?", options: ["alt", "href", "placeholder"], answer: 2 },
  { q: "What does the <code>&lt;hr/&gt;</code> tag do?", options: ["Draws a horizontal line", "Breaks the line", "Highlights the text"], answer: 0 },
  { q: "What is the output of <code>&lt;u&gt;This is a text&lt;/u&gt;</code>?", options: ["<u>This is a text</u>", "This is a text", "<b>This is a text</b>"], answer: 0 },
  { q: "Which tag is used to insert audio files?", options: ["<code>&lt;audio&gt;</code>", "<code>&lt;media&gt;</code>", "<code>&lt;img&gt;</code>"], answer: 0 },
  { q: "What is the output of <code>&lt;bdo dir='rtl'&gt;nitiN&lt;/bdo&gt;</code>?", options: ["<bdo dir='rtl'>nitiN</bdo>", "nitiN", "nitin"], answer: 0 },
  { q: "Which tag and attribute are used to show a full form on hover?", options: ["<code>&lt;img/&gt;</code> and src", "<code>&lt;input&gt;</code> and placeholder", "<code>&lt;abbr&gt;</code> and title"], answer: 2 },
  { q: "Which tag is used for short quotations?", options: ["<code>&lt;q&gt;</code>", "<code>&lt;blockquote&gt;</code>", "<code>&lt;abbr&gt;</code>"], answer: 0 }
];

let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length);
let timerDuration = 30 * 60; // 30 minutes in seconds
let timerInterval;

function startTimer(duration) {
  let timer = duration;
  const timerElement = document.getElementById('timer');
  timerInterval = setInterval(() => {
    const minutes = String(Math.floor(timer / 60)).padStart(2, '0');
    const seconds = String(timer % 60).padStart(2, '0');
    timerElement.textContent = `Time Left: ${minutes}:${seconds}`;
    if (--timer < 0) {
      clearInterval(timerInterval);
      submitQuiz();
    }
  }, 1000);
}

function renderQuestion() {
  const q = questions[currentQuestionIndex];
  const container = document.getElementById('questionContainer');

  container.innerHTML = `
    <div class="mb-3">
      <div class="question-text mb-2"><strong>Q${currentQuestionIndex + 1}:</strong> ${q.q}</div>
      ${q.options.map((opt, i) => `
        <div class="form-check">
          <input class="form-check-input" type="radio" name="question${currentQuestionIndex}" id="q${currentQuestionIndex}_opt${i}" value="${i}" ${userAnswers[currentQuestionIndex] == i ? 'checked' : ''}>
          <label class="form-check-label" for="q${currentQuestionIndex}_opt${i}">${opt}</label>
        </div>
      `).join('')}
    </div>
  `;

  document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
  document.getElementById('nextBtn').style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'inline-block';
  document.getElementById('submitBtn').style.display = currentQuestionIndex === questions.length - 1 ? 'inline-block' : 'none';
}

function nextQuestion() {
  saveAnswer();
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  }
}

function prevQuestion() {
  saveAnswer();
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

function saveAnswer() {
  const selected = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
  if (selected) {
    userAnswers[currentQuestionIndex] = parseInt(selected.value);
  }
}

function submitQuiz() {
  saveAnswer();
  clearInterval(timerInterval);

  let score = 0;
  let wrongDetails = [];

  questions.forEach((q, i) => {
    if (userAnswers[i] === q.answer) {
      score++;
    } else {
      wrongDetails.push({
        index: i,
        question: q.q,
        yourAnswer: userAnswers[i] != null ? q.options[userAnswers[i]] : "No answer selected",
        correctAnswer: q.options[q.answer]
      });
    }
  });

  let resultText = `You scored ${score} out of ${questions.length}.`;
  let message = '';

  if (score === questions.length) {
    message = '<span class="green">Perfect Score! 🎉</span>';
  } else if (score >= 25) {
    message = '<span class="green">Excellent Work! You can go for CSS</span>';
  } else if (score >= 15) {
    message = '<span class="orange">Good Job! You can go for CSS but keep practicing HTML</span>';
  } else {
    message = '<span class="red">You are not ready for CSS, Keep Practicing!</span>';
  }

  let wrongHtml = '';
  if (wrongDetails.length > 0) {
    wrongHtml = `<div class="wrong-answer"><h4>Review your incorrect answers:</h4>`;
    wrongDetails.forEach(w => {
      wrongHtml += `
        <div>
          <strong>Q${w.index + 1}:</strong> ${w.question} <br/>
          Your answer: <span class="red">${w.yourAnswer}</span><br/>
          Correct answer: <span class="green">${w.correctAnswer}</span>
        </div><br/>
      `;
    });
    wrongHtml += '</div>';
  }

  document.getElementById('result').innerHTML = `${resultText}<br>${message}${wrongHtml}`;

  // Disable buttons and clear form
  document.getElementById('quizForm').innerHTML = '';
  document.getElementById('prevBtn').disabled = true;
  document.getElementById('nextBtn').disabled = true;
  document.getElementById('submitBtn').disabled = true;
}

// Initialize quiz
renderQuestion();
startTimer(timerDuration);

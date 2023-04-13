const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ques = [
  "What is your name? ",
  "Where do you live? ",
  "What are you going to do with Node JS? ",
];

function collectAnswers(ques, done) {
  const ans = [];
  const [firstQuestion] = ques;
  const questionAnswered = (answer) => {
    ans.push(answer);
    if (ans.length < ques.length)
      rl.question(ques[ans.length], questionAnswered);
    else {
      done(ans);
    }
  };
  rl.question(firstQuestion, questionAnswered);
}

collectAnswers(ques, (answers) => {
  console.log("Thank you for your response!");
  console.log(answers);
  process.exit();
});

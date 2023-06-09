$("#loader-background").hide();

let $button = document.querySelector("button");

//챗봇 API
let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

//챗봇 학습데이터
let data = [
  {
    role: "system",
    content: "assistant는 영화 전문가이다.",
  },
];

function combineText() {
  let qeustion;

  const startyear = document.getElementById("start-year").value;
  const endyear = document.getElementById("end-year").value;
  const genre = document.getElementById("genre").value;
  const country = document.querySelector("select").value;

  question = `${startyear} ~ ${endyear}년도의 ${genre} ${country}영화를 추천해 줘`;

  return question;
}

$button.addEventListener("click", (e) => {
  e.preventDefault();
  let userInputData = "";
  let quest = combineText();
  userInputData = quest;
  quest = "";

  data.push({
    role: "user",
    content: userInputData,
  });

  chatGptAPI();
});

function chatGptAPI() {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    redirect: "follow",
  })
    .then((res) => res.json())
    .then((res) => {
      document.querySelector("#chatbot-answer-box").innerText =
        res.choices[0].message.content;
    });
  $("#loader-background").show();
}

// 로딩버튼 처음에 가리기
$("#loader").hide();

let $button = document.querySelector("button");

function combineText() {
  let qeustion;

  let year = document.getElementById("year").value;
  let genre = document.getElementById("genre").value;
  let country = document.querySelector("select").value;

  question =
    year + "년도의 장르가 " + genre + "인 " + country + "영화를 추천해 줘";

  return question;
}

//챗봇 학습데이터
let data = [
  {
    role: "system",
    content: "assistant는 영화 전문가이다.",
  },
];

//챗봇 API
let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

$button.addEventListener("click", (e) => {
  //로딩 이미지 띄우기
  $("#loader").show();
  e.preventDefault();
  userInputData = "";
  var quest = combineText();
  userInputData = quest;
  console.log(userInputData);
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
      document.querySelector("#contents").innerText =
        res.choices[0].message.content;
    });
}
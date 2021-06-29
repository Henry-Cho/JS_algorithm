// upload items from json file by using fetch

// 질문을 받는 배열
let questions = [];

// 질문들을 매번 섞어주는 함수
function shuffleArray(arr) {
    let currentIndex = arr.length,  randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex], arr[currentIndex]];
  }

  return arr;
}

// 질문들을 JSON 파일에서 받기
function loadQuestions() {
    return fetch(`questions.json`)
    // .catch((err) => {console.log(err)})
    .then(response => response.json())
    .then(json => json.questions)
}

// 아이템들을 보여주는 함수
function displayQ(items) {
    questions = items;
    console.log(questions);
}

// initiate the file as uploading data
loadQuestions()
.then((jfile) => shuffleArray(jfile))
.then((j) => displayQ(j));




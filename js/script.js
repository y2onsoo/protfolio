const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

const timestamps = [];

let number = -1;

const array = [18, 19, 0, 17, 19];

// 랜덤값 반환
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // const dd = Math.floor(Math.random() * (max - min + 1)) + min;
  
  //start 입력후 enter버튼 선택
  if (number == 4) {
    const enter = document.getElementById("enter");
    enter.classList.add("selected");
    
    // 엔터 입력하면 alert 창띄움
    document.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        document.getElementById("alert-box").classList.remove("dn");
        // alert("입장합니다.");
        // window.location = "/main.html";     //찐alert창 확인 누르면 main페이지로 이동
        return;
      }
    });
  }
  number++;
  return array[number];
}
//alert 확인버튼 클릭시 main.html로 이동
function newPage()  {
  // window.location = "/main.html";  //현재창에서 페이지이동
  window.open('/main.html');     //새창으로 열림
}

//영문자로 반환
function getRandomKey() {
  const key = keys[getRandomNumber(0, keys.length - 1)];
  return key;
}

// html dom 반환
function targetRandomKey() {
  const key = document.getElementById(getRandomKey());
  key.classList.add("selected");
  //흔들리는 효과
  let start = Date.now();
}

//시간값을 담음
timestamps.unshift(getTimestamp());

//시간 값을 timestamps에 push
function getTimestamp() {
  const ad = Math.floor(Date.now() / 1000);
  return ad;
}

//엔터 흔들리게
document.addEventListener("keyup", (event) => {
  const keyPressed = String.fromCharCode(event.keyCode);
  const keyElement = document.getElementById(keyPressed);
  const highlightedKey = document.querySelector(".selected");
  
  keyElement.classList.add("hit");
  keyElement.addEventListener("animationend", () => {
    keyElement.classList.remove("hit");
  });
  
  if (keyPressed === highlightedKey.innerHTML) {
    timestamps.unshift(getTimestamp());
    const elapsedTime = timestamps[0] - timestamps[1];
    
    // 내가 몇초만에 친건지 알려줌
    console.log(`Character per minute ${60 / elapsedTime}`);
    highlightedKey.classList.remove("selected");
    targetRandomKey();
  }
});

targetRandomKey();


//input박스 입력
function printName()  {
  const name = document.getElementById('name').value;
  document.getElementById("result").innerText = name;
}

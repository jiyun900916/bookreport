
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr6PSyjhAFz6a_LCFApKmYSr3mEBfzXhg",
  authDomain: "book-store-7aa68.firebaseapp.com",
  projectId: "book-store-7aa68",
  storageBucket: "book-store-7aa68.appspot.com",
  messagingSenderId: "272559065948",
  appId: "1:272559065948:web:a6012d1c3c3f1e88974f99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//timeStamp 날짜 변환
//파이어베이스의 날짜 변환 형식은 timeStamp()

let timeStamp = Date.now();
//console.log(timeStamp)

let date = new Date(timeStamp);
let uploadDate = moment(date).format("YYYY-MM-DD")

console.log("timeStamp [date]:" + timeStamp)
console.log("timeStamp [length]:" + String(timeStamp).length)
console.log("uploadDate:" + uploadDate)



//유저 정보 확인
let userInfo = localStorage.getItem('user');
//console.log(typeof('user'))//데이터 형태가 어떤 것인지 확인 
//console.log(userInfo)//문자형으로 user 정보가 들어옴
//console.log(JSON.parse(userInfo).displayName) //(userInfo) :변수로 저장한 이름   //.displayName : 속성
$('#userName').html(JSON.parse(userInfo).displayName)


//onAuthStateChanged() - 로그인 / 로그아웃 / 새로고침
firebase.auth().onAuthStateChanged((user)=>{
  if (user) {
    //console.log(typeof(user))
    //console.log(user.uid) //docid=도큐먼트 ID  /fation /{docid} 값 설정  사용자 아이디=uid
    //로컬스토리지는 문자형만 저장 가능-user 정보는 객체형이므로 문자형으로 변화하여 로컬스토리지에 저장함. 
    //(객체형일경우 문자형으로 바꿔주어야함 object는 스토리지에 저장할 수 없다)
    localStorage.setItem('user', JSON.stringify(user))
  }
})

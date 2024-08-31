// Define quiz data

// const quizData = [
//     {
        
//         question: " If a rectangle has a length of 8 units and a width of 5 units, what is its area?",
//         options: [
//             " 40 square units",
//             " 13 square units",
//             " 26 square units",
//             " 64 square units"
// ],
//   correct : 0,

//     },
//     {
        
//         question: " What is the next number in the sequence: 2, 5, 10, 17, ...?",
//         options: [
//             "  21",
//             "  24",
//             "  26",
//             "  28"
// ],
//   correct : 1,

//     },
//     {
        
//         question: "If a shirt costs $20 and is discounted by 25%, what is the final price?",
//         options: [
//             " $18",
//             " $15",
//             " $22",
//             " $5"
// ],
//   correct : 0,

//     },
//     {
        
//         question: " What is 30% of 150?",
//         options: [
//             " 45",
//             " 50",
//             " 60",
//             " 90"
// ],
//   correct : 3,

//     },
//     {
        
//         question: " If a car travels at a speed of 60 km/h, how far will it travel in 3 hours?",
//         options: [
//             " 150 km",
//             " 180 km",
//             " 200 km",
//             " 90 km"
//         ],
//         correct : 2,

//     },
// ];


// const quizData = [
//     {
//       "Question": "In what year was the first-ever FIFA World Cup held?",
//       "answer": "1930",
//       "num": 1,
//       "options": [
//         "1930",
//         "1914",
//         "1950",
//         "1970"
//       ]
//     },
//     {
//       "Question": "Which South American country hosted and won the inaugural FIFA World Cup?",
//       "answer": "Uruguay",
//       "num": 2,
//       "options": [
//         "Uruguay",
//         "Argentina",
//         "Brazil",
//         "Chile"
//       ]
//     },
//     {
//       "Question": "What was the original name of the competition now known as the UEFA Champions League?",
//       "answer": "European Champion Clubs' Cup",
//       "num": 3,
//       "options": [
//         "European Champion Clubs' Cup",
//         "European Cup",
//         "Champions League",
//         "UEFA Cup"
//       ]
//     },
//     {
//       "Question": "Who is credited with creating the modern laws of association football in the 1860s?",
//       "answer": "Ebenezer Cobb Morley",
//       "num": 4,
//       "options": [
//         "Ebenezer Cobb Morley",
//         "Jules Rimet",
//         "Sepp Blatter",
//         "Johann Cruyff"
//       ]
//     },
//     {
//       "Question": "Which historical event caused the cancellation of the 1942 and 1946 FIFA World Cups?",
//       "answer": "World War II",
//       "num": 5,
//       "options": [
//         "World War II",
//         "The Great Depression",
//         "The Cold War",
//         "The Olympic Games"
//       ]
//     },
//     {
//       "Question": "Which legendary Brazilian footballer won a record three FIFA World Cup titles as a player (1958, 1962, and 1970)?",
//       "answer": "Pelé",
//       "num": 6,
//       "options": [
//         "Pelé",
//         "Garrincha",
//         "Ronaldo",
//         "Cafu"
//       ]
//     },
//     {
//       "Question": "In which decade was the offside rule significantly changed to require attackers to be level with the second-to-last defender?",
//       "answer": "1920s",
//       "num": 7,
//       "options": [
//         "1920s",
//         "1880s",
//         "1950s",
//         "1990s"
//       ]
//     },
//     {
//       "Question": "What major European competition was established in 1955 as a response to the deadly air disaster involving Manchester United?",
//       "answer": "European Cup Winners' Cup",
//       "num": 8,
//       "options": [
//         "European Cup Winners' Cup",
//         "European Champion Clubs' Cup",
//         "UEFA Europa League",
//         "UEFA Champions League"
//       ]
//     },
//     {
//       "Question": "The first-ever FIFA World Cup held outside of South America and Europe was in which country?",
//       "answer": "Mexico",
//       "num": 9,
//       "options": [
//         "Mexico",
//         "United States",
//         "Japan",
//         "South Africa"
//       ]
//     },
//     {
//       "Question": "Who is widely considered to be the first truly global football superstar?",
//       "answer": "Pelé",
//       "num": 10,
//       "options": [
//         "Pelé",
//         "Diego Maradona",
//         "Franz Beckenbauer",
//         "Sir Bobby Charlton"
//       ]
//     }
//   ];



import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js';
import { getAuth ,onAuthStateChanged, GoogleAuthProvider,signInWithPopup ,signOut} from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';
import { getDatabase,update,remove,child, ref, set,get,onValue } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js';

  const firebaseConfig = {
    apiKey: "AIzaSyCVmnl2Opc3RxBOChXCRF_48o7jsEmSCnM",
    authDomain: "quiz-app-96059.firebaseapp.com",
    databaseURL: "https://quiz-app-96059-default-rtdb.firebaseio.com",
    projectId: "quiz-app-96059",
    storageBucket: "quiz-app-96059.appspot.com",
    messagingSenderId: "470488300240",
    appId: "1:470488300240:web:798569c4ad145da707bcd5",
    measurementId: "G-2MH69QEHCC"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getDatabase();
  





// Function to get URL parameters
function getUrlParameter(name) {

  name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
  const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  const results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}



  
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    
   let  uidd = user.uid;
    
  //auth check start


// Retrieve the job field parameter from the URL
const quiz_id = getUrlParameter("Quiz_id");
console.log(quiz_id);
const qi = quiz_id.toString();


let myData = JSON.parse(localStorage.getItem('myData'));
const currquiz= myData[qi]
console.log(myData[qi]);

let dataframe= myData[qi];
let queList = dataframe["questions"];
 let quizData= queList;








// javascript
const quiz = document.querySelector('#quiz');
const scores = document.querySelector('.score');
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] = 
   document.querySelectorAll(
    "#question, #option_1, #option_2, #option_3, #option_4 "
   );
   
   const submitBtn = document.querySelector("#submit");

   let currentQuiz = 0;
   let score = 0;

//    Load Quiz Function

const loadQuiz = () => {
    const {Question, options} = quizData[currentQuiz];
    console.log(Question);

    questionElm.innerText = `${currentQuiz + 1}. ${Question}`;
    scores.innerHTML = `Score: ${score}/${quizData.length} `;
    options.forEach(
        (curOption, index) => {(window[`option_${index + 1}`].innerText = curOption)
        console.log(curOption);}
    );
};

loadQuiz();

// get selected answer function on button

const getSelectedOption = () => {
    let ans;
    let ind;
    answerElm.forEach((curOption, index) => {
        if(curOption.checked) {
            console.log(curOption.id);
            var c="0";
            if(curOption.id=='a'){c="option_1"}
            if(curOption.id=='b'){c="option_2"}
            if(curOption.id=='c'){c="option_3"}
            if(curOption.id=='d'){c="option_4"}

            let text = document.getElementById(c);
            console.log(text.textContent);


            ind = index;
            ans = text.textContent;
        }
    });
    return {ans,ind};
};

const deselectedAnswers = () => {
    return answerElm.forEach((curElem) => (curElem.checked = false));
};
  
submitBtn.addEventListener("click", () =>{

        let arel = document.getElementsByTagName("li");
        console.log(arel);

        
        const selectedOptionIndex = getSelectedOption();
        let ind = selectedOptionIndex.ind;
        
        






    

    // increase the score
    if(selectedOptionIndex.ans === quizData[currentQuiz].answer) {
        arel[ind].style.backgroundColor = "#00ff00";
        score = score+1
    }
    else{
        arel[ind].style.backgroundColor = "#ff0000";
    }

    currentQuiz++;
    
    setTimeout(() => {
        // Your task here
        console.log('Task performed after 3 seconds');
        

    if(currentQuiz < quizData.length) {
        deselectedAnswers();
        arel[ind].style.backgroundColor = "#ffffff";
        loadQuiz();
    }
    else {

        //updating user database
        const dbref = ref(db);
        let df;

        
        get(child(dbref,'users/'+ uidd)).then((snapshot)=>{

          if(snapshot.exists()){
            df=snapshot.val();
            console.log(snapshot.val());
            localStorage.setItem('userdata', JSON.stringify(snapshot.val()));
            localStorage.setItem('total_incorrect', JSON.stringify(snapshot.val().total_incorrect));

      
          }
          else{}}).catch((error)=>{
            console.log(error);
          
          })

          //data from local storage
          let userdata = JSON.parse(localStorage.getItem('userdata'));
          let old_total_incorrect = JSON.parse(localStorage.getItem('total_incorrect'));
          // let old_total_incorrect = userdata['total_incorrect'];
          // console.log(old_total_incorrect);
      
          let quiz_name = dataframe.Quiz_Title;
          //updating user database usable
          // if(userdata[quiz_name][0]<score){

          //   console.log(userdata[quiz_name][0]);

          //   update(ref(db,'users/'+uidd),
          //   {quiz_name:[score,1]
          //   } ).then(()=>{
          //     console.log("updated",quiz_name,score);
          //   }).catch((error)=>{
          //     console.log(error);
          //   })


          // }


          
         if(userdata[quiz_name][0]<score ){
          let maxscore = userdata['total_correct'];
          console.log("max = ",maxscore);
          let nmax = maxscore - userdata[quiz_name][0] + score;
          

          let old_quiz_incorrect = 10 - userdata[quiz_name][0];
            let current_incorrect = 10 - score;
            let diff = old_quiz_incorrect - current_incorrect;
            let newincorrect = (userdata[quiz_name][1])?old_total_incorrect - diff  : old_total_incorrect + 10 - score ;




            // let newincorrect;
            // let diff;
            // let current_incorrect;
            // let old_quiz_incorrect;
  
  
            //   if(userdata[quiz_name][1]==1){
            //    old_quiz_incorrect = 10 - userdata[quiz_name][0];
            //    current_incorrect = 10 - score;
            //    diff = old_quiz_incorrect - current_incorrect;
            //    newincorrect = old_total_incorrect - diff;
            //   }
            //   else{
  
            //      newincorrect = old_total_incorrect + 10 - score;
  
  
            //   }






          const dbRef = ref(getDatabase());

          //updating local storage
          // userdata.`${quiz_name}`.0=score;
          // userdata.quiz_name[1]=1;
          userdata['total_correct']=nmax;
          userdata['total_incorrect']=newincorrect;

          localStorage.setItem('userdata', JSON.stringify(userdata));

          const updates = {};
          console.log(userdata['total_incorrect']);
          console.log(userdata['total_incorrect']==0);
          


          if(old_total_incorrect==0){
          updates[`users/${uidd}/total_incorrect`] = 10- score;
          updates[`users/${uidd}/${quiz_name}/0`] = score;
          updates[`users/${uidd}/${quiz_name}/1`] = 1;
          updates[`users/${uidd}/total_correct`] = nmax;
          console.log("0 path");
          }
          else{
          updates[`users/${uidd}/total_incorrect`] = newincorrect;
          updates[`users/${uidd}/${quiz_name}/0`] = score;
          updates[`users/${uidd}/${quiz_name}/1`] = 1;
          updates[`users/${uidd}/total_correct`] = nmax;
          console.log("non 0 path");


          }

          
          // updates[`posts/${key}/starCount`] = increment(1);
          // updates[`user-posts/${key}/stars/${uid}`] = true;
          // updates[`user-posts/${key}/starCount`] = increment(1);
          update(dbRef, updates);

          console.log("data updated successfully");



         }
         else if(score==0 && userdata[quiz_name][1]==0)
         {
           let newincorrect =old_total_incorrect+10;

           const dbRef = ref(getDatabase());

           //updating local storage
           // userdata.`${quiz_name}`.0=score;
           // userdata.quiz_name[1]=1;
           userdata['total_incorrect']=newincorrect;
 
           localStorage.setItem('userdata', JSON.stringify(userdata));
 
           const updates = {};
        
           
 
 
           if(old_total_incorrect==0){
           updates[`users/${uidd}/total_incorrect`] = 10- score;
           updates[`users/${uidd}/${quiz_name}/0`] = score;
           updates[`users/${uidd}/${quiz_name}/1`] = 1;
           console.log("0 path");
           }
           else{
           updates[`users/${uidd}/total_incorrect`] = newincorrect;
           updates[`users/${uidd}/${quiz_name}/0`] = score;
           updates[`users/${uidd}/${quiz_name}/1`] = 1;
           console.log("non 0 path");
 
 
           }
 
           
           // updates[`posts/${key}/starCount`] = increment(1);
           // updates[`user-posts/${key}/stars/${uid}`] = true;
           // updates[`user-posts/${key}/starCount`] = increment(1);
           update(dbRef, updates);
 
           console.log("data updated successfully with 10 incorrect");
 



         }





      quiz.style.marginTop = "20%"; // Set top margin to 50px
      quiz.innerHTML = `
        <div class="result">
        <h2> 🏆 Your Score: ${score}/${quizData.length}  Correct Answers</h2>
        <p>Congratulations on completing the quiz! </p>
        <button class="reload-button" onclick="location.reload()">Try Again 🔄</button>
        <a class="reload-button" href="Home.html">Home</a>
        </div>
        `;




    }
      },300); 

    

    // const selectedOptionIndex = getSelectedOption();
    // console.log(selectedOptionIndex);

    // // increase the score
    // if(selectedOptionIndex.ans === quizData[currentQuiz].answer) {
    //     score = score+1
    // }
    // currentQuiz++;

    // if(currentQuiz < quizData.length) {
    //     deselectedAnswers();
    //     loadQuiz();
    // }
    // else {
    //     quiz.innerHTML = `
    //     <div class="result">
    //     <h2> 🏆 Your Score: ${score}/${quizData.length}  Correct Answers</h2>
    //     <p>Congratulations on completing the quiz! </p>
    //     <button class="reload-button" onclick="location.reload()">Try Again 🔄</button>
    //     </div>
    //     `;
    // }



});


//authcheck

} else {  }
});


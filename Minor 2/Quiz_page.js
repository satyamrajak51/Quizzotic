import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js';
import { getDatabase, ref, get,onValue } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js';
  
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
const db = getDatabase();

const starCountRef = ref(db, 'QUIZ/' );
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  

//local storage

localStorage.setItem('myData', JSON.stringify(data));

// Retrieve data from local storage



    console.log(data);
});

// This is for loading content in json format
let myData = JSON.parse(localStorage.getItem('myData'));
console.log(myData);


// for (const key in myData) {
//   const quiz = myData[key];
//       c++;
//       console.log(quiz.Quiz_Title,  c);
//       console.log(quiz.Quiz_sub, c);
//       console.log(quiz.Quiz_Desc,  c);
// }



// page filling 






 
var quizContainer = document.querySelector(".main-container");

for (const key in myData) {
    const quiz = myData[key];
    console.log(quiz.img);
    var quizHTML = `<article class="card">
        <div class="temporary_text">
            <img src="${quiz.img}">
        </div>
        <div class="card_content">
            <span class="card_title">${quiz.Quiz_Title}</span>
            <span class="card_subtitle">${quiz.Quiz_sub}</span>
            <p class="card_description">${quiz.Quiz_Desc}</p>
            <a  class="button2"  id="${quiz.Quiz_id}" onclick="openDetailsPage('${quiz.Quiz_id}')"  target="_blank" >Take Quiz</a>
        </div>
    </article>`;

    quizContainer.innerHTML += quizHTML;
}





































// Run the function when the page loads


// window.onload = function() {
//   createQuizzes(myData);
// };





























// method for keys in object 
// let c =0;

// for (const key in myData) {
//   const quiz = myData[key];
//       c++;
//       console.log(quiz.Quiz_Title,  c);
//       console.log(quiz.Quiz_sub, c);
//       console.log(quiz.Quiz_Desc,  c);
// }

// console.log(c);



// Function to create and populate quiz elements
// function createQuizzes(data) {
//   var quizContainer = document.getElementById("main-container");
//   var quizTemplate = document.getElementById("itemTemplate");
//   Object.keys(data).forEach(function(quizKey) {
//       var quiz = data[quizKey];
//       var clone = quizTemplate.content.cloneNode(true);

//       console.log(quiz.Quiz_Title);
//       console.log(quiz.Quiz_sub);
//       console.log(quiz.Quiz_Desc);

//       clone.querySelector(".card_title").textContent = quiz.Quiz_Title;
//       clone.querySelector(".card_subtitle").textContent = quiz.Quiz_sub;
//       clone.querySelector(".card_description").textContent = quiz.Quiz_Desc;
    
    
    
//       quizContainer.appendChild(clone);
      // clone.classList.remove("quiz-template");
//   });
// }

// Run the function when the page loads


// window.onload = function() {
//   createQuizzes(myData);
// };































// let arr=[];
// fetch('./DATA@.json')
//     .then(response => response.json())
//     .then(jsonData => {
//       arr = jsonData;
//         console.log(jsonData);
//         console.log(arr);
//     })
//     .catch(error => {
//         console.error('Error fetching JSON:', error);
//     });



// const jsonData = localStorage.getItem('myData');

// if (arr) {
    
//     console.log(arr);

//     const container = document.getElementById('main-container');
//     const template = document.getElementById('itemtemplate');

//     arr.forEach(itemData => {
//         const clone = document.importNode(template.content, true);
//         clone.querySelector('.card_title').textContent = itemData.Quiz_Title;
//         clone.querySelector('.card_description').textContent = itemData.Quiz_Desc;
//         clone.querySelector('.card_subtitle').textContent = itemData.Quiz_sub;

//         // clone.querySelector('.title').textContent = itemData.title;
//         // clone.querySelector('.description').textContent = itemData.description;

//         container.appendChild(clone);
//     });
// } else {
//     console.error('No data found in local storage');
// }



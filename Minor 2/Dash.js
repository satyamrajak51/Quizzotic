const body = document.querySelector("body"),
     modeToggle = body.querySelector(".mode-toggle");
 let     sidebar = body.querySelector("nav");
 let     sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})


// actual user work


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

  let mo = document.getElementById("mo");




  onAuthStateChanged(auth, (user) => {
    if (user) {

        let uidd = user.uid;
        let u_name = user.displayName;
        let u_email = user.email;
        let u_photo = user.photoURL;
        let names =[];
        let scores =[];
        let tc,ti;
        let pi_names=["Correct answers","Inorrect answers","Unattempted"];
        let pi_scores=[];

        
  const dbref = ref(db);      
  get(child(dbref,'users/'+ uidd)).then((snapshot)=>{

          if(snapshot.exists()){
           const df=snapshot.val();
           tc = snapshot.val().total_correct;
           ti = snapshot.val().total_incorrect;
           pi_scores[0]=tc;
           mo.innerHTML=`Obtained : ${tc}`;
           pi_scores[1]=ti;
           pi_scores[2]=200-(tc+ti);
           console.log(tc,ti);
           console.log(df);

            for(const key in df){

                if(df[key][1]==1){
                    console.log(key  ,`:` ,df[key][0]);
                    names.push(key);
                    scores.push(df[key][0]);
                   


                }
            }
            console.log(names);
            console.log(scores);

            //plotting graph
            
const ctx = document.getElementById('myBarChart').getContext('2d');
    
// Generate random data for 20 elements
const data = {
  labels: Array.from({ length: names.length }, (_, i) => `${names[i]}`),
  datasets: [{
    label: 'scores',
    data: scores, // Random values between 0 and 10
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Blue color with transparency
    borderColor: 'rgba(54, 162, 235, 1)', // Blue color
    borderWidth: 1
  }]
};

// Create a new bar chart instance
const myBarChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 10 // Set the upper limit for the y-axis scale
      }
    }
  }
});      

//graph plotting end


//plotting pie chart

const pi = document.getElementById('myPieChart').getContext('2d');

// Data for the pie chart with 20 elements
const d = {
  labels: Array.from({ length: pi_names.length }, (_, i) => `${pi_names[i]}`),
  datasets: [{
    label: 'value',
    data: pi_scores, // Random values between 0 and 100
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(153, 102, 255)',
      // Add more colors as needed
    ],
    hoverOffset: 4
  }]
};

// Create a new pie chart instance
const myPieChart = new Chart(pi, {
  type: 'pie',
  data: d
});

//plotting pie chart end







          }
          else{}}).catch((error)=>{
            console.log(error);
          
          })


        
} else {  



  if(window.location.pathname!=='/Home.html' && window.location.pathname!=='/about.html'){
    history.pushState(null, null, document.URL);
window.addEventListener('popstate', function () {
  history.pushState(null, null, document.URL);
});


    window.location.href='/Home.html';

  }






}
});





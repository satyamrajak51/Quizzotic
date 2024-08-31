

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
  let cc = document.getElementById("test_given");
  let n = document.getElementById("name");
  let ncc = document.getElementById("test_not_given");




  onAuthStateChanged(auth, (user) => {
    if (user) {

        let uidd = user.uid;
        let u_name = user.displayName;
        let u_email = user.email;
        let u_photo = user.photoURL;
        n.textContent=u_name;
      
        
  const dbref = ref(db);      
  get(child(dbref,'users/'+ uidd)).then((snapshot)=>{

          if(snapshot.exists()){
           const df=snapshot.val();
           console.log(df);

            for(const key in df){

                if(df[key][1]==1){
                    console.log(key  ,`:` ,df[key][0]);
                    var f= `<div class="elem">
                    <p>${key}  : ${df[key][0]}</p>
                    <div class="bar">
                    <div class="range" style="--p:${df[key][0]*10}">
                    <div class="range__label"></div>
                     </div>
                     </div> 
                     </div>
                    `;
                    cc.innerHTML+=f;


                }
            }


            for(const key in df){

                if(df[key][0]==0 && df[key][1]==0){
                    console.log(key  ,`:` ,df[key][0]);
                    var f= `<div class="elem">
                    <p>${key}  : ${df[key][0]}</p>
                    <div class="bar">
                    <div class="range" style="--p:'not attempted'
                    <div class="range__label"></div>
                     </div>
                     </div> 
                     </div>
                    `;
                    ncc.innerHTML+=f;
                }
            }


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


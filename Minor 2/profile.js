

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
  let df;


  //elements initialization

  let pic = document.getElementById("u-pic");
  let email = document.getElementById("u-email");
  let name = document.getElementById("u-name");
  let tq = document.getElementById("total-quiz");
  let ca = document.getElementById("correct-ans");
  let inca = document.getElementById("incorrect-ans");
  let acc = document.getElementById("accuracy");
  let ms = document.getElementById("m-s");





onAuthStateChanged(auth, (user) => {
    if (user) {

        let uidd = user.uid;
        let u_name = user.displayName;
        let u_email = user.email;
        let u_photo = user.photoURL;
        console.log(uidd);
        console.log(u_email);
        console.log(u_photo);

        pic.src =u_photo;
        email.textContent = u_email;
        name.textContent = u_name;
        

        
  const dbref = ref(db);      
  get(child(dbref,'users/'+ uidd)).then((snapshot)=>{

          if(snapshot.exists()){
            df=snapshot.val();
            console.log(snapshot.val());
            console.log(snapshot.val().total_correct);
            let t_q =0;

            for(const key in snapshot.val()){

                if(snapshot.val()[key][1]==1){
                    console.log(key);
                    t_q+=1;
                }



            }

            console.log(t_q);

            let toc =snapshot.val().total_correct;
            let tinc = snapshot.val().total_incorrect;
            let tot = toc+tinc;
            console.log(toc/tot*100);
            ca.textContent=`Correct Answers : ${toc}`;
            inca.textContent=`Incorrect Answers : ${tinc}`;
            tq.textContent=`Total quizzes played : ${t_q}`;
            acc.textContent=`Accuracy : ${(toc/tot*100).toFixed(2)}%`;
            ms.textContent=`Member Since :${snapshot.val().Time}`;
          }
          else{}}).catch((error)=>{
            console.log(error);
          
          })
console.log(df);

        
} else {  }
});

console.log(df);

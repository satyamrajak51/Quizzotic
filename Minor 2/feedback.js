
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


emailjs.init('NxZlPo8ku3Xj-NBtI')


onAuthStateChanged(auth, (user) => {
if (user) {

let uidd = user.uid;
let u_name = user.displayName;
let u_email = user.email;



const btn = document.getElementById('button');
const n = document.getElementById('from_name');
const e = document.getElementById('email_id');
n.value = u_name;
e.value = u_email;



document.getElementById('form')
.addEventListener('submit', function(event) {
event.preventDefault();
var m = document.getElementById("message");



// var templateParams = {
//       from_name: `${u_name}`,
//       email_id: `${u_email}`,
var t = document.getElementById("form")

// };
// console.log(templateParams);

btn.value = 'Sending...';

const serviceID = 'default_service';
const templateID = 'template_8o1dbl7';

emailjs.sendForm(serviceID, templateID, t)
.then(() => {
btn.value = 'Send Email';
m.value=""
alert('Thanks for the support, We got your feedback!');
}, (err) => {
btn.value = 'Send Feedback';
alert(JSON.stringify(err));
});
});



} else {  }
});

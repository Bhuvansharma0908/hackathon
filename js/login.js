import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyAOB3-FC0mM-wd8aV4AfojQLzpDLt2Sets",
    authDomain: "okbro-5846a.firebaseapp.com",
    databaseURL: "https://okbro-5846a-default-rtdb.firebaseio.com",
    projectId: "okbro-5846a",
    storageBucket: "okbro-5846a.appspot.com",
    messagingSenderId: "664853087673",
    appId: "1:664853087673:web:d31bb15f71bf8028d2a268",
    measurementId: "G-D107FDVCVC"
};
const app = initializeApp(firebaseConfig);
import {
    getDatabase,
    ref,
    set,
    child,
    get
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
const db = getDatabase();
const psname = document.getElementById("problem_statement");
const psid = document.getElementById("psid");
const team = document.getElementById("team_name");
const lead_name = document.getElementById("leader_name");
const lead_uid = document.getElementById("leader_UID");
const first_name = document.getElementById("first_name");
const first_uid = document.getElementById("first_UID");
const second_name = document.getElementById("second_name");
const second_uid = document.getElementById("second_UID");
const third_name = document.getElementById("third_name");
const third_uid = document.getElementById("third_UID");
const fourth_name = document.getElementById("fourth_name");
const fourth_uid = document.getElementById("fourth_UID");
const fifth_name = document.getElementById("fifth_name");
const fifth_uid = document.getElementById("fifth_UID");
const sixth_name = document.getElementById("sixth_name");
const sixth_uid = document.getElementById("sixth_UID");

function Registeruser() {
    const dbref = ref(db);
    get(child(dbref, "UsersList/" + lead_uid.value)).then((snapshot) => {
        if (snapshot.exists()) { alert("Already Exist"); } else {
            set(child(dbref, "UsersList/" +
                lead_uid.value), {
                Leadername: lead_name.value,
                lLeaderUID: lead_uid.value,
                Firstmember: first_name.value,
                FirstUID: first_uid.value,
                Secondmember: second_name.value,
                SecondUID: second_uid.value,
                Thirdmember: third_name.value,
                ThirdUID: third_uid.value
            }).then(() => { gotologin(); }).catch((error) => { alert("error: " + error); })
        }
    });
}
submit.addEventListener('click', Registeruser);

function gotologin() { alert("User registed successfully"); }
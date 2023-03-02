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
    if (auntenticate()) {
        get(child(dbref, "UsersList/" + lead_uid.value)).then((snapshot) => {
            if (snapshot.exists()) { alert("Already Exist"); } else {
                set(child(dbref, "UsersList/" +
                    lead_uid.value), {
                    Problem_Statement: psname,
                    PS_ID: psid,
                    Team_Name: team,
                    Leadername: lead_name.value,
                    LeaderUID: lead_uid.value,
                    Firstmember: first_name.value,
                    FirstUID: first_uid.value,
                    Secondmember: second_name.value,
                    SecondUID: second_uid.value,
                    Thirdmember: third_name.value,
                    ThirdUID: third_uid.value,
                    Fouthname: fourth_name,
                    FourthUID: fourth_uid,
                    Fifthname: fifth_name,
                    FifthhUID: fifth_uid,
                    Sixthname: sixth_name,
                    SixthUID: sixth_uid

                }).then(() => { gotologin(); }).catch((error) => { alert("error: " + error); })
            }
        });
    } else {
        alert("Add Atleast Three members")
    }

}
submit.addEventListener('click', Registeruser);

function gotologin() { alert("User registed successfully"); }

function auntenticate() {
    if (psname.value != "" && psid.value != "" && team.value != "" && lead_name.value != "" && lead_uid.value != "" && first_name.value != "" && first_uid.value != "" && second_name.value != "" && second_uid.value != "" && third_name.value != "" && third_uid.value != "") {
        console.log(1);
        console.log(psname.value);
        return true;
    } else {
        return false;
    }
}

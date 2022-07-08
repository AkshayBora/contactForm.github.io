const firebaseConfig = {
    apiKey: "AIzaSyDiCmSpHo_hQ5tvCXSFlyNJbg_KR8_BkHA",
    authDomain: "contactform-2fac3.firebaseapp.com",
    databaseURL: "https://contactform-2fac3-default-rtdb.firebaseio.com",
    projectId: "contactform-2fac3",
    storageBucket: "contactform-2fac3.appspot.com",
    messagingSenderId: "280218105893",
    appId: "1:280218105893:web:920b5101103fb5eaeda7cc"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var contactFormDB = firebase.database().ref('contactForm');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var phone = getElementVal('phone');
    var message = getElementVal('message');

    // console.log(name, email, phone, message);
    saveMessages(name, email, phone, message);

    //enable alert
    document.querySelector('.alert').style.display = 'block';

    //remove alert
    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';
    }, 3000)

    //reset the form
    document.getElementById('contactForm').reset();
}

const saveMessages = (name, email, phone, message) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        email: email,
        phone: phone,
        message: message
    });
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}
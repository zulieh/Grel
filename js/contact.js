const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const eventType = document.getElementById('eventType');
const message = document.getElementById('message');
const button = document.getElementById('button');
const contactForm = document.getElementById('contactForm');
const feedback = document.getElementById('feedback');
const baseURL = 'https://food-backend-api.herokuapp.com/api/v1';

function sendContact(e) {
    e.preventDefault();
    sent(firstname.value, lastname.value, email.value, phone.value, eventType.value, message.value)
        .then((data) => {
            feedback.innerText = data;
        });

}

function sent(firstname, lastname, email, phone, eventType, message) {
    return fetch(`${baseURL}/contact`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json. text/plain */*',
            'Content-type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            firstname, lastname, email, phone, eventType, message 
        })
    })
    .then((res) => res.json());
}

if(contactForm) {
    contactForm.addEventListener('submit', sendContact, false);
}
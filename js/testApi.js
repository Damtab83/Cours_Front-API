//faire un fetch vers https://reqres.in/api/users
//URL: https://reqres.in/api/users
//METHOD: GET

const baseURL = 'http://reqres.in/';
const BaseUrlUser = baseURL + 'api/users';
const allEntriesDiv = document.getElementById('allentries');
document.getElementById('getusers').addEventListener('click', getAllUser);

function getAllUser() {
    let numPage = document.getElementById('pageNum').value;
    fetch(BaseUrlUser+'?'+ new URLSearchParams({
        per_page: 2,
        page:+numPage
    }).toString()
    , {method: 'GET'})
    .then(function(response) {
        return response.json();
    })
    .then(function(responseJson) {
        allEntriesDiv.innerHTML = '';
        //je peux utiliser ma data en objet
        responseJson.data.forEach(user => {
            allEntriesDiv.innerHTML += user.email + '<br>';
        });
    });
}

function createUser() {
    fetch(BaseUrlUser, {
        method: 'POST',
        body: {
            "name": "Thomas",
            "job": "Developpeur"
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(responseJson) {
        console.log(responseJson)
    })
}

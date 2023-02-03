const baseURL = 'http://reqres.in/';
const BaseUrlUser = baseURL + 'api/users';
const allEntriesDiv = document.getElementById('allentries');
document.getElementById('getusers').addEventListener('click', getAllUser);


function getAllUser() {
    let numPage = document.getElementById('pageNum').value;
    fetch(BaseUrlUser+'?'+ new URLSearchParams({
        per_page: 2,
        page: +numPage
    })
    , {method: 'GET'})
    .then(async (responseHTTP) =>
    {
        let resultJSON = await responseHTTP.json();
    
        let entriesDiv = document.getElementById('allentries');
        entriesDiv.innerHTML = resultJSON.total + '<br>' + '<br>';
    
        resultJSON.data.forEach(element => {
            entriesDiv.innerHTML += element.first_name + '<br>';
        });
    });
}

function createUser() {
    let name = document.getElementById('nomInput').value;
    let job = document.getElementById('jobInput').value;
    fetch(BaseUrlUser, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "name": name,
            "job": job
        })
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(responseJson) {
        let dateCreation = new Date(responseJson.createdAt);
        alert("Félicitations, l'utilisateur n°" +responseJson.id+" a bien été créé/ "+
        " à "+dateCReation.toLocaleTimeString() +" Nom : " + responseJson.name+ "/ Job : " + responseJson.job);
    })
}
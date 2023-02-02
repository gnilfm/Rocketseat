const url = "http://localhost:5500/api"

function getUsers(){
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = 
    JSON.stringify(data))
    .catch(err => console.error(err))
}

function getUser(id) {
    fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
        JSON.stringify(data.avatar)
    })
    .catch(err => console.error(err))
}

function addUser(newUser) {
    fetch(url,{
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "content-type": "application/json; charset=utf-8"
        }
    })
    .then(response => response.json())
    .then(data => alertAPI.textContent = data)
    .catch(error => console.error(error))
}

function updateUsers(updateUser,id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updateUser),
        headers: { 
            "Content-Type": "application/json; charset=utf-8"
         }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))

}

function deleteUser (id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {"content-type": "application/json; charset=utf-8"}
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const newUser = {
    name: 'oliver zars',
    avatar: 'https://picsum.photos/200/300',
    city: 'Rio serra'
}

//addUser(newUser)

const updateUser = {
    name: 'Marcelo romão',
    avatar: 'https://picsum.photos/200/300',
    city: 'Recife'
}

//updateUsers(updateUser, 5)

deleteUser(4)
getUsers()
getUser(5)
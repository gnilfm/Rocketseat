const url = "http://localhost:5500/api"//busca o local onde a api esta rodando

function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error =>console.error(error))
}//GET pega os dados da api no backend rodando na porta 5500 e mostra no frontend na pagina html

function addNewUser(newUser) {
    axios.post(url, newUser)
    .then(response => {
         console.log(response)
         })
    .catch(error =>console.error(error))
}//POST inseri dados na api no frontend 

function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(response => {       
        userName.textContent = response.data.name
        userCity.textContent = response.data.city
        userId.textContent = response.data.id
        userAvatar.src = response.data.avatar
    })
    .catch(error =>console.error(error))
}//GET com parametros tras para o backend a informação de um usuario especifico

function updateUser(id, userUpdated)  {
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error =>console.error(error))
}//PUT edita os dados de um usuario na api no frontend 

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}//DELETE deleta as informações de um usuario na api no frontend

deleteUser(5)

const userUpdated = {
    name: "Marcelo Roão",
    city: "Paris",
    avatar: "https://i.picsum.photos/id/154/200/300.jpg?hmac=9yMwkzYXuJYDbG15-lORLjtqCiAQiBd6wDIKPBiJBM8"

}

getUsers()

const newUser = {
    name: "Nil Meneses",
    city: "San Francisco",
    avatar: "https://i.picsum.photos/id/900/200/300.jpg?hmac=_xi51c2dVkaF_l3I_H4M3nOl9u4_0rsxUoFUfOSGOCk"
    

}

getUser(3)

//updateUser(2, userUpdated)

//addNewUser(newUser)
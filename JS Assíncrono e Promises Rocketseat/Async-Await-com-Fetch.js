/*
fetch("https://api.github.com/users/maykbrito")
.then( response => response.json()) 
.then( data => fetch(data.repos_url)) 
.then( res => res.json()) 
.then( d => console.log(d)) 
.catch( err => console.log(err)) 
*/


async function Start() {
       
        const url = "https://api.github.com/users/maykbrito"
        const user = await fetch(url).then (r => r.json())
        const userRepos = await fetch(user.rerpos_url).then (r => r.json())        
        console.log(userRepos);
  
}

Start().catch( e => console.log(e)) 
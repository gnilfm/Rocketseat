
//adicionar elemento
const div = document.createElement('div')
div.innerText = 'Ola devs!'

//inser before
const body= document.querySelector('body')
const script = body.querySelector('script')
body.insertBefore(div, script)

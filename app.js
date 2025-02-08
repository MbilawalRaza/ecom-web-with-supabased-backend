const signup =document.getElementById('singup')
const login = document.getElementById('login')



function  changelogin(){
    console.log(signup,login)
    console.log('run')
signup.classList.add('hidden')
login.classList.remove('hidden')



}

function changesignup (){
    login.classList.add('hidden')
    signup.classList.remove('hidden')
 
}
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








const  emailinp= document.getElementById('email')
const passwordinp= document.getElementById("password")
const cityinp= document.getElementById("city")
const addressinp= document.getElementById("address")
const roleinp= document.getElementById("role")
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwanRobWZoa3FxeWdiY29od2t0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2MTg0NjksImV4cCI6MjA1NTE5NDQ2OX0.yT6jJS5v-oNAOa24YhcF7Fpkd7iRONSl7rS7_xzt4xk'
const supabaseUrl =' https://wpjthmfhkqqygbcohwkt.supabase.co'
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey)
// console.log(emailinp,passwordinp,cityinp,addressinp,roleinp)
async function sign(){
const  email = emailinp.value
const password =passwordinp.value
const city = cityinp.value
const adress=addressinp.value
const role=roleinp.value
// console.log(email,password,city,address,role)
const { data, error } = await supabaseClient.auth.signUp({
    email: email,
    password: password,
  })
  if (error) {
    console.log(error)
    return
  }
  alert('User signup')
  console.log(data.user.id)
  



  const { error: tableError, data: tableData } = await supabaseClient
  .from("user")
  .insert(
    [
      {
        adress,
        city,
        role,
        uid: data.user.id
      }
    ]
  ).select()

  console.log(tableData)
}


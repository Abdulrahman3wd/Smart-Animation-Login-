const container = document.getElementById('container')
const registration = document.getElementById('register')
const loginBtn = document.getElementById('login')
const sign_up = document.getElementById('sign-up');


const sign_Name = document.getElementById('sign-name')
const sign_Email = document.getElementById('sign-email')
const sign_password = document.getElementById('sign-password')

let user = [];


if(localStorage.getItem('user') != null){
    user = JSON.parse(localStorage.getItem('user'))
}
else{
    user = [];
}






function AddUser(){
    if(sign_Name.value == '' || sign_Email.value == '' || sign_password.value == ''){
        document.getElementById('message').classList.remove('d-none')
        console.log("Null vlaues")


    }else{
        let obj = {
            name : sign_Name.value,
            email : sign_Email.value , 
            password : sign_password.value
        }
        user.push(obj);
        localStorage.setItem('user' , JSON.stringify(user));
        document.getElementById('message').classList.add('d-none')
                
        container.classList.remove("active");     
        
    }
}

sign_up.addEventListener('click', (event) => {
    event.preventDefault(); 
    AddUser();
});



// sign in
const sign_in_email = document.getElementById('sign-in-email')
const sign_in_password = document.getElementById('sign-in-password')



user = JSON.parse(localStorage.getItem('user')) || [];


document.getElementById('sign-in-submit').addEventListener('click' , (event) =>{
    if (sign_in_email.value == '' || sign_in_password.value == '') 
        {
            event.preventDefault(); 
            document.getElementById('messageSign').classList.remove('d-none')
            console.log("Hello")
        }

        else{
            checkUser();
        }
}) 
function  checkUser(){
    for (let i = 0; i< user.length; i++){
        if(sign_in_email.value == user[i].email && sign_in_password.value ==user[i].password){
            let name  = user[i].name
            localStorage.removeItem('userName')
            localStorage.setItem('userName' , name)
            document.getElementById('messageSign').classList.add('d-none')
            document.getElementById('userName').innerHTML = localStorage.getItem('userName');
            document.getElementById('home').classList.remove('d-none')
            document.getElementById('container').classList.add('d-none')
            console.log('success')
            break;
        }


    } 
}

document.getElementById('logOut').addEventListener('click' , (event) =>{
    event.preventDefault();
    localStorage.removeItem('')
    document.getElementById('home').classList.add('d-none')
    document.getElementById('container').classList.remove('d-none')

    
})
    





//home





//animation 
registration.addEventListener('click' , () =>
    {
        container.classList.add("active");
    });
    
    loginBtn.addEventListener('click' , () =>
    {
            container.classList.remove("active");
        
    });

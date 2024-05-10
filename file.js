let form = document.querySelector('form');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let name = event.target.user_name.value;
    let email = event.target.email.value;
    let phone = event.target.phone.value;
    console.log(name, email, phone);

    // getting Data from local Storage
    

    // sending data in local Storage
    let user_data = {
        name:name,
        email:email,
        phone:phone
    }
    user_list.push(user_data);
    
    localStorage.setItem('userlist',JSON.stringify(user_list));

    
    console.log(user_list)
})

function display_data(){
    let user_list = JSON.parse(localStorage.getItem('userlist')) ?? [];

}


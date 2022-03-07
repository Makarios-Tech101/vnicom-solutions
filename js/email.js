window.addEventListener('load', ()=>{
    const user_name = document.getElementById('name')
    const user_email = document.getElementById('email')
    const user_phone = document.getElementById('phone')
    const user_project = document.getElementById('project')
    const user_message = document.getElementById('message')


    document.getElementById('form').addEventListener('submit', (e)=>{
        e.preventDefault()
        if(ValidateName(user_name))
        {
            if(ValidateEmail(user_email)){
                if(ValidatePhone(user_phone)){
                    if(ValidateProject(user_project)){
                        if(ValidateMessage(user_message)){
                            const message_body = 
                            `<h5>Name: ${user_name.value}</h5>
                            <h5>Email: ${user_email.value}</h5>        
                            <h5>Phone: ${user_phone.value}</h5>       
                            <h5>Project Type: ${user_project.value}</h5>        
                            
                            <p>${user_message.value}</p>        
                            `
                            console.log(message_body)


                            console.log('Sending')
                            const from = "vnicomhub@gmail.com"
                            const to = "vnicomhub@gmail.com"
                            const subject = "Vnicom Limited Business Enquires"
                            const body = message_body

                            Email.send({
                                SecureToken : "47445aa6-2d5e-4a42-b173-6a52b799959f ",
                                To : to,
                                From : from,
                                Subject : subject,
                                Body : body
                            })
                            .then(
                            message => alert(message)
                            )
                        }
                    }
                }
            }
        }
    })


    user_name.addEventListener('blur', ()=>{
        ValidateName(user_name)
    })

    user_email.addEventListener('blur', ()=>{
        ValidateEmail(user_email)
    })

    user_phone.addEventListener('blur', ()=>{
        ValidatePhone(user_phone)
    })

    user_project.addEventListener('blur', ()=>{
        ValidateProject(user_project)
    })

    user_message.addEventListener('blur', ()=>{
        ValidateMessage(user_message)
    })


    //validate name
    function ValidateName(uname)
    { 
        var letters = /^[A-Za-z]+$/;
        if(uname.value.match(letters))
        {
            uname.classList.remove("error")
            return true;
        }
        else
        {
            // alert('Username must have alphabet characters only');
            uname.classList.add("error")
            uname.focus();
            return false;
        }
    }

    //validate email
    function ValidateEmail(uemail)
    {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(uemail.value.match(mailformat))
        {
            uemail.classList.remove("error")
            return true;
        }
        else
        {
            // alert("You have entered an invalid email address!");
            uemail.classList.add("error")
            uemail.focus()
            return false
        }
    }

    //validate Project
    function ValidateProject(project)
    { 
        if(project.value != "")
        {
            project.classList.remove("error")
            return true;
        }
        else
        {
            project.classList.add("error")
            project.focus();
            return false;
        }
    }

    //validate Message
    function ValidateMessage(message)
    { 
        if(message.value != "")
        {
            message.classList.remove("error")
            return true;
        }
        else
        {
            message.classList.add("error")
            message.focus();
            return false;
        }
    }

    //validate Message
    function ValidatePhone(phone)
    { 
        var numformat = /^[0-9]+$/
        if(phone.value.match(numformat))
        {
            phone.classList.remove("error")
            return true;
        }
        else
        {
            phone.classList.add("error")
            phone.focus();
            return false;
        }
    }
})
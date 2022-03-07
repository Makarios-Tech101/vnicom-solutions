window.addEventListener('load', ()=>{
    document.getElementById('form').addEventListener('submit', (e)=>{
        e.preventDefault()
        alert("Hello")
        // const to = "info@vnicom.com"
        // const from = document.getElementById('email').value
        // const subject = "Business"
        // const body = document.getElementById('message').value

        // Email.send({
        //     SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
        //     To : to,
        //     From : from,
        //     Subject : subject,
        //     Body : body
        // })
        // .then(
        // message => alert(message)
        // );
    })
})
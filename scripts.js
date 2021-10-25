/* Add your JavaScript to this file */
window.onload= ()=>{
    let subButton = document.querySelector("section.newsletter form button.btn");
    let emBox = document.querySelector("section.newsletter form input[type=\"email\"]");
    emBox.setAttribute("placeholder", "Email address");
    const emAdded = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
    let messageSlot = document.querySelector("section.newsletter div.message");
    subButton.onclick = (event)=>{
        event.preventDefault();
        if (emBox.value.length != 0 && emAdded.test(emBox.value.toLowerCase())){
            messageSlot.innerHTML = `Thank you! Your email address ${emBox.value} has been added to our mailing list!`;
        }
        else{
            messageSlot.innerHTML = "Please enter a valid email address."
        }
    }
}

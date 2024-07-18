const form=document.querySelector("form");
const name=document.getElementById("name");
const phone=document.getElementById("phone");
const email=document.getElementById("email");
const subject= document.getElementById("subject");
const message=document.getElementById("message");

function sendEmail()
{
    const bodyMessage=`Name : ${name.value} Email: ${email.value} Phone No : ${phone.value}  Subject: ${subject.value}  Message : ${message.value}`



    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "roshnisingh14092003@gmail.com",
        Password : "900C68878FEBB540C6D521CBC58379D4F541",
        To : 'roshnisingh14092003@gmail.com',
        From : "roshnisingh14092003@gmail.com",
        Subject : subject.value,
        Body : bodyMessage,
    }).then(
      message => {
        // Check the status of the message object
        if (message && message === "OK") {
            Swal.fire({
                title: "Email Sent!",
                text: "Your email has been sent successfully.",
                icon: "success"
            });
        } 
        else
        {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        }
      }
    );
}
  

function Checkinput()
{
  const Items=document.querySelectorAll(".item");

  for(let item of Items)
  {
    if(item.value == "")
    {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    item.addEventListener("keyup", ()=>{
      if(item.value !== " ")
      {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      }
      else{
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    })
  }

  
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Call the function to check inputs
  Checkinput();

  // Check if any input field has the "error" class
  if (!name.classList.contains("error") && 
      !phone.classList.contains("error") && 
      !email.classList.contains("error") && 
      !subject.classList.contains("error") && 
      !message.classList.contains("error")) {
        sendEmail() 
     
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>'
    });

  }

  
//   setTimeout(() => {
//     location.reload();
// }, 2000);  // Refresh after 2 seconds (adjust as needed)
});

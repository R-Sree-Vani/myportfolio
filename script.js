function validate()
{
    let name=document.querySelector(".name");
    let email=document.querySelector(".email");
    let message=document.querySelector(".message");
    let sendbtn=document.querySelector(".send-btn");

    sendbtn.addEventListener("click",(e)=>
    {
        e.preventDefault();
        if (name.value == "" || email.value == "" || message.value == "")
        {
            emptyerror();
        }
        else
        {
            SendMail ();
            success();
            document.querySelector(".contact-form").reset();
        }
    });
}
validate();

function SendMail(){
    var params ={
        from_name: document.getElementById("fullname").value,
        email_id: document.getElementById("email_id").value,
        message:document.getElementById("message").value
    }
    emailjs.send("service_6m80ab8","template_9avo91r",params);
}

function emptyerror()
{
    swal({
        title: "Sorry",
        text: "Fields cannot be empty!",
        icon: "error",
      });
}

function success()
{
    swal({
        title: "Email sent successfully",
        text: "We'll try to reply as soon as possible",
        icon: "success",
      });
}
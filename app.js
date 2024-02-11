const sections=document.querySelectorAll('.section');
const secBtns=document.querySelectorAll('.controlls');
const secBtn=document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    for(let i = 0;i<secBtn.length;i++){
        secBtn[i].addEventListener('click',function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className=currentBtn[0].className.replace('active-btn','');
            this.className += ' active-btn';
        })

    }

    allSections.addEventListener('click',(e)=>{
        const id = e.target.dataset.id;
        if(id){
            secBtns.forEach((btn)=>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}
PageTransitions();

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
        email_id: document.getElementById("email_id"),
        message:document.getElementById("message").value
    }
    emailjs.send("service_6m80ab8","template_9avo91r",params);
}

function emptyerror()
{
    swal({
        title: "Sorry",
        text: "Fields cannot be empty",
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
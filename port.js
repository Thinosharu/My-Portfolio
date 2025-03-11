/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["Designer","Programmer","Developer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

const form = document.querySelector("#contactForm"); 
const fullName = document.querySelector("#name"); 
const email = document.querySelector("#email"); 
const mess = document.querySelector("#message"); 

function sendEmail() {
  if (fullName.value.trim() === "" || email.value.trim() === "" || mess.value.trim() === "") {
    alert("Please fill in all fields.");
    return;
  }

  const bodyMessage = `
    Full Name: ${fullName.value} <br>
    Email: ${email.value} <br>
    Message: ${mess.value}
  `;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "saruthinojan@gmail.com",
    Password: "E1B50165E93170EAA0C7E12A4A104A704559",
    SecureToken: "your-secure-token", // Replace with your generated token
    To: "saruthinojan@gmail.com",
    From: "saruthinojan@gmail.com",
    Subject: mess.value,
    Body: bodyMessage
  }).then(
    message => alert(message)
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});

fetch("your-backend-url", {
  method: "POST",
  body: JSON.stringify({ name: fullName.value, email: email.value, message: mess.value }),
  headers: { "Content-Type": "application/json" }
})

connection.query("INSERT INTO contact (uuid_column) VALUES (?)", [uuid], (error, results) => {
  if (error) throw error;
  console.log("UUID inserted: ", results);
});
function validateUUID(uuid) {
  const regex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  return regex.test(uuid);
}

if (validateUUID(inputUUID)) {
  // Send to backend
} else {
  alert("Invalid UUID format");
}


function validateTextarea() {
  let textarea = document.getElementById("message");
  let errorText = document.querySelector(".error-txt");

  if (textarea.value.trim() === "") {
      errorText.style.display = "block"; // Show error
  } else {
      errorText.style.display = "none"; // Hide error
  }
}

// Hide error when user starts typing
document.getElementById("message").addEventListener("input", function() {
  document.querySelector(".error-txt").style.display = "none";
});
window.addEventListener('scroll', scrollActive)
function showDocuments() {
  let indexNumber = document.getElementById("indexInput").value;
  let documentLinks = document.getElementById("documentLinks");
  
  if (indexNumber) {
      documentLinks.classList.remove("hidden");

      document.getElementById("viewALResultLink").href = `https://example.com/al-results?index=${indexNumber}`;
      document.getElementById("viewOLResultLink").href = `https://example.com/ol-results?index=${indexNumber}`;
      document.getElementById("viewBirthCertificateLink").href = `https://example.com/birth-certificate?index=${indexNumber}`;

      document.getElementById("alResults").classList.remove("hidden");
      document.getElementById("olResults").classList.remove("hidden");
      document.getElementById("birthCertificate").classList.remove("hidden");
  } else {
      documentLinks.classList.add("hidden");
  }
}
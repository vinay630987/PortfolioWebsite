const navbar = document.querySelector(".navbar");

const navbarOffsetTop = navbar.offsetTop;

const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");

const progress = document.querySelector(".progress-bars-wrapper");

const progressBarPercents = [97, 89, 85, 80, 80, 70, 60];

window.addEventListener("scroll", () => {
  mainFn();
});

const mainFn = () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      navbarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove("change");
      });
      navbarLinks[i].classList.add("change");
    }
  });

  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    document.querySelectorAll(".progress-percent").forEach((el, i) => {
      el.style.width = `${progressBarPercents[i]}%`;
      el.previousElementSibling.firstElementChild.textContent =
        progressBarPercents[i];
    });
  }
};
mainFn();

// window.addEventListener("resize", () => {
//   window.location.reload();
// });

const form = document.querySelector("form");

const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value} <br> Email: ${email.value}<br> Phone No: ${phone.value}<br> Message: ${mess.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "vinay.kopperakumar@gmail.com",
    Password: "2DFC696BD0BEB650DFB1818BFE7D1529B252",
    To: "vinay.kopperakumar@gmail.com",
    From: "vinay.kopperakumar@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      swal({
        title: "Success!",
        text: "Message sent successfully",
        icon: "success",
      });

      fullName.value = "";
      email.value = "";
      phone.value = "";
      subject.value = "";
      mess.value = "";
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});

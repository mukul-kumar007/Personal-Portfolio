
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxp_6lsSKXPR3daYbi6dQnUc7qE-LQSV5Ehb4lzN64HgTyhw7oBIC1WdXeSVSje0lOH/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
      document.getElementById('name').value = "";
      document.getElementById('email').value = "";
      document.getElementById('phone').value = "";
      document.getElementById('subject').value = "";
      document.getElementById('message').value = "";
      alert("Thanks for contacting me. I will get back to you soon..")
  })


let menuIcon = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

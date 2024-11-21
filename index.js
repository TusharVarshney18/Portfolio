const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
   menu.classList.toggle("bx-x");
   navbar.classList.toggle("active");
};

window.onscroll = () => {
   menu.classList.remove("bx-x");
   navbar.classList.remove("active");
};

var typed = new Typed(".multiple-text", {
   strings: ["Front-end Developer", "Back-end Developer."],
   typeSpeed: 50,
   backSpeed: 80,
   backDelay: 1200,
   loop: true,
});

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
   e.preventDefault();

   const formdata = {
      fullName: form.fullName.value,
      email: form.email.value,
      phone: form.phone.value,
      subject: form.subject.value,
      message: form.message.value,
   };
   try {
      const response = await fetch("http://localhost:5000/api/contact", {
         method: "POST",
         headers: {
            "Content-type": "application/json",
         },
         body: JSON.stringify(formdata),
      });

      alert("Your message has been Submit Successfully");

      const result = await response.json();
      form.reset();

      console.log(formdata);
   } catch (error) {
      alert("Failed to send message. Please try again later.");
   }
});

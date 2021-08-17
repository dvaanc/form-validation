const form = (function() {
  const form = document.querySelector("#form");
  const email = document.querySelector("#email");
  const country = document.querySelector("#country");
  const zipCode = document.querySelector("#zip-code");
  const password = document.querySelector("#password");
  const confirmPassword = document.querySelector("#confirm-password");
  const submit = document.querySelector("#submit");
  

  form.addEventListener("onsubmit", (e) => {
    e.preventDefault();
  })

  email.addEventListener("oninput", (e) => {
    const emailError = document.querySelector("#email-error");
    const reEmail = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
      if(reEmail.test(e)) emailError.classList.remove("show");
      else emailError.classList.add("show");

    e.preventDefault();
  })

})();
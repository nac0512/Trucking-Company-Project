class FormValidation {
    constructor() {
        document.querySelector("button[type='submit']").addEventListener("click", (e)=>this.validate(e));
    }

    validate(e) {
        e.preventDefault();
        let formType = e.target.parentNode.getAttribute("id");

        let check = "true";
        let validEmail = /\S+@\S+\.\S+/

        let fullName = document.querySelector("#name").value;
        let phone = document.querySelector("#phone").value;
        let email = validEmail.test(document.querySelector("#email").value);
        let details = document.querySelector("#details").value;

        if(fullName == "" || isNaN(phone) || phone.length != 10 || email == false || details == "") {
            check = "false";
        }

        if(check == "true") {

            if(formType == "quoteForm") {
                e.target.parentNode.innerHTML = 
                `<h3>We've recieved your submission</h3>
                <p>We appreciate your business. We are working on your request and will get back to you within 48 business hours.</p>`;
            }
            else if (formTyype == "contactForm") {
                e.target.parentNode.innerHTML = 
                `<h3>Thank you!</h3>
                <p>Your message has been sent successfully. Please allow up to 48 business hours for someone to reach out to you. Feel free to reach out with any questions or concerns.</p>`;
            }

        }
        else {
            if(fullName == "") {
                if(!document.querySelector("#name").classList.contains("error")) {
                    document.querySelector("#name").setAttribute("class", "error");
                    let nameError = document.createElement("label");
                    nameError.setAttribute("id", "nameError");
                    nameError.setAttribute("class", "errorLabel");
                    nameError.setAttribute("aria-live", "polite");
                    nameError.innerHTML = "&#9656 Please enter your full name.";
                    document.querySelector("#name").after(nameError);
                }
            }
            else {
                if(document.querySelector("#name").classList.contains("error")) {
                    document.querySelector("#name").classList.remove("error");
                    document.querySelector("#nameError").remove();
                }
            }

            if(isNaN(phone) || phone.length != 10) {
                if(!document.querySelector("#phone").classList.contains("error")) {
                    document.querySelector("#phone").setAttribute("class", "error");
                    let phoneError = document.createElement("label");
                    phoneError.setAttribute("id", "phoneError");
                    phoneError.setAttribute("class", "errorLabel");
                    phoneError.setAttribute("aria-live", "polite");
                    phoneError.innerHTML = "&#9656 Please enter a phone number with no dashes, including area code.";
                    document.querySelector("#phone").after(phoneError);
                }
            }
            else {
                if(document.querySelector("#phone").classList.contains("error")) {
                    document.querySelector("#phone").classList.remove("error");
                    document.querySelector("#phoneError").remove();
                }
            }

            if(email == false) {
                if(!document.querySelector("#email").classList.contains("error")) {
                    document.querySelector("#email").setAttribute("class", "error");
                    let emailError = document.createElement("label");
                    emailError.setAttribute("id", "emailError");
                    emailError.setAttribute("class", "errorLabel");
                    emailError.setAttribute("aria-live", "polite");
                    emailError.innerHTML = "&#9656 Please enter a valid email address.";
                    document.querySelector("#email").after(emailError);
                }
            }
            else {
                if(document.querySelector("#email").classList.contains("error")) {
                    document.querySelector("#email").classList.remove("error");
                    document.querySelector("#emailError").remove();
                }
            }

            if(details == "") {
                if(!document.querySelector("#details").classList.contains("error")) {
                    document.querySelector("#details").setAttribute("class", "error");
                    let detailsError = document.createElement("label");
                    detailsError.setAttribute("id", "detailsError");
                    detailsError.setAttribute("class", "errorLabel");
                    detailsError.setAttribute("aria-live", "polite");
                    detailsError.innerHTML = "&#9656 Don't forget to let us know what you need!";
                    document.querySelector("#details").after(detailsError);
                }
            }
            else {
                if(document.querySelector("#details").classList.contains("error")) {
                    document.querySelector("#details").classList.remove("error");
                    document.querySelector("#detailsError").remove();
                }
            }

            document.querySelectorAll("input, textarea").forEach(e => {
                e.addEventListener("blur", function() {
                    if(e.classList.contains("error")) {
                        e.classList.remove("error");
                        e.nextSibling.remove();
                    }
                });
            });
        }
    }
}
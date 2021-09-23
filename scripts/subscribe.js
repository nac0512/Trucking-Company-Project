class Subscribe {
    constructor() {
        document.querySelector("#subscribeBtn").addEventListener("click", (e)=>this.thankYouMessage(e));
    }

    thankYouMessage(e) {
       e.preventDefault();
       let validEmail = /\S+@\S+\.\S+/
       let email = validEmail.test(document.querySelector("#subscribe").value);

       if(email == true) {
        document.querySelector("#subscribe").remove();
        document.querySelector("#subscribeBtn").remove();
        document.querySelector("#subscribePar").remove();

        let thankYou = document.createElement("p");
        thankYou.innerHTML = "Thank you for subscribing to our newsletter!";
        thankYou.setAttribute("id", "thankYouMessage");
        document.querySelector("#subscribeHeader").after(thankYou);
       }
       else {
           if(!document.querySelector("#emailError")) {
               let emailError = document.createElement("label");
                emailError.setAttribute("id", "emailError");
                emailError.setAttribute("class", "errorLabel");
                emailError.setAttribute("aria-live", "polite");
                emailError.innerHTML = "Please enter a valid email address.";
                document.querySelector("#subscribeBtn").after(emailError);
            }
        }

        if (document.querySelector("#subscribeBtn")) {
            document.querySelector("#subscribe").addEventListener("blur", function() {
                if (document.querySelector("#emailError")) {
                    document.querySelector("#emailError").remove();
                }
            });
        }
        else {
            if (document.querySelector("#emailError")) {
                document.querySelector("#emailError").remove();
            }
        }
    }
}
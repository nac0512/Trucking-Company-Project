class Subscribe {
    constructor() {
        document.querySelector(".subscribeSection button").addEventListener("click", (e)=>this.thankYouMessage(e));
    }

    thankYouMessage(e) {
       e.preventDefault();
       let validEmail = /\S+@\S+\.\S+/
       let email = validEmail.test(document.querySelector(".subscribeSection input").value);

       if(email == true) {
        document.querySelector(".subscribeSection input").remove();
        document.querySelector(".subscribeSection button").remove();
        document.querySelector(".subscribeSection p").remove();

        let thankYou = document.createElement("p");
        thankYou.innerHTML = "Thank you for subscribing to our newsletter!";
        thankYou.setAttribute("id", "thankYouMessage");
        document.querySelector(".subscribeSection h3").after(thankYou);
       }
       else {
           if(!document.querySelector("#emailError")) {
               let emailError = document.createElement("label");
                emailError.setAttribute("id", "emailError");
                emailError.setAttribute("class", "errorLabel");
                emailError.setAttribute("aria-live", "polite");
                emailError.innerHTML = "Please enter a valid email address.";
                document.querySelector(".subscribeSection button").after(emailError);
            }
        }

        if (document.querySelector(".subscribeSection button")) {
            document.querySelector(".subscribeSection input").addEventListener("blur", function() {
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
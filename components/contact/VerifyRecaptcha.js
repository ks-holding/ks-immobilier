import SendForm from "./SendForm.js";

const VerifyRecaptcha = formulaire => {
  //console.log("verifyRecaptcha");
  grecaptcha.ready(function () {
    grecaptcha.execute("6LcZbhsaAAAAAG2wQwT7cvfJ7xjl4paUz2KQgFiE", { action: "submit" }).then(function (token) {
      // Add your logic to submit to your backend server here.
      //console.log(token);
      const data = new FormData();
      data.append("token", token);

      fetch("index.php?page=verifyRecaptcha", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      })
        .then(resp => {
          return resp.text();
        })
        .then(data => {
          // console.log(data);
          // console.log(typeof data);

          if (data == "true") {
            //   console.log("sending");

            SendForm(formulaire);
          } else {
            //console.log("false");
          }
        })
        .catch(err => console.error(err));
    });
  });
};

export default VerifyRecaptcha;

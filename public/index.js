// const dotenv  = require("dotenv");
const formInput = document.querySelector(".enter");
const form = document.getElementById("form");
const errorDiv = document.querySelector(".error");
const linkWrapper = document.querySelector(".link-wrapper");
const shortenedLink = document.querySelector(".short-link");
const title = document.querySelector(".hero-content");
const textButton = document.querySelector(".text-btn");

// const copyLink = document.querySelector(".short-link2")

const handleSubmit = async () => {
  //selecting the id = URL inthe input form
  let url = document.querySelector("#url");
  url = url.value;

  const fetchEndpoint =
    `https://urlshortener-6fvo.onrender.com/link` || process.env.PORT + "/link";
  console.log("The new URL is: ", fetchEndpoint);

  // "https://urlshortener-6fvo.onrender.com/index_url.html"

  const response = await fetch(fetchEndpoint, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({url}),
  }).then((res) => res.json());
  //   console.log(response);
  if (response.type == "failure") {
    textButton.style.display = "none";
    formInput.style.border = "2px solid red";
    formInput.value = `${response.message}, please try another one!`;
    formInput.style.border = "2px solid red";
    title.innerHTML = "<h1>Invalid Link...</h1>";
    title.style.color = "red";
  }
  if (response.type == "success") {
    // copyLink.style.display = "none"
    textButton.style.display = "none";
    formInput.style.opacity = 1;
    formInput.style.scale = 1;
    formInput.style.display = "flex";
    formInput.value = response.message;
    formInput.style.color = "#FF0000";
    title.style.color = "#00000";
    title.style.marginBottom = "30px";
    title.innerHTML =
      "<h1>Here is your Shortened Link...</h1> <p><h3>Copy the shortened link and share it in messages, texts, posts, websites and other locations.</h3></p>";
    // console.log("This is the error: ", formInput.value);
  }
};
//Clear input field and error message
const clearFields = () => {
  let url = document.getElementById("url");
  url.value = "";
  url.addEventListener("focus", () => {
    errorDiv.textContent = "";
  });
  // form.style.display = "none";
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  handleSubmit();
  clearFields();
});

// formInput.addEventListener("click", (event) => {
//   event.preventDefault();
//   formInput.focus();
//   formInput.select();
//   formInput.setSelectionRange(0, 99999);
//   // Copy the text inside the text field
//   navigator.clipboard.writeText(formInput.value);
//   alert("Copied the text: " + formInput.value);
// });

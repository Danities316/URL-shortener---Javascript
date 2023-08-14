// const dotenv  = require("dotenv");
const formInput = document.querySelector(".enter");
const form = document.getElementById("form");
const errorDiv = document.querySelector(".error");
const linkWrapper = document.querySelector(".link-wrapper");
const shortenedLink = document.querySelector(".short-link");
const title = document.querySelector(".titleText");

// const copyLink = document.querySelector(".short-link2")

const handleSubmit = async () => {
  //selecting the id = URL inthe input form
  let url = document.querySelector("#url");
  url = url.value;

  const fetchEndpoint =
    `http://localhost:7777/link` || process.env.PORT + "/link";

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
    formInput.style.border = "2px solid red";
    errorDiv.textContent = `${response.message}, please try another one!`;
    errorDiv.style.display = "inline-block;";
    errorDiv.style.border = "2px solid red";
    errorDiv.style.backgroundColor = "blue";
    errorDiv.style.fontWeight = "600";
    errorDiv.style.padding = "5px";
    errorDiv.style.marginLeft = "200px";
  }
  if (response.type == "success") {
    // copyLink.style.display = "none"
    formInput.style.opacity = 1;
    formInput.style.scale = 1;
    formInput.style.display = "flex";
    formInput.value = response.message;
    formInput.style.color = "#FF0000";
    title.style.color = "#dc3545";
    title.innerHTML = "click to copy your shortened link";
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
shortenedLink.addEventListener("click", (event) => {
  event.preventDefault();
  shortenedLink.focus();
  shortenedLink.select();
  shortenedLink.setSelectionRange(0, 99999);
  // Copy the text inside the text field
  navigator.clipboard.writeText(shortenedLink.value);
  alert("Copied the text: " + shortenedLink.value);
});

// const dotenv  = require("dotenv");
const formInput = document.querySelector("input");
const form = document.getElementById("form");
const errorDiv = document.querySelector(".error");
const linkWrapper = document.querySelector(".link-wrapper")
const shortenedLink = document.querySelector(".short-link")


// const copyLink = document.querySelector(".short-link2")

const handleSubmit = async () => {
    //selecting the id = URL inthe input form
    let url = document.querySelector("#url")
    url = url.value
  


 const fetchEndpoint = `http://localhost:10000/link` || process.env.PORT + '/link'

    // "https://urlshortener-6fvo.onrender.com/index_url.html"

    const response = await fetch(fetchEndpoint, {
        headers: {
            "Content-Type": "application/json",
        },
        mode: 'no-cors',
        method: "POST",
        body: JSON.stringify({ url })
    }).then((res) => {
        return res.json()
    }).catch(rejected => {
        console.log(rejected);
    });
    console.log(response.type)
    if(response.type == "failure"){
        formInput.style.border = "2px solid red";
        errorDiv.textContent = `${response.message}, please try another one!`
    }
    if(response.type == "success"){
        // copyLink.style.display = "none"
        linkWrapper.style.opacity = 1;
        linkWrapper.style.scale =1;
        linkWrapper.style.display = "flex";
        shortenedLink.value = response.message;
    }
};
//Clear input field and error message
const clearFields = () => {
    let url = document.querySelector("#URL");
    url.value = "";
    url.addEventListener('focus', () =>{
        errorDiv.textContent = "";
    })
    form.style.display = 'none';
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    handleSubmit();
    clearFields();
});
shortenedLink.addEventListener("click", (event) =>{
    event.preventDefault()
    shortenedLink.focus();
    shortenedLink.select()
    shortenedLink.setSelectionRange(0, 99999);
    // Copy the text inside the text field
    navigator.clipboard.writeText(shortenedLink.value);
    alert("Copied the text: " + shortenedLink.value);
})

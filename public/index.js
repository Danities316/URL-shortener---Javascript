const formInput = document.querySelector("input");
const form = document.getElementById("form");
const errorDiv = document.querySelector(".error");
const linkWrapper = document.querySelector(".link-wrapper")
const shortenedLink = document.querySelector(".short-link")
// const copyLink = document.querySelector(".short-link2")

const handleSubmit = async () => {
    let url = document.querySelector("#URL")
    url = url.value
    const response = await fetch("http://localhost:7777/link", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ url })
    }).then((res) => res.json());

    if(response.type == "failure"){
        formInput.style.border = "2px solid res";
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
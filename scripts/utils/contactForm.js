function displayModal() {
    const modal = document.getElementById("contact_modal");
    const closeModalBtn = document.querySelector(".closeBtn");
    modal.style.display = "block";
    setTimeout(() => closeModalBtn.focus(), 1);
    window.addEventListener('keydown', (event) => {
        // Close the modal with escape key
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });
}

function closeContactModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

// Dom Elements
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const modalBody = document.querySelector(".modal");


// eventListener
firstName.addEventListener('input', isFirstNameValid);
lastName.addEventListener('input', isLastNameValid);
email.addEventListener('input', isEmailValid);


// Display or remove error message
function showError(element) {
    element.setAttribute("data-error-visible", true);
}

function hideError(element) {
    element.setAttribute("data-error-visible", false);
}


// Verifications functions
function isFirstNameValid() {
    const parent = firstName.closest("div");
    showError(parent);

    //Regex is Allowing Accent and also hyphen between names but not before and after names and also deny double hyphen
    if (firstName.value.trim().length < 2 || firstName.value.trim() === "" || !/^[A-zÀ-ÿ]+(?:\s|-?[A-zÀ-ÿ]+)+$/.test(firstName.value)) {
        return false;
    }

    hideError(parent);
    return true;
}

function isLastNameValid () {
    const parent = lastName.closest('div');
    showError(parent);

    //same as above
    if (lastName.value.trim().length < 2 || lastName.value.trim() === "" || !/^[A-zÀ-ÿ]+(?:\s|-?[A-zÀ-ÿ]+)+$/.test(lastName.value)) {
        return false;
    } 

    hideError(parent);
    return true;
}

function isEmailValid () {
    const parent = email.closest('div');
    showError(parent);

    //verify that only letter, number and (underscore or hyphen) are written before the @ and same for the hosting name after the @ + verify that only 2-5 letter only after the dot
    if (!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email.value)) {
        return false;
    }

    hideError(parent);
    return true;
}

function validate () {
    console.log("Email : " + email.value + " Prénom : " + firstName.value + " Nom : " + lastName.value);
    //clean the modal and add the text validation
    document.querySelector('.modal').innerHTML = " ";
    modalBody.style.height = "800px";
    modalBody.style.display = "flex";
    modalBody.style.flexDirection = "column";
    modalBody.style.alignItems = "center";
    modalBody.style.justifyContent = "flex-end";
    contentValidate();
}

function contentValidate () {
    //add the content to the validation modal
    const text = document.createElement("P");
    text.innerText = 'Message bien envoyé !';              
    document.querySelector('.modal').appendChild(text);
    text.style.fontWeight = "300";
    text.style.fontSize = "30px";
    text.style.textAlign = "center";
    const btn = document.createElement("BUTTON");
    btn.innerHTML = "Fermer";
    document.querySelector('.modal').appendChild(btn);
    btn.className = "contact_button";
    btn.style.marginTop = "320px";
    //function for the close btn
    setTimeout(() => btn.focus(), 1);
    btn.onclick = function() {
        modalBody.style.display = "none";
    };
}
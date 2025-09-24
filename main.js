// contact us form funcrtionality
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const emailAddress = document.querySelector("#email");
const queries = document.querySelectorAll(".query");
const msgBox = document.querySelector("#user-message");
const consentBox = document.querySelector("#consent-checkbox");


const body = document.querySelector("body");
const firstNameArea = document.querySelector(".first-name-area");
const lastNameArea = document.querySelector(".last-name-area");
const emailArea = document.querySelector(".email-area");
const queryArea = document.querySelector(".query-area");
const msgArea = document.querySelector(".msg-area");
const consentArea = document.querySelector(".consent-area");

const submitBtn = document.querySelector(".submit-btn");
const genricErrorMsg = "This field is required";
const emailErrorMsg = "Please enter a valid email address";
const emailValidationErrorMSG = '@ is missing. Please enter a valid email address with @';
const queryErrorMsg = "Please select a query type";
const consentErrorMsg = "To submit this form, please consent to being contacted";

function renderErrorMsg(errorMsg, parentName){
    // remove any old error
    const renderedErrorMsg = parentName.querySelector(".error-msg");
    if (renderedErrorMsg) {
        renderedErrorMsg.remove();
    }
    // creates new error msg
    const element = document.createElement('p');
    element.textContent = errorMsg;
    element.classList.add("error-msg");
    parentName.appendChild(element);
}
function removeErrorMsg(parentName){
    // remove any old error
    const renderedErrorMsg = parentName.querySelector(".error-msg");
    if (renderedErrorMsg) {
        renderedErrorMsg.remove();
    }
}


function firstNameValidation(){
    removeErrorMsg(firstNameArea);
    if(firstName.value ===""){
        renderErrorMsg(genricErrorMsg, firstNameArea);
        console.log(genricErrorMsg);
        return false;
    }
    return true;
}

function lastNameValidation(){
    removeErrorMsg(lastNameArea);
     if(lastName.value ===""){
        renderErrorMsg(genricErrorMsg, lastNameArea);
        console.log(genricErrorMsg);
        return false;
    }
    return true;
}


function emailValidation() {
    removeErrorMsg(emailArea);
    if (!emailAddress.value) {
        renderErrorMsg(emailErrorMsg,emailArea);
        console.log(emailErrorMsg);
        return false;
    }
    if (!emailAddress.value.includes("@")) {
        renderErrorMsg(emailValidationErrorMSG, emailArea);
        console.log("@ is missing. Please enter a valid email address with @");
        return false;
    }
    return true;
}

function queryValidation() {
    removeErrorMsg(queryArea);
    let isAnySelected = false;

    queries.forEach((node) => {
        if (node.checked) {
            isAnySelected = true;
        }
    });

    if (!isAnySelected) {
        renderErrorMsg(queryErrorMsg, queryArea);
        console.log(queryErrorMsg);
        return false;
    }
    return true;
}

function messageBoxValidation(){
    removeErrorMsg(msgArea);
    if(!msgBox.value){
        renderErrorMsg(genricErrorMsg,msgArea);
        console.log(genricErrorMsg);
        return false;
    }
    return true;
}

function consentValidation() {
    removeErrorMsg(consentArea);

    if (!consentBox.checked) {
        renderErrorMsg(consentErrorMsg, consentArea);
        console.log(consentErrorMsg);
        return false;
    }
    return true;
}



submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const successMsgCard = document.querySelector(".sent-msg-card");
    if(successMsgCard){
        successMsgCard.remove();
    }


    

    const firstNameOk = firstNameValidation();
    const lastNameOk = lastNameValidation();
    const emailOk = emailValidation();
    const queryOk = queryValidation();
    const msgOk = messageBoxValidation();
    const consentOk = consentValidation();

    const isValid = firstNameOk && lastNameOk && emailOk && queryOk && msgOk && consentOk;

    console.log("Form valid?", isValid);

    if (isValid) {
        const successMsgCardElement = document.createElement('div');
        successMsgCardElement.classList.add('sent-msg-card');
        successMsgCardElement.innerHTML = `<div class="msg-sent-wrapper">
      <img src="./assets/images/icon-success-check.svg" alt="message sent success tick mark icon">
      <p>Message Sent!</p>
    </div>
    <p>Thanks for completing the form. We'll be in touch soon!</p>`;
        body.appendChild(successMsgCardElement);
    }
});
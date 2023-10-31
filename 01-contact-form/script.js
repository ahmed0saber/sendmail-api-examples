const contactForm = document.querySelector(".contact-form")
const fullNameInput = document.querySelector("#fullName")
const emailAddressInput = document.querySelector("#emailAddress")
const messageInput = document.querySelector("#message")

contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const emailMessage = getEmailMessage({
        fullName: fullNameInput.value,
        emailAddress: emailAddressInput.value,
        message: messageInput.value,
    })

    fetch("https://sendmail-api-docs.vercel.app/api/send", {
        method: "POST",
        body: JSON.stringify({
            to: "ahmed0saber33@gmail.com", // replace it with your email address (the email you want to receive messages at)
            subject: "Message From Contact Form",
            message: emailMessage,
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            fullNameInput.value = ""
            emailAddressInput.value = ""
            messageInput.value = ""
        })
})

const getEmailMessage = ({ fullName, emailAddress, message } = {}) => {
    return `
        <p>You have received a new message from your contact form website:</p>
        <div style="background-color: #101010; color: #fbfbfb; padding: 12px">
            <p style="margin: 0;">fullName: ${fullName}</p>
            <p style="margin: 12px 0;">emailAddress: ${emailAddress}</p>
            <p style="margin: 0;">message: ${message}</p>
        </div>
    `
}

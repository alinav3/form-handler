function capture() {
  event.preventDefault()
  var custEmail = document.custInfo.email.value
  console.log("Thanks for signing up for our newsletter," + " " + custEmail)
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbzy2g9hjkQrLKpn_UvCvgvirXNbdLJiGIOM7iv07poNmr6WqpSaW_lDFm3kSWs1GvWPHA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e =>{
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("thanks"))
  .then(() => { window.location.reload();})
  .catch(error => console.error('Error', error.message))
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbza4pNrdWt-EOS0CA-UHCF3k0HIK6o7L8bV0VGjkUhJo3XBtjV2v2AzPZ34SX62tzyjkQ/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully!";
            setTimeout(function(){
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});
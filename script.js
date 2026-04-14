// Fill year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// EmailJS: initialize
// Replace PUBLIC_KEY below after creating an account.
(function(){
  // emailjs.init('PUBLIC_KEY'); // will be called below after user replaces placeholder
})();

// Contact form handler (uses EmailJS)
const form = document.getElementById('contact-form');
const alertBox = document.getElementById('form-alert');

form.addEventListener('submit', function(e){
  e.preventDefault();
  const sendBtn = document.getElementById('send-btn');
  sendBtn.disabled = true;
  sendBtn.textContent = 'Sending...';

  // Replace SERVICE_ID, TEMPLATE_ID and PUBLIC_KEY with your EmailJS values
  const SERVICE_ID = 'service_0qluliw';
  const TEMPLATE_ID = 'template_nnegs1v';
  const PUBLIC_KEY = 'w4dgwdyLqTO8KcCiS';

  // initialize emailjs if not initialized
  if (typeof emailjs === 'undefined') {
    alert('EmailJS not loaded. Check script include.');
    return;
  }

  emailjs.init(PUBLIC_KEY);

  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form)
    .then(function(response) {
      alertBox.innerHTML = '<div class="alert alert-success">Message sent — thanks! ✅</div>';
      form.reset();
    }, function(error) {
      console.error('FAILED...', error);
      alertBox.innerHTML = '<div class="alert alert-danger">Oops — failed to send. Check console and EmailJS settings.</div>';
    })
    .finally(() => {
      sendBtn.disabled = false;
      sendBtn.textContent = 'Send Message';
    });
});

document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('contact-form');
const alertBox = document.getElementById('form-alert');

form.addEventListener('submit', function(e){
  e.preventDefault();
  const sendBtn = document.getElementById('send-btn');
  sendBtn.disabled = true;
  sendBtn.textContent = 'Sending...';

  const SERVICE_ID = 'service_0qluliw';
  const TEMPLATE_ID = 'template_nnegs1v';
  const PUBLIC_KEY = 'w4dgwdyLqTO8KcCiS';

  emailjs.init(PUBLIC_KEY);

  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form)
    .then(() => {
      alertBox.innerHTML = '<div class="alert alert-success">Message sent successfully! ✅</div>';
      form.reset();
    })
    .catch((error) => {
      console.error(error);
      alertBox.innerHTML = '<div class="alert alert-danger">Failed to send message ❌</div>';
    })
    .finally(() => {
      sendBtn.disabled = false;
      sendBtn.textContent = 'Send Message';
    });
});

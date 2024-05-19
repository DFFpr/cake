let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick = () => {
    navbar.classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', function() {
    // الحصول على النموذج
    const contactForm = document.querySelector('form[name="Form"]');

    // دالة للتحقق من صحة النموذج
    function validateForm() {
        let name = document.getElementById('name');
        let email = document.getElementById('email');
        let message = document.getElementById('message');
        
        if (!name.value || !email.value || !message.value) {
            alert('Please fill out all fields.');
            return false;
        }
        
        if (!email.value.includes('@')) {
            alert('Please enter a valid email address.');
            return false;
        }
        
        alert('Form submitted successfully!');
        console.log('Name: ' + name.value);
        console.log('Email: ' + email.value);
        console.log('Message: ' + message.value);
        return true;
    }

    // استدعاء validateForm عند تقديم النموذج
    contactForm.onsubmit = validateForm;

});

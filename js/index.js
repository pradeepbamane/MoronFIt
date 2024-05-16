const container = document.querySelector('.content');
const boxes = document.querySelectorAll('.content .box');
const arrowRight = document.getElementById('arrow-right');
const arrowLeft = document.getElementById('arrow-left');

let currentIndex = 0;

// arrowRight.addEventListener('click', () => {
//     if (currentIndex < boxes.length - 3) {
//         currentIndex++;
//         container.style.transform = `translateX(-${currentIndex * 33.33}%)`;
//     }
// });

// arrowLeft.addEventListener('click', () => {
//     if (currentIndex > 0) {
//         currentIndex--;
//         container.style.transform = `translateX(-${currentIndex * 33.33}%)`;
//     }
// });

document.getElementById("sendMessageButton").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default button behavior

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var message = document.getElementById("message").value;

    // Send form data to server
    fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, mobile, message })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data.message); // Log success message
        // Provide feedback to the user (e.g., display a success message)
        alert('Message sent successfully!');
    })
    .catch(error => {
        console.error('There was a problem with the request:', error); // Log error message
        // Provide feedback to the user (e.g., display an error message)
        alert('Error sending message. Please try again later.');
    });

    // Reset the form
    document.getElementById("contactForm").reset();
});





const modal = document.getElementById('modal');
const certificateContent = document.getElementById('certificateContent');
const closeModal = document.querySelector('.close');

cardForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the values from the form inputs
    const studentName = studentNameInput.value.trim();
    const personalMessage = personalMessageInput.value.trim();
    const courseName = courseNameInput.value.trim() || "a course";
    const signature = "Phillip Bogopane";

    // Check if the student name is empty
    if (studentName === '') {
        alert('Please fill in all required fields.');
        return;
    }

    // Generate the certificate content
    certificateContent.innerHTML = `
        <h3>Certificate Of Achievement</h3>
        <p>This is to certify that </p>
        <strong>${studentName}</strong>
        <p>Has almost completed the</p>
        <strong>${courseName}</strong> 
        Showcasing the legendary perseverance and world-class bad-assery for never giving up🏆</p>
        <img src="logo.png" alt="logo.png">
        <p><strong></strong> ${personalMessage}</p>
        <p><strong>Signed by:</strong> ${signature}</p>
    `;

    // Display the modal window
    modal.style.display = 'block';

    // Clear the form inputs
    studentNameInput.value = '';
    personalMessageInput.value = '';
    courseNameInput.value = '';
});

closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
});

window.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

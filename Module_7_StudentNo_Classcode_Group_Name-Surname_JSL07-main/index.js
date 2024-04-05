document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.getElementById('certificateContent');
  const closeModal = document.querySelector('.close');

  cardForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const studentNameInput = document.getElementById('studentName');
    const personalMessageInput = document.getElementById('personalMessage');
    const courseNameInput = document.getElementById('courseName');

    const studentName = studentNameInput.value.trim();
    const personalMessage = personalMessageInput.value.trim();
    const courseName = courseNameInput.value.trim() || "a course";
    const signature = "Phillip Bogopane";

    if (studentName === '') {
      alert('Please fill in all required fields.');
      return;
    }

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

    modal.style.display = 'block';

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
});

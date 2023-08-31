document.addEventListener("DOMContentLoaded", function () {
  const openClubListButton = document.querySelector(".open-club-list");
  const clubList = document.querySelector(".club-list");
  const clubs = document.querySelectorAll(".club-item");
  const eventForm = document.querySelector(".event-form");
  const eventNameInput = document.getElementById("eventName");
  const collegeNameInput = document.getElementById("college");
  const eventDateInput = document.getElementById("eventDate");
  const selectedClubInput = document.getElementById("selectedClub");
  
  
  openClubListButton.addEventListener("click", function () {
    clubList.style.display = "block";
    eventForm.style.display = "none";
  });

  clubs.forEach(function (club) {
    club.addEventListener("click", function () {
      const selectedClub = club.getAttribute("data-club");
      selectedClubInput.value = selectedClub;
      eventForm.style.display = "block";
      eventNameInput.value = ""; // Clear previous input
      collegeNameInput.value = ""; // Clear previous input
      eventDateInput.value = ""; // Clear previous input
    });
  });
});
const eventForm = document.getElementById("eventForm");
  
  eventForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const club = document.getElementById("selectedClub").value;
    const college = document.getElementById("college").value;
    const eventName = document.getElementById("eventName").value;
    const eventDate = document.getElementById("eventDate").value;

    const eventData = {
      club: club,
      college: college,
      eventName: eventName,
      eventDate: eventDate
    };

    // Send the event data to the server
    sendDataToServer(eventData);
  });

  function sendDataToServer(data) {
    // Here, you would use a function to send a POST request to your backend.
    // You can use methods like fetch or Axios to send the data to a server route.
    // Replace 'your-backend-url' with the actual URL of your backend route for saving data.
    
    fetch('your-backend-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Data successfully sent:', data);
      // Perform any other actions or UI updates as needed
    })
    .catch(error => {
      console.error('Error sending data:', error);
      // Handle the error gracefully
    });
  }
  document.addEventListener("DOMContentLoaded", function () {
    const eventForm = document.getElementById("eventForm");
  
    eventForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const formData = new FormData(eventForm);
  
      fetch('store_event.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.text())
      .then(data => {
        console.log(data); // Log the server response
        // Handle success or error response as needed
      })
      .catch(error => {
        console.error('Error sending data:', error);
        // Handle the error gracefully
      });
    });
  
    // Other JavaScript code...
  });
  
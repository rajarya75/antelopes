document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission

  const fullName = document.getElementById("fullname").value;
  const phoneNumber = document.getElementById("phonenumber").value;
  const email = document.getElementById("email").value;
  const enquiryType = document.getElementById("enquiry").value;
  const message = document.getElementById("message").value;

  const data = {
    name: fullName,
    email: email,
    mobileCode: "+971",
    contactNumber: phoneNumber,
    message: message,
    typeOfEnquiry: enquiryType,
    from: "Enso Amber",
  };

  fetch("https://test.com/api/website/enquiry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      // On success, hide the form and show the success message
      document.getElementById("contactForm").style.display = "none";
      document.getElementById("successMessage").style.display = "block";
    })
    .catch((error) => {
      // Handle error - maybe show an error message
      console.error("Error:", error);
    });
});

// Download Brochure===================================================================
document
  .getElementById("brochureForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Gather form data
    const fullName = document.getElementById("fullName1").value;
    const phoneNumber = document.getElementById("phonenumber1").value;
    const email = document.getElementById("email1").value;
    const enquiryType = document.getElementById("enquiry1").value;
    const message = document.getElementById("message1").value;

    const data = {
      name: fullName,
      email: email,
      mobileCode: "+971",
      contactNumber: phoneNumber,
      message: message,
      typeOfEnquiry: enquiryType,
      from: "Enso Amber",
    };

    // Send data to API
    fetch("https://test.com/api/website/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          // Adjust based on your API response
          // Hide form and open thank you modal
          document.getElementById("brochureForm").style.display = "none";
          new bootstrap.Modal(document.getElementById("thankYouModal")).show();

          // Open PDF in new tab
          window.open("/assets/images/video/Enso_Amber_Brochure.pdf", "_blank");
        } else {
          alert("There was an issue with your submission. Please try again.");
        }
      })
      .catch((error) => console.error("Error:", error));
  });

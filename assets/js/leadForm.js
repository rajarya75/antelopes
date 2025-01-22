// Main Contact Form Submission
document
  .getElementById("contactForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const phoneNumber = document.getElementById("phonenumber").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const [firstName, ...lastNameArr] = fullname.split(" ");
    const lastName = lastNameArr.join(" ");

    const payload = {
      LeadDetails: [
        { Attribute: "Phone", Value: phoneNumber },
        { Attribute: "FirstName", Value: firstName },
        { Attribute: "LastName", Value: lastName || "" },
        { Attribute: "EmailAddress", Value: email },
      ],
      Opportunity: {
        OpportunityEventCode: 12000,
        Fields: [
          {
            SchemaName: "mx_Custom_1",
            Value: `${firstName} - Website Inquiry`,
          },
          { SchemaName: "mx_Custom_16", Value: "Merusri Antelopes" },
          { SchemaName: "mx_Custom_73", Value: "Web Leads" },
          { SchemaName: "mx_Custom_2", Value: "Not Attempted" },
        ],
      },
    };

    await handleSubmit(payload);
  });

// Modal Contact Form Submission
document
  .getElementById("contactForm1")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname1").value.trim();
    const phoneNumber = document.getElementById("phonenumber1").value.trim();
    const email = document.getElementById("email1").value.trim();
    const message = document.getElementById("message1").value.trim();

    const [firstName, ...lastNameArr] = fullname.split(" ");
    const lastName = lastNameArr.join(" ");

    const payload = {
      LeadDetails: [
        { Attribute: "Phone", Value: phoneNumber },
        { Attribute: "FirstName", Value: firstName },
        { Attribute: "LastName", Value: lastName || "" },
        { Attribute: "EmailAddress", Value: email },
      ],
      Opportunity: {
        OpportunityEventCode: 12000,
        Fields: [
          {
            SchemaName: "mx_Custom_1",
            Value: `${firstName} - Website Inquiry`,
          },
          { SchemaName: "mx_Custom_16", Value: "Merusri Antelopes" },
          { SchemaName: "mx_Custom_73", Value: "Web Leads" },
          { SchemaName: "mx_Custom_2", Value: "Not Attempted" },
        ],
      },
    };

    await handleSubmit(payload);
  });

async function handleSubmit(payload) {
  console.log("Payload being sent:", payload); // Debug payload

  try {
    const response = await fetch(
      "https://api-in21.leadsquared.com/v2/OpportunityManagement.svc/Capture?accessKey=u$r7b3a5c5c20947d02ad372f707c93a0b6&secretKey=8d135be8ffe8346e335fe50ef899a55c9618ce9b",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (response.ok) {
      const data = await response.json(); // Parse response data
      console.log("API Response:", data); // Log success
      // window.location.href = "/thank-you.html";
    } else {
      const errorData = await response.json();
      console.error("API Error Response:", errorData); // Log error response
      alert("Error: " + (errorData.Message || "Failed to submit the form"));
    }
  } catch (error) {
    console.error("Submission error:", error);
    alert("There was an error submitting the form. Please try again.");
  }
}

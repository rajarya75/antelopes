document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // API Configuration
    const API_CONFIG = {
      accessKey: "u$r7b3a5c5c20947d02ad372f707c93a0b6",
      secretKey: "8d135be8ffe8346e335fe50ef899a55c9618ce9b",
      baseURL:
        "https://api-in21.leadsquared.com/v2/OpportunityManagement.svc/Capture",
    };

    // Form Data Collection
    const formData = {
      fullname: document.getElementById("fullname").value.trim(),
      phonenumber: document.getElementById("phonenumber").value.trim(),
      email: document.getElementById("email").value.trim(),
      message:
        document.getElementById("message").value.trim() ||
        "No message provided",
    };

    // Parse Full Name into First and Last Name
    const [firstName, ...lastNameParts] = formData.fullname.split(" ");
    const lastName = lastNameParts.join(" ") || "Unknown";

    // Construct Payload
    const payload = {
      LeadDetails: [
        { Attribute: "Phone", Value: formData.phonenumber },
        { Attribute: "FirstName", Value: firstName },
        { Attribute: "LastName", Value: lastName },
        { Attribute: "EmailAddress", Value: formData.email },
        { Attribute: "mx_Custom_Message", Value: formData.message },
        { Attribute: "SearchBy", Value: "Phone" },
      ],
      Opportunity: {
        OpportunityEventCode: 12000,
        Fields: [
          {
            SchemaName: "mx_Custom_1",
            Value: `${firstName} - Website Inquiry`,
          },
          { SchemaName: "mx_Custom_3", Value: "Website" },
        ],
      },
    };

    try {
      // Send POST Request
      const response = await fetch(
        `${API_CONFIG.baseURL}?accessKey=${API_CONFIG.accessKey}&secretKey=${API_CONFIG.secretKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Submission successful:", result);
        window.location.href = "thank-you.html";
      } else {
        const error = await response.text();
        console.error("Error in submission:", error);
        alert("Failed to submit the form.");
      }
    } catch (err) {
      console.error("Network error:", err);
      alert("An error occurred while submitting the form.");
    }
  });
});

// Modal Lead Form ==============================================================================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm1");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // API Configuration
    const API_CONFIG = {
      accessKey: "u$r7b3a5c5c20947d02ad372f707c93a0b6",
      secretKey: "8d135be8ffe8346e335fe50ef899a55c9618ce9b",
      baseURL:
        "https://api-in21.leadsquared.com/v2/OpportunityManagement.svc/Capture",
    };

    // Form Data Collection
    const formData = {
      fullname: document.getElementById("fullname1").value.trim(),
      phonenumber: document.getElementById("phonenumber1").value.trim(),
      email: document.getElementById("email1").value.trim(),
      message:
        document.getElementById("message1").value.trim() ||
        "No message provided",
    };

    // Parse Full Name into First and Last Name
    const [firstName, ...lastNameParts] = formData.fullname.split(" ");
    const lastName = lastNameParts.join(" ") || "Unknown";

    // Construct Payload
    const payload = {
      LeadDetails: [
        { Attribute: "Phone", Value: formData.phonenumber },
        { Attribute: "FirstName", Value: firstName },
        { Attribute: "LastName", Value: lastName },
        { Attribute: "EmailAddress", Value: formData.email },
        { Attribute: "mx_Custom_Message", Value: formData.message },
        { Attribute: "SearchBy", Value: "Phone" },
      ],
      Opportunity: {
        OpportunityEventCode: 12000,
        Fields: [
          {
            SchemaName: "mx_Custom_1",
            Value: `${firstName} - Website Inquiry`,
          },
          { SchemaName: "mx_Custom_3", Value: "Website" },
        ],
      },
    };

    try {
      // Send POST Request
      const response = await fetch(
        `${API_CONFIG.baseURL}?accessKey=${API_CONFIG.accessKey}&secretKey=${API_CONFIG.secretKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Submission successful:", result);
        window.location.href = "thank-you.html";
      } else {
        const error = await response.text();
        console.error("Error in submission:", error);
        alert("Failed to submit the form.");
      }
    } catch (err) {
      console.error("Network error:", err);
      alert("An error occurred while submitting the form.");
    }
  });
});

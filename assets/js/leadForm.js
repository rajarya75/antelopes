document
  .getElementById("contactForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Collect form data
    const fullname = document.getElementById("fullname").value.trim();
    const phoneNumber = document.getElementById("phonenumber").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Split fullname into first and last names
    const [firstName, ...lastNameArr] = fullname.split(" ");
    const lastName = lastNameArr.join(" ");

    // API payload
    const payload = {
      LeadDetails: [
        { Attribute: "Phone", Value: phoneNumber },
        { Attribute: "FirstName", Value: firstName },
        { Attribute: "LastName", Value: lastName || "" },
        { Attribute: "EmailAddress", Value: email },
        { Attribute: "mx_City", Value: "Bangalore" },
        { Attribute: "SearchBy", Value: "Phone" },
      ],
      Opportunity: {
        OpportunityEventCode: 12000,
        Fields: [
          { SchemaName: "mx_Custom_1", Value: `${firstName} - TPT` },
          { SchemaName: "mx_Custom_16", Value: "TPT" },
          { SchemaName: "mx_Custom_17", Value: "Residential" },
          { SchemaName: "mx_Custom_64", Value: "1 BHK" },
          { SchemaName: "Owner", Value: "digital.integration@xanadu.in" },
          { SchemaName: "mx_Custom_73", Value: "Web Leads" },
          { SchemaName: "Status", Value: "Open" },
          { SchemaName: "mx_Custom_2", Value: "Not Attempted" },
          { SchemaName: "mx_Custom_3", Value: "Facebook" },
          { SchemaName: "mx_Custom_20", Value: "Test" },
          { SchemaName: "mx_Custom_21", Value: "XYZ" },
        ],
      },
    };

    try {
      // Send the API request
      const response = await fetch(
        "https://api-in21.leadsquared.com/v2/OpportunityManagement.svc/Capture?accessKey=u%24r7b3a5c5c20947d02ad372f707c93a0b6&secretKey=8d135be8ffe8346e335fe50ef899a55c9618ce9b",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        // Redirect to Thank You page after successful submission
        window.location.href = "/thank-you.html";
      } else {
        // Handle API errors
        const errorData = await response.json();
        alert("Error: " + errorData.Message || "Failed to submit the form");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  });

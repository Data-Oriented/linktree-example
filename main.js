document.getElementById("send").addEventListener("click", function(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Message:", message);
    alert("Your form has been submitted!");
    location.reload();
    event.preventDefault();
});

document.getElementById("plusBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default button behavior

    for (let i = 0; i < 3; i++) {
        let newRequirement = document.createElement("div"); // Create a div element
        newRequirement.classList.add("group"); // Add the class "group" to the div

        document.getElementById("here").appendChild(newRequirement); // Append the new div to the "here" element
    }

    // Remove location.reload(); to avoid automatic page reload
});

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


});


document.getElementById("send").addEventListener("click", function(event) {
    event.preventDefault(); // Stop the form from submitting
    
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    let selectedSkill = document.querySelector('input[name="skill"]:checked');
    
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Message:", message);
    
    if (selectedSkill) {
        console.log("Skill required: ", selectedSkill.value);
    } else {
        console.log("No skill selected");
    }
    
    alert("Your form has been submitted!");

    // Construct mailto link
    let skillValue = selectedSkill ? selectedSkill.value : "No skill selected";
    let mailtoLink = `mailto:mafilal@gmail.com?subject=Form Submission&body=Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AMessage: ${message}%0ASkill: ${skillValue}`;

    // Open the mailto link
    window.location.href = mailtoLink;
});

document.getElementById("plusBtn").addEventListener("click", function(event) {
    for (let i=0; i<3; i++) {
        document.getElementById('here').insertAdjacentHTML('beforeend', `
            <div class="group" id="skillsButton">
                <p>Skills required for this project:</p>
                
                <label for="html_${i}">
                    <input type="radio" id="html_${i}" name="skill" value="HTML">
                    HTML
                </label>
                <br>
                
                <label for="css_${i}">
                    <input type="radio" id="css_${i}" name="skill" value="CSS">
                    CSS
                </label>
                <br>
                
                <label for="javascript_${i}">
                    <input type="radio" id="javascript_${i}" name="skill" value="JavaScript">
                    JavaScript
                </label>
                <br>
                
                <label for="python_${i}">
                    <input type="radio" id="python_${i}" name="skill" value="Python">
                    Python
                </label>
            </div>
        `);    
    }
});

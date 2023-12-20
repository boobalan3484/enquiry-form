
/*
function createUserAccount() {
    // Add your logic to handle form submission here
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;
    const agree = document.getElementById('agreeCheckbox').checked;

    // Add your form submission and validation logic here
}
*/



// JavaScript to show the main content after 2 seconds (simulate the form loading)
window.onload = function () {
  var mainContent = document.getElementById("main-content");
  var splashScreen = document.getElementById("splash-screen");

  setTimeout(function () {
    mainContent.style.opacity = "1";
    splashScreen.style.display = "none";
  }, 2000);
};

// Date and Centre name default set values

// JavaScript code to set the current date and time in the input fields
document.addEventListener("DOMContentLoaded", function () {
    var currentDate = new Date();

    // Format the date as "Month day, year" (e.g., "July 28, 2023")
    var formattedDate = currentDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });


    // Set the formatted date and time in the input fields
    document.getElementById("dateInput").value = formattedDate;

    document.getElementById("centreName").value = 'TN - Salem';


    // city dropdown
    // JavaScript code to handle city selection and display area field if Salem is selected
    var cityDropdown = document.getElementById("cityInput");
    var areaField = document.getElementById("areaField");
    var areaInput = document.getElementById("areaInput");

    cityDropdown.addEventListener("change", function () {

        if (cityDropdown.value === "Salem" || cityDropdown.value === "Namakkal") {
            areaField.style.display = "block";
        } else {
            areaField.style.display = "none";
            areaInput.value = ""; // Clear the area input when a different city is selected
        }
    });
});


// working professional - checkbox
const workCheckbox = document.getElementById('workCheckbox');
const workFields = document.getElementById('workFields');

workCheckbox.addEventListener('change', function () {
    if (this.checked) {
        workFields.style.display = 'block';
    } else {
        workFields.style.display = 'none';
    }
});


// click about --> to display radioContainer

// Get the elements by their id
var aboutCentre = document.getElementById ('aboutCentre');
var radio = document.getElementById ('radioContainer');

// Add a click event listener to the about element
aboutCentre.addEventListener ('click', function () {
  // Toggle the display property of the radio element
  if (radio.style.display === 'none') {
    radio.style.display = 'block';
  } else {
    radio.style.display = 'block';
  }
});

// Specify field - radiobutton
const radioContainer = document.getElementById('radioContainer');
const specifyField = document.getElementById('specifyField');

radioContainer.addEventListener('change', function (event) {
  const selectedValue = event.target.value;

  if (selectedValue === 'Social media' || selectedValue === 'Other') {
    specifyField.style.display = 'block';
  } else {
    specifyField.style.display = 'none';
  }
});



// // Flip pages-+7+778
// $(document).ready(function () {
//     $("#next").click(function () {
//         $(".flip-card-inner").addClass("flip");
//     });

//     $("#previous").click(function () {
//         $(".flip-card-inner").removeClass("flip");
//     });
// });


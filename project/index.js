console.log("javascript is now ediiting");

let folderCount = 0; // Keep track of the number of folders created

function addFolder() {
  

  const btn = document.getElementById("btn");
  btn.disabled = true;
  
folderCount++;
  // Create a new folder element
  const newFolder = document.createElement("div");
  newFolder.className = "folder";

  // create an svg icon

  const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svgIcon.setAttribute('viewBox', '0 0 24 24');
  svgIcon.setAttribute('fill', 'none');
  svgIcon.setAttribute('stroke', 'currentColor');
  svgIcon.setAttribute('stroke-width', '2');
  svgIcon.setAttribute('stroke-linecap', 'round');
  svgIcon.setAttribute('stroke-linejoin', 'round');
  svgIcon.innerHTML = '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M7 17v2a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-2"></path><path d="M3 11h4m6 0h4m-4-10v6m-4-6v6"></path>';


  // Create an input field for the folder name

  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.placeholder = "Enter folder name";

  // Create a button to confirm the folder name
  const addButton = document.createElement("button");

  btn.innerText = "Add";
  btn.onclick = function () {
    const folderName = inputField.value;
    if (folderName.trim() !== "") {
      const folderText = document.createElement('div');
                folderText.innerText = 'Folder ' + folderCount + ': ' + folderName;
                newFolder.appendChild(svgIcon);
                newFolder.appendChild(folderText);
                document.getElementById('folderContainer').appendChild(newFolder);
                btn.disabled = false; // Re-enable the button after confirming the name
    }
  };

  // Append the input field and button to the new folder
  newFolder.appendChild(inputField);
  newFolder.appendChild(btn);

  // Append the new folder to the container
  document.getElementById("foldercontainer").appendChild(newFolder);
}


// days left trial at left footer
document.addEventListener('DOMContentLoaded', function() {
  // Set the trial end date (replace this with your actual trial end date)
  const trialEndDate = new Date('2024-03-18'); // Format: YYYY-MM-DD

  // Function to calculate remaining days
  function calculateRemainingDays() {
    const currentDate = new Date();
    const timeDifference = trialEndDate - currentDate;
    const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return remainingDays > 0 ? remainingDays : 0;
  }

  // Update the HTML content with the remaining days
  function updateRemainingDays() {
    const remainingDaysElement = document.getElementById('remaining-days');
    const remainingDays = calculateRemainingDays();

    remainingDaysElement.textContent = remainingDays;

    // You can customize the message based on the remaining days if needed
    const trialMessageElement = document.getElementById('trial-message');
    trialMessageElement.textContent = `${remainingDays > 0 ? remainingDays : '0'} day${remainingDays !== 1 ? 's' : ''} days left your trial.`;

    // You can add more customizations or actions based on the remaining days here
  }

  // Initial update on page load
  updateRemainingDays();

  // Optionally, you can set up an interval to update the remaining days dynamically
  // setInterval(updateRemainingDays, 1000); // Uncomment this line if you want to update every second
});


// checkbox 

function updateCount() {
  // Get all checkboxes
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
  // Count the number of checked checkboxes
  var checkedCount = 0;
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      checkedCount++;
    }
  });
  
  // Update the count display
  document.getElementById('count').innerText = checkedCount;
}
// for adding
function addCheckbox() {
  var container = document.getElementById('list');
  var checkboxNameInput = document.getElementById('newCheckboxName');

  // Get the value from the input field
  var checkboxName = checkboxNameInput.value;

  // Ensure a name is entered before adding a checkbox
  if (checkboxName.trim() !== "") {
    // Create a new checkbox
    var newCheckbox = document.createElement('span');
    newCheckbox.innerHTML = `<input type="checkbox" onclick="updateCount()"> ${checkboxName}`;
    
    // Append the new checkbox to the container
    container.appendChild(newCheckbox);

    // Clear the input field
    checkboxNameInput.value = "";

    // Update the count display
    updateCount();
  } else {
    alert("Please enter a valid checkbox name.");
  }
}

  function deleteChecked() {
    // Get all checkboxes
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    // Remove checked checkboxes
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        checkbox.parentNode.remove(); // Remove the parent label element
      }
    });
    updateCount();
  }



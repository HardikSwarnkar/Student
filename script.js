// Defining a function to add a new row to the table
function addRow() {
  // Retrieving the form element
  const form = document.forms.enrollmentform;
  // Retrieving and trimming the values of the form fields
  const Name = form.textname.value.trim();
  const Gender = form.gender.value.trim();
  const Email = form.emailadd.value.trim();
  const Link = form.weblink.value.trim();
  const CheckBox = form.skill;
  const imginput = form.img.value.trim();

  // Creating an array of checked skills
  const skillinput = Array.from(CheckBox)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value)
    .join(',');

  // Creating an object with the required fields and their values
  const requiredFields = {
    Name: Name,
    Gender: Gender,
    Email: Email,
    Link: Link,
    'Image Link': imginput,
    Skills: skillinput,
  };

  // Checking if any required fields are empty and displaying an alert if so
  for (const [fieldName, fieldValue] of Object.entries(requiredFields)) {
    if (!fieldValue) {
      alert(`Please enter your ${fieldName}`);
      return false;
    }
  }

  // Creating a new table row
  const tableRow = document.createElement('tr');
  tableRow.id = 'tablerow';

  // Creating the first table data element and populating it with form data
  const tableData1 = tableRow.appendChild(document.createElement('td'));
  tableData1.innerHTML = `
    <div style="display:block">
      <br>
      <p><b>${Name}</b><br>
      ${Gender}<br>
      ${Email}<br>
      <a href="${Link}" target="_blank"><u>${Link}</u></a><br>
      ${skillinput}
    </div>
  `;

  // Creating the second table data element and populating it with form data
  const tableData2 = tableRow.appendChild(document.createElement('td'));
  tableData2.innerHTML = `
    <img src="${imginput}" width="80%" height="100%">
  `;

  // Adding the new table row to the table
  document.getElementById('Card').appendChild(tableRow);
}
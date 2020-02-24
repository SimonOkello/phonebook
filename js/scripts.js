document.addEventListener("DOMContentLoaded", function() {
  let searchInput = document.getElementById("search-input");
  searchInput.addEventListener("keyup", findNames);
});
// Add New Contact function
function appendNewContact(event) {
  let inputValue = document.getElementById("add-contacts").value;
  let ul = document.getElementById('contacts');
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(inputValue));
  ul.appendChild(li);
  let form = document.getElementById("my-form");
  event.preventDefault();
  form.reset();
}
// Search Contact function
function findNames() {
  let searchInputValue = document.getElementById("search-input").value;
  let contacts = document.getElementById("contacts");
  let names = contacts.querySelectorAll("li.collection-item");
  for (let i = 0; i < names.length; i += 1) {
    if (names[i].innerHTML.toLowerCase().includes(searchInputValue)) {
      names[i].style.display = '';
    } else {
      names[i].style.display = 'None';
    }
  }
}


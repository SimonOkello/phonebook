document.addEventListener('DOMContentLoaded', function() {
  let searchInput = document.getElementById('search-input');
  searchInput.addEventListener('keyup', findNames);
});
// Add New Contact function
function appendNewContact(event) {
  let inputValue = document.getElementById('add-contacts').value;
  alert(inputValue);
  let form = document.getElementById("my-form");
  event.preventDefault();
  form.reset();
}
// Search Contact
function findNames() {
  let searchInputValue = document.getElementById("search-input").value;
  let contacts = document.getElementById("contacts");
  let names = contacts.querySelectorAll('li.collection-item');
  for (let i = 0; i < names.length; i += 1) {
    if (names[i].innerHTML.toLowerCase().includes(searchInputValue)) {
      names[i].style.display = "";
    } else {
      names[i].style.display = 'None';
    }
  }
}

document.getElementById('contacts').addEventListener('click', openContacts);
document.getElementById('menu').addEventListener('click', openMenu);

function openMenu() {
  document.getElementById('menuDropdown').classList.toggle('active');
};

function openContacts() {
  document.getElementById('contactsDropdown').classList.toggle('active');
};
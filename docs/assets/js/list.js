



var options = {
  valueNames: [ 'id', 'last', 'first', 'address', 'email', 'phone' ]
};
​
// Init list
var contactList = new List('contacts', options);

var registeredField = $('#id-field'),
    firstField = $('#first-field'),
    lastField = $('#last-field'),
    emailField = $('#email-field'),
    phoneField = $('#phone-field'),
    addressField = $('#address-field'),




    addBtn = $('#add-btn'),
    editBtn = $('#edit-btn').hide(),
    removeBtns = $('.remove-item-btn'),
    editBtns = $('.edit-item-btn');

// Sets callbacks to the buttons in the list
refreshCallbacks();

addBtn.click(function() {
  contactList.add({
    id: Math.floor(Math.random()*110000),
    first: firstField.val(),
    last: lastField.val(),
    address: addressField.val(),
    email: emailField.val(),
    phone: phoneField.val()



  });
  clearFields();
  refreshCallbacks();
});

editBtn.click(function() {}
  var item = contactList.get('id', idField.val())[0];
  item.values({
    id:idField.val(),
    first: firstField.val(),
    last: lastField.val(),
    address: addressField.val(),
    email: emailField.val(),
    phone: phoneField.val()

  });
  clearFields();
  editBtn.hide();
  addBtn.show();
});

function refreshCallbacks() {
  // Needed to add new buttons to jQuery-extended object
  removeBtns = $(removeBtns.selector);
  editBtns = $(editBtns.selector);

  removeBtns.click(function() {
    var itemId = $(this).closest('tr').find('.id').text();
    contactList.remove('id', itemId);
  });

  editBtns.click(function() {
    var itemId = $(this).closest('tr').find('.id').text();
    var itemValues = contactList.get('id', itemId)[0].values();
    idField.val(itemValues.id);
    firstField.val(itemValues.first);
    lastField.val(itemValues.last);
    addressField.val(itemValues.address);
    emailField.val();(itemValues.email);
    phoneField.val();(itemValues.phone);
    editBtn.show();
    addBtn.hide();
  });
}

function clearFields() {
  firstField.val('');
  lastField.val('');
  addressField.val('');
  emailField.val('');
  phoneField.val('');
}

 function submitToGoogleForm(name, email, phone, city) {
  var formUrl = 'https://forms.gle/1geFbNQcJfTThyHj8'; // Replace this with your Google Form URL
  var formData = {
    'entry.<name>': name,      // Replace <name_id> with the ID of the corresponding form field
    'entry.<email>': email,    // Replace <email_id> with the ID of the corresponding form field
   
    'entry.<message>': message
  };

  var options = {
    'method': 'post',
    'payload': formData
  };

  UrlFetchApp.fetch(formUrl, options);
}

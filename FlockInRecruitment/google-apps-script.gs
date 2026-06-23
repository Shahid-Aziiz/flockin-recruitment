function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    if (data.type === 'contact') {
      var body = 'New Contact Form Submission - FlockIn Recruitment\n\n'
        + 'Name: ' + (data.name || '') + '\n'
        + 'Email: ' + (data.email || '') + '\n'
        + 'Phone: ' + (data.phone || 'Not provided') + '\n'
        + 'Subject: ' + (data.subject || '') + '\n\n'
        + 'Message:\n' + (data.message || '');

      GmailApp.sendEmail('dihahs.07@gmail.com', 'Website Enquiry - ' + (data.subject || 'General Inquiry'), body);

      return ContentService
        .createTextOutput(JSON.stringify({success: true}))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Resume submission
    var name = (data.firstName || '') + ' ' + (data.lastName || '');
    var email = data.email || '';
    var phone = data.phone || '';
    var position = data.currentPosition || '';
    var experience = data.experience || '';
    var skills = data.skills || '';
    var desired = data.desiredPosition || '';
    var coverLetter = data.coverLetter || '';
    var location = data.location || '';
    var salary = data.salary || '';
    var availability = data.availability || '';

    var fileUrl = 'No file uploaded';

    if (data.cvFile && data.cvFileName) {
      var folder = DriveApp.getRootFolder();
      var decoded = Utilities.base64Decode(data.cvFile);
      var mimeType = data.cvFileType ? data.cvFileType : 'application/octet-stream';
      var blob = Utilities.newBlob(decoded, mimeType, data.cvFileName);
      var file = folder.createFile(blob);
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      fileUrl = file.getUrl();
    }

    var body = 'New Resume Submission - FlockIn Recruitment\n\n'
      + 'Name: ' + name + '\n'
      + 'Email: ' + email + '\n'
      + 'Phone: ' + phone + '\n'
      + 'Position: ' + position + '\n'
      + 'Experience: ' + experience + '\n'
      + 'Skills: ' + skills + '\n'
      + 'Desired Role: ' + desired + '\n'
      + 'Location: ' + location + '\n'
      + 'Salary: ' + salary + '\n'
      + 'Availability: ' + availability + '\n\n'
      + 'Cover Letter:\n' + coverLetter + '\n\n'
      + 'Resume File: ' + fileUrl;

    GmailApp.sendEmail('dihahs.07@gmail.com', 'New Resume Submission - ' + name, body);

    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: err.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

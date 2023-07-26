function onOpen() {
  SpreadsheetApp.getUi().createMenu('Custom Menu')
    .addItem('Open Custom Menu', 'showSidebar')
    .addToUi();
}

function showSidebar() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('cleaningUI.html')
    .setTitle('Custom Menu')
    .setWidth(300);
  SpreadsheetApp.getUi().showSidebar(htmlOutput);
}

function cleanData(option, columnIndex) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();

  if (option === 'companyName') {
    for (var i = 1; i < data.length; i++) {
      var companyName = data[i][columnIndex - 1];
      var cleanedCompanyName = cleanCompanyName(companyName);
      sheet.getRange(i + 1, columnIndex).setValue(cleanedCompanyName);
    }
  } else if (option === 'firstName') {
    for (var i = 1; i < data.length; i++) {
      var firstName = data[i][columnIndex - 1];
      var cleanedFirstName = cleanFirstName(firstName);
      sheet.getRange(i + 1, columnIndex).setValue(cleanedFirstName);
    }
  }
}

function cleanCompanyName(companyName) {
  // Remove unwanted substrings
  var cleanedCompanyName = companyName.replace(/[^\w\s-,.]|ltd|llc|gmbh|pvt|private|co.|co|corp.|corporate|limited|inc|®|™|technologies/gi, '').trim();
  
  // Remove extra leftover spaces
  cleanedCompanyName = cleanedCompanyName.replace(/\s{2,}/g, ' ');

  // Rename to proper case
  cleanedCompanyName = cleanedCompanyName.replace(/\b\w+/g, function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return cleanedCompanyName;
}

function cleanFirstName(firstName) {
  // Regular expressions for salutations and words in the first name
  var salutationRegex = /^(dr|mr|ms|mrs)\.$/i;
  var wordRegex = /\b\w+\b/g;

  var words = firstName.trim().match(wordRegex);

  if (!words || words.length === 0) {
    return '';
  }

  var cleanedWords = words.map(function (word) {
    return capitalizeFirstLetter(word.toLowerCase());
  });

  // Remove the salutation if the first word is a salutation and there are more than one words
  if (salutationRegex.test(words[0]) && words.length > 1) {
    cleanedWords.shift();

    // Keep a maximum of 3 words if there's a salutation
    if (cleanedWords.length > 2) {
      cleanedWords = cleanedWords.slice(0, 3);
    }
  } else {
    // Keep a maximum of 2 words if there's no salutation
    if (cleanedWords.length > 1) {
      cleanedWords = cleanedWords.slice(0, 2);
    }
  }

  return cleanedWords.join(' ');
}

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

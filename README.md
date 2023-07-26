# GSheets-Data-Cleaning
This is a custom Google Apps Script that provides a user-friendly interface to clean data in Google Sheets. It adds a custom menu to the Google Sheets UI, allowing users to open the data cleaning tool. The tool provides options to clean either company names or first names in the selected data range based on specific cleaning rules.


# Features:
- Custom Menu: Upon opening the Google Sheet, the script automatically creates a custom menu called "Custom Menu" with an option to "Open Custom Menu."
- Data Cleaning Interface: When users select "Open Custom Menu," a sidebar appears containing the data cleaning interface. Users can choose to clean either company names or first names in the data range.
- Clean Company Names: If users choose to clean company names, the script will remove unwanted substrings, extra spaces, and convert the company names to proper case (title case).
- Clean First Names: If users choose to clean first names, the script will apply specific rules to capitalize and format the first names. It handles salutations (e.g., Mr., Ms., Dr.) and maintains a maximum of either two or three words in the first name, depending on the presence of salutations.
- User Input: The data cleaning tool requires users to select the cleaning option (company names or first names) from a drop-down menu. Users also need to enter the column number where the data to be cleaned is located.
- Data Cleaning Execution: After selecting the desired cleaning option and specifying the column number, users can click the "Clean Data" button. The script then processes the selected data range based on the chosen option and cleans the data accordingly.

# Usage:
1. Open your Google Sheet containing the data you want to clean.
2. Click on the "Custom Menu" option in the menu bar and select "Open Custom Menu."
3. The data cleaning interface appears as a sidebar.
4. Select the cleaning option from the drop-down menu ("Clean Company Name" or "Clean First Name").
5. Enter the column number where the data to be cleaned is located.
6. Click the "Clean Data" button to execute the data cleaning operation.

# Important Notes:
1. This script is intended for Google Sheets and requires users to have edit access to the sheet for it to work correctly.
2. The data cleaning tool currently supports cleaning of company names and first names. Modify the script to add support for additional data cleaning options if needed.

# Getting Started:
To use the "Data Cleaning Tool for Google Sheets" script, users need to follow these steps:
Open the Google Sheet containing the data you want to clean.
Click on "Extensions" in the menu bar, then select "Apps Script."
A new script editor tab will open. Copy and paste the code from the Code.gs file into the script editor.
Save the script by clicking on the floppy disk icon or using the keyboard shortcut "Ctrl + S" (Windows) or "Command + S" (Mac).
Close the script editor and refresh your Google Sheet. A new "Custom Menu" option will appear in the menu bar.
To clean data, click on "Custom Menu" and select "Open Custom Menu." The data cleaning interface will appear as a sidebar.
Select the cleaning option and enter the column number where the data to be cleaned is located.
Click the "Clean Data" button to execute the data cleaning operation.

# Contributing:
If you wish to contribute to the project, please follow the guidelines outlined in the Contributing.md file. Fork the repository, make your changes, and submit a pull request for review.

# License:
This script is open-source and is provided under the MIT License. Feel free to use, modify, and distribute it as per the terms of the license.

# Support:
Feel free to create an issue in the repository if you encounter any issues or have questions regarding the script's usage. The maintainers and the community will be glad to assist you.

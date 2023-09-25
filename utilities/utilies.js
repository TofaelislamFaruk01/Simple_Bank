// get value from the textbox

function getValueByTextBox(textBoxId)
{
    const textBox = document.getElementById(textBoxId);
    const textBoxString=textBox.value;
    // console.log(textBoxString);
    const textBoxValue = parseFloat(textBoxString);
    textBox.value = '';
    return textBoxValue;
}

// get innerText to value from text field in span tag

function getInnerTextValue(textFieldId)
{
    const textField = document.getElementById(textFieldId);
    const textFieldString = textField.innerText;
    const textFieldValue = parseFloat(textFieldString);
    return textFieldValue;
}

// set innerText value in text field

function setInnerText(textFieldId, value)
{
    const textField = document.getElementById(textFieldId);
    textField.innerText = value;
}
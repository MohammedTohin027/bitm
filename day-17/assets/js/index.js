
function emptyField() {
    const firstField = document.getElementById('first');
    const secondField = document.getElementById('second');
    firstField.value = '';
    secondField.value = '';
}

function calculateBtn(type) {
    const firstField = document.getElementById('first');
    const secondField = document.getElementById('second');
    const displayField = document.getElementById('display-result'); 
    
    const first = parseFloat(firstField.value);
    const second = parseFloat(secondField.value);

    if (type == '+') {
        const result = first + second;
        displayField.value = result.toFixed(2);
    } 
    else if(type == '-'){
        const result = first - second;
        displayField.value = result.toFixed(2);
    }   
    else if(type == '*'){
        const result = first * second;
        displayField.value = result.toFixed(2);
    }   
    else if(type == '/'){
        const result = first / second;
        displayField.value = result.toFixed(2);
    }   
    else if(type == '%'){
        const result = first % second;
        displayField.value = result.toFixed(2);
    }  
    
    emptyField();

}

const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function(){
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');

    

    const name = nameField.value;
    const email = emailField.value;

    console.log(name, email);

    const displayUserTable = document.getElementById('display-user-table');
    const newUser = document.createElement('tr');
    newUser.innerHTML = `
        <tr>
            <td>${name}</td>
            <td>${email}</td>
        </tr>
    `;
    displayUserTable.appendChild(newUser);
    nameField.value = '';
    emailField.value = '';
});
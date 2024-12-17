const EIinput = document.getElementById('EIinput');
const EIconfirm = document.getElementById('EIconfirm');
const EIusername = document.getElementById('EIusername');

if (EIconfirm) {
    EIconfirm.addEventListener('click', () => {
        if(EIinput.value !== '' && EIinput.value.length == 1 && EIinput.value !== ' ' && isNaN(EIinput.value)){ 
            EIusername.innerHTML += EIinput.value;
        }
        else{
            alert('Please enter a valid character');
        }
    });
} else {
    console.error('EIconfirm element not found');
}

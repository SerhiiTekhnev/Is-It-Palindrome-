let button = document.querySelector('button[type=submit]')
button.addEventListener('click', function() {
    let strIn = document.querySelector('form input[name=word]').value;
    let str = strIn.replace(/ /g, '').toLowerCase();
    let result;

    if (str === '') {
        result = 'TRUE';
    } else
    
    for (let i = 0; i <= str.length - 1; i++) {
        
        if (str[i] === str[str.length - 1 - i]) {
            result = 'TRUE'; 
        } else {
            result = 'FALSE';
            break;
        }
    }
    alert(result);
})

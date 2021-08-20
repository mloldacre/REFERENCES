//Local Storage
localStorage.setItem('name', 'Mike')
let localName = localStorage.getItem('name')

console.log('local name :>> ', localName);

//Session Storage
sessionStorage.setItem('name', 'Kelly')
let sessionName = sessionStorage.getItem('name')

console.log('session name :>> ', sessionName);

//Cookies
document.cookie = 'firstName=Betty expires=' + new Date(2022, 1, 2 ).toUTCString();
document.cookie = 'lastName=Wallers expires=' + new Date(2022, 1, 2 ).toUTCString();

console.log(document.cookie);
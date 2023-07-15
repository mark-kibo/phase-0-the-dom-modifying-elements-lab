// Write your code here!
const main = document.getElementById("main");
main.remove();
let newHeader=document.createElement('h1');
newHeader.setAttribute('id', 'victory');
let newCOntent=document.createTextNode("Mark is the champion");
newHeader.appendChild(newCOntent);
document.body.appendChild(newHeader);



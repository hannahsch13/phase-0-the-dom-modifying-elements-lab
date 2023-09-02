// Write your code here!
const dm = document.getElementById('main');
dm.remove('main');

const newHeader = document.createElement("h1");
newHeader.id = "victory";

const content = document.createTextNode("Hannah is the champion");

newHeader.appendChild(content);
document.body.append(newHeader);

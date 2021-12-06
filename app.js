// alert("hello world");

var main_content=document.getElementById("main-content");
console.log(main_content)



console.log(main_content.childNodes)



var render=document.getElementsByClassName("render").innerHTML = "Paragraph changed!";
document.write(render);


var first_name = document.getElementById("first-name");
var fname = document.createTextNode("zarlish tehseen");
first_name.appendChild(fname);
console.log(first_name);



var last_name = document.getElementById("last-name");
var lname = document.createTextNode("kotwal");
last_name.appendChild(lname);
console.log(last_name);
var email = document.getElementById("email");
var emai = document.createTextNode("ayeshkotwa2@gmail.com");
email.appendChild(emai);
console.log(email);



var form_content =document.getElementById("form-content");
console.log(form_content.nodeType);



var lastname =document.getElementById("last-name");
console.log(lastname.nodeType);
console.log(lastname.childNodes);



var laname =document.getElementById("last-name");
console.log(laname);



var maincontent =document.getElementById("main-content");
console.log(maincontent.firstChild);
console.log(maincontent.lastChild);



var lastname =document.getElementById("last-name");
console.log(lastname.nextSibling);
console.log(lastname.previousSibling);


var email = document.getElementById("email");
console.log(email.parentNode);
console.log(email.nodeType);


// set the link variable
var InjectLink = 'https://raw.githubusercontent.com/GrayStuido/Fracture/main/Wiki-Cloaker.js';
// create a script element
var script = document.createElement('script');

// set the ID of the script element to the link
script.id = InjectLink;

// retrieve code from GitHub page using XMLHttpRequest
var request = new XMLHttpRequest();
request.open('GET', InjectLink, true);
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // set the content of the script element to the code retrieved from GitHub
    script.textContent = request.responseText;
  } else {
    console.error('Failed to load script');
  }
};
request.onerror = function() {
  console.error('Failed to load script');
};
request.send();

// inject the script element into the head of the HTML page
document.head.appendChild(script);
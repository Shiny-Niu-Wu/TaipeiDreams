console.log("script loaded");

//all stories
document.body.onload = document.getElementById("storyGroup").append(addStories());

function addStories(){
  let story = new DocumentFragment();
  for (let i = 0; i < stories.length; i++) {
    let text = document.createElement("div");
    let num = i + 1;
    text.setAttribute("class", "text");
    text.setAttribute("id", "text" + num);
    text.innerHTML = stories[i].mandarin;
    story.append(text);
  }
  return story
}

let textId;
for (let i = 0; i < stories.length; i++) {
  textId = "text" + (i + 1);
  dragElement(document.getElementById(textId));
};

dragEnter(document.getElementById("enterDiv"));

//followed by w3school example
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  //console.log(elmnt.id);
  if (document.getElementById(elmnt.id + "M")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "M").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function dragEnter(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  //console.log(elmnt.id);
  if (document.getElementById("enterText")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById("enterText").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

    var div = document.getElementById("enterDiv");
    // var demoDiv = document.getElementById("test");
    // demoDiv.innerHTML = "offsetLeft: " + testDiv.offsetLeft + "<br>offsetTop: " + testDiv.offsetTop;
    if (div.offsetTop > (window.innerHeight*0.1) && div.offsetTop < (window.innerHeight*0.8)) {
      if (div.offsetLeft > (window.innerWidth*0.19) && div.offsetLeft < (window.innerWidth*0.79)) {
        document.location.href = "main.html";
      }
    }
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

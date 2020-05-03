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

//followed by w3school example
dragEnter(document.getElementById("enterDiv"));

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

    drawPath();
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

document.body.onload = drawPath();
function drawPath(){
  //get "enter Taipei" text position when drag
  var text = document.getElementById("enterText").getBoundingClientRect();
  // console.log(text.top, text.right, text.bottom, text.left);
  var frame = document.getElementById("storyGroup").getBoundingClientRect();
  let leftSpace = frame.left - text.left;
  // console.log(text.left, frame.left, leftSpace);
  let textMiddle = (text.right + text.left)/2;
  let rightSpace = textMiddle - frame.right;

  //horizontal line
  let horLine = document.getElementById("path2").style;
  //vertical line
  let verLine = document.getElementById("path1").style;

  //see if "enter Taipei" goes right
  //in between the left and right edges of the frame
  if (textMiddle < frame.left) {
    horLine.display = "block";
    horLine.width = leftSpace.toString() + "px";
    horLine.top = (window.innerHeight/2).toString() + "px";
    horLine.left = textMiddle.toString() + "px";

        //see if "enter Taipei" goes lower than the middle of the page
        if (text.top < (window.innerHeight/2)) {
          verLine.width = ((window.innerHeight/2) - text.bottom).toString() + "px";
          verLine.top = text.bottom.toString() + "px";
          verLine.left = textMiddle.toString() + "px";
          verLine.transform = "rotate(90deg)";
        } else {
          verLine.width = (text.top - (window.innerHeight/2) - 23).toString() + "px";
          verLine.top = (text.top - 20).toString() + "px";
          verLine.left = textMiddle.toString() + "px";
          verLine.transform = "rotate(-90deg)";
        }

  } else if (textMiddle > frame.right) {
    horLine.display = "block";
    horLine.width = (rightSpace + 30).toString() + "px";
    horLine.top = (window.innerHeight/2).toString() + "px";
    horLine.right = text.right.toString() + "px";
    horLine.left = (frame.right - 30).toString() + "px";

        //see if "enter Taipei" goes lower than the middle of the page
        if (text.top < (window.innerHeight/2)) {
          verLine.width = ((window.innerHeight/2) - text.bottom).toString() + "px";
          verLine.top = text.bottom.toString() + "px";
          verLine.left = (textMiddle + 3).toString() + "px";
          verLine.transform = "rotate(90deg)";
        } else {
          verLine.width = (text.top - (window.innerHeight/2) - 23).toString() + "px";
          verLine.top = (text.top - 20).toString() + "px";
          verLine.left = textMiddle.toString() + "px";
          verLine.transform = "rotate(-90deg)";
        }

  } else {
    horLine.display = "none";
    verLine.width = (frame.top - text.bottom).toString() + "px";
    verLine.left = textMiddle.toString() + "px";
    verLine.top = (text.bottom + 3).toString() + "px";
  }
}

window.addEventListener("resize", drawPath);

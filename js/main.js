console.log("script loaded");

//image manipulation
// var cssApplier;
// window.onload = function() {
//     rangy.init();
//     cssApplier = rangy.createCssClassApplier("area", true); // true turns on normalization
// };
// $(function() {
//   $(document).mouseup(function() {
//     cssApplier.toggleSelection();
//   });
// });

//navigation bar on the left
document.body.onload = document.getElementById("navigationGroup").append(addNavigation());

function addNavigation(){
  let navigation = new DocumentFragment();
  for (let i = 0; i < stories.length; i++) {
    let link = document.createElement("a");
    let num = i + 1;
    link.href = "#" + "text" + num.toString();
    link.setAttribute("class", "navigationLink")
    link.append("台北");
    navigation.append(link);
  }
  return navigation
}

//all stories
document.body.onload = document.getElementById("storyGroup").append(addStories());

function addStories(){
  let story = new DocumentFragment();
  for (let i = 0; i < stories.length; i++) {
    let text = document.createElement("div");
    let num = i + 1;
    text.setAttribute("class", "text");
    text.setAttribute("id", "text" + num);
    text.innerHTML = stories[i].english + stories[i].mandarin;
    story.append(text);
  }
  return story
}

var filteringStereotypes = document.getElementById("filterGroup");
var sticky = filteringStereotypes.offsetTop;

function stickyStereotypes() {
  if (window.pageYOffset >= sticky) {
  filteringStereotypes.classList.add("sticky")
  } else {
  filteringStereotypes.classList.remove("sticky");
  }
}

stickyStereotypes();

//auto scroll webpage
//let scroll = setInterval(function(){ window.scrollBy(0,1); }, 10);
//clearInterval(scroll);

// var fps = 1000;
// var speedFactor = 0.001;
// var minDelta = 0.5;
// var autoScrollSpeed = 10;
// var autoScrollTimer, restartTimer;
// var isScrolling = false;
// var prevPos = 0, currentPos = 0;
// var currentTime, prevTime, timeDiff;
//
// window.addEventListener("scroll", function (e) {
//     // window.pageYOffset is the fallback value for IE
//     currentPos = window.scrollY || window.pageYOffset;
// });
//
// window.addEventListener("wheel", handleManualScroll);
// window.addEventListener("touchmove", handleManualScroll);
//
// function handleManualScroll() {
//     // window.pageYOffset is the fallback value for IE
//     currentPos = window.scrollY || window.pageYOffset;
//     clearInterval(autoScrollTimer);
//     if (restartTimer) {
//         clearTimeout(restartTimer);
//     }
//     restartTimer = setTimeout(() => {
//         prevTime = null;
//         setAutoScroll();
//     }, 50);
// }
//
// function setAutoScroll(newValue) {
//     if (newValue) {
//         autoScrollSpeed = speedFactor * newValue;
//     }
//     if (autoScrollTimer) {
//         clearInterval(autoScrollTimer);
//     }
//     autoScrollTimer = setInterval(function(){
//         currentTime = Date.now();
//         if (prevTime) {
//             if (!isScrolling) {
//                 timeDiff = currentTime - prevTime;
//                 currentPos += autoScrollSpeed * timeDiff;
//                 if (Math.abs(currentPos - prevPos) >= minDelta) {
//                     isScrolling = true;
//                     window.scrollTo(0, currentPos);
//                     isScrolling = false;
//                     prevPos = currentPos;
//                     prevTime = currentTime;
//                 }
//             }
//         } else {
//             prevTime = currentTime;
//         }
//     }, 1000 / fps);
// }
//
// setAutoScroll(1);
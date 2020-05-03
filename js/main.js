console.log("script loaded");

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
    let dreamBar = document.createElement("p");
    dreamBar.setAttribute("class", "dream");
    dreamBar.append(stories[i].dream);
    story.append(dreamBar);

    let text = document.createElement("div");
    let num = i + 1;
    text.setAttribute("class", "text anchor");
    text.setAttribute("id", "text" + num);
    text.innerHTML = stories[i].mandarin + stories[i].english;
    story.append(text);
  }
  return story
}

// function enterElement(){
//   let enterID;
//   for (let i = 0; i < stories.length; i++) {
//     let num = i + 1;
//     enterID = "text" + num.toString() + "E";
//   }
//   return enterID
// }
//
// enterView({
// 	selector: enterElement,
// 	enter: function(el) {
// 		console.log('entered', enterElement);
// 	},
// 	exit: function(el) {
//     console.log('exited', enterElement);
// 	},
// 	progress: function(el, progress) {
//     // console.log("the special element's progress is:", progress);
// 	},
// 	// offset: 0.5, // enter at middle of viewport
// 	// once: true, // trigger just once
// });

// var filteringStereotypes = document.getElementById("filterGroup");
// var sticky = filteringStereotypes.offsetTop;
// function stickyStereotypes() {
//   if (window.pageYOffset >= sticky) {
//   filteringStereotypes.classList.add("sticky")
//   } else {
//   filteringStereotypes.classList.remove("sticky");
//   }
// }
//
// stickyStereotypes();

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

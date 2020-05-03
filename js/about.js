console.log("script loaded");

var randomStory = stories[Math.floor(Math.random()*stories.length)];
storyBox = document.getElementById("storyBox").innerHTML = randomStory.english + randomStory.mandarin;
function changeStory(){
  randomStory = stories[Math.floor(Math.random()*stories.length)];
  console.log(randomStory);
  storyBox = document.getElementById("storyBox").innerHTML = randomStory.english + randomStory.mandarin;
}

// for (var i = 0; i < stories.length; i++) {
//   let num = i + 1;
//   let textID = "text" + num.toString() + "E";
//   document.getElementById(textID).addEventListener("mouseup", ()=>{
//     highlight(select());
//   })
// }

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

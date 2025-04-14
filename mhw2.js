const newTopicList = ["Sport", "News", "Football", "Politics", "Tech"];

function onDislikeClick(event) {
  const dislikeModal = document.querySelector("#dislike-modal");
  dislikeModal.classList.remove("hidden");
  document.body.classList.add("no-scroll");
  dislikeModal.style.top = window.pageYOffset + "px";
}

function onUndoClick() {
  const dislikeModal = document.querySelector("#dislike-modal");
  dislikeModal.classList.add("hidden");
  document.body.classList.remove("no-scroll");
}

function onDoneClick() {
  onUndoClick();
  const dislikeImage = document.querySelector("#dislike-image");
}

function onAddTopicClick() {
  let topics = document.querySelectorAll(".topic");

  const nav = document.querySelector("nav");
  const topic = document.createElement("div");
  topic.classList.add("topic");
  const i = Math.floor(Math.random() * 5);
  topic.textContent = newTopicList[i];
  nav.appendChild(topic);

  const topicRemoved = topics[0];

  topicRemoved.innerHTML = "";
}

/*function infScroll(){
  if(window.pageYOffset != 0){
    const card = document.createElement("div");
    const main = document.querySelector('#main');
    card.classList.add("card");
    main.appendChild(card);
  }
}*/

const dislikeList = document.querySelectorAll("#dislike");

for (let dislike of dislikeList) {
  dislike.addEventListener("click", onDislikeClick);
}

const undo = document.querySelector("#undo");
undo.addEventListener("click", onUndoClick);

const done = document.querySelector("#done");
done.addEventListener("click", onDoneClick);

const addTopic = document.querySelector("#add-topic");
addTopic.addEventListener("click", onAddTopicClick);

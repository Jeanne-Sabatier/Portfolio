const conversations = {
  c1: [
    {
      from: "me",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus, massa in pretium ultrices, justo odio dictum mi, sed hendrerit enim nisl ut mauris. Integer vitae dolor id sapien sagittis facilisis. Vivamus sit amet metus.",
    },
    { from: "me", text: "Lorem ipsum" },
    {
      from: "her",
      text: "Curabitur ut ligula et erat dapibus faucibus. Vivamus id lectus eu purus suscipit pellentesque, sed convallis massa.",
    },
  ],

  c2: [
    { from: "her", text: "Lorem ipsum dolor sit" },
    {
      from: "me",
      text: "Lorem ipsum",
    },
    { from: "her", text: "Lorem ipsum dolor sit amet" },
    { from: "me", text: "Lorem ipsum" },
    { from: "me", text: "Lorem ipsum" },
    { from: "me", text: "Lorem ipsum" },
    { from: "me", text: "Lorem ipsum" },
    { from: "me", text: "Lorem ipsum" },
    { from: "me", text: "Lorem ipsum" },
    { from: "me", text: "Lorem ipsum" },
    { from: "me", text: "Lorem ipsum" },
    { from: "me", text: "Lorem ipsum" },
    { from: "me", text: "Lorem ipsum" },
    { from: "me", text: "Lorem ipsum" },
  ],

  c3: [
    { from: "me", text: "Lorem ipsum dolor" },
    { from: "her", text: "Lorem ipsum dolor sit amet ?" },
    {
      from: "me",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      from: "me",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
    {
      from: "her",
      text: "Lorem ipsum dolor sit amet consectetur.",
    },
    { from: "me", text: "Lorem ipsum dolor sit amet" },
    { from: "her", text: "Lorem ipsum dolor sit amet." },
  ],

  c4: [
    { from: "her", text: "Lorem ipsum dolor" },
    {
      from: "her",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    { from: "her", text: "Lorem ipsum dolor sit amet" },
    { from: "her", text: "Lorem ipsum dolor" },
    {
      from: "me",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    },
    {
      from: "me",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
  ],

  c5: [
    {
      from: "her",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    { from: "her", text: "Lorem ipsum dolor sit" },
    {
      from: "me",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.",
    },
    {
      from: "me",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
    },
    {
      from: "her",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      from: "me",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    { from: "her", text: "Lorem ipsum dolor sit amet" },
    { from: "her", text: "Lorem ipsum dolor sit" },
    {
      from: "her",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    { from: "her", text: "Lorem ipsum dolor sit amet" },
  ],
};

function loadConversation(id) {
  const chatArea = document.getElementById("chat-area");
  chatArea.innerHTML = ""; // On vide la zone

  const msgs = conversations[id];
  if (!msgs) return;

  msgs.forEach((msg) => {
    const div = document.createElement("div");
    div.classList.add("message", msg.from);
    div.textContent = msg.text;
    chatArea.appendChild(div);
  });

  chatArea.scrollTop = chatArea.scrollHeight;
}

const conversationItems = document.querySelectorAll(".conversation");

conversationItems.forEach((item) => {
  item.addEventListener("click", () => {
    const convoId = item.getAttribute("data-convo");

    loadConversation(convoId);

    conversationItems.forEach((c) => c.classList.remove("active"));
    item.classList.add("active");
  });
});

loadConversation("c1");
document
  .querySelector('.conversation[data-convo="c1"]')
  .classList.add("active");

const searchBar = document.querySelector(".search-bar");

searchBar.addEventListener("input", () => {
  const query = searchBar.value.toLowerCase();

  conversationItems.forEach((item) => {
    const text = item.textContent.toLowerCase();

    if (text.includes(query)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

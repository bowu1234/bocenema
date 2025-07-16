// 点击图片，切换
const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/PIcture.jpg") {
    myImage.setAttribute("src", "images/loginPicture.jpg");
  } else {
    myImage.setAttribute("src", "images/PIcture.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla i cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName;
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla i cool, ${storedName}`;
}

// 点击按钮，切换角色
myButton.onclick = function () {
  setUserName();
};

// const list = document.createElement("ul");
// const info = document.createElement("p");
// const ul = document.querySelector("ul");

// info.textContent =
//   "Below is a dynamic list. Click anywhere on the page to add a new list item. Click an existing list item to change its text to something else.";

// document.body.appendChild(info);
// document.body.appendChild(list);

// ul.onclick = function () {
//   const listItem = document.createElement("li");
//   const text = prompt("Enter the text for the new list item:");

//   listItem.textContent = text;
//   list.appendChild(listItem);

//   listItem.onclick = function (event) {
//     event.stopPropagation(); // Prevent the click from bubbling up to the ul element
//     const newText = prompt("Enter the new text for this list item:");
//     this.textContent = newText;
//   };
// };

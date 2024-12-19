document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});

// for intro js code starte

const span = document.querySelector('span')

const wordList = ['Student', 'Developer', 'Coder']

let wordIndex = 0
let characterIndex = 0
let reversTyping = false


const intervalID = setInterval(() => {
  if (!reversTyping) {
    span.innerText = span.innerText + wordList[wordIndex][characterIndex]
    characterIndex++
  } else {
    span.innerText = span.innerText.slice(0, span.innerText.length - 1)
  }

  if (characterIndex === wordList[wordIndex].length) {
    reversTyping = true
  }

  if (span.innerText.length === 0 && reversTyping) {
    reversTyping = false
    characterIndex = 0
    wordIndex++
  }


  if (wordIndex === wordList.length) {
    wordIndex = 0
  }

}, 200)

// menu btn

const menuBtn = document.querySelector(".menu-icon")
const closeMenu = document.querySelector(".close-menu")


menuBtn.addEventListener("click", function () {
  document.body.classList.add("menu-active")
})

// menuBtn.addEventListener("click", function () {
//   document.body.classList.add("nonMenuBtn")
// })

closeMenu.addEventListener("click", function () {
  document.body.classList.remove("menu-active")
})

// closeMenu.addEventListener("click", function () {
//   document.body.classList.remove("nonMenuBtn")
// })






// for about btn
const aboutBtn = document.querySelector(".about-btn")
const closebtn = document.querySelector(".close-popup")

aboutBtn.addEventListener("click", function () {
  document.body.classList.add("popup-active")
})

closebtn.addEventListener("click", function () {
  document.body.classList.remove("popup-active")
})



//    Contact  start


let username = document.querySelector("#name")
let useremail = document.querySelector("#email")
let usersmessage = document.querySelector("#message")
let messagebtn = document.querySelector("#messagebtn")
// console.log(username);
// console.log(useremail);
// console.log(usersmessage);
// console.log(messagebtn);

let messageStore = [];

messagebtn.addEventListener("click", (e) => {
  e.preventDefault()
  let user = {
    username: username.value,
    useremail: useremail.value,
    usersmessage: usersmessage.value
  }
  // console.log(user);

  if (messageStore.length == 0) {
    if (user.useremail !== "") {
      messageStore.push(user)

      localStorage.setItem("messageStore", JSON.stringify(messageStore))
      username.value = ""
      useremail.value = ""
      usersmessage.value = ""




    } else {
      alert("empty input field")
    }

} 
else if (messageStore.length > 0) {
    if (user.useremail !== "") {
      messageStore.push(user)

      localStorage.setItem("messageStore", JSON.stringify(messageStore))

      username.value = ""
      useremail.value = ""
      usersmessage.value = ""

    } else {
      alert("empty input field")
    }
  }
  console.log(messageStore);

})



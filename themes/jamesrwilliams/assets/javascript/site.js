/* Add clickable # links next to headers. */
var postContent = document.querySelector(".post-content");
if (postContent) {
  postContent
    .querySelectorAll("h1[id],h2[id],h3[id],h4[id],h5[id],h6[id]")
    .forEach((element) => {
      const linkElement = document.createElement("a");
      linkElement.href = "#" + element.id;
      linkElement.text = "#";
      linkElement.title = 'Link to "' + element.lastChild.data + '"';
      linkElement.classList.add("hlink");
      element.prepend(linkElement);
    });
}

var menuToggle = document.getElementById("toggle");
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    var navigation = document.getElementById("navigation");
    navigation.classList.toggle("active");
  });
}

const heading = document.getElementById("animated");
const final = document.createElement("div");
const elements = [...heading.childNodes];
let timeoutHandle;

function resetTitleSpans() {
  heading.querySelectorAll("span").forEach((span) => {
    span.style.color = null;
  });
}

elements.forEach((_element, index) => {
  let element = _element;
  if (element.nodeName !== "#text") {
    final.appendChild(element);
  } else {
    let words = element.textContent.split(" ");

    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let space = document.createTextNode(" ");

      if (word !== "") {
        let span = document.createElement("span");
        span.innerText = word;
        span.classList.add("word");
        final.appendChild(span);
        if (i !== words.length - 1) {
          final.appendChild(space);
        }
      } else {
        final.appendChild(space);
      }
    }
  }
});

heading.innerHTML = final.innerHTML;

heading.addEventListener("click", (event) => {
  if (
    event.target.tagName === "SPAN" &&
    event.target.classList.contains("word")
  ) {
    event.target.style.color = getRandomColor();
    window.clearTimeout(timeoutHandle);
    timeoutHandle = window.setTimeout(resetTitleSpans, 5000);
  }
});

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/sw.js')
//             .then(registration => {
//                 console.log(`Service Worker registered! Scope: ${registration.scope}`);
//             })
//             .catch(err => {
//                 console.log(`Service Worker registration failed: ${err}`);
//             });
//     });
// }

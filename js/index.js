// Globally declared the textarea
const sentence = document.getElementById("editor");

// for bold,italic and underline
function formatText(type) {
  if (type == "bold") {
    sentence.classList.toggle(type);
  } else if (type == "italic") {
    sentence.classList.toggle(type);
  } else {
    sentence.classList.toggle(type);
  }
}

// for text: left, right, center and justify

function textAlign(alignType) {
  sentence.style.textAlign = alignType;
  let alignButtons = document.getElementsByClassName("align");
  for (let i = 0; i < alignButtons.length; i++) {
    alignButtons[i].classList.remove("active");
  }
  sentence.classList.toggle("active");
}

// to change font size
function changeFontSize() {
  const fontNumber = document.getElementById("font-size");
  const value = fontNumber.value;

  sentence.style.fontSize = value + "px";
}

// uppercase, lowercase
function transformText() {
  const transform = document.getElementById("text-transform");
  if (sentence.style.textTransform == "uppercase") {
    sentence.style.textTransform = "none";
  } else {
    sentence.style.textTransform = "uppercase";
    transform.classList.add("active");
  }
}

// text color
function pickColor() {
  const color = document.getElementById("pick-color");
  const value = color.value;
  sentence.style.color = value;
}

// convert to pdf
window.jsPDF = window.jspdf.jsPDF;
const docPDF = new jsPDF();
function generatePDF() {
  const elementHTML = document.getElementById("editor");
  docPDF.html(elementHTML, {
    callback: function (docPDF) {
      docPDF.save("MyFile.pdf");
    },
    x: 15,
    y: 15,
    width: 170,
    windowWidth: 650,
    spellcheck: false,
  });
}

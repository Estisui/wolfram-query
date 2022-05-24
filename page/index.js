let input = document.querySelector('input');
let result = document.getElementById('result');
// let output = document.getElementById('output');
console.log(result);
// input.oninput = handleInput;

// function handleInput(e) {
//   output.textContent = `TextStructure["${e.target.value}", "DependencyGraphs"]`;
// }

function displayResult() {
   /* Copy the text inside the text field */
  result.src = "https://www.wolframcloud.com/obj/911d6841-9908-4d99-ac29-a339db03b994?_embed=iframe" + `&text="${input.value}"`;
}
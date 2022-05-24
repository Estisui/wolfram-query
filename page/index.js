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
  result.src = "https://www.wolframcloud.com/obj/320732ec-9ab8-4e6a-aa18-a299b9c53f3e?_embed=iframe" + `&text="${input.value}"`;
}
let input = document.querySelector('input');
let output = document.getElementById('output');
console.log(input);
console.log(output);

input.oninput = handleInput;

function handleInput(e) {
  output.textContent = `TextStructure["${e.target.value}", "DependencyGraphs"]`;
}
let a = 0;
let count = document.getElementById("count");

let btn = document.getElementById("btn");
btn.onclick = () => {
    a++;
    count.innerText = a;
}


const palette = document.getElementById("palette");
const button = document.getElementById("button");


button.addEventListener('click', () => {
    var color = document.getElementById("color").value;
    const el = document.createElement("div");
    el.innerHTML = `<p>${color}</p>`;
    el.style.backgroundColor = color;
    el.style.color = color;
    palette.appendChild(el);
})
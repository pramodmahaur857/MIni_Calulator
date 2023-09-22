function submit(e){
    let output = document.getElementById("output")
    output.innerText+= e.value;
}
function deleate(e){
    let output = document.getElementById("output")
    let str = String(output.textContent)
     str = str.slice(0, str.length-1);
     output.textContent = str
}
function cumpute(){
    let output = document.getElementById("output")
    output.textContent = eval(output.textContent)
}
function clearAll(){
    let output = document.getElementById("output") 
    output.textContent = "";
}
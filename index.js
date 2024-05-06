const logDiv = document.getElementById("log")
const stateDiv = document.getElementById("state")
const startBtn = document.getElementById("start-btn")
const stopBtn = document.getElementById("stop-btn")

startBtn.addEventListener("click",()=>{
    document.addEventListener("keydown",handleDown)
    document.addEventListener("keyup",handleUp)
    startBtn.disabled=true;
    stopBtn.disabled=false;
})
stopBtn.addEventListener("click",()=>{
    document.removeEventListener("keydown",handleDown)
    document.removeEventListener("keyup",handleUp)
    logDiv.textContent=""
    stateDiv.textContent=" "
    stopBtn.disabled=true;
    startBtn.disabled=false;
})

function handleDown(e){
    logDiv.textContent=`key ${e.key} pressed Down`;
    stateDiv.textContent="key is Up";
}
function handleUp(e){
    logDiv.textContent=`key ${e.key} pressed UP`;
    stateDiv.textContent="key is Up";
}
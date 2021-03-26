const textEl = document.getElementById('text'); 
const speedEl = document.getElementById('speed');
const text = 'Hello! My name is Mikhail Kulikov'; 
let idx = 1; 
let speed = 150; 

writeText() 

function writeText() {
    
    textEl.innerHTML = text.slice(0, idx); 
    idx++; 

    if (idx > text.length) {
        idx = 1; 
    }

    setTimeout(writeText, speed) 

    
}

speedEl.addEventListener('input', (e) => {
    speed = 300 / e.target.value; 
})
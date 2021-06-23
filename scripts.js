let controlBtm = document.getElementById('button_m');
let esc = document.getElementById('esc')

controlBtm.onclick = function(e) {
    esc.className = 'menu'
}

let controlBottom = document.getElementById('button_menu');
controlBottom.onclick =  function(e) {
    esc.className = 'close_menu'
}

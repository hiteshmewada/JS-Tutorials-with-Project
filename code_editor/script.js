const left = document.querySelector('.left'), right = document.querySelector('.right'), bar = document.querySelector('.bar'),editor=document.querySelector('.editor'),run=document.querySelector('.btn-run'),iframe=document.querySelector('iframe'),darkMode=document.querySelector('.btn-dark'),lightMode=document.querySelector('.btn-light');

const drag=(e)=>{
    // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    e.preventDefault();
    // The Selection.removeAllRanges() method removes all ranges from the selection, leaving the anchorNode and focusNode properties equal to null and leaving nothing selected.
    document.selection ? document.selection.empty():
    window.getSelection().removeAllRanges();
    // The pageX property returns the horizontal coordinate (according to the document) of the mouse pointer when a mouse event was triggered.
    left.style.width=(e.pageX-bar.offsetWidth/3)+"px";
    editor.resize();
}
bar.addEventListener('mousedown',()=>{
    // Element.onmousemove=
    document.addEventListener('mousemove',drag);
});
bar.addEventListener('mouseup',()=>{
    // document.onmouseup=null;
    // document.onmousemove=null;
    document.removeEventListener("mousemove",null);
});

// Run btn event Listener
run.addEventListener("click",()=>{
    const html=editor.textContent;
    iframe.src="data:text/html;charset=utf-8,"+encodeURI(html);
});

// set dark mode
darkMode.addEventListener("click",()=>{
    editor.style.backgroundColor="black";
    editor.style.color="white";
});

// set light mode
lightMode.addEventListener("click",()=>{
    editor.style.backgroundColor="";
    editor.style.color="";
});

// code for live button
document.getElementById('live').onclick=function(){
    if(this.checked){
        editor.addEventListener("keyup",()=>{
            const html=editor.textContent;
            iframe.src="data:text/html;charset=utf-8,"+encodeURI(html);
        })
        
    }
}
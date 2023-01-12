const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.body;let n=null;t.addEventListener("click",(()=>{n=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(()=>{clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.be108c22.js.map

(function(){var o=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark",m=localStorage.getItem("theme")??o;document.documentElement.setAttribute("saved-theme",m);var a=c=>{const t=new CustomEvent("themechange",{detail:{theme:c}});document.dispatchEvent(t)};document.addEventListener("nav",()=>{const c=n=>{const e=n.target.checked?"dark":"light";document.documentElement.setAttribute("saved-theme",e),localStorage.setItem("theme",e),a(e)},t=document.querySelector("#darkmode-toggle");t.removeEventListener("change",c),t.addEventListener("change",c),m==="dark"&&(t.checked=!0),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",n=>{const e=n.matches?"dark":"light";document.documentElement.setAttribute("saved-theme",e),localStorage.setItem("theme",e),t.checked=n.matches,a(e)})})})();
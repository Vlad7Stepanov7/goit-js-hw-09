!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.body,o=!1,a=null;function d(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}function c(n){clearInterval(a),o=!1,e.disabled=!o,t.disabled=o}c(),t.addEventListener("click",(function(c){o=!0,t.disabled=o,e.disabled=!o,a=setInterval((function(){n.style.backgroundColor=d(),console.log(n.style.backgroundColor=d())}),1e3)})),e.addEventListener("click",c)}();
//# sourceMappingURL=01-color-switcher.ff15c61f.js.map
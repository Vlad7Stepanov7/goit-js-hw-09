!function(){var t={form:document.querySelector(".form"),button:document.querySelector("button"),inputDelay:document.querySelector(".input-delay"),inputStep:document.querySelector("input-step"),inputAmount:document.querySelector(".input-amount")},n=t.inputDelay.value,e=0,o=t.inputAmount.value;function u(t,n){return new Promise((function(e,o){var u=Math.random()>.3;setTimeout((function(){u&&e({position:t,delay:n}),o({position:t,delay:n})}),n)}))}t.form.addEventListener("submit",(function(i){e=t.inputStep.value;for(var c=1;c<o;c+=1)1===c&&u(c,n),u(c,n+=e).then((function(t){var n=t.position,e=t.delay;return console.log("✅ Fulfilled promise ".concat(n," in ").concat(e,"ms"))})).catch((function(t){var n=t.position,e=t.delay;return console.log("❌ Rejected promise ".concat(n," in ").concat(e,"ms"))}))}))}();
//# sourceMappingURL=03-promises.2810a5fb.js.map

const e=document.querySelector("#textInput");let t=document.querySelector(".taskListSection");t.textContent="nothing to do, you can go to sleep";let n=[];addTaskBtn.addEventListener("click",(()=>{var o,c;e.value&&("nothing to do, you can go to sleep"===t.textContent&&(t.textContent="",t.classList.toggle("paddingTop")),o=n,c=e.value,o.push(c),function(e,t,n){let o=document.createElement("article"),c=document.createElement("p");c.innerHTML=e[e.length-1];let i=document.createElement("button");i.innerHTML="remove",i.addEventListener("click",(()=>function(e,t,n,o,c){e.remove(),function(e,t){e.splice(e.indexOf(t.innerHTML),1)}(n,t),function(e,t,n){0===e.length&&(t.innerHTML=n,t.classList.toggle("paddingTop"))}(n,o,c)}(o,c,e,t,n))),o.appendChild(c),o.appendChild(i),t.insertBefore(o,t.children[0])}(n,t,"nothing to do, you can go to sleep"),function(e){e.value=""}(e))}));
//# sourceMappingURL=index.14873606.js.map

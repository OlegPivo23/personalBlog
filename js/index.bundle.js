!function(){const e=document.querySelectorAll("[data-modal]"),t=document.body,o=document.querySelectorAll(".modal__close"),c=document.querySelectorAll(".modal");function n(e){e.classList.remove("active"),t.classList.remove("no-scroll")}e.forEach((e=>{e.addEventListener("click",(e=>{let t=event.currentTarget.getAttribute("data-modal");document.getElementById(t).classList.add("active");let o=document.querySelector(".modal__content");o.addEventListener("click",(e=>{e.stopPropagation()})),setTimeout((()=>{o.style.transform="none"}),2)}))})),o.forEach((e=>{e.addEventListener("click",(e=>{n(e.target.closest(".modal"))}))})),c.forEach((e=>{e.addEventListener("click",(e=>{n(e.target.closest(".modal"))}))})),document.querySelectorAll("[data-autoresize]").forEach((e=>{let t=e.offsetHeight;e.addEventListener("input",(e=>{let o=e.currentTarget;o.style.height=t+"px",o.style.height=o.scrollHeight+"px"}))})),function(){const e=document.body;document.querySelector(".burger").addEventListener("click",(()=>{e.classList.toggle("show-sidebar")}))}(),document.querySelector(".post__actions-link");const l=document.querySelector(".post__actions-share"),r=document.querySelector(".social-modal");function a(){let e=JSON.parse(localStorage.getItem("comments"))||[],t=document.querySelector(".main--comment");t.innerHTML="",e.forEach((e=>{let o=document.createElement("li");o.textContent=e,o.innerHTML=`<li class= 'comment__item'><div class='comment__header'><img src='#' alt='' class='comment__img'><p class='comment__person'> Дениска Какойтов<time datetime='2020-12-21 19:21'>неделю назад</time></p></div><div class='comment__text'><p>${e}</p></div></li>`,t.appendChild(o)}))}l.addEventListener("click",(()=>{r.classList.add("active")})),document.querySelector(".comments__form").addEventListener("submit",(function(e){e.preventDefault();let t=document.querySelector(".comments__form-text").value;t&&(function(e){let t=JSON.parse(localStorage.getItem("comments"))||[];t.push(e),localStorage.setItem("comments",JSON.stringify(t))}(t),document.querySelector(".comments__form-text").value="",a())})),a(),function(){const e=document.querySelector(".add-post__textarea"),t=document.querySelector(".add-post__btn"),o=document.querySelector(".post");t.addEventListener("click",(()=>{const t=e.value;if(""!==t.trim()){const e=document.createElement("div");e.textContent=t,o.appendChild(e)}}))}()}();
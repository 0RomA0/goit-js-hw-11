import{a as u,S as f,i as l}from"./assets/vendor-DXaqCXe3.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const d="https://pixabay.com/api/";function g(t){const r={key:"49367974-1ddb9c95ea8d865fcbee88608",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return u.get(d,{params:r}).then(s=>s.data).catch(s=>{console.log("Помилка при отриманні даних:",s)})}function y(t){const r=document.querySelector(".gallery");r.innerHTML="";const s=t.map(e=>`<li class="gallery-item">
    <a class="gallery-link" href=${e.largeImageURL}>
        <img class="gallery-image" src=${e.webformatURL} alt=${e.tags} />
    </a>
    <div class="info">
        <p class="gallery-info">Likes: <span class="galery-info-span">${e.likes}</span></p>
        <p class="gallery-info">Views: <span class="galery-info-span">${e.views}</span></p>
        <p class="gallery-info">Comments: <span class="galery-info-span">${e.comments}</span></p>
        <p class="gallery-info">Downloads: <span class="galery-info-span">${e.downloads}</span></p>
    </div>
</li>`).join("");r.innerHTML=s,new f(".gallery a").refresh()}const i=document.querySelector(".loader"),p=document.querySelector(".form"),c=document.querySelector("input"),m=document.querySelector(".gallery");p.addEventListener("submit",h);function h(t){if(t.preventDefault(),c.value.trim()==="")return l.show({message:"❌ Eter a search word",position:"topRight",color:"red"});m.innerHTML="",i.style.display="block",g(c.value).then(r=>{r.hits.length===0?l.show({message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"}):y(r.hits)}).catch(r=>{console.log("Помилка при отриманні даних:",r)}).finally(()=>{i.style.display="none"}),p.reset()}
//# sourceMappingURL=index.js.map

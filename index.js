import{a as m,S as y,i as n}from"./assets/vendor-BK_rxH-O.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",h="51715494-fc6bd8fe76f0a6511ef4fb43b";async function v(r){try{return(await m.get(g,{params:{key:h,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(a){throw a}}const c=document.getElementById("gallery"),d=document.getElementById("loader");let b=new y(".gallery a",{captionsData:"alt",captionDelay:250});function L(r){const a=r.map(({webformatURL:s,largeImageURL:o,tags:e,likes:t,views:i,comments:f,downloads:u})=>`
    <li class="gallery-item">
      <a href="${o}" data-caption="${e}">
        <img src="${s}" alt="${e}" loading="lazy" />
      </a>
      <div class="info">
        <div class="info-item">
          <span class="label">Likes</span>
          <span class="value">${t}</span>
        </div>
        <div class="info-item">
          <span class="label">Views</span>
          <span class="value">${i}</span>
        </div>
        <div class="info-item">
          <span class="label">Comments</span>
          <span class="value">${f}</span>
        </div>
        <div class="info-item">
          <span class="label">Downloads</span>
          <span class="value">${u}</span>
        </div>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",a),b.refresh()}function w(){c.innerHTML=""}function E(){d.classList.add("loader--visible")}function P(){d.classList.remove("loader--visible")}const p=document.getElementById("search-form"),l=p.querySelector('input[name="search-text"]');p.addEventListener("submit",async r=>{r.preventDefault();const a=l.value.trim();if(!a){n.warning({title:"Warning",message:"Please enter a search term.",position:"topRight"});return}w(),E();try{const s=await v(a);s.hits.length===0?n.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):L(s.hits)}catch(s){n.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"}),console.error(s)}finally{P()}l.value=""});
//# sourceMappingURL=index.js.map

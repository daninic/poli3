!function(){function c(e){let s="";return Object.entries(e).map(([e,t])=>{e=astra_search.search_post_types_labels[e]||e+"s";s+=`<label class="ast-search--posttype-heading"> ${e} </label>`,t.map(e=>{t=e.title.rendered;var t=(new DOMParser).parseFromString(t,"text/html").documentElement.textContent;s+=`<a class="ast-search-item" role="option" target="_self" href="${e.link}"> <span> ${t} </span> </a>`})}),s}window.addEventListener("load",function(e){document.querySelectorAll(".search-field").forEach(n=>{n.addEventListener("input",function(e){const a=n.closest("form.search-form");var e=e.target.value.trim(),t=astra_search.search_post_types,s=document.querySelectorAll(".ast-live-search-results");s&&s.forEach(function(e){e.parentNode.removeChild(e)});try{var r=`${astra_search.rest_api_url}wp/v2/posts${-1<astra_search.rest_api_url.indexOf("?")?"&":"?"}_embed=1&post_type=ast_queried:${t.join(":")}&per_page=${astra_search.search_posts_per_page}&search=`+e+(astra_search.search_language?"&lang="+astra_search.search_language:""),l=new XMLHttpRequest;l.open("GET",r,!0),l.onreadystatechange=function(){if(4===l.readyState&&200===l.status){var s=JSON.parse(l.responseText);let e="";if(0<s.length){let t={};s.map(e=>{e.type in t?t[e.type].push(e):t[e.type]=[e]});s=c(t);e=`
									<div
										class="ast-live-search-results"
										role="listbox"
										aria-label="Search results"
										style="top: ${parseInt(a.offsetHeight)+10}px;"
									>
										${s}
									</div>
								`}else e=`
									<div
										class="ast-live-search-results"
										role="listbox"
										aria-label="Search results"
										style="top: ${parseInt(a.offsetHeight)+10}px;"
									>
										<label class="ast-search--no-results-heading"> ${astra_search.no_live_results_found} </label>
									</div>
								`;s=document.querySelectorAll(".ast-live-search-results");s&&s.forEach(function(e){e.parentNode.removeChild(e)}),a.insertAdjacentHTML("beforeend",e)}},l.send()}catch(e){console.error("Error while fetching data:",e)}})})}),document.addEventListener("click",function(e){var e=e.target.closest("form.search-form");null!==e?e.querySelector(".ast-live-search-results")&&(e.querySelector(".ast-live-search-results").style.display="block"):(e=document.querySelectorAll(".ast-live-search-results"))&&e.forEach(function(e){e.style.display="none"})})}()
;
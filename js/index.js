!function(){function t(t,s,i){return s in t?Object.defineProperty(t,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[s]=i,t}function s(t){let s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.disabled!==s&&(t.disabled=s)}new class{constructor(s){t(this,"resize",(()=>{this.getSizes(),this.modal.classList.contains("explosion_opened")&&(this.cardsData=this.cards.map((t=>t.getBoundingClientRect())),this.setImgsSizes(),this.styleImages(),this.placeActions())})),t(this,"onKeyDown",(t=>{this.modal.classList.contains("explosion_opened")&&("Escape"===t.key?this.onModalClose():"ArrowLeft"===t.key||"ArrowUp"===t.key?(t.preventDefault(),this.changeImage(-1)):"ArrowRight"!==t.key&&"ArrowDown"!==t.key||(t.preventDefault(),this.changeImage(1)))})),t(this,"onClick",(t=>{t.preventDefault();const s=t.target.closest("a");s&&!this.modal.classList.contains("explosion_opening")&&(this.index=+s.dataset.index,this.cardsData=this.cards.map((t=>t.getBoundingClientRect())),this.setImgsSizes(),this.setImgsInitialPositions(),this.modal.classList.add("explosion_opening"),function(t,s){let i;!function e(){if(i=+t.style.opacity,i<1)return i+=.1,t.style.opacity=i,void window.requestAnimationFrame(e);s&&s()}()}(this.modal,(()=>{this.modal.classList.remove("explosion_opening"),this.modal.classList.add("explosion_opened"),this.groupImages(),this.styleImages(),this.setDescription(),this.placeActions()})))})),t(this,"onModalClose",(()=>{this.modal.classList.remove("explosion_opened"),this.modal.classList.add("explosion_closing"),this.setImgsInitialPositions(),this.explImgs.forEach((t=>{t.style.opacity=1,t.style.transform+="scale(1)"})),function(t,s){let i;!function e(){if(i=+t.style.opacity,i>0)return i-=.025,t.style.opacity=i,void window.requestAnimationFrame(e);s&&s()}()}(this.modal,(()=>{this.modal.classList.remove("explosion_closing")}))})),t(this,"onActionsClick",(t=>{if("btn-prev"!==t.target.id&&"btn-next"!==t.target.id)return;let s="btn-prev"===t.target.id?-1:1;this.changeImage(s)})),t(this,"changeImage",(t=>{0===this.index&&t<0||this.index===this.cardsNum-1&&t>0||(this.index+=t,this.groupImages(),this.styleImages(),this.setDescription(!0),this.setCounter())})),this.gallery=document.getElementById(s),this.cards=[...this.gallery.querySelectorAll(".card")],this.cardsNum=this.cards.length,this.index=0,this.limit=4,this.minWidth=1023,this.minHeight=600,this.getSizes(),this.initModal(),this.events()}getSizes(){this.modalWidth=Math.max(window.innerWidth,this.minWidth),this.modalHeight=Math.max(window.innerHeight,this.minHeight),this.galleryWidth=this.gallery.getBoundingClientRect().width,this.cardWidth=this.cards[0].getBoundingClientRect().width,this.cardHeight=this.cards[0].getBoundingClientRect().height}initModal(){this.modal=document.createElement("div"),this.modal.classList.add("explosion");const t=this.cards.map((t=>'<img src="'.concat(t.href,'" alt="').concat(t.dataset.title,'" class="explosion__img">'))).join("");this.modal.innerHTML="            \n            ".concat(t,'           \n            <div class="explosion-actions" id="explosion-actions">\n                <button class="explosion__close" id="modal-close"><img src="img/icons/close.svg" alt="close icon"></button> \n                <div class="explosion-nav">\n                    <button class="explosion__btn explosion__btn_up" id="btn-prev"></button>\n                    <span class="explosion__counter" id="counter">1/').concat(this.cardsNum,'</span>\n                    <button class="explosion__btn explosion__btn_down" id="btn-next"></button>\n                </div>                \n            </div>\n            <div class="explosion-description" id="explosion-description">\n                <div class="explosion-description-wrapper" id="explosion-description-wrapper">\n                    <h2 class="explosion__title" id="explosion-title"></h2>\n                    <p class="explosion__text" id="explosion-text"></p>\n                </div>\n            </div>                       \n        '),document.body.append(this.modal),this.modalClose=document.getElementById("modal-close"),this.explosionActions=document.getElementById("explosion-actions"),this.explImgs=this.modal.querySelectorAll(".explosion__img"),this.navBtnNext=document.getElementById("btn-next"),this.navBtnPrev=document.getElementById("btn-prev"),this.counter=document.getElementById("counter"),this.explDescr=document.getElementById("explosion-description"),this.explosionDescrWrapper=document.getElementById("explosion-description-wrapper"),this.explTitle=document.getElementById("explosion-title"),this.explTextNode=document.getElementById("explosion-text")}setImgsSizes(){this.explImgs.forEach(((t,s)=>{t.style.width=this.cardsData[s].width+"px",t.style.height=this.cardsData[s].height+"px"}))}setImgsInitialPositions(){this.explImgs.forEach(((t,s)=>{t.style.transform="translate3d(".concat(this.cardsData[s].left.toFixed(1),"px,\n                                               ").concat(this.cardsData[s].top.toFixed(1),"px, 0)")}))}groupImages(){this.prevHiddenImgs=[],this.prevImgs=[],this.activeImg=null,this.nextImgs=[],this.nextHiddenImgs=[],this.explImgs.forEach(((t,s)=>{s+this.limit<this.index?this.prevHiddenImgs.unshift(t):s<this.index?this.prevImgs.unshift(t):s===this.index?this.activeImg=this.explImgs[s]:s-this.index<=this.limit?this.nextImgs.push(t):this.nextHiddenImgs.push(t)}))}styleImages(){this.prevHiddenImgs.forEach((t=>this.setImgStyles(t,{opacity:"0",zIndex:1,transform:"translate3d(".concat(.3*this.modalWidth,"px, ").concat(-this.modalHeight,"px, 0) scale(0.4)")}))),this.setImgStyles(this.prevImgs[0],{opacity:"0.4",zIndex:1,transform:"translate3d(".concat(.24*this.modalWidth,"px, ").concat(this.modalHeight-this.cardHeight,"px, 0) scale(0.75)")}),this.setImgStyles(this.prevImgs[1],{opacity:"0.3",zIndex:1,transform:"translate3d(".concat(.06*this.modalWidth,"px, ").concat(.33*this.modalHeight,"px, 0) scale(0.6)")}),this.setImgStyles(this.prevImgs[2],{opacity:"0.2",zIndex:1,transform:"translate3d(".concat(.15*this.modalWidth,"px, 0, 0) scale(0.5)")}),this.setImgStyles(this.prevImgs[3],{opacity:"0.1",zIndex:1,transform:"translate3d(".concat(.3*this.modalWidth,"px, ").concat(-.15*this.modalHeight,"px, 0) scale(0.4)")}),this.setImgStyles(this.activeImg,{opacity:1,transform:"translate3d(".concat((this.modalWidth-this.cardWidth)/2,"px,\n                                    ").concat((this.modalHeight-this.cardHeight)/2,"px, 0)\n                        scale(1.2)"),zIndex:3}),this.setImgStyles(this.nextImgs[0],{opacity:"0.4",zIndex:2,transform:"translate3d(".concat(.52*this.modalWidth,"px, 0, 0) scale(0.75)")}),this.setImgStyles(this.nextImgs[1],{opacity:"0.3",zIndex:1,transform:"translate3d(".concat(.71*this.modalWidth,"px, ").concat(.12*this.modalHeight,"px, 0) scale(0.6)")}),this.setImgStyles(this.nextImgs[2],{opacity:"0.2",zIndex:1,transform:"translate3d(".concat(.66*this.modalWidth,"px, ").concat(.46*this.modalHeight,"px, 0) scale(0.5)")}),this.setImgStyles(this.nextImgs[3],{opacity:"0.1",zIndex:1,transform:"translate3d(".concat(.53*this.modalWidth,"px, ").concat(.67*this.modalHeight,"px, 0) scale(0.4)")}),this.nextHiddenImgs.forEach((t=>this.setImgStyles(t,{opacity:"0",zIndex:1,transform:"translate3d(".concat(.53*this.modalWidth,"px, ").concat(this.modalHeight,"px, 0) scale(0.4)")})))}setImgStyles(t,s){t&&Object.keys(s).forEach((i=>t.style[i]=s[i]))}setDescription(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{title:s,description:i}=this.cards[this.index].dataset;t?(this.explosionDescrWrapper.style.opacity=0,setTimeout((()=>{this.explTitle.innerText=s,this.explTextNode.innerText=i,this.explosionDescrWrapper.style.opacity=1}),250)):(this.explTitle.innerText=s,this.explTextNode.innerText=i)}placeActions(){this.explosionActions.style.top="".concat((this.modalHeight-1.2*this.cardHeight)/2,"px"),this.explosionActions.style.height="".concat(350-70*(1903-this.modalWidth)/880,"px"),this.setCounter()}setCounter(){this.index+1===1?(s(this.navBtnPrev,!0),s(this.navBtnNext,!1)):this.index+1===this.cardsNum?(s(this.navBtnPrev,!1),s(this.navBtnNext,!0)):(s(this.navBtnPrev,!1),s(this.navBtnNext,!1)),this.counter.innerText="".concat(this.index+1,"/").concat(this.cardsNum," ")}events(){const t=function(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,i=!1,e=null,n=null;return function o(){for(var a=arguments.length,l=new Array(a),h=0;h<a;h++)l[h]=arguments[h];if(i)return e=this,void(n=l);t.apply(this,l),i=!0,setTimeout((()=>{i=!1,null!==e&&(o.apply(e,n),e=null)}),s)}}(this.resize);window.addEventListener("resize",t),window.addEventListener("keydown",this.onKeyDown),this.gallery.addEventListener("click",this.onClick),this.modalClose.addEventListener("click",this.onModalClose),this.explosionActions.addEventListener("click",this.onActionsClick)}}("gallery")}();
var AU=AU||{};!function(_){var b={},g={},A=!1;function S(e,t,n,o){if("opening"===t||"open"===t)var a=n||"au-main-nav__content--closed",l=o||"au-main-nav__content--open";else a=o||"au-main-nav__content--open",l=n||"au-main-nav__content--closed";var i,c,u,s;s=a,(u=e).classList?u.classList.remove(s):u.className=u.className.replace(new RegExp("(^|\\b)"+s.split(" ").join("|")+"(\\b|$)","gi")," "),c=l,(i=e).classList?i.classList.add(c):i.className=i.className+" "+c}function w(t,e,n){function o(e){var t=n.apply(this,arguments);return!1===t&&(e.stopPropagation(),e.preventDefault()),t}function a(){var e=n.call(t,window.event);return!1===e&&(window.event.returnValue=!1,window.event.cancelBubble=!0),e}return t.addEventListener?(t.addEventListener(e,o,!1),{element:t,handler:o,event:e}):(t.attachEvent("on"+e,a),{element:t,handler:a,event:e})}function x(e){e.element.removeEventListener?e.element.removeEventListener(e.event,e.handler):e.element.detachEvent("on"+e.event,e.handler)}b.Toggle=function(a,e,l){if(!A){A=!0;try{window.event.cancelBubble=!0,event.stopPropagation()}catch(e){}"object"!=typeof l&&(l={});var t,i,n=a.getAttribute("aria-controls"),o=document.getElementById(n),c=o.querySelector(".au-main-nav__menu"),u=o.querySelector(".au-main-nav__overlay"),s=o.querySelector(".au-main-nav__toggle--close"),r=o.querySelector(".au-main-nav__toggle--open"),p=o.querySelector(".au-main-nav__focus-trap-top"),d=o.querySelector(".au-main-nav__focus-trap-bottom"),f=c.querySelectorAll("a, .au-main-nav__toggle"),v=-1===o.className.indexOf("au-main-nav__content--open"),y=c.offsetWidth,m=v?"opening":"";u.style.display="block",t=o,i=e,_.animate.Toggle({element:c,property:"left",openSize:0,closeSize:-1*y,speed:i||250,prefunction:function(){"opening"===m?(c.style.display="block",u.style.left=0,u.style.opacity=.5,"function"==typeof l.onOpen&&l.onOpen()):(u.style.opacity="0","function"==typeof l.onClose&&l.onClose())},postfunction:function(){"opening"===m?(s.focus(),r.setAttribute("aria-expanded",!0),s.setAttribute("aria-expanded",!0),p.setAttribute("tabindex",0),d.setAttribute("tabindex",0),g.focusTop=w(p,"focus",function(){f[f.length-1].focus()}),g.focusBottom=w(d,"focus",function(){f[0].focus()}),g.escKey=w(document,"keyup",function(){var e,t,n=n||window.event,o=(e=u,t="display",("undefined"!=typeof getComputedStyle?getComputedStyle(e,null):e.currentStyle)[t]);27===n.keyCode&&"block"===o&&b.Toggle(a,i,l)}),"function"==typeof l.afterOpen&&l.afterOpen()):(r.focus(),r.setAttribute("aria-expanded",!1),s.setAttribute("aria-expanded",!1),p.removeAttribute("tabindex"),d.removeAttribute("tabindex"),x(g.focusTop),x(g.focusBottom),x(g.escKey),"function"==typeof l.afterClose&&l.afterClose()),S(t,m),S(document.body,m,"au-main-nav__scroll--unlocked","au-main-nav__scroll--locked"),c.style.display="",c.style.left="",u.style.display="",u.style.left="",u.style.opacity="",A=!1}})}},_.mainNav=b}(AU),"undefined"!=typeof module&&(module.exports=AU);
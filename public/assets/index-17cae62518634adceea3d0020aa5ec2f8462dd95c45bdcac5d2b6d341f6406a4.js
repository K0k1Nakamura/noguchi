$(function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var e={REGISTERED:{failed:!1,msg:"registered!"},UNLOCKED:{failed:!1,msg:"unlocked!"},LENGTH_ERR:{failed:!0,msg:"key length error!"},WRONG_KEY:{failed:!0,msg:"key incorrect!"}},s=function(){function s(){var e=arguments.length<=0||void 0===arguments[0]?{max:8,min:4}:arguments[0];t(this,s),this.maxlength=e.max,this.minlength=e.min,this.$palette_wrapper=document.getElementById("palette_wrapper"),this.$palette=document.getElementById("palette"),this.$register={msg:document.getElementById("msg_register"),btn:document.getElementById("btn_register")},this.$input={msg:document.getElementById("msg_input"),btn:document.getElementById("btn_input")},this.$user_input=document.getElementById("user_input"),this.$hint=document.getElementById("hint"),this.init(),this.bindEvents()}return s.prototype.init=function(){this.key="",this.isInit=!0,this.resetUserInput()},s.prototype.resetLock=function(){this.$register.btn.classList.remove("hide"),this.$register.msg.classList.remove("hide"),this.$input.btn.classList.add("hide"),this.$input.msg.classList.add("hide"),this.init()},s.prototype.register=function(){return this.isInit?(this.userInput.length>this.maxlength||this.userInput.length<this.minlength?this.throwMsg(e.LENGTH_ERR):(this.key=this.userInput,this.isInit=!1,this.throwMsg(e.REGISTERED),this.$register.btn.classList.add("hide"),this.$register.msg.classList.add("hide"),this.$input.btn.classList.remove("hide"),this.$input.msg.classList.remove("hide"),this.$palette_wrapper.classList.add("success")),void this.resetUserInput()):void this.throwMsg(e.REG_FAILED)},s.prototype.input=function(){this.userInput===this.key?(this.resetLock(),this.throwMsg(e.UNLOCKED),this.$palette_wrapper.classList.add("success")):(console.log("your key is "+this.key),this.throwMsg(e.WRONG_KEY)),this.resetUserInput()},s.prototype.throwMsg=function(t){var e=this;this.$hint.textContent=t.msg,t.failed?this.$hint.classList.add("fail"):this.$hint.classList.add("success"),setTimeout(function(){e.$hint.classList.remove("success","fail")},1e3)},s.prototype.bindEvents=function(){var t=this,e=function(e){return t.register(e)},s=function(e){return t.setUserInput(e)},i=function(e){return t.keypressManager(e)};this.$register.btn.addEventListener("click",e),this.$palette.addEventListener("click",s),document.body.addEventListener("keypress",i),this.$palette_wrapper.addEventListener("animationend",function(){t.$palette_wrapper.classList.remove("success")})},s.prototype.resetUserInput=function(){this.userInput=""},s.prototype.setUserInput=function(t){var e="/jackets/"+t.target.dataset.key;location.href=e},s.prototype.getUserInputHtml=function(t){var e=document.createElement("div");return e.className="code code"+t,e},s.prototype.keypressManager=function(t){t.which>47&&t.which<58?this.setUserInput(t):13===t.which?this.key?this.input():this.register():99===t.which&&this.resetLock()},s}();new s}),window.onload=function(){size=$(window).width()<$(window).height()?$(window).width():$(window).height(),size*=.8,$(".palette").css("height",size+"px"),$(".palette").css("width",size+"px"),$(".btn").css("height",.8*size+"px"),$(".btn").css("width",.8*size+"px"),$(".cd-gallery").css("height",.7*size+"px"),$(".cd-gallery").css("width",.7*size+"px"),$(".cd-item-info").css("height",.1*size+"px"),$(".cd-item-info img").css("height",.1*size+"px"),$(".cd-dots").css("top",.54*size+"px"),$(".cd-item-info").css("margin-top","0"),$(".cd-item-info").css("margin-bottom","0"),size<366&&$(".cd-item-info").empty()},$(window).resize(function(){size=$(window).width()<$(window).height()?$(window).width():$(window).height(),size*=.8,$(".palette").css("height",size+"px"),$(".palette").css("width",size+"px"),$(".btn").css("height",.8*size+"px"),$(".btn").css("width",.8*size+"px"),$(".cd-gallery").css("height",.7*size+"px"),$(".cd-gallery").css("width",.7*size+"px"),$(".cd-item-info").css("height",.1*size+"px"),$(".cd-item-info img").css("height",.1*size+"px"),$(".cd-dots").css("top",.54*size+"px"),$(".cd-item-info").css("margin-top","0"),$(".cd-item-info").css("margin-bottom","0"),size<366&&$(".cd-item-info").empty()});
$(function(){
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var MSG = {
    REGISTERED: {
                  failed: false,
msg: "registered!"
                },
UNLOCKED: {
            failed: false,
msg: "unlocked!"
          },
LENGTH_ERR: {
              failed: true,
msg: "key length error!"
            },
WRONG_KEY: {
             failed: true,
msg: "key incorrect!"
           }
  };

  var ColorLock = (function () {
    function ColorLock() {
      var config = arguments.length <= 0 || arguments[0] === undefined ? { max: 8, min: 4 } : arguments[0];

      _classCallCheck(this, ColorLock);

      this.maxlength = config.max;
      this.minlength = config.min;

      this.$palette_wrapper = document.getElementById("palette_wrapper");
      this.$palette = document.getElementById("palette");
      this.$register = {
        msg: document.getElementById("msg_register"),
      btn: document.getElementById("btn_register")
      };
      this.$input = {
        msg: document.getElementById("msg_input"),
      btn: document.getElementById("btn_input")
      };
      this.$user_input = document.getElementById("user_input");
      this.$hint = document.getElementById("hint");

      this.init();
      this.bindEvents();
    }

    ColorLock.prototype.init = function init() {
      this.key = "";
      this.isInit = true;
      this.resetUserInput();
    };

    ColorLock.prototype.resetLock = function resetLock() {
      this.$register.btn.classList.remove("hide");
      this.$register.msg.classList.remove("hide");
      this.$input.btn.classList.add("hide");
      this.$input.msg.classList.add("hide");
      this.init();
    };

    ColorLock.prototype.register = function register() {
      if (!this.isInit) {
        this.throwMsg(MSG.REG_FAILED);
        return;
      }
      if (this.userInput.length > this.maxlength || this.userInput.length < this.minlength) {
        this.throwMsg(MSG.LENGTH_ERR);
      } else {
        this.key = this.userInput;
        this.isInit = false;
        this.throwMsg(MSG.REGISTERED);
        this.$register.btn.classList.add("hide");
        this.$register.msg.classList.add("hide");
        this.$input.btn.classList.remove("hide");
        this.$input.msg.classList.remove("hide");
        this.$palette_wrapper.classList.add("success");
      }
      this.resetUserInput();
    };

    ColorLock.prototype.input = function input() {
      if (this.userInput === this.key) {
        this.resetLock();
        this.throwMsg(MSG.UNLOCKED);
        this.$palette_wrapper.classList.add("success");
      } else {
        console.log("your key is " + this.key);
        this.throwMsg(MSG.WRONG_KEY);
      }
      this.resetUserInput();
    };

    ColorLock.prototype.throwMsg = function throwMsg(status) {
      var _this = this;

      this.$hint.textContent = status.msg;
      if (status.failed) {
        this.$hint.classList.add("fail");
      } else {
        this.$hint.classList.add("success");
      }
      setTimeout(function () {
        _this.$hint.classList.remove("success", "fail");
      }, 1000);
    };

    ColorLock.prototype.bindEvents = function bindEvents() {
      // ここでイベントを発火させてる
      var _this2 = this;

      var _register = function _register(e) {
        return _this2.register(e);
      },
          _input = function _input(e) {
            return _this2.input(e);
          },
          _setUserInput = function _setUserInput(e) {
            return _this2.setUserInput(e);
          },
          _keypressManager = function _keypressManager(e) {
            return _this2.keypressManager(e);
          };

      this.$register.btn.addEventListener("click", _register);
      // this.$input.btn.addEventListener("click", _input);
      this.$palette.addEventListener("click", _setUserInput);
      document.body.addEventListener("keypress", _keypressManager);
      this.$palette_wrapper.addEventListener("animationend", function () {
        _this2.$palette_wrapper.classList.remove("success");
      });
    };

    ColorLock.prototype.resetUserInput = function resetUserInput() {
      this.userInput = "";
      // while (this.$user_input.firstChild) {
      //   this.$user_input.removeChild(this.$user_input.firstChild);
      // }
    };

    ColorLock.prototype.setUserInput = function setUserInput(e) {
      var url = "/jackets/" + e.target.dataset.key;
      location.href = url;
      // $.ajax({
      //   url: 'items/api'
      // }).done(function(res){
      //   $('.cd-item-wrapper > *').remove();
      //   $('.cd-item-info > *').remove();
      //   $('.cd-dots > *').remove();
      //
      //   console.log("suc");
      //
      //   $.each(res, function(index, val){
      //     var str = '<li ';
      //
      //     if (index == 0) {
      //       str += 'class="selected"';
      //     } else if (index == 1) {
      //       str += 'class="move-right"';
      //     }
      //
      //     if (val.tidimi) {
      //       str += 'data-tidimi="true"';
      //     } else {
      //       str += 'data-tidimi="false"';
      //     }
      //
      //     str += '>';
      //
      //     str += '<a href="' + val.link_url + '"><img src="assets/'+ val.image_url +'" alt="Preview image"></a></li>';
      //
      //     $(str).appendTo('.cd-item-wrapper');
      //
      //     console.log(str);
      //     console.log(index);
      //     console.log(JSON.stringify(val, null, '   '));
      //     console.log(val.id);
      //   });
          // $.gallerySet();
        // console.log(JSON.stringify(res, null, '   '));
      // }).fail(function(res){
      //   console.log("fail");
      // });
    };

    ColorLock.prototype.getUserInputHtml = function getUserInputHtml(n) {
      var dom = document.createElement("div");
      dom.className = "code code" + n;
      return dom;
    };

    ColorLock.prototype.keypressManager = function keypressManager(e) {
      if (e.which > 47 && e.which < 58) {
        this.setUserInput(e);
      } else if (e.which === 13) {
        if (this.key) {
          this.input();
        } else {
          this.register();
        }
      } else if (e.which === 99) {
        this.resetLock();
      }
    };

    return ColorLock;
  })();

  var colorLock = new ColorLock();
});


window.onload = function () {
  size = ($(window).width() < $(window).height())
    ? $(window).width()
    : $(window).height();

  size *= 0.8;

  $(".palette").css("height", size + "px");
  $(".palette").css("width", size + "px");

  $(".btn").css("height", size*0.8 + "px");
  $(".btn").css("width", size*0.8 + "px");

  $(".cd-gallery").css("height", size*0.7 + "px");
  $(".cd-gallery").css("width", size*0.7 + "px");

  $(".cd-item-info").css("height", size*0.1 + "px");
  $(".cd-item-info img").css("height", size*0.1 + "px");

  if ( size < 366 ) {
    $(".cd-item-info img").remove();
  }


}

$(window).resize(function () {
  size = ($(window).width() < $(window).height())
    ? $(window).width()
    : $(window).height();

  size *= 0.8;

  $(".palette").css("height", size + "px");
  $(".palette").css("width", size + "px");

  $(".btn").css("height", size*0.8 + "px");
  $(".btn").css("width", size*0.8 + "px");

  $(".cd-gallery").css("height", size*0.7 + "px");
  $(".cd-gallery").css("width", size*0.7 + "px");

  $(".cd-item-info").css("height", size*0.1 + "px");
  $(".cd-item-info img").css("height", size*0.1 + "px");
});


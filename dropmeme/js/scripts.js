// Generated by CoffeeScript 1.3.3
(function() {
  var DropMemeBookmarklet,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  DropMemeBookmarklet = (function() {

    function DropMemeBookmarklet() {
      this.init = __bind(this.init, this);
      this.addCss();
      if (typeof $ === 'undefined') {
        this.linkjQuery();
      } else if (parseFloat($.fn.jquery) < 1.7) {
        this.linkjQuery();
      } else {
        this.init();
      }
    }

    DropMemeBookmarklet.prototype.init = function() {
      var _ref;
      if ((_ref = this.$elem) != null ? _ref.length : void 0) {
        this.$elem.remove();
        return delete this.$elem;
      } else {
        this.createElem();
        return this.cloneImages(document.getElementsByTagName('img'));
      }
    };

    DropMemeBookmarklet.prototype.createElem = function() {
      this.elem = document.createElement('div');
      this.elem.id = "DropMeme";
      this.$elem = $(this.elem);
      return document.body.appendChild(this.elem);
    };

    DropMemeBookmarklet.prototype.cloneImages = function(images) {
      var $image, $link, clone, container, image, link, _i, _len;
      container = document.createElement('div');
      container.className = 'DropMemeContainer';
      for (_i = 0, _len = images.length; _i < _len; _i++) {
        image = images[_i];
        $image = $(image);
        link = document.createElement('a');
        link.href = "http://dropmeme.com?remote_template=" + $image[0].src;
        clone = document.createElement('img');
        clone.src = image.src;
        $link = $(link);
        $link.css({
          top: "" + ($image.offset().top) + "px",
          left: "" + ($image.offset().left) + "px",
          width: "" + ($image.width()) + "px"
        });
        link.appendChild(clone);
        if (image.clientWidth > 0) {
          container.appendChild(link);
        }
      }
      return this.elem.appendChild(container);
    };

    DropMemeBookmarklet.prototype.addCss = function() {
      var css;
      css = document.createElement('link');
      css.href = 'http://heliom.github.com/bookmarklets/dropmeme/css/styles.css';
      css.rel = 'stylesheet';
      css.type = 'text/css';
      return document.getElementsByTagName('head')[0].appendChild(css);
    };

    DropMemeBookmarklet.prototype.linkjQuery = function() {
      var script;
      script = document.createElement('script');
      script.src = '//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.2/jquery.min.js';
      script.onload = this.init;
      script.onreadystatechange = function() {
        if (this.readyState === 'complete') {
          return this.init();
        }
      };
      return document.getElementsByTagName('head')[0].appendChild(script);
    };

    return DropMemeBookmarklet;

  })();

  window.dropmeme = new DropMemeBookmarklet;

}).call(this);

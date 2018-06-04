define(['jquery', 'app'], function ($, app) {
  var defaults = { 
    rate: 30, 
    startAtFrame: null, 
    bindHover: true, 
  }; 
  function isInt(n) 
    { return Number(n) === n && n % 1 === 0; }
  function Flipbook(element, options) {
    this.element = element; 
    this.$element = $(element); 
    this.image = this.getBackgroundSrc(); 
    this.options = $.extend({}, defaults, options); 
    if (this.image == null) { 
      throw new Error('Flipbook element doesn\'t have a background image'); 
    }
    this.init();
  }
  Flipbook.prototype = {
    init: function () { 
      var self = this; 
      this.setTrigger(); 
      this.image.onload = function () { 
        self.setFrames(); 
        self.bindResize(); 
        if (self.options.bindHover) { 
          self.bindHover(); 
        } 
      }; 
    }, 
    getBackgroundSrc: function () { 
      var src = this.element.style.backgroundImage; 
      if (src.length) { 
        var img = new Image(); 
        img.src = src.replace(/^url\(["']?/, '').replace(/["']?\)$/, ''); 
        return img; 
      } else { 
        return null; 
      } 
    }, 
    setFrames: function () { 
      this.viewportWidth = this.element.offsetWidth; 
      this.ratio = this.viewportWidth / this.options.frameWidth; 
      this.frames = this.image.width / this.options.frameWidth; 
      this.lastFramePos = (this.image.width + this.options.frameWidth) * this.ratio; this.resetFrames(); 
    }, 
    setTrigger: function () { 
      var trigger = $(this.element.getAttribute('data-flipbook-trigger')); 
      this.triggerEl = trigger.length ? trigger : this.$element; 
    }, 
    bindHover: function () { 
      this.triggerEl.on('mouseenter.flipbook', this.animate.bind(this)); 
      this.triggerEl.on('mouseleave.flipbook', this.resetFrames.bind(this)); 
    }, 
    bindResize: function () { 
      $(window).on('resize.flipbook', this.setFrames.bind(this)); 
    }, animate: function () {
      var self = this, interval = 1000 / this.options.rate, i = 0; 
      function moveFrame() { 
        this.$element.css({ backgroundPosition: -this.viewportWidth * i + 'px 0px' }); 
        i++; 
        if (i >= this.frames) { this.resetFrames(); 
        } 
      }
      this.interval = setInterval(moveFrame.bind(this), interval);
    }, 
    resetFrames: function () { 
      var self = this, frameToReset = this.lastFramePos; 
      this.$element.css('backgroundPosition', this.lastFramePos); 
      clearInterval(self.interval); 
    }, 
    moveToFrame: function (n) { 
      if (isInt(n)) { this.$element.css('backgroundPosition', n); 
    } 
  }
  }; 
  return function ($elements, options) { 
    $elements.each(function () { new Flipbook(this, options); 
    }); 
  };
});
/* Typewriter.js
 *
 *
 *
 */
(function (exports) {
  
  function Typewriter() {}
  
  Typewriter.prototype = {
    
    start: function (el, speed, options) {
      var text = el.textContent,
          splitText = this._splitChars(text);
      
      speed = speed || 50;
      options = options || {};
      
      el.textContent = '';
       
      if (splitText.length) { 
          this.insertSingle(el, splitText, speed, options);
      }
    },
    
    insertSingle: function (el, text, speed,  options) {
      var self = this,
          chr, length, rSpeed = speed;
 
      (function addChar() {
          setTimeout(function () {
              length = text.length; 
              chr = text.pop();
              rSpeed = options.random ? self._getRandomSpeed(speed) : speed;  
           
            if (length) { 
                var write = el.textContent + chr;
                el.textContent = write;
                addChar();
            } else {
                if (options.callback) {
                options.callback();
            }   
          }
        }, rSpeed);
      }());
    },
    
    _getRandomSpeed: function (speed) {
        return Math.floor(Math.random() * (speed - 250) + 250);
    },
     
    _splitChars: function (text) {
        return text.split('').reverse();
    }
  }; 
  
  exports.Typewriter = new Typewriter();
}(window));
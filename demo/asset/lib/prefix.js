define(function(){
var _vendor = (function () {
var _elementStyle = document.createElement('div').style;
var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
        transform,
        i = 0,
        l = vendors.length;

    for (; i < l; i++) {
        transform = vendors[i] + 'ransform';
        if (transform in _elementStyle) return vendors[i].substr(0, vendors[i].length - 1);
    }

    return false;
})();

function prefixedEvent(element, type, callback) {
  var pfx = ["webkit", "moz", "MS", "o", ""];
  for (var p = 0; p < pfx.length; p++) {
    if (!pfx[p]) type = type.toLowerCase();
    element.addEventListener(pfx[p]+type, callback, false);
  }
}

function prefixStyle(style) {
    if (_vendor === false) return false;
    if (_vendor === '') return style;
    return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
}

prefixStyle.vender = _vendor;

return {
  vender: _vendor,
  style: prefixStyle,
  events:  prefixedEvent
};

});
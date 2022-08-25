
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?348f029f2ae047e801e49d8d50b4122e";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();



// 1.控制台
console.log("%cNANGUI V2.0.5(0814)%c© ABLSOFT", "background-color:#1e90ff;color:white;padding:6px;", "background-color:#323232;color:white;padding:6px;")


// 2.安全
document.onselectstart = function (event) {
    if (window.event) {
        event = window.event;
    }
    try {
        var the = event.srcElement;
        if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
            return false;
        }
        return true;
    } catch (e) {
        return false;
    }
}

document.onkeydown = function () {
    if (event.ctrlKey && window.event.keyCode == 83) {
        return false;
    }
}

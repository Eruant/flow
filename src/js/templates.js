(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.templatizer = factory();
    }
}(this, function () {
    var jade=function(){function r(r){return null!=r&&""!==r}function n(e){return Array.isArray(e)?e.map(n).filter(r).join(" "):e}var e={};return e.merge=function t(n,e){if(1===arguments.length){for(var a=n[0],s=1;s<n.length;s++)a=t(a,n[s]);return a}var i=n["class"],l=e["class"];(i||l)&&(i=i||[],l=l||[],Array.isArray(i)||(i=[i]),Array.isArray(l)||(l=[l]),n["class"]=i.concat(l).filter(r));for(var o in e)"class"!=o&&(n[o]=e[o]);return n},e.joinClasses=n,e.cls=function(r,t){for(var a=[],s=0;s<r.length;s++)a.push(t&&t[s]?e.escape(n([r[s]])):n(r[s]));var i=n(a);return i.length?' class="'+i+'"':""},e.attr=function(r,n,t,a){return"boolean"==typeof n||null==n?n?" "+(a?r:r+'="'+r+'"'):"":0==r.indexOf("data")&&"string"!=typeof n?" "+r+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'":t?" "+r+'="'+e.escape(n)+'"':" "+r+'="'+n+'"'},e.attrs=function(r,t){var a=[],s=Object.keys(r);if(s.length)for(var i=0;i<s.length;++i){var l=s[i],o=r[l];"class"==l?(o=n(o))&&a.push(" "+l+'="'+o+'"'):a.push(e.attr(l,o,!1,t))}return a.join("")},e.escape=function(r){var n=String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return n===""+r?r:n},e.rethrow=function a(r,n,e,t){if(!(r instanceof Error))throw r;if(!("undefined"==typeof window&&n||t))throw r.message+=" on line "+e,r;try{t=t||require("fs").readFileSync(n,"utf8")}catch(s){a(r,null,e)}var i=3,l=t.split("\n"),o=Math.max(e-i,0),c=Math.min(l.length,e+i),i=l.slice(o,c).map(function(r,n){var t=n+o+1;return(t==e?"  > ":"    ")+t+"| "+r}).join("\n");throw r.path=n,r.message=(n||"Jade")+":"+e+"\n"+i+"\n\n"+r.message,r},e}();

    var templatizer = {};


    // channel.jade compiled template
    templatizer["channel"] = function tmpl_channel(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(frequency, sequence) {
            buf.push("<input" + jade.attr("value", "" + frequency + "", true, false) + ' class="frequency"/><div class="sequence">');
            (function() {
                var $obj = sequence;
                if ("number" == typeof $obj.length) {
                    for (var count = 0, $l = $obj.length; count < $l; count++) {
                        var step = $obj[count];
                        if (step) {
                            buf.push("<div" + jade.attr("data-step", "" + count + "", true, false) + ' class="step active"></div>');
                        } else {
                            buf.push("<div" + jade.attr("data-step", "" + count + "", true, false) + ' class="step step"></div>');
                        }
                    }
                } else {
                    var $l = 0;
                    for (var count in $obj) {
                        $l++;
                        var step = $obj[count];
                        if (step) {
                            buf.push("<div" + jade.attr("data-step", "" + count + "", true, false) + ' class="step active"></div>');
                        } else {
                            buf.push("<div" + jade.attr("data-step", "" + count + "", true, false) + ' class="step step"></div>');
                        }
                    }
                }
            }).call(this);
            buf.push("</div>");
        })("frequency" in locals_for_with ? locals_for_with.frequency : typeof frequency !== "undefined" ? frequency : undefined, "sequence" in locals_for_with ? locals_for_with.sequence : typeof sequence !== "undefined" ? sequence : undefined);
        return buf.join("");
    };

    // index.jade compiled template
    templatizer["index"] = function tmpl_index() {
        return '<!DOCTYPE html><html></html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"><title>tone test</title><link href="/css/root.css" type="text/css" rel="stylesheet"></head><body><h1>Audio Test</h1><div id="sequence-display"></div><script src="js/bundle.js"></script></body>';
    };

    // sequence.jade compiled template
    templatizer["sequence"] = function tmpl_sequence() {
        return '<div id="sequence-display"></div>';
    };

    return templatizer;
}));
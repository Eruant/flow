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
        (function(frequency) {
            buf.push("<p>FREQUENCY: " + jade.escape((jade_interp = frequency) == null ? "" : jade_interp) + "\n</p><input" + jade.attr("val", "" + frequency + "", true, false) + ' class="frequency"/>');
        })("frequency" in locals_for_with ? locals_for_with.frequency : typeof frequency !== "undefined" ? frequency : undefined);
        return buf.join("");
    };

    // index.jade compiled template
    templatizer["index"] = function tmpl_index(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        buf.push('<!DOCTYPE html><html></html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"><title>tone test</title><link href="/css/root.css" type="text/css" rel="stylesheet"></head><body><h1>Audio Test</h1>');
        buf.push('<table id="sequence-display"><tr><th>Channel</th><th>Frequency</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th></tr>');
        buf.push(templatizer["index"]["channel"](0, [ 1, 0, 1, 0, 1, 0, 1, 0 ]));
        buf.push(templatizer["index"]["channel"](1, [ 0, 1, 0, 1, 0, 1, 0, 0 ]));
        buf.push(templatizer["index"]["channel"](2, [ 0, 0, 1, 0, 0, 0, 1, 0 ]));
        buf.push('</table><div id="test"></div><button id="add-channel">Add a channel</button><button id="start-button">start</button><button id="stop-button">stop</button><script src="js/bundle.js"></script></body>');
        return buf.join("");
    };

    // index.jade:channel compiled template
    templatizer["index"]["channel"] = function tmpl_index_channel(channel, sequence) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<tr class="channel"><td>' + jade.escape(null == (jade_interp = channel) ? "" : jade_interp) + '</td><td><input value="440" class="frequency"></td>');
        (function() {
            var $obj = sequence;
            if ("number" == typeof $obj.length) {
                for (var index = 0, $l = $obj.length; index < $l; index++) {
                    var val = $obj[index];
                    buf.push('<td class="channel-">' + jade.escape(null == (jade_interp = index + ":" + val) ? "" : jade_interp) + "</td>");
                }
            } else {
                var $l = 0;
                for (var index in $obj) {
                    $l++;
                    var val = $obj[index];
                    buf.push('<td class="channel-">' + jade.escape(null == (jade_interp = index + ":" + val) ? "" : jade_interp) + "</td>");
                }
            }
        }).call(this);
        buf.push("</tr>");
        return buf.join("");
    };

    // sequence.jade compiled template
    templatizer["sequence"] = function tmpl_sequence(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        buf.push('<table id="sequence-display"><tr><th>Channel</th><th>Frequency</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th></tr>');
        buf.push(templatizer["sequence"]["channel"](0, [ 1, 0, 1, 0, 1, 0, 1, 0 ]));
        buf.push(templatizer["sequence"]["channel"](1, [ 0, 1, 0, 1, 0, 1, 0, 0 ]));
        buf.push(templatizer["sequence"]["channel"](2, [ 0, 0, 1, 0, 0, 0, 1, 0 ]));
        buf.push('</table><div id="test"></div>');
        return buf.join("");
    };

    // sequence.jade:channel compiled template
    templatizer["sequence"]["channel"] = function tmpl_sequence_channel(channel, sequence) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<tr class="channel"><td>' + jade.escape(null == (jade_interp = channel) ? "" : jade_interp) + '</td><td><input value="440" class="frequency"/></td>');
        (function() {
            var $obj = sequence;
            if ("number" == typeof $obj.length) {
                for (var index = 0, $l = $obj.length; index < $l; index++) {
                    var val = $obj[index];
                    buf.push('<td class="channel-">' + jade.escape(null == (jade_interp = index + ":" + val) ? "" : jade_interp) + "</td>");
                }
            } else {
                var $l = 0;
                for (var index in $obj) {
                    $l++;
                    var val = $obj[index];
                    buf.push('<td class="channel-">' + jade.escape(null == (jade_interp = index + ":" + val) ? "" : jade_interp) + "</td>");
                }
            }
        }).call(this);
        buf.push("</tr>");
        return buf.join("");
    };

    return templatizer;
}));
$(document).ready(function() {
    function o(o) {
        function n() {
            "page" == t[0] && void 0 !== t[1] ? ($(e).hide(), 
            $("#" + t[1]).fadeIn("slow"), 
            $(i).removeClass().addClass(t[1]), 
            console.log("DEV NOTE: The Query String is " + t[1])) : console.log("DEV NOTE: No query string or obsolete one used."), 
            "debug" === t[0] && "true" === t[1] ? console.log("DEBUG MODE ON") : console.log = function() {}
        }
        for (var s = window.location.search.substring(1), a = s.split("&"), l = 0; l < a.length; l++) {
            var t = a[l].split("=");
            if (t[0] == o) return t[1]
        }
        n()
    }
    var n = $("a"),
        e = $(".main"),
        i = $("nav, header");
    $(n).click(function() {
        var o = $(this).attr("data-link");
        $(e).hide(), $("#" + o).fadeIn("slow"), $(i).removeClass().addClass(o)
    }), hljs.initHighlightingOnLoad(), o()
});
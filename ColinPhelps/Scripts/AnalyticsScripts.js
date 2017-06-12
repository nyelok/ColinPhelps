﻿var analyticsHelper = (function (jQuery) {
    "use strict";

    var module = {

        
         analyticsSetup: function(){
            (function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date(); a = s.createElement(o),
                m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

            ga('create', 'UA-100321309-1', 'auto');
            ga('send', 'pageview');
         },

        resumeBtnBinding: function () {
                $('#resumeButton').on("click", function () {
                    ga('send', 'event', 'button', 'click', 'ResumeBtn');
                    alert("Resume button clicked");
                });
        }
    }
    return module;
})(jQuery);
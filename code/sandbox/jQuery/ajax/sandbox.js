"use strict";

$(document).ready(function () {
    $.ajax({
        url: "ajaxresponse.html",
        cache: false
    }).done(function (html) {
        $("#log").append(html);
    });
});
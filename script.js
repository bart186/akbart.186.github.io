// hover on chocolate box to see the flavours.

$(document).ready(function(){
    $("#top-right").on('mouseenter',function() {
        $("#white").show();
    });
    $("#top-right").on('mouseout',function() {
        $("#white").hide();
    });
});

$(document).ready(function(){
    $("#bottom-left").on('mouseenter',function() {
        $("#milk").show();
    });
    $("#bottom-left").on('mouseout',function() {
        $("#milk").hide();
    });
});

$(document).ready(function(){
    $("#bottom-right").on('mouseenter',function() {
        $("#truffle").show();
    });
    $("#bottom-right").on('mouseout',function() {
        $("#truffle").hide();
    });
});

$(document).ready(function(){
    $("#top-left").on('mouseenter',function() {
        $("#truffle2").show();
    });
    $("#top-left").on('mouseout',function() {
        $("#truffle2").hide();
    });
});
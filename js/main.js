!function(){
"use strict";
    var oCanvasElm = document.getElementById("terrain"),
        ctx        = oCanvasElm.getContext("2d");

    function setCanvasSize( width, height ){
        ctx.canvas.width = width;
        ctx.canvas.height = height;
    }

    function clearCanvas(){
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    }

    function mouseCoord(e){
        var posx = 0;
        var posy = 0;

        if( !e ){ e = window.event; }

        if( e.pageX || e.pageY ){
            posx = e.pageX;
            posy = e.pageY;
        }
        else if( e.clientX || e.clientY ){
            posx = e.clientX + document.body.scrollLeft
                + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop
                + document.documentElement.scrollTop;
        }
        // posx and posy contain the mouse position relative to the document
        return {x:posx, y:posy};
    }
}();

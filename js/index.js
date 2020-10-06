$(document).ready(function () {

    //This code will run after your page loads
    $(".slider").bxSlider({
        displaySlideQty: 2,
        moveSlide: 1,
    });
    //$(".slider").show();


    var container = $("div#gameholder > div");
    container.hide();



    var display = "";
    var score = 0;
    // var high_score = 0;
    var image = [];
    //var penguin = $("div#gameholder > div");



    image[0] = "images/penguin_1.png";
    image[1] = "images/penguin_2.png";
    image[2] = "images/penguin_3.png";
    image[3] = "images/penguin_4.png";
    image[4] = "images/penguin_5.png";
    image[5] = "images/penguin_6.png";
    image[6] = "images/penguin_7.png";
    image[7] = "images/penguin_8.png";
    image[8] = "images/yeti.png";


    $(".play-btn").click(function () {
        container.show();
        $(".play-btn").hide();
        $("#play").hide();
        $(".slider").hide();
        $(".bx-next").hide();
        $(".bx-prev").hide();
        $("#instructions").hide();
        $("#score").val("0");
        score = 0;
        $("audio#top")[0].play();

    });

    /* $(document).mouseup(function (e) {
         var container = $("div#gameholder > div");

         if (!container.is(e.target) && container.has(e.target).length === 0) {
             container.empty();
         }
     });*/


    $(document).mouseup(function (e) {
        var container = $("#penguin1");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.empty();
        }
    });

    $(document).mouseup(function (e) {
        var container = $("#penguin2");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.empty();
        }
    });

    $(document).mouseup(function (e) {
        var container = $("#penguin3");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.empty();
        }
    });

    $(document).mouseup(function (e) {
        var container = $("#penguin4");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.empty();
        }
    });

    $(document).mouseup(function (e) {
        var container = $("#penguin5");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.empty();
        }
    });

    $(document).mouseup(function (e) {
        var container = $("#penguin6");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.empty();
        }
    });

    $(document).mouseup(function (e) {
        var container = $("#penguin7");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.empty();
        }
    });

    $(document).mouseup(function (e) {
        var container = $("#penguin8");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.empty();
        }
    });

    $(document).mouseup(function (e) {
        var container = $("#penguin9");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.empty();
        }
    });

    $(document).mouseup(function (e) {
        var container = $("#penguin10");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.empty();
        }
    });

    $(document).mouseup(function (e) {
        var container = $("#penguin11");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.empty();
        }
    });

    $(document).mouseup(function (e) {
        var container = $("#penguin12");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.empty();
        }
    });

    $(document).mouseup(function (e) {
        var container = $("#penguin13");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.empty();
        }
    });

    $(document).mouseup(function (e) {
        var container = $("#penguin14");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.empty();
        }
    });

    $(document).mouseup(function (e) {
        var container = $("#penguin15");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.empty();
        }
    });

    $(document).mouseup(function (e) {
        var container = $("#penguin16");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.empty();
        }
    });

    $(document).mouseup(function (e) {
        var container = $("#penguin17");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.empty();
        }
    });

    $(document).mouseup(function (e) {
        var container = $("#yeti");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.empty();
        }
    });

    var penguin = function () {
        setTimeout(function () {
            alert("OOPS, yeti ate you");
            container.hide();
            $(".slider").show();
            $(".bx-next").show();
            $(".bx-prev").show();
            $("#instructions").show();

            $(".play-btn").show();
            $("#play").show().text("Play Again");
        }, 200);
        $("audio#hop")[0].play();

    }

    var yeti = function () {
        score += 25;
        $("#score").val(score);
        $("audio#pop")[0].play();
    }


    $("#penguin1").click(function () {

        var random = Math.floor(Math.random() * image.length);
        var high_score = $("#high_score").val();
        display = "<img src=" + image[random] + " width='200' height='200'>";
        $("#penguin1").html(display);



        if (image[random] == image[8]) {
            penguin();
            if (high_score > score) {
                $("#high_score").val(high_score);
            } else if (high_score < score) {
                $("#high_score").val(score);
            }
        } else if (image[random] !== image[8]) {
            yeti();
        }

    });

    $("#penguin2").click(function () {

        var random = Math.floor(Math.random() * image.length);
        var high_score = $("#high_score").val();
        display = "<img src=" + image[random] + " width='200' height='200'>";
        $("#penguin2").html(display);

        if (image[random] == image[8]) {
            penguin();
            if (high_score > score) {
                $("#high_score").val(high_score);
            } else if (high_score < score) {
                $("#high_score").val(score);
            }
            $("audio#hop")[0].play();
        } else if (image[random] !== image[8]) {
            yeti();

        }

    });

    $("#penguin3").click(function () {

        var random = Math.floor(Math.random() * image.length);
        var high_score = $("#high_score").val();
        display = "<img src=" + image[random] + " width='200' height='200'>";
        $("#penguin3").html(display);

        if (image[random] == image[8]) {
            penguin();
            if (high_score > score) {
                $("#high_score").val(high_score);
            } else if (high_score < score) {
                $("#high_score").val(score);
            }
        } else if (image[random] !== image[8]) {
            yeti();
        }

    });



    $("#penguin4").click(function () {

        var random = Math.floor(Math.random() * image.length);
        var high_score = $("#high_score").val();
        display = "<img src=" + image[random] + " width='200' height='200'>";
        $("#penguin4").html(display);

        if (image[random] == image[8]) {

            penguin();
            if (high_score > score) {
                $("#high_score").val(high_score);
            } else if (high_score < score) {
                $("#high_score").val(score);

            }
        } else if (image[random] !== image[8]) {
            yeti();

        }
    });

    $("#penguin5").click(function () {

        var random = Math.floor(Math.random() * image.length);
        var high_score = $("#high_score").val();
        display = "<img src=" + image[random] + " width='200' height='200'>";
        $("#penguin5").html(display);

        if (image[random] == image[8]) {
            penguin();
            if (high_score > score) {
                $("#high_score").val(high_score);
            } else if (high_score < score) {
                $("#high_score").val(score);
            }
        } else if (image[random] !== image[8]) {
            yeti();
        }

    });

    $("#penguin6").click(function () {

        var random = Math.floor(Math.random() * image.length);
        var high_score = $("#high_score").val();
        display = "<img src=" + image[random] + " width='200' height='200'>";
        $("#penguin6").html(display);

        if (image[random] == image[8]) {
            penguin();
            if (high_score > score) {
                $("#high_score").val(high_score);
            } else if (high_score < score) {
                $("#high_score").val(score);
            }
        } else if (image[random] !== image[8]) {
            yeti();
        }

    });

    $("#penguin7").click(function () {

        var random = Math.floor(Math.random() * image.length);
        var high_score = $("#high_score").val();
        display = "<img src=" + image[random] + " width='200' height='200'>";
        $("#penguin7").html(display);

        if (image[random] == image[8]) {
            penguin();
            if (high_score > score) {
                $("#high_score").val(high_score);
            } else if (high_score < score) {
                $("#high_score").val(score);
            }
        } else if (image[random] !== image[8]) {
            yeti();
        }

    });

    $("#penguin8").click(function () {

        var random = Math.floor(Math.random() * image.length);
        var high_score = $("#high_score").val();
        display = "<img src=" + image[random] + " width='200' height='200'>";
        $("#penguin8").html(display);

        if (image[random] == image[8]) {
            penguin();
            if (high_score > score) {
                $("#high_score").val(high_score);
            } else if (high_score < score) {
                $("#high_score").val(score);
            }
        } else if (image[random] !== image[8]) {
            yeti();
        }

    });

    $("#penguin9").click(function () {

        var random = Math.floor(Math.random() * image.length);
        var high_score = $("#high_score").val();
        display = "<img src=" + image[random] + " width='200' height='200'>";
        $("#penguin9").html(display);

        if (image[random] == image[8]) {
            penguin();
            if (high_score > score) {
                $("#high_score").val(high_score);
            } else if (high_score < score) {
                $("#high_score").val(score);
            }
        } else if (image[random] !== image[8]) {
            yeti();
        }

    });

    $("#penguin10").click(function () {

        var random = Math.floor(Math.random() * image.length);
        var high_score = $("#high_score").val();
        display = "<img src=" + image[random] + " width='200' height='200'>";
        $("#penguin10").html(display);

        if (image[random] == image[8]) {
            penguin();
            if (high_score > score) {
                $("#high_score").val(high_score);
            } else if (high_score < score) {
                $("#high_score").val(score);
            }
        } else if (image[random] !== image[8]) {
            yeti();
        }

    });

    $("#penguin11").click(function () {

        var random = Math.floor(Math.random() * image.length);
        var high_score = $("#high_score").val();
        display = "<img src=" + image[random] + " width='200' height='200'>";
        $("#penguin11").html(display);

        if (image[random] == image[8]) {
            penguin();
            if (high_score > score) {
                $("#high_score").val(high_score);
            } else if (high_score < score) {
                $("#high_score").val(score);
            }
        } else if (image[random] !== image[8]) {
            yeti();
        }

    });

    $("#penguin12").click(function () {

        var random = Math.floor(Math.random() * image.length);
        var high_score = $("#high_score").val();
        display = "<img src=" + image[random] + " width='200' height='200'>";
        $("#penguin12").html(display);

        if (image[random] == image[8]) {
            penguin();
            if (high_score > score) {
                $("#high_score").val(high_score);
            } else if (high_score < score) {
                $("#high_score").val(score);
            }
        } else if (image[random] !== image[8]) {
            yeti();
        }

    });

    $("#penguin13").click(function () {

        var random = Math.floor(Math.random() * image.length);
        var high_score = $("#high_score").val();
        display = "<img src=" + image[random] + " width='200' height='200'>";
        $("#penguin13").html(display);

        if (image[random] == image[8]) {
            penguin();
            if (high_score > score) {
                $("#high_score").val(high_score);
            } else if (high_score < score) {
                $("#high_score").val(score);
            }
        } else if (image[random] !== image[8]) {
            yeti();
        }

    });

    $("#penguin14").click(function () {

        var random = Math.floor(Math.random() * image.length);
        var high_score = $("#high_score").val();
        display = "<img src=" + image[random] + " width='200' height='200'>";
        $("#penguin14").html(display);

        if (image[random] == image[8]) {
            penguin();
            if (high_score > score) {
                $("#high_score").val(high_score);
            } else if (high_score < score) {
                $("#high_score").val(score);
            }
        } else if (image[random] !== image[8]) {
            yeti();
        }

    });

    $("#penguin15").click(function () {

        var random = Math.floor(Math.random() * image.length);
        var high_score = $("#high_score").val();
        display = "<img src=" + image[random] + " width='200' height='200'>";
        $("#penguin15").html(display);

        if (image[random] == image[8]) {
            penguin();
            if (high_score > score) {
                $("#high_score").val(high_score);
            } else if (high_score < score) {
                $("#high_score").val(score);
            }
        } else if (image[random] !== image[8]) {
            yeti();
        }

    });

    $("#penguin16").click(function () {

        var random = Math.floor(Math.random() * image.length);
        var high_score = $("#high_score").val();
        display = "<img src=" + image[random] + " width='200' height='200'>";
        $("#penguin16").html(display);

        if (image[random] == image[8]) {
            penguin()
            if (high_score > score) {
                $("#high_score").val(high_score);
            } else if (high_score < score) {
                $("#high_score").val(score);
            }
        } else if (image[random] !== image[8]) {
            yeti();
        }

    });

    $("#penguin17").click(function () {

        var random = Math.floor(Math.random() * image.length);
        var high_score = $("#high_score").val();
        display = "<img src=" + image[random] + " width='200' height='200'>";
        $("#penguin17").html(display);

        if (image[random] == image[8]) {
            penguin();
            if (high_score > score) {
                $("#high_score").val(high_score);
            } else if (high_score < score) {
                $("#high_score").val(score);
            }
        } else if (image[random] !== image[8]) {
            yeti();
        }

    });

    $("#yeti").click(function () {

        var random = Math.floor(Math.random() * image.length);
        var high_score = $("#high_score").val();
        display = "<img src=" + image[random] + " width='200' height='200'>";
        $("#yeti").html(display);

        if (image[random] == image[8]) {
            penguin();
            if (high_score > score) {
                $("#high_score").val(high_score);
            } else if (high_score < score) {
                $("#high_score").val(score);
            }

        } else if (image[random] !== image[8]) {
            yeti();
        }

    });
});

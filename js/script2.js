const myCarousel = document.querySelectorAll('.carousel');
M.Carousel.init(myCarousel);

autoplay();
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}

function cekAns() {  
    $(".ansBtnTrue").addClass("blue darken-1");
    $(".ansBtnFalse").addClass("disabled");
}

$(document).ready(function(){
    $(".startBtn").click( function() {
        $("#animeCover").html("");
        $(".optionList").html("");
        $(".preloader-wrapper").addClass("active");
        $(".optionList").addClass("hide");
        $("#startBtn").addClass("disabled");
        $.ajax ({
            url : "https://api.jikan.moe/v4/random/anime",
            method : "GET",
            success : function (result) {
                $("#animeCover").append(`
                    <img src="`+ result.data.images.jpg.large_image_url +`" id="imgCover">
                `);
                $("#imgCover").on('load', function() {
                    $(".preloader-wrapper").removeClass("active");
                    $("#startBtn").removeClass("disabled");
                });
                $(".optionList").append(`
                    <li class="btn btn-large ansBtnTrue" onclick="cekAns()">`+result.data.title+`</li>
                `); 
            }
        });
        $.ajax ({
            url : "https://api.jikan.moe/v4/random/anime",
            method : "GET",
            success : function (result) {
                $(".optionList").append(`
                    <li class="btn btn-large ansBtnFalse" onclick="cekAns()">`+result.data.title+`</li>
                `);
            }
        });
        $.ajax ({
            url : "https://api.jikan.moe/v4/random/anime",
            method : "GET",
            success : function (result) {
                $(".optionList").append(`
                    <li class="btn btn-large ansBtnFalse" onclick="cekAns()">`+result.data.title+`</li>
                `);
            }
        });
        $.ajax ({
            url : "https://api.jikan.moe/v4/random/anime",
            method : "GET",
            success : function (result) {
                $(".optionList").append(`
                    <li class="btn btn-large ansBtnFalse" onclick="cekAns()">`+result.data.title+`</li>
                `);
            }
        });
        $.ajax ({
            url : "https://api.jikan.moe/v4/random/anime",
            method : "GET",
            success : function (result) {
                $(".optionList").append(`
                    <li class="btn btn-large ansBtnFalse" onclick="cekAns()">`+result.data.title+`</li>
                `);
                var list = document.querySelector('.optionList'), i;
                for (i = list.children.length; i >= 0; i--) {
                    list.appendChild(list.children[Math.random() * i | 0]);
                }
                $(".optionList").removeClass("hide");
            }
        });
    });    
});


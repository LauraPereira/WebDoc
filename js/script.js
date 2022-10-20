"use strict";
$(document).ready(initialiser);

function initialiser(evt) {
    $("#pointInt").click(popup);
    $(".carte").click(jouerCarte);

    $(".carte").hover(hover, finHover);

    $("#btnPlay").click(jouerSon);
    setTimeout(function () {
        $("#btnPlay").trigger("click");
    }, 100);
}

function jouerSon(evt) {
    $("audio").get(0).play();
    $("#btnPlay").css("display", "none");
    $("#btnPause").css("display", "block");
    $("#btnPause").click(pauseSon);
}

function pauseSon(evt) {
    $("audio").get(0).pause();
    $("#btnPlay").css("display", "block");
    $("#btnPause").css("display", "none");
    $("#btnPlay").click(lancerAudio);
}

function popup(evt) {

    if ($("#popup").hasClass("fermeturePopup")) {
        $("#popup").removeClass("fermeturePopup");
    }

    $("#popup").addClass("popup");
    $("#popup").addClass("ouverturePopup");

    if ($("html").attr("id") == "pageAccueil") {
        $("#popup").html("<div id='texte'>Hearthstone est un jeu de cartes stratégique. Le but étant de descendre les points de vie de l'adversaire à zéro. Pour ce faire des cartes sont à dispositions et celle-ci possèdent des propriétés qui permettent d'établir une stratégie pour gagner.</div>");
        
    } else if ($("html").attr("id") == "page2014") {
        $("#popup").html("<div id='texte'>En 2014 c'est la sortie du jeu. Celui-ci propose plusieurs modes de jeu. Le mode partie : on construit un paquet de carte que l'on va jouer contre un adversaire aléatoire de même niveau. Le mode arène : On choisit une cartes entre trois et ce jusqu'à en avoir trente et on joue contre un adversaire aléatoire de même niveau. Le bras de fer qui vient une fois pas semaine et où l'on peut gagner un paquet de cartes.</div>");
        
    } else if ($("html").attr("id") == "page2015") {
        $("#popup").html("<div id='texte'>En 2015 on voit plusieurs mécaniques arriver en jeu. Elles permettent de nouvelles combinaisons de carte. Ces nouvelles mécaniques apparaitront à chaque nouvelles extensions.</div>");
        
    } else if ($("html").attr("id") == "page2016") {
         $("#popup").html("<div id='texte'>En 2016 arrive un nouveau mode : le mode libre. Le mode libre permet de jouer avec toutes les cartes du jeux tandis que le mode partie normal permet de jouer seulement qu'avec les cartes des extensions de .</div>");
        
    } else if ($("html").attr("id") == "page2017") {
         $("#popup").html("<div id='texte'>En 2017 les aventures comme elles étaient présentes au début ne sont plus. Mais une autre forme d'aventure est présente et renouvelle la façon de jouer et d'obtenir des cartes.</div>");
        
    } else if ($("html").attr("id") == "page2018") {
        $("#popup").html("<div id='texte'>En 2018 encore deux nouveau mode d'aventure fait son apparition, un pour chaque extension.</div>");
    }

    $("#pointInt").css({
        "display": "none"
    });

    $("#croix").css({
        "display": "block"
    });

    $("#croix").click(fermerPopup);
}

function fermerPopup(evt) {
    
    if ($("#popup").hasClass("fermeturePopup")) {
        $("#popup").removeClass("fermeturePopup");
    }
    
    $("#popup").removeClass("ouverturePopup");
    $("#popup").addClass("fermeturePopup");

    setTimeout(function () {
        $("#popup").removeClass("popup");
        $("#popup").removeClass("popupVideo");
        $("#texte").remove();
        $("#video").remove();
        $("#croixVideo").remove();
    }, 500)


    $("#pointInt").css({
        "display": "block"
    });
    $("#croix").css({
        "display": "none"
    });

    $("#pointInt").click(popup);

}

function hover(evt) {
    $(this).addClass("hover");
}

function finHover(evt) {
    $(this).removeClass("hover");
}

function jouerCarte(evt) {

    if ($(".carte").hasClass('jouer')) {

        if ($(".jouer").attr('id') == 'getg') {

            $(".jouer").animate({
                left: "720px",
                top: "875px"
            });
            $(".jouer").css("transform", "rotate(-15deg)");
            $(".jouer").hover(hover, finHover);
            $(".jouer").click(jouerCarte);
            $(".jouer").removeClass('jouer');

            $("#dosCarte2").animate({
                top: "-200px",
                left: "750px"
            });

            $("#dosCarte2").css("transform", "rotate(15deg)");
            $("#dosCarte2").attr('src', "../Images/2014/DosCarte.png");


        } else if ($(".jouer").attr('id') == 'nax') {

            $(".jouer").animate({
                top: "875px",
                left: "890px"
            });
            $(".jouer").css("transform", "rotate(15deg)");

            $(".jouer").hover(hover, finHover);
            $(".jouer").click(jouerCarte);
            $(".jouer").removeClass('jouer');

            $("#dosCarte1").animate({
                top: "-200px",
                left: "900px"
            });

            $("#dosCarte1").css("transform", "rotate(-15deg)");
            $("#dosCarte1").attr('src', "../Images/2014/DosCarte.png");


        } else if ($(".jouer").attr('id') == 'montRoche') {

            $(".jouer").animate({
                left: "700px",
                top: "900px"
            });
            $(".jouer").css("transform", "rotate(-25deg)");
            $(".jouer").hover(hover, finHover);
            $(".jouer").click(jouerCarte);
            $(".jouer").removeClass('jouer');

            $("#dosCarte13").animate({
                top: "-220px",
                left: "700px"
            });

            $("#dosCarte13").css("transform", "rotate(25deg)");
            $("#dosCarte13").attr('src', "../Images/2014/DosCarte.png");
            $("#dosCarte13").removeClass('jouerVideo');

        } else if ($(".jouer").attr('id') == 'gdTournois') {

            $(".jouer").animate({
                left: "820px",
                top: "875px"
            });
            $(".jouer").css("transform", "rotate(0deg)");
            $(".jouer").hover(hover, finHover);
            $(".jouer").click(jouerCarte);
            $(".jouer").removeClass('jouer');

            $("#dosCarte23").animate({
                top: "-200px",
                left: "820px"
            });

            $("#dosCarte23").css("transform", "rotate(0deg)");
            $("#dosCarte23").attr('src', "../Images/2014/DosCarte.png");
            $("#dosCarte23").removeClass('jouerVideo');

        } else if ($(".jouer").attr('id') == 'ligueExplo') {

            $(".jouer").animate({
                left: "950px",
                top: "900px"
            });

            $(".jouer").css("transform", "rotate(25deg)");
            $(".jouer").hover(hover, finHover);
            $(".jouer").click(jouerCarte);
            $(".jouer").removeClass('jouer');

            $("#dosCarte33").animate({
                top: "-220px",
                left: "950px"
            });

            $("#dosCarte33").css("transform", "rotate(-25deg)");
            $("#dosCarte33").attr('src', "../Images/2014/DosCarte.png");
            $("#dosCarte33").removeClass('jouerVideo');

        } else if ($(".jouer").attr('id') == 'dta') {

            $(".jouer").animate({
                left: "700px",
                top: "900px"
            });
            $(".jouer").css("transform", "rotate(-25deg)");
            $(".jouer").hover(hover, finHover);
            $(".jouer").click(jouerCarte);
            $(".jouer").removeClass('jouer');

            $("#dosCarte13").animate({
                top: "-220px",
                left: "700px"
            });

            $("#dosCarte13").css("transform", "rotate(25deg)");
            $("#dosCarte13").attr('src', "../Images/2014/DosCarte.png");
            $("#dosCarte13").removeClass('jouerVideo');

        } else if ($(".jouer").attr('id') == 'kara') {

            $(".jouer").animate({
                left: "820px",
                top: "875px"
            });
            $(".jouer").css("transform", "rotate(0deg)");
            $(".jouer").hover(hover, finHover);
            $(".jouer").click(jouerCarte);
            $(".jouer").removeClass('jouer');

            $("#dosCarte23").animate({
                top: "-200px",
                left: "820px"
            });

            $("#dosCarte23").css("transform", "rotate(0deg)");
            $("#dosCarte23").attr('src', "../Images/2014/DosCarte.png");
            $("#dosCarte23").removeClass('jouerVideo');

        } else if ($(".jouer").attr('id') == 'gad') {

            $(".jouer").animate({
                left: "950px",
                top: "900px"
            });

            $(".jouer").css("transform", "rotate(25deg)");
            $(".jouer").hover(hover, finHover);
            $(".jouer").click(jouerCarte);
            $(".jouer").removeClass('jouer');

            $("#dosCarte33").animate({
                top: "-220px",
                left: "950px"
            });

            $("#dosCarte33").css("transform", "rotate(-25deg)");
            $("#dosCarte33").attr('src', "../Images/2014/DosCarte.png");
            $("#dosCarte33").removeClass('jouerVideo');

        } else if ($(".jouer").attr('id') == 'ungoro') {

            $(".jouer").animate({
                left: "700px",
                top: "900px"
            });
            $(".jouer").css("transform", "rotate(-25deg)");
            $(".jouer").hover(hover, finHover);
            $(".jouer").click(jouerCarte);
            $(".jouer").removeClass('jouer');

            $("#dosCarte13").animate({
                top: "-220px",
                left: "700px"
            });

            $("#dosCarte13").css("transform", "rotate(25deg)");
            $("#dosCarte13").attr('src', "../Images/2014/DosCarte.png");
            $("#dosCarte13").removeClass('jouerVideo');

        } else if ($(".jouer").attr('id') == 'tdg') {

            $(".jouer").animate({
                left: "820px",
                top: "875px"
            });
            $(".jouer").css("transform", "rotate(0deg)");
            $(".jouer").hover(hover, finHover);
            $(".jouer").click(jouerCarte);
            $(".jouer").removeClass('jouer');

            $("#dosCarte23").animate({
                top: "-200px",
                left: "820px"
            });

            $("#dosCarte23").css("transform", "rotate(0deg)");
            $("#dosCarte23").attr('src', "../Images/2014/DosCarte.png");
            $("#dosCarte23").removeClass('jouerVideo');

        } else if ($(".jouer").attr('id') == 'kc') {

            $(".jouer").animate({
                left: "950px",
                top: "900px"
            });

            $(".jouer").css("transform", "rotate(25deg)");
            $(".jouer").hover(hover, finHover);
            $(".jouer").click(jouerCarte);
            $(".jouer").removeClass('jouer');

            $("#dosCarte33").animate({
                top: "-220px",
                left: "950px"
            });

            $("#dosCarte33").css("transform", "rotate(-25deg)");
            $("#dosCarte33").attr('src', "../Images/2014/DosCarte.png");
            $("#dosCarte33").removeClass('jouerVideo');

        } else if ($(".jouer").attr('id') == 'bm') {

            $(".jouer").animate({
                left: "700px",
                top: "900px"
            });
            $(".jouer").css("transform", "rotate(-25deg)");
            $(".jouer").hover(hover, finHover);
            $(".jouer").click(jouerCarte);
            $(".jouer").removeClass('jouer');

            $("#dosCarte13").animate({
                top: "-220px",
                left: "700px"
            });

            $("#dosCarte13").css("transform", "rotate(25deg)");
            $("#dosCarte13").attr('src', "../Images/2014/DosCarte.png");
            $("#dosCarte13").removeClass('jouerVideo');

        } else if ($(".jouer").attr('id') == 'arma') {

            $(".jouer").animate({
                left: "820px",
                top: "875px"
            });
            $(".jouer").css("transform", "rotate(0deg)");
            $(".jouer").hover(hover, finHover);
            $(".jouer").click(jouerCarte);
            $(".jouer").removeClass('jouer');

            $("#dosCarte23").animate({
                top: "-200px",
                left: "820px"
            });

            $("#dosCarte23").css("transform", "rotate(0deg)");
            $("#dosCarte23").attr('src', "../Images/2014/DosCarte.png");
            $("#dosCarte23").removeClass('jouerVideo');

        } else if ($(".jouer").attr('id') == 'raz') {

            $(".jouer").animate({
                left: "950px",
                top: "900px"
            });

            $(".jouer").css("transform", "rotate(25deg)");
            $(".jouer").hover(hover, finHover);
            $(".jouer").click(jouerCarte);
            $(".jouer").removeClass('jouer');

            $("#dosCarte33").animate({
                top: "-220px",
                left: "950px"
            });

            $("#dosCarte33").css("transform", "rotate(-25deg)");
            $("#dosCarte33").attr('src', "../Images/2014/DosCarte.png");
            $("#dosCarte33").removeClass('jouerVideo');

        }
    }

    $(this).addClass('jouer');
    $(this).animate({
        top: "360px",
        left: "250px"
    });

    $(this).css("transform", "rotate(0)");
    $(this).removeClass("hover");
    $(this).unbind("click");
    $(this).unbind('mouseenter mouseleave');

    $("#texteCliquez").css({
        "display": "none"
    });

    setTimeout(function (evt) {
        if ($("#popup").hasClass("fermeturePopup")) {
            $("#popup").removeClass("fermeturePopup");
        }

        $("#popup").html("<div id='texteAdversaire'>Au tour de votre adversaire</div>");
        $("#popup").addClass("adversaire");
    }, 500);

    if ($(this).attr('id') === 'getg') {

        setTimeout(function (evt) {

            $("#dosCarte2").animate({
                top: "360px",
                left: "1370px"
            });
            $("#dosCarte2").css("transform", "rotate(0)");
            $("#dosCarte2").attr('src', "../Images/2014/CarteVideo.png");

        }, 900);

    } else if ($(this).attr('id') == 'nax') {

        setTimeout(function (evt) {

            $("#dosCarte1").animate({
                top: "360px",
                left: "1370px"
            });
            $("#dosCarte1").css("transform", "rotate(0)");
            $("#dosCarte1").attr('src', "../Images/2014/CarteVideo.png");
        }, 900);

    } else if ($(this).attr('id') == 'montRoche') {

        setTimeout(function (evt) {

            $("#dosCarte13").animate({
                top: "360px",
                left: "1370px"
            });
            $("#dosCarte13").css("transform", "rotate(0)");
            $("#dosCarte13").attr('src', "../Images/2014/CarteVideo.png");
            $("#dosCarte13").addClass('jouerVideo');
        }, 900);

    } else if ($(this).attr('id') == 'gdTournois') {

        setTimeout(function (evt) {

            $("#dosCarte23").animate({
                top: "360px",
                left: "1370px"
            });
            $("#dosCarte23").css("transform", "rotate(0)");
            $("#dosCarte23").attr('src', "../Images/2014/CarteVideo.png");
            $("#dosCarte23").addClass('jouerVideo');
        }, 900);

    } else if ($(this).attr('id') == 'ligueExplo') {

        setTimeout(function (evt) {

            $("#dosCarte33").animate({
                top: "360px",
                left: "1370px"
            });
            $("#dosCarte33").css("transform", "rotate(0)");
            $("#dosCarte33").attr('src', "../Images/2014/CarteVideo.png");
            $("#dosCarte33").addClass('jouerVideo');
        }, 900);

    } else if ($(this).attr('id') == 'dta') {

        setTimeout(function (evt) {

            $("#dosCarte13").animate({
                top: "360px",
                left: "1370px"
            });
            $("#dosCarte13").css("transform", "rotate(0)");
            $("#dosCarte13").attr('src', "../Images/2014/CarteVideo.png");
            $("#dosCarte13").addClass('jouerVideo');
        }, 900);

    } else if ($(this).attr('id') == 'kara') {

        setTimeout(function (evt) {

            $("#dosCarte23").animate({
                top: "360px",
                left: "1370px"
            });
            $("#dosCarte23").css("transform", "rotate(0)");
            $("#dosCarte23").attr('src', "../Images/2014/CarteVideo.png");
            $("#dosCarte23").addClass('jouerVideo');
        }, 900);

    } else if ($(this).attr('id') == 'gad') {

        setTimeout(function (evt) {

            $("#dosCarte33").animate({
                top: "360px",
                left: "1370px"
            });
            $("#dosCarte33").css("transform", "rotate(0)");
            $("#dosCarte33").attr('src', "../Images/2014/CarteVideo.png");
            $("#dosCarte33").addClass('jouerVideo');
        }, 900);

    } else if ($(this).attr('id') == 'ungoro') {

        setTimeout(function (evt) {

            $("#dosCarte13").animate({
                top: "360px",
                left: "1370px"
            });
            $("#dosCarte13").css("transform", "rotate(0)");
            $("#dosCarte13").attr('src', "../Images/2014/CarteVideo.png");
            $("#dosCarte13").addClass('jouerVideo');
        }, 900);

    } else if ($(this).attr('id') == 'tdg') {

        setTimeout(function (evt) {

            $("#dosCarte23").animate({
                top: "360px",
                left: "1370px"
            });
            $("#dosCarte23").css("transform", "rotate(0)");
            $("#dosCarte23").attr('src', "../Images/2014/CarteVideo.png");
            $("#dosCarte23").addClass('jouerVideo');
        }, 900);

    } else if ($(this).attr('id') == 'kc') {

        setTimeout(function (evt) {

            $("#dosCarte33").animate({
                top: "360px",
                left: "1370px"
            });
            $("#dosCarte33").css("transform", "rotate(0)");
            $("#dosCarte33").attr('src', "../Images/2014/CarteVideo.png");
            $("#dosCarte33").addClass('jouerVideo');
        }, 900);

    } else if ($(this).attr('id') == 'bm') {

        setTimeout(function (evt) {

            $("#dosCarte13").animate({
                top: "360px",
                left: "1370px"
            });
            $("#dosCarte13").css("transform", "rotate(0)");
            $("#dosCarte13").attr('src', "../Images/2014/CarteVideo.png");
            $("#dosCarte13").addClass('jouerVideo');
        }, 900);

    } else if ($(this).attr('id') == 'arma') {

        setTimeout(function (evt) {

            $("#dosCarte23").animate({
                top: "360px",
                left: "1370px"
            });
            $("#dosCarte23").css("transform", "rotate(0)");
            $("#dosCarte23").attr('src', "../Images/2014/CarteVideo.png");
            $("#dosCarte23").addClass('jouerVideo');
        }, 900);

    } else if ($(this).attr('id') == 'raz') {

        setTimeout(function (evt) {

            $("#dosCarte33").animate({
                top: "360px",
                left: "1370px"
            });
            $("#dosCarte33").css("transform", "rotate(0)");
            $("#dosCarte33").attr('src', "../Images/2014/CarteVideo.png");
            $("#dosCarte33").addClass('jouerVideo');
        }, 900);

    }

    setTimeout(function (evt) {
        $("#popup").removeClass("adversaire");
        $("#texteAdversaire").remove();

    }, 1600);

    $("#cliqueVideo").click(jouerVideo);
    $("#survolTexte").hover(afficheTexte, cacheTexte);
    $("#survolCarteDos").hover(afficheTexte, cacheTexte);

}

function jouerVideo(evt) {

    if ($("#popup").hasClass("fermeturePopup")) {
        $("#popup").removeClass("fermeturePopup");
    }

    if ($(".jouer").attr('id') === 'getg') {

        $("#popup").html("<img src='../Images/PageAccueil/Croix.png' id='croixVideo' class='img'><iframe id='video' src='https://www.youtube.com/embed/alsLG6oLPks' frameborder='0' allow='autoplay; encrypted-media; picture-in-picture' allowfullscreen></iframe>");

    } else if ($(".jouer").attr('id') === 'nax') {
        $("#popup").html("<img src='../Images/PageAccueil/Croix.png' id='croixVideo' class='img'><iframe id='video' src='https://www.youtube.com/embed/-bfQxYZ4PIE' frameborder='0' allow='autoplay; encrypted-media; picture-in-picture' allowfullscreen></iframe>");

    } else if ($(".jouer").attr('id') === 'montRoche') {
        $("#popup").html("<img src='../Images/PageAccueil/Croix.png' id='croixVideo' class='img'><iframe id='video' src='https://www.youtube.com/embed/51_3DMRhUhQ' frameborder='0'  allow='autoplay; encrypted-media; picture-in-picture' allowfullscreen></iframe>");

    } else if ($(".jouer").attr('id') == 'gdTournois') {
        $("#popup").html("<img src='../Images/PageAccueil/Croix.png' id='croixVideo' class='img'><iframe id='video' src='https://www.youtube.com/embed/IBJfw6YbF1o' frameborder='0' allow='autoplay; encrypted-media; picture-in-picture' allowfullscreen></iframe>");

    } else if ($(".jouer").attr('id') == 'ligueExplo') {
        $("#popup").html("<img src='../Images/PageAccueil/Croix.png' id='croixVideo' class='img'><iframe id='video' src='https://www.youtube.com/embed/nUzjIIGM80A' frameborder='0' allow='autoplay; encrypted-media; picture-in-picture' allowfullscreen></iframe>");

    } else if ($(".jouer").attr('id') == 'dta') {
        $("#popup").html("<img src='../Images/PageAccueil/Croix.png' id='croixVideo' class='img'><iframe id='video' src='https://www.youtube.com/embed/2V7wVho8jXY' frameborder='0' allow='autoplay; encrypted-media; picture-in-picture' allowfullscreen></iframe>");

    } else if ($(".jouer").attr('id') == 'kara') {
        $("#popup").html("<img src='../Images/PageAccueil/Croix.png' id='croixVideo' class='img'><iframe id='video' src='https://www.youtube.com/embed/349XIACflB4' frameborder='0'  allow='autoplay; encrypted-media; picture-in-picture' allowfullscreen></iframe>");

    } else if ($(".jouer").attr('id') == 'gad') {
        $("#popup").html("<img src='../Images/PageAccueil/Croix.png' id='croixVideo' class='img'><iframe id='video' src='https://www.youtube.com/embed/_o1CxU-OEcg' frameborder='0' allow='autoplay; encrypted-media; picture-in-picture' allowfullscreen></iframe>");

    } else if ($(".jouer").attr('id') == 'ungoro') {
        $("#popup").html("<img src='../Images/PageAccueil/Croix.png' id='croixVideo' class='img'><iframe id='video' src='https://www.youtube.com/embed/oBlb_jL1sNI' frameborder='0'  allow='autoplay; encrypted-media; picture-in-picture' allowfullscreen></iframe>");

    } else if ($(".jouer").attr('id') == 'tdg') {
        $("#popup").html("<img src='../Images/PageAccueil/Croix.png' id='croixVideo' class='img'><iframe id='video' src='https://www.youtube.com/embed/NeWt7xIICwY' frameborder='0' allow='autoplay; encrypted-media; picture-in-picture' allowfullscreen></iframe>");

    } else if ($(".jouer").attr('id') == 'kc') {
        $("#popup").html("<img src='../Images/PageAccueil/Croix.png' id='croixVideo' class='img'><iframe id='video' src='https://www.youtube.com/embed/Dsu7pkAFM1c' frameborder='0' allow='autoplay; encrypted-media; picture-in-picture' allowfullscreen></iframe>");
        
    } else if ($(".jouer").attr('id') == 'bm') {
        $("#popup").html("<img src='../Images/PageAccueil/Croix.png' id='croixVideo' class='img'><iframe id='video' src='https://www.youtube.com/embed/Nffy82-Y5xk' frameborder='0' allow='autoplay; encrypted-media; picture-in-picture' allowfullscreen></iframe>>");
        
    } else if ($(".jouer").attr('id') == 'arma') {
        $("#popup").html("<img src='../Images/PageAccueil/Croix.png' id='croixVideo' class='img'><iframe id='video' src='https://www.youtube.com/embed/ZuEsbhHO91w' frameborder='0' allow=' autoplay; encrypted-media; picture-in-picture' allowfullscreen></iframe>");
        
    } else if ($(".jouer").attr('id') == 'raz') {
        $("#popup").html("<img src='../Images/PageAccueil/Croix.png' id='croixVideo' class='img'><iframe id='video' src='https://www.youtube.com/embed/bIsLIuawYeU' frameborder='0' allow='autoplay; encrypted-media; picture-in-picture' allowfullscreen></iframe>");
        
    }

    $("#popup").addClass("popupVideo");
    $("#popup").addClass("ouverturePopup");
    $("#croixVideo").css({
        position: "absolute",
        right: "20px",
        top: "15px"
    });
    $("#croixVideo").click(fermerPopup);
}

function afficheTexte(evt) {

    if ($("#popup").hasClass("fermeturePopup")) {
        $("#popup").removeClass("fermeturePopup");
    }

    $("#popup").addClass("ouverturePopup");
    $("#popup").addClass("popupTexte");

    if ($(this).attr('class') == 'carte hover') {

        if ($(".jouer").attr('id') === 'getg') {
            $("#popup").html("<div id='texteCarte'>Gobelins et Gnomes est la première extension du jeu. Elle est sortie le 9 décembre 2014. Elle ajoute plus de 120 nouvelles cartes.</div>");

        } else if ($(".jouer").attr('id') === 'nax') {
            $("#popup").html("<div id='texteCarte'>La malédiction de Naxxramas est la première aventure du jeu. Elle est sortie le 23 juillet 2014 en Europe.</div>");

        } else if ($(".jouer").attr('id') == 'montRoche') {
            $("#popup").html("<div id='texteCarte'>Le mont Rochenoir est la seconde aventure du jeu. Elle est sortie le 3 avril 2015 en Europe.</div>");

        } else if ($(".jouer").attr('id') == 'gdTournois') {
            $("#popup").html("<div id='texteCarte'>Le grand tournois est la seconde extension du jeu. Elle est sortie le 24 août en Europe.</div>");

        } else if ($(".jouer").attr('id') == 'ligueExplo') {
            $("#popup").html("<div id='texteCarte'>La ligue des explorateurs est la troisième aventure du jeu. Elle est sortie le 12 novembre 2015 en Europe.</div>");

        } else if ($(".jouer").attr('id') == 'dta') {
            $("#popup").html("<div id='texteCarte'>Les dieux très ancien est la troisième extension du jeu. Elle est sortie le 27 avril 2016 en Europe.</div>")

        } else if ($(".jouer").attr('id') == 'kara') {
            $("#popup").html("<div id='texteCarte'>Une nuit à Karazhan est la quatrième aventure du jeu. Elle sort le 12 aout 2016.</div>")

        } else if ($(".jouer").attr('id') == 'gad') {
            $("#popup").html("<div id='texteCarte'>Main basse sur gadgetzan est la quatrème extension du jeu. Elle est sortie le 1er décembre 2016.</div>")

        } else if ($(".jouer").attr('id') == 'ungoro') {
            $("#popup").html("<div id='texteCarte'>Voyage au centre d'Un'goro est la cinquième extension du jeu. Elle est sortie le 7 avril 2017 en Europe.</div>")

        } else if ($(".jouer").attr('id') == 'tdg') {
            $("#popup").html("<div id='texteCarte'>Les Chevaliers du Trône de glace est la sixième extension du jeu. Elle est sortie le 11 aout 2017 en Europe.</div>")

        } else if ($(".jouer").attr('id') == 'kc') {
            $("#popup").html("<div id='texteCarte'>Kobold et Catacombes est la septième extension du jeu. Elle est sortie le 7 décembre 2017.</div>")

        } else if ($(".jouer").attr('id') == 'bm') {
            $("#popup").html("<div id='texteCarte'>Le bois maudit est la huitième extension du jeu. Elle est sortie le 12 avril 2018.</div>")

        } else if ($(".jouer").attr('id') == 'arma') {
            $("#popup").html("<div id='texteCarte'>Le projet armageboum est la neuvième extension du jeu. Elle est sortie le 7 aout 2018.</div>")

        } else if ($(".jouer").attr('id') == 'raz') {
            $("#popup").html("<div id='texteCarte'>Les jeux de Rastakhan est la dixième extension du jeu. Elle est sortie le 2 novembre 2018.</div>")

        }

    } else {

        if ($(".jouer").attr('id') === 'getg') {

            $("#popup").html("<div id='texteCarte'>Ces cartes sont disponible que dans des paquets. La mécanique des 'méca' et des 'pièces détachées' est introduite.</div>");

        } else if ($(".jouer").attr('id') === 'nax') {

            $("#popup").html("<div id='texteCarte'>L'aventure propose 30 nouvelles cartes et 15 monstres à vaincre pour les obtenir. Ils sont répartisdans5sections différentes.</div>");

        } else if ($(".jouer").attr('id') == 'montRoche') {
            $("#popup").html("<div id='texteCarte'>Cet aventure apporte 31 nouvelles cartes et 17 monstres à vaincre pour les obtenir. Ils sont répartis dans 5 sections différentes.</div>");


        } else if ($(".jouer").attr('id') == 'gdTournois') {
            $("#popup").html("<div id='texteCarte'>Ces cartes sont disponible que dans des paquets. La mécanique de l' 'exaltation' et de la 'joute'.</div>");


        } else if ($(".jouer").attr('id') == 'ligueExplo') {
            $("#popup").html("<div id='texteCarte'>L'aventure apporte 45 nouvelles cartes et 13 monstres à vaincre pour les obtenir. Elle introduit une nouvelle mécanique 'Découverte'.</div>");

        } else if ($(".jouer").attr('id') == 'dta') {
            $("#popup").html("<div id='texteCarte'>L'extension ajoute plus de 130 nouvelles cartes dont des versions 'corrompus' de cartes déjà existantes.</div>")

        } else if ($(".jouer").attr('id') == 'kara') {
            $("#popup").html("<div id='texteCarte'>Elle contient 45 nouvelles cartes et 13 monstres à vaincre pour les obtenir. Ils sont répartis dans 5 sections différentes.</div>")

        } else if ($(".jouer").attr('id') == 'gad') {
            $("#popup").html("<div id='texteCarte'>Elle propose 132  nouvelles cartes. Deplus elle ajoute au jeu 3 factions : les Déssoudeurs, la Kabale et le Lotus de jade.</div>")

        } else if ($(".jouer").attr('id') == 'ungoro') {
            $("#popup").html("<div id='texteCarte'>Cet extension ajoute 135 nouvelles cartes. Et met en place 3 nouvelles mécaniques : L'adaptation, les quêtes et les élémentaires.</div>")

        } else if ($(".jouer").attr('id') == 'tdg') {
            $("#popup").html("<div id='texteCarte'>Elle apporte 135 nouvelles cartes et mets en place deux nouvelles mécaniques : Les héros chevalier de la mort et vol de vie.</div>")

        } else if ($(".jouer").attr('id') == 'kc') {
            $("#popup").html("<div id='texteCarte'>Elle ajoute 135 nouvelles cartes. Et apporte deux nouvelles mécaniques : les armes légendaires et l'appel.</div>")

        } else if ($(".jouer").attr('id') == 'bm') {
            $("#popup").html("<div id='texteCarte'>Elle ajoute 135 nouvelles cartes. Elle ajoute deux nouvelles mécaniques :  l'effet début de partie et echo.</div>")

        } else if ($(".jouer").attr('id') == 'arma') {
            $("#popup").html("<div id='texteCarte'>Elle apporte 135 nouvelles cartes. Elle ajoute trois nouvelles mécaniques : magnétisme, les sorts légendaire et oméga</div>")

        } else if ($(".jouer").attr('id') == 'raz') {
            $("#popup").html("<div id='texteCarte'>Elle ajoute 135 nouvelles cartes. Et apporte deux nouvelles mécaniques : 'Brutalité' et les cartes 'Loas'.</div>")

        }
    }

}

function cacheTexte(evt) {

    if ($("#popup").hasClass("fermeturePopup")) {
        $("#popup").removeClass("fermeturePopup");
    }

    $("#popup").removeClass("ouverturePopup");
    $("#popup").addClass("fermeturePopup");

    setTimeout(function () {
        $("#popup").removeClass("popupTexte");
        $("#texteCarte").remove();
    }, 500)

}
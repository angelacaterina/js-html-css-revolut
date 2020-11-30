// Descrizione:
// Usado jQuery riproducete l'effetto dei menu a tendina del sito revolut (https://www.revolut.com/) usate lo screenshot di seguito per riprodurre anche il layout della navbar.
// Attenzione:
// Dovete riprodurre solo la navbar ed i menu a tendina, non tutto il sito. Fate attenzione che in questo caso non abbiamo un solo menu a tendina ma piú di uno. Il menu deve diventare visibile quando facciamo hover  o click ( a vs discrezione ) su uno dei link principali nella navbar. Ogni link della navbar ha il suo menu nascosto che deve apparire.

$(function() {
    $('.navbar_right a').eq(0).mouseenter(function() {
        // $('.abbonamenti').addClass('active');
    });

    $('.navbar_right a').eq(1).mouseenter(function() {
        $('.abbonamenti').addClass('active');
    });

    $('.navbar_right a').eq(2).mouseenter(function() {
        $('.chiSiamo').addClass('active');
    });
    
    $('.navbar_right a').eq(3).mouseenter(function() {
        $('.aiuto').addClass('active');
    });

    $('.navbar_right a').mouseleave(function() {
        $('.card').siblings().removeClass('active');
    });

});

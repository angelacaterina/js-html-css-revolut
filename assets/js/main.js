// Descrizione:
// Usado jQuery riproducete l'effetto dei menu a tendina del sito revolut (https://www.revolut.com/) usate lo screenshot di seguito per riprodurre anche il layout della navbar.
// Attenzione:
// Dovete riprodurre solo la navbar ed i menu a tendina, non tutto il sito. Fate attenzione che in questo caso non abbiamo un solo menu a tendina ma piú di uno. Il menu deve diventare visibile quando facciamo hover  o click ( a vs discrezione ) su uno dei link principali nella navbar. Ogni link della navbar ha il suo menu nascosto che deve apparire.

$(function() {
    $('.navbar_right a').eq(0).hover(function() {
        $('.d_none').removeClass('d_none');
        $('.funzionalità div').addClass('active');
    });

    $('.navbar_right a').eq(1).hover(function() {
        $('.abbonamenti').addClass('active');
    });

    $('.navbar_right a').eq(2).hover(function() {
        $('.chiSiamo').addClass('active');
    });
    
    $('.navbar_right a').eq(3).hover(function() {
        $('.aiuto').addClass('active');
    });

    $('.card').mouseleave(function() {
        $('.card').siblings().removeClass('active');
        $('.funzionalità').addClass('d_none');
    });
});

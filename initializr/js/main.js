
var dict = {
    en: {
        'Hallo': 'Hallo',
        'Goodbye': 'Goodbye',
        'castle': 'castle'
    },
    fr: {
        'Hallo': 'Bonjour',
        'Goodbye': 'Au revoir',
        'castle': 'chateau'
    },
    ar: {
        'Hallo': 'Hallo',
        'Goodbye': 'Auf Wiedersehen',
        'castle': 'schloss'
    }
}

var lang = 'fr';
//var tmpl = '<div>{{Goodbye}}, {{castle}}</div>';

function translate(dict, lang, word) {
    return dict[lang][word];
}

function applyTemplate(tmpl, lang) {
    var regex = /\{\{([a-zA-Z])\w+\}\}/g
    return tmpl.replace(regex, function (word) {
        return translate(dict, lang, word.replace(/[\{\}]/g, ''));
    });
}

var tmpl = document.querySelector('.template').textContent;
var translation  = document.querySelector('#translation');
var html = applyTemplate(tmpl, lang);
translation.insertAdjacentHTML('afterbegin', html);
translation.setAttribute('.template', '')




function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
}

function translateLanguage(lang) {
    googleTranslateElementInit();
    var $frame = $('.goog-te-menu-frame:first');
    if (!$frame.size()) {
        alert("Error: Could not find Google translate frame.");
        return false;
    }
    $frame.contents().find('.goog-te-menu2-item span.text:contains(' + lang + ')').get(0).click();
    return false;
}

$(function() {
    $('.selectpicker').selectpicker();
});


document.getElementById("myBtn").addEventListener("click", function() {
    document.getElementById("language-ar").innerHTML = "Hello World";
});

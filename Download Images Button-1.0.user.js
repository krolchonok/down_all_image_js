// ==UserScript==
// @name           Download Images Button
// @description    Adds a download button to the page that allows downloading all images on the site
// @namespace      ushastoe
// @version 1.0
// @match        http://*/*
// @match        https://*/*
// @grant          none
// ==/UserScript==

(function() {
    'use strict';

    var button = document.createElement('button');
    button.textContent = 'Download Images';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.zIndex = '9999';
    document.body.appendChild(button);

    button.addEventListener('click', function() {
        var images = document.querySelectorAll('img');
        var link = document.createElement('a');

        Array.from(images).forEach(function(image, index) {
            fetch(image.src)
                .then(function(response) { return response.blob(); })
                .then(function(blob) {
                    link.href = URL.createObjectURL(blob);
                    link.download = 'image_' + (index + 1);
                    link.click();
                });
        });
    });
})();

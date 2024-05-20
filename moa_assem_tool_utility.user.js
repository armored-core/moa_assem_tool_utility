// ==UserScript==
// @name         ACMOA Assemble Tool Utility
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       armored-core
// @match        http://k-2nd.sakura.ne.jp/ac/report/support_tool/jayhoun.html
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sakura.ne.jp
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const formControl = document.forms['Control'];
    const assembleTemplate = document.createElement('select');
    const robots = [
        { name: 'ドラム腕デビガン', code: '[5rbokQeR,oA0h]' },
        { name: 'Eサブデビガン', code: '[VjaPQKac,oA1p]' },
        { name: '陸リヴァイアサン', code: '[16AoCYnv2,nJtb]' },
        { name: '見た目はお嬢様', code: '[5qFQn4X7,oA0h]' },
    ];
    assembleTemplate.setAttribute('id', 'assemble-template');
    assembleTemplate.innerHTML = '<option data-assem-code="">-</option>';
    robots.forEach((val) => {
        assembleTemplate.innerHTML += `<option value="${val.code}">${val.name}</option>"`;
    });
    formControl.insertBefore(
        assembleTemplate,
        document.getElementById('AssyCode')
    );

    document
        .getElementById('assemble-template')
        .addEventListener('change', function () {
            formControl.AssyCode.value = this.value;
            formControl.AssyCodeB.click();
        });
})();

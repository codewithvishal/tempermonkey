// Migadu theme 01
// ==UserScript==
// @name         Migadu Theme 01
// @namespace    
// @version      Version Death
// @description  A theme for Migadu
// @match        https://webmail.migadu.com/*
// @author       CodeWithVishal
// @icon         
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
addGlobalStyle('body { font-family : Ubuntu !important; }');
addGlobalStyle('.thm-folders .e-link.selectable.selected { color: #d93025 !important; background-color: #fce8e6 !important; border-radius: 0 20px 20px 0;}');
addGlobalStyle('html.ssm-state-desktop #rl-right {left: 225px;}')

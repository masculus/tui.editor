/**
 * @fileoverview
 * @author FE개발팀 김성호 sungho-kim@nhnent.com
 */

'use strict';

/**
 * Layout
 * @exports Layout
 * @extends {}
 * @constructor
 * @class
 */
function Layout(base, options){
    this.$el = $(options.el);
}

Layout.prototype.init = function() {
    console.log('Layout Init');

    this.initEditorEl();
};

Layout.prototype.initEditorEl = function() {
    this.$editorEl = $('<pre contenteditable="true" class="language-markdown"/>');
    this.$el.append(this.$editorEl);
};

module.exports = Layout;
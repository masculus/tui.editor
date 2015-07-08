/**
 * @fileoverview Implements WysiwygCommand
 * @author Sungho Kim(sungho-kim@nhnent.com) FE Development Team/NHN Ent.
 */

'use strict';

var CommandManager = require('../commandManager');

/**
 * Bold
 * Add bold to selected wysiwyg editor content
 * @exports Bold
 * @augments Command
 * @augments WysiwygCommand
 */
var Bold = CommandManager.command('wysiwyg',/** @lends Bold */{
    name: 'Bold',
    keyMap: ['Ctrl-B', 'Ctrl-B'],
    /**
     *  커맨드 핸들러
     *  @param {Squire} editor Squire instance
     */
    exec: function(editor) {
        editor.bold();
        editor.focus();
    }
});

module.exports = Bold;

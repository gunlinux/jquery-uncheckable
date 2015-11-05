/**
 * @file jQuery plugin that adds functionality to uncheck a radio button.
 * @author Renaat De Muynck <renaat.demuynck@gmail.com>
 * @license MIT
 */

(function ($) {
    $.fn.uncheckable = function () {
        
        'use strict';
        
        this.each(function () {
            var radio = $(this),
                parentLabel = radio.closest('label'),
                targets = $('label[for="' + this.id + '"]').add(parentLabel.length === 1 ? parentLabel : radio);
            
            // Capture MOUSEUP event on radio button (or its parent label)
            // and all labels with a FOR attribute pointing to it
            targets.mouseup(function (e) {
                // At this point we know the current state of the radio button
                // so if the state is 'checked' and the left mouse button was used
                // we attach a one-time click handler to the radio button
                if (radio.prop('checked') && e.which === 1) {
                    radio.one('click', function () {
                        radio.prop('checked', false);
                    });
                }
            });
        });
        
    };
}(jQuery));

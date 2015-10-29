/**
 * @file jQuery plugin that adds functionality to uncheck a radio button.
 * @author Renaat De Muynck <renaat.demuynck@gmail.com>
 * @license MIT
 */

$.fn.uncheckable = function () {
    this.each(function () {
        
        'use strict';
        
        var radio = $(this),
            label = radio.closest('label').length === 1 ? radio.closest('label') : radio;
        
        // Capture MOUSEUP event on radio button or its label
        // At this point we know the current state of the radio button
        label.mouseup(function (e) {
            
            // Attach a one-time click handler to the radio button
            // *only* if the state is 'checked'
            if (radio.prop('checked')) {
                radio.one('click', function () {
                    radio.prop('checked', false);
                });
            }
        });
    });
};

/**
 * @file jQuery plugin that adds functionality to uncheck a radio button.
 * @author Renaat De Muynck <renaat.demuynck@gmail.com>
 * @license MIT
 */

$.fn.uncheckable = function () {
    this.each(function () {
        
        'use strict';
        
        // Capture MOUSEUP event 
        // At this point we know the current state of the radio button
        $(this).mouseup(function () {
            
            // Attach a one-time click handler to the radio button
            // *only* if the state is 'checked'
            if ($(this).prop('checked')) {
                $(this).one('click', function () {
                    $(this).prop('checked', false);
                });
            }
        });
    });
};

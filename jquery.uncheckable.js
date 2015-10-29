
$.fn.uncheckable = function () {
    this.each(function () {
        
        // Capture MOUSEDOWN event 
        // At this point we know the current state of the radio button
        $(this).mousedown(function () {
            
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

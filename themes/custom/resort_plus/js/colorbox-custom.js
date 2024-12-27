(function ($) {
    $(document).ready(function () {
        $('.colorbox').on('click', function (e) {
            e.preventDefault();
            console.log('Colorbox link clicked'); // Debugging line
            var blockId = $(this).data('block_3');

            // Load the block content via AJAX
            $.colorbox({
                html: '<div id="colorbox-content"></div>',
                width: '80%',
                height: '80%',
                onOpen: function() {
                    $('#colorbox-content').load('/block/' + block_3);
                },
                title: 'Room Types',
                scrolling: false,
            });
        });
    });
})(jQuery);

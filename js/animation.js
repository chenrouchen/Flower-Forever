$(function () {
    function onScrollInit(items, trigger) {
        items.each(function () {
            var element = $(this),
                animationClass = element.attr('data-animation'),
                animationDelay = element.attr('data-animation-delay');

            element.css({
                '-webkit-animation-delay': animationDelay,
                '-moz-animation-delay': animationDelay,
                'animation-delay': animationDelay
            });

            var Trigger = (trigger) ? trigger : element;

            Trigger.waypoint(function () {
                element.addClass('animated').addClass(animationClass);
            }, {
                triggerOnce: true,
                offset: '90%'
            });
        });
    }

    onScrollInit($('.animation'));
    onScrollInit($('.animation'), $('.animation-container'));
});
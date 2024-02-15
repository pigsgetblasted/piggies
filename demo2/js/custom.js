$(document).ready(function(){

    
    let left = 60;
    let totalWidth = left;
    $('.history-box .history-item').each(function(i, obj) {
        const width = $(obj).outerWidth();
        totalWidth += width + 30;
        
        if (i % 2 == 1) {
            $(obj).addClass('odd');
            $(obj).css({top: 'calc(50% + 30px)', left: left, position:'absolute'});
        } else {
            $(obj).css({top: 0, left: left, position:'absolute'});
        }
            
        left += width + 30;
    });
    totalWidth += 30;


    $('.history-box-wrapper').width(totalWidth);
    $('.history-box-wrapper').dragScroll({
        direction: 'scrollLeft',
        scrollBars : true,
        autoFadeBars : true,
        smoothness : 15,
        mouseWheelVelocity : 2
    });

    left = 60;
    totalWidth = left;
    $('.pigs-box .pig-item').each(function(i, obj) {
        const width = $(obj).outerWidth();
        totalWidth += width + 30;

        const order = i % 4;
        if (order === 0) {
            
        } else if (order === 1) {
            $(obj).addClass('item1');
        } else if ( order === 2) {
            $(obj).addClass('item2');
        } else if (order === 3) {
            $(obj).addClass('item3');
        }
            
        $(obj).css({left: left});
        left += width + 30;
    });
    totalWidth += 30;
    $('.pigs-box-wrapper').width(totalWidth);

    $('.pigs-box-wrapper').dragScroll({
        direction: 'scrollLeft',
        scrollBars : true,
        autoFadeBars : true,
        smoothness : 15,
        mouseWheelVelocity : 2
    });

    $('.plus-btn').on('click', e => {
        e.preventDefault();
        const val = parseInt($(e.currentTarget).parent().find('input').val());
        $(e.currentTarget).parent().find('input').val(val + 1);
    });

    $('.minus-btn').on('click', e => {
        e.preventDefault();
        let val = parseInt($(e.currentTarget).parent().find('input').val());
        if (val <= 1)
            val = 1;
        $(e.currentTarget).parent().find('input').val(val - 1);
    });
});


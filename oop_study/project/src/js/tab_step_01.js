/**
 * Created by msminsu on 2016-09-12.
 */

function tabMenu(container, options){
    if(!container.length){
        return;
    }
    var detect = {
    };

    var config = {
        start: 0
    };

    $.extend(config, options);

    function init(){
        setup();
        $(document)
            .on('click','[data-tab="tab"]',function(e){
                e.preventDefault();
                viewCon($(this).attr('href'));
            });

        viewCon(config.current);
    }

    function setup(){
        detect.tabCon = container.find('>div');
    }

    function viewCon(current){
        detect.tabCon.hide();
        detect.tabCon.eq(current).show();
        console.log(detect.tabCon.eq(current));
    }

    init();

    return {'init':init}

}

$(document).ready(function(){
    tabMenu($('.tab_wrap'),{
        start :2
    });
});




/**
 * Created by msminsu on 2016-09-12.
 */

function tabMenu(container, options){
    if(!container.length){
        return;
    }
    var detect = {};

    var config = {
        current: 0
    };

    $.extend(config, options);

    function init(){
        setup();
        $(document)
            .on('click','[data-tab="tab"]',function(e){
                e.preventDefault();
                tabView($(this).parent().index());
            });
        tabView(config.current);
    }

    function setup(){
        detect.tabCon = container.find('>div');
        detect.tabMenus = container.find('>.tab_nav li');
    }

    function tabActive(current){
        detect.tabMenus.removeClass('active');
        detect.tabMenus.eq(current).addClass('active');
    }

    function tabView(current){
        tabActive(current);
        detect.tabCon.hide();
        detect.tabCon.eq(current).show();
    }

    init();

    return {'init':init}

}

$(document).ready(function(){
    tabMenu($('.tab_wrap'),{
        current :2
    });
});




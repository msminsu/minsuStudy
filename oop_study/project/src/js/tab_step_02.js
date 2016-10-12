function TabMenu(container, options){
    if(!container.length){
        return;
    }
    this.detect = {};

    this.config = {
        current: 0
    };

    this.container = container;
    $.extend(this.config, options);

    this.init();
    // /return {'init':init};
}

TabMenu.prototype.setup = function(){
    this.detect.tabCon = this.container.find('>div');
    this.detect.tabMenus = this.container.find('>.tab_nav li');
};


TabMenu.prototype.init = function(){
    var that = this;
    this.setup();

    this.container.on('click','[data-tab="tab"]',function(e){
        e.preventDefault();
        that.tabView($(this).parent().index());
    });
    this.tabView(this.config.current);
};

TabMenu.prototype.tabActive = function(current){
    this.detect.tabMenus.removeClass('active');
    this.detect.tabMenus.eq(current).addClass('active');
};

TabMenu.prototype.tabView = function(current){
    this.tabActive(current);
    this.detect.tabCon.hide();
    this.detect.tabCon.eq(current).show();
};

$(document).ready(function(){
    var tab1 = new TabMenu($('.tab_wrap'),{
        current :2
    });

    var tab2 = new TabMenu($('.tab_wrap2'),{
        current :0
    });
});

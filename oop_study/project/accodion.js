(function(global, $){

    // 플러그인 네이밍 정의
    var pluginName = 'accordion';

    function Accordion($selector, dataValue, options) {

        // 플러그인 대상 jQuery 객체 참조
        this.$selector = $selector;

        // 기본 옵션값과 사용자 정의 옵션값 merge
        this.config = $.extend({}, this._defaults, options || {});

        //
        this.detect = {
            children : this.$selector.find(this.config.descendant.ul + ', '+ this.config.descendant.div),
            clickTarget : '.' + this.$selector.attr('class') + ' ' + this.config.eventTarget
        };

        this._init();

    }

    Accordion.prototype = {
        '_defaults' : {
            descendant : {
                ul : 'ul',
                div : 'li > div'
            },
            dataValue : 'accordiated',
            className : 'active',
            eventTarget: 'a'
        },
        '_init' : function () {

            // 플러그인을 사용하지 않는 곳에서 실행하지 않기
            if(!this.$selector.length) return;

            this._menuInit();
            this._initEvent();
        },
        '_menuInit' : function () {

            var _self = this;

            // 시용자 정의 데이터가 있다면 return
            if ( this.$selector.data(this.config.dataValue) ) return false;

            $.each(this.detect.children, function () {

                var $this = $(this);

                _self.$selector.data(_self.config.dataValue, true);

                // 모든 서브 메뉴 숨기기
                $this.hide();

            });
        },
        '_initEvent' : function () {

            // context 유지하기 위한 $.proxy() 정의(this 객체 유지)
            $(document).on('click.acc.ck', this.detect.clickTarget, $.proxy(this._activate, this));

            // hash 메뉴 열어 놓기
            this._hashCheck();
        },
        '_activate' : function (e) {

            // 변경된 context 로 인해 jQuery 객체를 참조
            var $this = $(e.target);

            $this
                .parent('li')
                .toggleClass(this.config.className)
                .siblings()
                .removeClass(this.config.className)
                .children(this.config.descendant.ul + ', ' + this.config.descendant.div)
                .slideUp('fast');

            this._effect($this);

        },
        '_effect' : function (el, effect) {

            $(el)
                .siblings(this.config.descendant.ul + ', ' + this.config.descendant.div)[(effect || 'slideToggle')](!effect ? 'fast' : null);

        },
        '_hashCheck' : function () {

            var hash = (location.hash) ? this.$selector.find('a[href="' + location.hash + '"]')[0] : '';

            // hash 가 있는 메뉴는 펼쳐 놓기
            if(hash) {
                this._effect(hash, 'toggle');
                if(this.$selector) {
                    $(hash).parents('ul').show();
                }
            }
        }

    };

    // 이미 $.fn.accordion 이 있다면 이미 존재하는 $.fn.accordion 을 사용하고
    // 그렇지 않다면 현재 사용자 정의된 $.fn.accordion 을 사용하기
    $.fn[pluginName] = $.fn[pluginName] || function (options) {

            // example : $('.selector').accordion();
            // 플러그인을 적용한 대상 노드를 참조
            var $this = this; // this 는 jQuery 객체

            // 플러그인 재사용을 위해 반복문 사용하기
            return $.each($this, function (idx, el) {

                var $selector = $this.eq(idx);

                // jQuery.data( DOM element, key, value )
                // key 값이 없다면 value 에 생성자 함수 호출
                if ( !$.data(this, 'plugin_' + pluginName) ) {
                    $.data(this, 'plugin_' + pluginName, new Accordion($selector, options))
                }
                // jQuery 체이닝을 위해 jQuery 객체 반환하기
                return $selector;
            })
        };

})(window, window.jQuery);

$(function () {
    $('.accordion').accordion();
});

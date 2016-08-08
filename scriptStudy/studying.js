// 객체 생성하는 함수 : 생성자 함수 (Constructor Function)

function Navigation(el){
    this.el = document.querySelector(el);
   // this.children = this.el.querySelectorAll('a');
   // this.childrenLength = this.children.length;
}

//생성자 함수의 프로토 타입: 생성되는 객체의 원형(Prototype)

Navigation.prototype = {
    nextLink : function () {
        console.log(this.el, '다음 링크 활성화');
    },
    prevLink: function(){
        console.log(this.el, '이전 링크 활성화');
    },
    goToLink : function(num){
        console.log(num + '링크 활성화');
    },
    playRollingLinks :function () {
        console.log('링크 롤링 시작');
    },
    stopRollingLinks: function () {
        console.log('링크 롤링 중지');
    }
};

// Navigation 인스턴스 객체 생성
var hNav = new Navigation('header nav');
var aNav = new Navigation('aside nav');
var mNav = new Navigation('main nav');
var fNav = new Navigation('footer nav');

// Navigation 인스턴스 객체 메소드 활용
hNav.nextLink();
mNav.prevLink();
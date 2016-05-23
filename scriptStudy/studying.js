
var myObj = (function(){
    // 비공개 멤버
    var name = 'my oh my';

    //공개될 부분을 구현한다.
    return {
        // 특권 메서드
        getName : function(){
            return name;
        }
    }
}());

console.log(myObj.getName());

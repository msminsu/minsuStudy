var DUI = {};

DUI.check = {
    siteCode : window.LOCALE ? window.LOCALE : '',
    browser : (function () {
        var agent = navigator.userAgent.toLocaleLowerCase();
        var browserList = {
            'ie7' : agent.match(/msie 7.0/i),
            'ie8' : agent.match(/msie 8.0/i),
            'ie9' : agent.match(/msie 9.0/i),
            'ie10' : agent.match(/msie 10.0/i),
            'ie11' : agent.match(/rv:11.0/i),
            'edge' : agent.match(/edge/i),
            'chrome' : agent.match(/chrome/i),
            'safari' : agent.match(/safari/i),
            'firefox' : agent.match(/firefox/i),
            'opera' : agent.match(/opera/i)
        };

        for (prop in browserList) {
            if (browserList[prop]) { // agent.match()
                return prop;
            }
        }

    })(),
    os : (function () {
        var agent = navigator.userAgent.toLocaleLowerCase();
        var osList = {
            'mac' : agent.match(/macintosh/i),
            'window' : agent.match(/windows/i),
        };

        for (prop in osList) {
            if (osList[prop]) {
                return prop;
            }
        }

    })(),
    ieua : (function () {

        var UA = navigator.userAgent.toLowerCase();

        // IE7 에는 브라우저 엔진명인 Trident 가 없고 IE11 에는 MSIE 란 문자열이 없으므로 두 가지 경우를 모두 체크
        if (UA.indexOf('msie') != -1 || UA.indexOf('trident') != -1) {

            var version = 11;
            UA = /msie ([0-9]{1,}[\.0-9]{0,})/.exec(UA);

            if (UA) {
                version = parseInt(UA[1]);
            }

            var classNames = '';

            // IE 10 이하에 html 클래스를 추가한다.
            if(version <= 11) {

                // IE11 이하에사 사용할 ie 공통 클래스도 추가
                classNames += 'ie';

                // 현재 버전 표시를 추가
                classNames += ' ie' + version;

            }

            // IE10이하 에서 lt-ie 버전에 대한 멀티 클래스를 추가
            for (var i = version + 1; i <= 11; i++) {
                classNames += ' lt-ie' + i;
            }

            // 위 코드에서 체크한 클래스를 html 태그에  추가한다.
            document.getElementsByTagName('html')[0].className += classNames;

        }

    })()
};

if(DUI.check.browser == 'ie10') {
    console.log('ie10 입니다. 해당 버전에서의 실행 로직을 작성하세요!');
}

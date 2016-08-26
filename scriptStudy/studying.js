
/*
*
* 사용된 구분자 = ","
* "minsu,1234"
*
* 사용된 구분자 = "||"
* "id=minsu||pw=1234"
*
* 사용된 구분자  = "&"
* "id=minsu&pw=1234"
* */

//클라이언트는 서버에서 사용한 구분자를 토대로 결과값을 분리해서 데이터를 처리
var aryData = xmlHttp.responseText.splite('||');
var objResult = {};
for( var i = 0; i< aryData.length; i++){
    var keyValue = aryData[i].splite('=');
    objResult[keyValue[0]] = keyValue[1];
}


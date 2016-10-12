var ARCHIVE = ['조카에게\n네 엄마한테서 스카이 다이빙했다고 들었는데, 그게 사실이니? 늘 조심하거라. 너희 이모\n' +
    '부한테 어떤 일이 있었는지 기억하지? 더군다나 그건 2층에서 일어난 일이었다.\n' +
    ' 아무튼 여기는 아주 흥미진진하게 돌아가고 있단다. 이모는 한 주를 온통 이웃집에 이\n' +
    '사 온 영호 씨의 관심으 ㄹ끄는 데 보냈는데, 아무래도 영호 씨는 고양이를 무서워하는 것\n' +
    '같단다. 아이면 고양이한테 알레르기가 있는 건가?\n' +
    ' 이모는 다음에 영호 씨를 보면 뚱뚱한 아라르르 영호 씨의 어깨에 올려보려고 한단다.\n' +
    '아주 별난 일이 일어날 것만 같구나.\n' +
    ' 더불어 전에 얘기했던 사기 사건은 예상보다 상황이 나아질 거란다. 벌써 다섯 번 "결\n' +
    '제" 한 걸 되돌려 받았다고 불만 접수 건만 하나 남았단다. 이 얘길 하니 약간 기분이 안\n' +
    '좋아지기 시작하는구나. 그리고 아마 법에 어긋날 거라고한 네 말이 맞단다.\n' +
    ' 무척 사랑하는\n' +
    '막내 이모가\n' +
    '눈감은 고양이(2006/04/27): 나비\n' +
    '태어난 고양이(2006/04/05, 어미는 반야): 아라, 란, 시타, 라나']


//console.log(ARCHIVE);

var livingCats = {'금강': true};
for( var mail= 0; mail<ARCHIVE.length; mail++){
    var paragraphs = ARCHIVE[mail].split("\n");
    //console.log(paragraphs);

    for(var i = 0; i<paragraphs.length;i++){
        var paragraph = paragraphs[i];

        var names = catNames(paragraph);
        if(startsWith(paragraph,"태어난")){

           /* for(var name =0;name<names.length; name++){
                livingCats[names[name]] = true;
            }*/
           addToSet(livingCats,catNames(paragraph));

        }else if(startsWith(paragraph,"눈감은")){

            /*for(var name =0;name<names.length; name++){
                delete livingCats[names[name]];
            }*/
            removeFromSet(livingCats,catNames(paragraph));
        }
    }
}


function catNames(paragraph){
    var colon = paragraph.indexOf(":");
    return paragraph.slice(colon + 2).split(", ");
}
//console.log(catNames("태어난 고양이 (2004/09/20, 어미는 라나): 샘, 삐용이"));

function startsWith(string, pattern){
    return string.slice(0, pattern.length) == pattern;
}
//console.log(startsWith("rotation","rot"));

function addToSet(set, names, birthdate, mother){
    for(var i = 0; i< names.length; i++){
        set[names[i]] = catRecord(names[i],birthdate,mother);
    }
}

function removeFromSet(set, values){
    for(var i = 0; i < values.length; i++){
        delete set[values[i]];
    }
}


function extractDate(paragraph){
    function numberAt(start,length){
        return Number(paragraph.slice(start, start+length));
    }
    return new Date(numberAt(8,4), numberAt(13,2)-1, numberAt(16,2));
}

/* var str = "태어난 고양이(2001/04/02, 어미는 금강): 아라";
 console.log(extractDate(str));*/


function catRecord(name, birthdate, mother){
    return {name:name, birth:birthdate, mother: mother};
}

function deadCats(set,names,deathdate){
    for(var i = 0; i< names.length;i++){
        set[names[i]].death = deathdate;
    }
}

function extractMother(paragraph){
    var start = paragraph.indexOf(", 어미는 ")+ ", 어미는 ".length;
    var end = paragraph.indexOf(")");
    return paragraph.slice(start, end);
}
var str = "태어난 고양이(2001/04/02, 어미는 금강): 아라";
console.log(extractMother(str));
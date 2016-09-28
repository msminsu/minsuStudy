function Clock(type, time){
    this.type = type;
    this.time = time;
}


Clock.prototype.getHour  = function(){
    console.log(this.type + this.time + ' 시 입니다.');
};

var gshorck = new Clock('white LED ', 10);
gshorck.getHour();


function AlarmClock(type, time, sound){
    Clock.apply(this, arguments);
    this.sound = sound;
}

AlarmClock.prototype = Object.create(Clock.prototype);
AlarmClock.prototype.constructor = AlarmClock;


AlarmClock.prototype.getAlarm = function(){
    console.log(this.type +' 현재시간 '+ this.time + '시 알람은 '+this.sound+'으로 울린다.');
};

var deskClock = new AlarmClock('RED LED ',10, '클래식');
deskClock.getHour();
deskClock.getAlarm();



function WaterProof(type, time, deepth){
 Clock.apply(this, arguments);
    this.deepth = deepth;
}

WaterProof.prototype = Object.create(Clock.prototype);
WaterProof.prototype.constructor = WaterProof;
WaterProof.prototype.defenseCheck = function(deepth){
    if(this.deepth < deepth){
                 console.log('방수 위험');
    }else{
        console.log('방수 안전');
    }
};

var bangsu = new WaterProof('Blue LED ',13, 50);
bangsu.getHour();
bangsu.defenseCheck(100);

Culture.prototype = {
    First_startTimeNum : 0, 
    Second_startTimeNum : 0,
    Third_startTimeNum : 0,
    startTimeList : [8, 10, 12, 14, 16, 18, 20, 22, 24],
    TimeList : [0, 0, 0],
    settingTime : function(){
        var check;
        var approval;
        var timeNum;
        type = this.type;
        function settingCourseTime(TimeList, courseNum){
            console.log("<" + this.type + " timetable>");
            for(let i = 0; i < TimeList.length; i++){
                console.log(i + 1  + ".【" + TimeList[i] + " : 00】" + "~【" + (TimeList[i] + 1) + " : 00】");
            }
            console.log("Choose the time you want to watch the movie(input : 1 ~ " + TimeList.length + ")");
            timeNum = input();
            if(timeNum < 1 || timeNum > TimeList.length){
                console.log("Wrong.\n");
                return true;
            }
            else{
                console.log("false");
                TimeList[courseNum] = timeNum;
                return false;
            }
        }
        do{
            console.log("set the " + this.type + " time\n");
            
            if(this.First_startTimeNum == 0){
                check = settingCourseTime(this.First_startTimeList, 0);
                if(check){
                    continue;
                }
                console.log("dd");
                approval = true;
            }
            else if(this.Second_startTimeNum == 0){
                check = settingCourseTime(this.Second_startTimeList, 1);
                if(check) continue;
                approval = true;
            }
            else{
                check = settingCourseTime(this.Third_startTimeNum, 2);
                if(check) continue;
                approval = false;
            }
        }while(approval);
    }
};



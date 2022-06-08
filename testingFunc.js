// 테스팅 함수 모음
function TestingCourseA(select) {  
    console.log("Selected A Package!\n");
    this.getCourse = function () {
        return select.setCourse(new CourseA());
    };
};

function TestingCourseB(select) { 
    console.log("Selected B Package!\n");
    this.getCourse = function () {
        return select.setCourse(new CourseB());
    };
};

function TestingCourseC(select) { 
    console.log("Selected C Package!\n");
    this.getCourse = function () {
        return select.setCourse(new CourseC());
    };
};

function TestingFunc() {
    this.testing = function (type) {
        let select = new Course();
        switch (type) {
            case "A코스":
                return new TestingCourseA(select);
            case "B코스":
                return new TestingCourseB(select);
            case "C코스":
                return new TestingCourseC(select);
            default:
                return null;
        }
    };
};
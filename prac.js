var Vitellius = (function () {
    function Vitellius() { }
    Vitellius.prototype.approve = function (commander) {
        commander.execute();
    };
    return Vitellius;
})();

var Commander = (function () {
    function Commander() {
        this.commands = [];
    }
    Commander.prototype.execute = function () {
        this.commands.forEach(function (command) {
            command();
        });
    };
    Commander.prototype.do = function (command, args) {
        this.commands.push(function () {
            command.call(null, args);
        });
    };
    Commander.prototype.undo = function () {
        this.commands.pop();
    };
    return Commander;
})();

var strategy = {
    climbAlps: function () {
        console.log('알프스를 오릅니다');
    },
    prepareSupply: function (number) {
        console.log('보급품을 ' + number + '만큼 준비합니다');
    },
    attackRome: function () {
        console.log('로마를 공격합니다');
    },
};

var vitellius = new Vitellius();
var caecina = new Commander();
caecina.do(strategy.prepareSupply, 5000);
caecina.undo(); // prepareSupply 취소
caecina.do(strategy.prepareSupply, 10000);
caecina.do(strategy.climbAlps);
caecina.do(strategy.attackRome);
vitellius.approve(caecina); // 보급품을 10000만큼 준비합니다. 알프스를 오릅니다. 로마를 공격합니다.
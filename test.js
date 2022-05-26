const Strategy = class {
	constructor() {
		this.strategy = null;
	};
	setStrategy(strategy) {
		this.strategy = strategy;
	};
	execute() {
		this.strategy.execute();
	};
};

const ShipStrategy = class {
	constructor() { };
	execute() {
		console.log('배로 이탈리아에 갑니다');
	};
};

const LandStrategy = class {
	constructor() { };
	execute() {
		console.log('육로로 이탈리아에 갑니다');
	};
};

var strat = new Strategy();
var ship = new ShipStrategy();
var land = new LandStrategy();
strat.setStrategy(ship);
strat.setStrategy(land); // 전략을 바꿈
strat.execute(); // 어떤 전략이든 설정된 것을 실행
// 육로로 이탈리아에 갑니다.
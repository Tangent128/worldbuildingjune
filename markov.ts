
import { onclick } from 'lib';

interface StateMap { [state: string] : State };

class State {
	nextWeights: { [state: string] : number } = {};
};

class Markovator {
	states: StateMap = {};

	private startState;
	private endState;

	constructor() {
		this.startState = this.grabState("START");
		this.endState = this.grabState("END");
	};

	grabState(symbol: string) {
		let state = this.states[symbol];

		if(state == null) {
			state = new State();
			this.states[symbol] = state;
		}

		return state;
	};

	learn(word: string) {
		let state = this.startState;

	};
};

onclick("#generateBtn", function() {
	let engine = new Markovator();

	engine.learn("Cool");

	console.log(engine);
});

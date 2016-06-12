
import { onclick, log } from 'lib';

interface StateMap { [symbol: string] : State };

class State {
	nextWeights: { [symbol: string] : number } = {};

	tally(symbol: string) {
		let oldCount = this.nextWeights[symbol] || 0;
		this.nextWeights[symbol] = oldCount + 1;
	};
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

		for(let letter of word) {
			state.tally(letter);
			state = this.grabState(letter);
		}

		state.tally("END");
	};
};

onclick("#generateBtn", function() {
	let engine = new Markovator();

	engine.learn("Cool");
	engine.learn("Groovy");
	engine.learn("Far-out");

	log(engine.states);

});

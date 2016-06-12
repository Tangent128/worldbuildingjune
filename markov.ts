
import { onclick, log } from 'lib';

interface StateMap { [symbol: string] : State };

class State {
	nextWeights: { [symbol: string] : number } = {};
	totalWeight = 0;

	tally(symbol: string) {
		let oldCount = this.nextWeights[symbol] || 0;
		this.nextWeights[symbol] = oldCount + 1;
		this.totalWeight += 1;
	};

	next(random: number) : string {
		let position = 0;
		let target = random * this.totalWeight;

		for(let option in this.nextWeights) {
			position += this.nextWeights[option];
			if(position >= target) {
				return option;
			}
		}
		// should not reach here
		return "END";
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

	babble() : string {
		let state = this.startState;
		let letters = [];

		while(true) {
			let nextLetter = state.next(Math.random());
			state = this.grabState(nextLetter);

			if(state == this.endState) {
				break;
			}

			letters.push(nextLetter);
		}

		return letters.join("");
	};
};

onclick("#generateBtn", function() {
	let engine = new Markovator();

	engine.learn("Cool");
	log(engine.babble());

	engine.learn("Groovy");
	log(engine.babble());

	engine.learn("Far-out");
	log(engine.babble());
	log(engine.babble());
	log(engine.babble());

	log(engine.states);

});

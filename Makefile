
site: min.ts.js

min.ts.js: all.ts.js
	uglifyjs all.ts.js -o min.ts.js -m -c

all.ts.js: almond.js lib.ts markov.ts
	tsc

clean:
	rm *.ts.js

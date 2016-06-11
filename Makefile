
site: bundle.ts.js

bundle.ts.js: almond.js all.ts.js
	cat almond.js all.ts.js | uglifyjs > bundle.ts.js

all.ts.js: lib.ts markov.ts
	tsc

clean:
	rm *.ts.js

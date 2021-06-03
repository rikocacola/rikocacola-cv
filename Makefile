run_setup:
	cp .env.example .env
	npm install

run_lint:
	./node_modules/.bin/eslint .

run_local:
	npm run dev

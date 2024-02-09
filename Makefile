# Makefile
install: install-deps

run:
	bin/nodejs-package.js 10

install-deps:
	npm ci

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8


publish:				
	npm publish --dry-run

.PHONY: test

brain-games:
	node /home/vasilii/js-starter-project-44/bin/brain-games.js
lint:
	npx eslint .
lint-fix:
	npx eslint --fix .
build: install generate-html build-crx

install:
	npm install

generate-html:
	npm run build

build-crx:
	npm run build:crx

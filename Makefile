build: install generate-html build-crx

install:
	yarn

generate-html:
	yarn build

build-crx:
	yarn build:crx

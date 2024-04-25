# Carbonx

A chrome extension for carbon.now.sh

## Requirement
- node >8 <21 
- npm

## Installation

First clone the repository

```sh
git clone https://github.com/micaiah-effiong/carbonx.git

# move into carbonx directory
cd carbonx
```

To build run

```sh
make
# or
npm && npm run build && npm run build:crx
```

This will generate a `dist/carbonx.crx` file

### Importing

1. Launch Chrome
2. Visit `chrome://extensions`
3. Enable developer mode
4. Drag and drop `carbonx.crx"

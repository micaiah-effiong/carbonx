#!/usr/bin/env bash

mv out/_next out/next 
cd out

# rename all content  with _next to next
grep -rl '/_next' * | xargs sed -i 's|/_next|/next|g'

cd ..


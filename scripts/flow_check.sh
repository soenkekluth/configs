#!/bin/bash

echo "flow status"
flow status
echo " "
echo " "

# echo '' >> src/main/GeneTrack.js; time flow status
echo "js files"
git ls-files | grep '\.js$' | wc -l
echo " "
echo " "
echo "flow version"
flow version
echo " "
echo " "

echo "writing flow check --verbose to .tmp/flow.all.txt"
echo " "
flow check --verbose 2> .tmp/flow-all.txt
echo " "
echo " "

echo "test 1"
grep -o 'pileup.js/node_modules.*' .tmp/flow-all.txt | perl -pe 's/:.*//; s/[\\]?".*//; s/ .*//' | sort | uniq | wc -l
echo " "
echo " "


echo "test 2"
grep -o 'node_modules.*' .tmp/flow-all.txt | perl -pe 's/:.*//; s/[\\]?".*//; s/ .*//' | sort | uniq | perl -pe 's,node_modules/([^/]+)/.*,$1,' | uniq -c | sort -nr

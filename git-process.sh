#!/bin/bash

for FILE in *
do
  for SUBFILE in $FILE
  do
    for SUBSUBFILE in $SUBFILE
    do
      git add $SUBSUBFILE
      git commit -m "Edited $SUBSUBFILE"
    done
  done
done

git push origin master
#!/bin/bash

for FILE in *
do
  git add $FILE
  git commit -m "Edited $FILE"
  for SUBFILE in $FILE
  do
    git add $SUBFILE
    git commit -m "Edited $SUBFILE"
    for SUBSUBFILE in $SUBFILE
    do
      git add $SUBSUBFILE
      git commit -m "Edited $SUBSUBFILE"
      for SUB3FILE in $SUBSUBFILE
      do
        git add $SUB3FILE
        git commit -m "Edited $SUB3FILE"
      done
    done
  done
done

git push origin master
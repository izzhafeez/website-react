#!/bin/bash

for FILE in *
do
  for SUBFILE in $FILE
  do
    for SUBSUBFILE in $SUBFILE
    do
      for SUB3FILE in $SUBSUBFILE
      do
        git add $SUB3FILE
        git commit -m "Edited $SUB3FILE"
      done
      git add $SUBSUBFILE
      git commit -m "Edited $SUBSUBFILE"
    done
    git add $SUBFILE
    git commit -m "Edited $SUBFILE"
  done
  git add $FILE
  git commit -m "Edited $FILE"
done

git push origin master
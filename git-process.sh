#!/bin/bash

for FILE in *
do
  for SUBFILE in $FILE
  do
    echo $SUBFILE
    for SUBSUBFILE in $SUBFILE
    do
      git add $SUBSUBFILE
      git commit -m "Edited $SUBSUBFILE"
    done
  done
done

for FOLDER in src/*/
do
  for FILE in $FOLDER
  do
    echo $FILE
  done
done

git push origin master
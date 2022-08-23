#!/bin/bash

for FILE in *
do 
  echo $FILE
  cd $FILE
  for SUBFILE in *
  do
    cd $SUBFILE
    for SUBSUBFILE in *
    do
      cd $SUBSUBFILE
      for SUB3FILE in *
      do
        git add $SUB3FILE
        git commit -m "Edited $SUB3FILE"
      done
      cd ..
    done
    cd ..
  done
  cd ..
done

git push origin master
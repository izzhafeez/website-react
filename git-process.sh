#!/bin/bash

# for FILE in *
# do
#   for SUBFILE in $FILE
#   do
#     echo $SUBFILE
#     for SUBSUBFILE in $SUBFILE
#     do
#       git add $SUBSUBFILE
#       git commit -m "Edited $SUBSUBFILE"
#     done
#   done
# done

function loop_through_folder () {
  if [[ $2 > 2 ]]
  then
    git add $1
    git commit -m "Edited $1"
  else
    for FILES in "$1/*"
    do
      for FILE in $FILES
      do
        if [[ $FILE == *"."* ]]
        then
          git add $FILE
          git commit -m "Edited $FILE"
        else
          i=$(($2+1))
          loop_through_folder $FILE $i
        fi
      done
    done
  fi
}

loop_through_folder src 1

for FILES in "*"
do
  for FILE in $FILES
  do
    git add $FILE
    git commit -m "Edited $FILE"
  done
done

git push origin master
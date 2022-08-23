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
    done
  done
done

git push origin master
for FILE in *
do
  for SUBFILE in $FILE
  do
    git add $SUBFILE
    git commit -m "Edited $FILE - minor changes"
  done
done
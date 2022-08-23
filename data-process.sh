#!/bin/bash

cd src/assets/logo-registration
echo "Running Rust..."
cargo run
echo "Completed Rust."
cd ../../..

read -p "Run Sheets retrieval? (y/n) " to_run
if [ $to_run == "y" ]
then
  cd src/data/notes
  echo "Running Sheets retrieval..."
  python notes.py
  cd ../../..
fi

cd src/data/notes
echo "Running Ruby..."
ruby notes.rb
echo "Completed Ruby"
cd ../../..

cd src/data/coding-languages
echo "Running C..."
./a.out
echo "Completed C"
cd ../../..

for FILE in *
do
  for SUBFILE in $FILE
  do
    git add $SUBFILE
    echo $SUBFILE
    git commit -m "Edited $FILE - minor changes"
  done
done
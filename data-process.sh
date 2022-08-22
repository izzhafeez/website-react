#!/bin/bash

cd src/assets/logo-registration
echo "Running Rust..."
cargo run
echo "Completed Rust."
cd ../../..

read -p "Run Sheets retrieval? (y/n) " to_run
if [ $to_run == "y" ]
then
  cd src/data
  echo "Running Sheets retrieval..."
  python notes.py
  cd ../..
fi

cd src/data
echo "Running Ruby..."
ruby notes.rb
echo "Completed Ruby"


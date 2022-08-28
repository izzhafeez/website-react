#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Runs the Rust script that:
# 1. Processes the logo folder
# 2. Creates a js file that imports all those logos
cd src/assets/logo-registration
echo "Running Rust..."
cargo run
echo "Completed Rust."
cd ../../..

# Asks the user to run the Python script (that takes a long time)
# Once yes, then retrieves from Google Sheets
# And stores the data as a csv
read -p "Run Sheets retrieval? (y/n) " to_run
if [ $to_run == "y" ]
then
  cd src/data/notes
  echo "Running Sheets retrieval..."
  python notes.py
  echo -e "${GREEN}Completed${NC} Sheets retrieval..."
  cd ../../..
fi

# Runs the Ruby script that processes the csv into json
# So that the front end can use it
cd src/data/notes
echo "Running Ruby..."
ruby notes.rb
echo -e "${GREEN}Completed${NC} Ruby"
cd ../../..

# Runs the C script that counts how many lines I've written in each language
cd src/data/coding-languages
echo "Compiling C..."
# gcc coding-line-count.c
echo -e "${GREEN}Completed${NC} Compilation"
echo "Running C..."
./a.out
echo -e "${GREEN}Completed${NC} C"
cd ../../..
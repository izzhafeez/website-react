from gsheets import Sheets
import json
import pandas as pd

schoolSheetId = '1t4-xHiiYEJlP36R4GPhCINnAVsrp3g8ZsCFsulqaivA'

def getSchool(name):
  sheets = Sheets.from_files('client_secrets.json','~/storage.json')[schoolSheetId]
  return sheets.find(name).to_frame()

if __name__== "__main__":
  notes = getSchool("Notes")
  print("Data extracted: " + str(len(notes)) + " rows")
  notes.to_csv("notes.csv")
  
  # notes.drop_duplicates(subset=["Course", "Thing"], inplace=True)
  
  # result = notes[notes.Course.notna()]\
  #   .set_index("Thing")\
  #   .groupby(["Course"])\
  #   .apply(lambda x: x.to_dict("index"))\
  #   .to_json("notes.json", "index")
  
from gsheets import Sheets
import pandas as pd

schoolSheetId= '1t4-xHiiYEJlP36R4GPhCINnAVsrp3g8ZsCFsulqaivA'

def getSchool(name):
  sheets = Sheets.from_files('client_secrets.json','~/storage.json')[schoolSheetId]
  return sheets.find(name).to_frame()

if __name__== "__main__":
  data = getSchool("Notes")
  data.to_csv("notes.csv")
  print("Data extracted: " + str(len(data)) + " rows")
  
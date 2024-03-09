import json
import os

ROOT = "src/data/"

def get_folders(dir):
  files = os.listdir(dir)
  folders = [file for file in files if "." not in file]
  return folders

def get_json_files(dir):
  files = os.listdir(dir)
  json_files = [file for file in files if ".json" in file]
  return json_files

def get_data_dict():
  data = {}
  for category in get_folders(ROOT):
    path = f"{ROOT}{category}/json/"
    files = get_json_files(path)
    data[category] = {}
    for file in files:
      with open(path + file) as f:
        file_data = json.load(f)
        t = file[:-5]
        data[category][t] = file_data
  return data

def sort_by_key(data):
  return dict(sorted(data.items(), key=lambda item: item[0]))

def organise_data(data):
  for c, c_dict in data.items():
    data[c] = organise_category(c, c_dict, data)

  return sort_by_key(data)

def organise_category(c, c_dict, data):
  for t, t_dict in c_dict.items():
    c_dict[t] = organise_type(c, t, t_dict, data)

  return sort_by_key(c_dict)

def organise_type(c, t, t_dict, data):
  for i, i_dict in t_dict.items():
    organise_item(c, t, i, i_dict, data)

  return sort_by_key(t_dict)

def organise_item(c, t, i, i_dict, data):
  relateds = i_dict.get("related", [])
  new_relateds = []
  for related in relateds:
    r_category = related['category']
    r_type = related['type']
    r_items = related['items']
    for r_item in r_items:
      r_dict = data.get(r_category).get(r_type).get(r_item)
      if not r_dict:
        continue
      new_relateds.append(f"{r_category}/{r_type}/{r_item}")
  if data[c][t][i].get('related'):
    data[c][t][i]['related'] = new_relateds

def write_data_dict(data):
  for category in get_folders(ROOT):
    path = f"{ROOT}{category}/json/"
    files = get_json_files(path)
    for file in files:
      f = open(path + file, 'w')
      f.write(json.dumps(data[category][file[:-5]], indent=2))
      f.close()

if __name__ == '__main__':
  data = get_data_dict()
  organised_data = organise_data(data)
  write_data_dict(organised_data)
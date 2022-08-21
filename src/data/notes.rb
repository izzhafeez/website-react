require 'csv'
require 'json'

notes = CSV.read("notes.csv", headers: true)
notes_dict = {}

def clean_markdown(text)
  return text
    .sub(/_s_/, "'s ")
    .sub(/^\S{0,3}>/, "")
    .gsub(/__/, " (")
    .sub(/_$/, ")")
    .gsub(/_/, " ")
    .sub(/^\s/, "")
end

notes.each do |row|
  course = row[1]
  topic = row[2]
  description = row[3]

  if course == nil || description == nil
    next
  end

  splitted_description = description.split("\n")
  description_length = splitted_description.length

  contents = {}
  current_content = {}
  splitted_description.each_with_index do |line, index|
    if /[A-Z]/ =~ line[0] && !(/>/ =~ line)
      current_content = {
        "section" => line.sub(/<.*$/, ""),
        "index" => index,
        "points" => [],
        "sublinks" => []
      }
      contents[line] = current_content
    else
      if !current_content.has_key?("points")
        next
      end
      
      if line[0] == "?"
        current_content["sublinks"].append(
          clean_markdown(line)
        )
      else
        current_content["points"].append(
        clean_markdown(line)
      )
      end
    end
  end

  note_dict = {
    "course" => course,
    "parents" => [],
    "topic" => topic,
    "contents" => contents,
    "date" => row[4],
    "important" => row[5]
  }
  notes_dict[topic] = note_dict
end

notes_dict.each do |key, value|
  value["contents"].each do |section, content|
    sublinks = content["sublinks"]
    sublinks.each do |sublink|
      if notes_dict.has_key?(sublink)
        notes_dict[sublink]["parents"].append(value["topic"])
      else
        puts sublink
      end
    end
  end
end

File.open("notes.json", "w") do |f|
  f.write(JSON.pretty_generate(notes_dict))
end
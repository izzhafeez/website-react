require 'csv'
require 'json'

=begin
This script aims to process the notes data obtained from Google Sheets.

1. Firstly, after the Python script has been run, this Ruby script reads the csv file.

2. Next, starting from the most recent notes, we loop through the different cells in the csv.

3. For each loop, we examine the description box, as this is where most of the content lies.

4. For each section of the description, we assign each point into its own attribute in the notes Object. So for example, points under "Definitions" will be assigned to note.Definitions, and points under "Code" will be assigned to note.Code.

5. If the description box has the "?>" operator, then this signifies that we will be looking at a subtopic or subtype of this note.

6. If that is the case, once the first loop has been completed, we loop through again, and map each topic to its parent topic instead. So for example, the topic "Generics" may have a subtopic "Generic Types". This step is to add the relation that "Generic Types" has a parent topic "Generics".

7. Lastly, we sort the notes in order of how many children they have, which gives a rough understanding of how important the note is.
=end

notes = CSV.read("notes.csv", headers: true)
notes_dict = {}

=begin
The clean_markdown function parses my markdown as best as it can.

This includes swapping _s_ for 's, __ for (, trailing _ to ) etc. Though it may not accurately captue everything, it is good enough for my purposes. One thing it cannot handle properly though, would be code blocks, as those do not use the > symbol at all.
=end
def clean_markdown(text)
  return text
    .sub(/_s_/, "'s ")
    .sub(/^\S{0,3}>/, "")
    .gsub(/__/, " (")
    .sub(/_$/, ")")
    .gsub(/_/, " ")
    .sub(/^\s/, "")
end

notes.reverse_each do |row|
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

  # Initializes a note, before all the children pointers start coming in.
  note_dict = {
    "course" => course,
    "parents" => [],
    "children" => 0,
    "topic" => topic,
    "contents" => contents,
    "date" => row[4],
    "important" => row[5]
  }
  notes_dict[topic] = note_dict
end

# This block of code maps notes to their parent topics, which is triggered when the parent points at them.
notes_dict.each do |key, value|
  value["contents"].each do |section, content|
    sublinks = content["sublinks"]
    sublinks.each do |sublink|
      if notes_dict.has_key?(sublink)
        notes_dict[sublink]["parents"].append(value["topic"])
        value["children"] = value["children"] + 1
      else
        # puts sublink
      end
    end
  end
end

# Sorts the dictionary based on the number of subtopics and subtypes a particular note has.
sorted_dict = {}
notes_dict.sort_by{|_key, value| -value["children"]}.each do |value|
  sorted_dict[value[0]] = value[1]
end

File.open("../notes.json", "w") do |f|
  f.write(JSON.pretty_generate({"notes" => sorted_dict}))
end

import { useParams } from 'react-router-dom';

import "./Works.css";

import notesData from "../../data/notes.json";
import logos from "../../assets/logo-controller";

import Note from "../../components/works/Note";
import SearchBar from "../../components/SearchBar";
import Text from "../../components/Text";

function NotesLanding(props) {
  const params = useParams();
  const searchTerm = "searchTerm" in params ? params.searchTerm : "";
  const searchTermUpper = searchTerm.toUpperCase();
  
  const MAX_COUNT = 10000000;
  let curr_count = 0;
  
  const notes = [];

  for (const key of Object.keys(notesData.notes)) {
    if (curr_count >= MAX_COUNT) {
      break;
    };

    if (key.toUpperCase().includes(searchTermUpper)) {
      notes.push(
        <Note note={notesData.notes[key]}/>
      );
      curr_count++;
    };
  };

  return (
    <div className="page">
      <img src={logos.nus} alt={"NOTES"} className="icon"></img>
      <br></br>
      <Text
        title="PERSONAL NOTES"
        content={
          [
            [
              "Here are the notes I've accumulated over the years. Mostly notes from CS, but there are other topics as well. I store them on my Google Sheets, and I used Python and Ruby to process this data for this site. I also used a custom markdown for my notes, using '?>' to indicate a subtopic relationship etc.. It works for my Telegram Bots, but I don't know whether it works fully hear (as I haven't tested it yet)"
            ],
            [
              "Do use the search bar to look for notes based on title. There is no backend involved in this, just pure React.js. As such, the amount of stress I can put on the frontend cannot be very high."
            ]
          ]
        }/>
      <br></br>
      <SearchBar />
      <br></br>
      <div className="notes-entries">{notes}</div>
    </div>
  )
}

export default NotesLanding;
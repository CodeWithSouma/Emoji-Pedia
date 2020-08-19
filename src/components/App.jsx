import React from "react";
import Entry from "./Entry"
import emojipedia from "../emojipedia"

function createEntry(emojiDetails) {
  return(
    <Entry
      key = {emojiDetails.id}
      emoji = {emojiDetails.emoji}
      name = {emojiDetails.name}
      meaning = {emojiDetails.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;

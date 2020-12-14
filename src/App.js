import React, { useState } from "react";
import "./styles.css";

const christmasEmojistore = {
  "🎄": "Christmas Tree",
  "🎅": "Santa Claus",
  "🔔": "Bell",
  "⛪": "Church",
  "☃️": "Snowman",
  "🎁": "Wrapped Gift",
  "🦌": "Deer",
  "✝️": "Latin cross",
  "❄️": "Snowflake",
  "🦃": "Turkey",
  "🎍": "Pine Decoration",
  "🍷": "Wine Glass",
  "🌟": "Glowing Star",
  "🛐": "Place of Worship",
  "🕯️": "Candle",
  "🎶": "Musical Notes"
};

var emojiList = Object.keys(christmasEmojistore);
var notFound = "";
export default function App() {
  const [userInput, setUsername] = useState("");
  const [emojiInput, setEmoji] = useState("");
  const [emojiMeaning, setMeaning] = useState("");

  function getName(event) {
    var userName = event.target.value;
    setUsername(userName);
  }

  function onAddemoji(event) {
    var emoji = event.target.value;
    setEmoji(emoji);
    var meaning = christmasEmojistore[emoji];
    if (meaning !== undefined) {
      setMeaning(meaning);
    } else {
      meaning = "Emoji not found. Please select from below list.";
      setMeaning(meaning);
    }
  }

  function identifyEmoji(event) {
    var emoji = event.target.childNodes[0].data;
    setEmoji(emoji);
    var meaning = christmasEmojistore[emoji];
    setMeaning(meaning);
    var emojiInput = document.querySelector("#inputEmoji");
    emojiInput.value = emoji;
  }

  return (
    <div className="App">
      <div className="header">
        <h1>🎅 Christmas emoji's</h1>
      </div>
      <div className="container">
        <label>
          Name:
          <input
            onChange={getName}
            placeholder="Enter your name"
            id="inputText"
            style={{ textAlign: "center" }}
          ></input>
        </label>
        <h1 style={{ color: "blue" }}> Welcome {userInput} !! </h1>
        <p>
          Please enter the emoji in the below text box to get the meaning !!
        </p>
        <input
          onChange={onAddemoji}
          placeholder="Enter your emoji here"
          id="inputEmoji"
          style={{ textAlign: "center" }}
        />
        <h3>
          {emojiInput} : {emojiMeaning}
        </h3>
        <h4 style={{ color: "red", fontStyle: "italic" }}>
          Emoji's Available are:
        </h4>
        {emojiList.map((item) => {
          return (
            <ul>
              <li onClick={identifyEmoji}>{item}</li>
            </ul>
          );
        })}
      </div>
      <div className="footer">
        <h3 style={{ textAlign: "center" }}>Christmas Message : </h3>
        <p>
          “I told Santa 🎅 you were good this year so keep some gifts 🎁 for you
          near christmas tree 🎄. Merry Christmas to you !!”
        </p>
        <h3 style={{ textAlign: "center" }}> Thank You !!</h3>
      </div>
    </div>
  );
}


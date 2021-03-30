import React from "react";
import "./ChatInput.css";
import db from "./firebase";
import firebase from "firebase";
import { useStateProvider } from "./StateProvider";

const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = React.useState("");
  const { user } = useStateProvider();

  const sendMessage = (e) => {
    e.preventDefault();

    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").doc().set({
        message: input,
        userimage: user.photoURL,
        user: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    setInput("");
    e.target.focus();
  };
  return (
    <div className="chatInput">
      <form action="">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatInput;

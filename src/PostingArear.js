import React, { useState } from "react";
import "./PostingArear.css";
import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import db from "./firebase";

function PostingArear() {
  const [{ user }] = useStateValue();
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");

  const handleButtonSubmit = async (e) => {
    e.preventDefault();

    if (input.trim() === "") return; // ✅ Fixed input check

    try {
      await addDoc(collection(db, "posts"), {
        userName: user.displayName,
        caption: input,
        image: image,
        profilePic: user.photoURL,
        timestamp: serverTimestamp(), // ✅ Fixed timestamp
      });

      // Clear input fields after posting
      setInput("");
      setImage("");
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  return (
    <div className="posting__area">
      <div className="posting__top">
        <Avatar src={user.photoURL} />
        <form onSubmit={handleButtonSubmit}> {/* ✅ Form should handle submission */}
          <input
            className="input__text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`What's on your mind? ${user.displayName}`}
          />
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL (optional)"
          />
          <button type="submit">Hidden Button</button> {/* ✅ Submit inside form */}
        </form>
      </div>
      <div className="posting__bottom">
        <div className="posting__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="posting__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="posting__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default PostingArear;

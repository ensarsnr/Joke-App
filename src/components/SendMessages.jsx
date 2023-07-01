import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { ConstColor } from "../constants/const_color";


const style = {
  form: `h-14 w-full fixed max-w-[100%]  flex text-lg bottom-0`,
  input: `w-full text-xl p-3 ${ConstColor.PURPLE_SPOT} text-white outline-none border-none`,
  button: `w-[40%]  ${ConstColor.PERRY_WINKLE}`,
}


function SendMessages() {
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Boş mesaj atmayın lütfen");
      return;
    }
    const {uid} = auth.currentUser;
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        text: input,
        timestamp: serverTimestamp(),
        uid,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setInput('')
    // scroll.current.scrollIntoView({behavior: 'smooth'})
  };

  return (
    <form
      className={style.form}
      onSubmit={handleSubmit}
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="istediğinizi yazın"
        className={style.input}
      />
      <button className={style.button} type="submit">
        Gönder
      </button>
    </form>
  );
}

export default SendMessages;

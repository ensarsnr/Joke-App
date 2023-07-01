import React, { useState, useEffect, useRef } from 'react';
import { db } from '../firebase';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import Messages from '../components/Messages';
import SendMessages from '../components/SendMessages';
import NavBar from '../components/NavBar.jsx'

const style = {
  main: `flex flex-col p-[10px] mb-11`,
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
    <NavBar />
      <main className={style.main}>
        {messages &&
          messages.map((message) => (
            <Messages key={message.id} message={message} />
          ))}
      </main>
      {/* Send Message Compoenent */}
      <SendMessages scroll={scroll} />
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;

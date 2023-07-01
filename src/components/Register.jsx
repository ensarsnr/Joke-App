import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";

const styles = {
  form: `flex flex-col items-center p-7 `,
  input: `border-none bg-slate-600 text-xl p-2 text-white outline-none mt-3 mb-3`,
  button: `w-[100%] p-2 bg-slate-700 text-white rounded-lg text-xl mt-5`,
    title:`text-white text-center text-4xl font-extrabold`,
};

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // Güzel Çalışıyor....
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        const user = userCredential.user;
        console.log(user);
        console.log("kayit oldunnn");
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        setError("Lütfen alanları doğru doldurunuz..")
      });
  };

  return (
    <>
      <p className={styles.title}>Kayıt Ol</p>
      <form onSubmit={handleSubmit} className={styles.form}>
      {error && <p className="text-red-800">{error}</p>}
        <input
          placeholder="email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="parola"
          className={styles.input}
          type="password"
        />
        <button type="submit" className={styles.button}>
          Kayıt Ol
        </button>
      </form>
    </>
  );
}

export default Register;

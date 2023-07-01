import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";

const styles = {
  form: `flex flex-col items-center p-7 `,
  input: `border-none bg-slate-600 text-xl p-2 text-white outline-none mt-3 mb-3`,
  button: `w-[100%] p-2 bg-slate-700 text-white rounded-lg text-xl mt-5`,
  title: `text-white text-center text-4xl font-extrabold`,
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Hata durumu için yeni bir state tanımladık

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        setError("Şifre veya email hatalı"); // Hata mesajını state'e kaydediyoruz
      });
  };

  return (
    <>
      <h1 className={styles.title}>Giriş Yap</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        {error && <p className="text-red-800">{error}</p>} {/* Hata mesajını görüntülüyoruz */}
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
          Giriş
        </button>
      </form>
    </>
  );
}

export default Login;

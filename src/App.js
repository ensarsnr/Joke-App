import { auth } from "./firebase";
import Chat from "./pages/Chat";
import LoginPage from "./pages/LoginPage";
import { useAuthState } from "react-firebase-hooks/auth";
function App() {
  const [user] = useAuthState(auth);

  return (
    <div>
      {user ? null : <LoginPage />}
      {user ? <Chat /> : null}
    </div>
  );
}

export default App;

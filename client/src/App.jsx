import { Outlet } from "react-router-dom";
import "./App.css";
import UserProvider from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <main className="container">
        <Outlet />
      </main>
    </UserProvider>
  );
}

export default App;

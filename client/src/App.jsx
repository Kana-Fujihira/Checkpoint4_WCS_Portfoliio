import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <main className="container">
      <header>
        <h>this is header</h>
      </header>

     <Outlet/>
      <footer>
<p>this is footer</p>
      </footer>
    </main>
  );
}

export default App;

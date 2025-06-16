import {AllRoutes} from "./routes/AllRoutes";
import {Footer, Header} from "./components";

function App() {
  return (
    <div className="App dark:bg-zinc-600">
        <Header/>
        <AllRoutes/>
        <Footer/>
    </div>
  );
}

export default App;
 
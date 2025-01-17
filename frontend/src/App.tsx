import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";

function App() {
  return (<>
    <TopBar />
    <NavBar/>
    <div className="h-screen">
      <Banner/>
    </div>
    </>
  );
}

export default App;
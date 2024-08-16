import Header from "./shared/header/Header";
import "./App.css";
import Recommendation from "./shared/recommendation/Recommendation";


function App() {
  return (
    <div className="pt-10 bg-[#F2F2FE] min-h-[100vh] max-w-[1440px] mx-auto">
      <Header />
      <Recommendation/>
      <main></main>
    </div>
  );
}

export default App;

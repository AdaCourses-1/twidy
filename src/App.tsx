import Header from "./shared/header/Header";
import "./App.css";
import Category from "./shared/category/Category";
import Recommendation from "./shared/recommendation/Recommendation";

function App() {
  return (
    <div className="pt-10 bg-[#F2F2FE] min-h-[100vh] max-w-[1440px] mx-auto">
      <Header />
      <main className="pl-12 pr-14">
        <Category />
        <Recommendation/>
      </main>
    </div>
  );
}

export default App;

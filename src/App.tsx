import Header from "./shared/header/Header";
import "./App.css";
import Category from "./shared/category/Category";
import Recommendation from "./shared/recommendation/Recommendation";
import Sidebar from "./shared/sidebar/Sidebar";

function App() {
  return (
    <div className="pt-10 bg-[#F2F2FE] min-h-[100vh] max-w-[1440px] mx-auto flex">
      <Sidebar />
      <div>
        <main className="pl-12 pr-14">
          <Header />
          <Category />
          <Recommendation />
        </main>
      </div>
    </div>
  );
}

export default App;

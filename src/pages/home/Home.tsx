import Category from '@/shared/category/Category'
import Header from '@/shared/header/Header'
import Recommendation from '@/shared/recommendation/Recommendation'


const Home = () => {
  return (
    <div>
      <Header />
      <main className="pl-12 pr-14">
        <Category />
        <Recommendation/>
      </main>
    </div>
  );
};

export default Home;
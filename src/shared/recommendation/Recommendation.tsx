
import { Link } from 'react-router-dom';
import { RecommendationItem } from './types';
import { RECOMMENDATION_ACTOR } from './const';

const Recommendation = () => {
  return (
    <div className="mb-28 pl-10">
      <div className="mt-10 pl-10 mb-4">
        <h2 className="text-[#4E3F6F] font-bold text-4xl ">
          Популярные личности
        </h2>
      </div>
      <div className=" flex flex-wrap gap-7">
        {RECOMMENDATION_ACTOR.map(
          (recommendation: RecommendationItem, index: number) => (
            <div
              key={index}
              className={`p-4 rounded-t-2xl bg-[#FFFFFF] rounded-2xl  relative ${
                index === 0 ? 'max-w-[571px]' : 'max-w-[271px]'
              }`}
            >
              <Link to={`/users/${recommendation.userId}`}>
                <img
                  src={recommendation.imgURL}
                  alt={recommendation.name}
                  className="max-w-full max-h-[263px] rounded-t-2xl  cursor-pointer"
                />
              </Link>

              <div className="absolute -mt-60 bg-[#FFA012] rounded-md right-7 top-[268px]">
                <p className="text-[#FFFFFF] px-4 py-1 font-bold text-base">
                  {' '}
                  {recommendation.price}
                </p>
              </div>
              <div className="mt-7 ml-4 max-w-[530px]">
                <h3 className="text-[#4E3F6F] font-bold text-lg ">
                  {recommendation.name}
                </h3>
                <span className="text-[#8C8CB6] font-semibold text-base ">
                  {recommendation.description}
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Recommendation;

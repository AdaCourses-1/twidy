import React from 'react';
import { SOCIAL_NETWORK } from './const';
import { Network } from './types';

const SocialNetwork = () => {
  return (
    <div>
      <h3 className="text-[#4E3F6F] font-bold text-4xl pl-10 mb-6">
        Социальные сети
      </h3>
      <div className="ml-8 flex-1 grid grid-cols-2 gap-5">
        {SOCIAL_NETWORK.map((network: Network) => (
          <div
            key={network.name}
            className="flex items-center  bg-white p-8 rounded-[20px]"
          >
            <img
              src={network.imgURL}
              alt={network.name}
              className="w-[50px] h-[50px]"
            />
            <div className="ml-6">
              <h5 className="text-lg font-bold text-[#4E3F6F]">
                {network.name}
              </h5>
              <span className="text-lg font-semibold text-[#8C8CB6]">
                {network.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialNetwork;

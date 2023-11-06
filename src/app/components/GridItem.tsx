import React from 'react';

interface GridItemProps {
  title: string;
  role: string;
  url: string;
  imageSrc: string;
  bulletPoints: string[];
}

const GridItem: React.FC<GridItemProps> = ({ title, role, url, imageSrc, bulletPoints }) => {
  return (
    <div className="flex flex-col items-start text-left p-4">
      <div className="w-full h-40 mb-2 overflow-hidden rounded">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover rounded-xl" />
      </div>
      <div className="flex items-center">
        <a className="text-pink-600 underline hover:text-pink-700 mt-2 " href={url} target="_blank"><h2 className="text-lg font-bold">{title}</h2></a>
        <span className="ml-1.5 mt-2.5 align-middle">- {role}</span>
      </div>
      <ul className="list-inside list-disc mt-2">
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default GridItem;

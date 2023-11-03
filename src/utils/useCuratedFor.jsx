import { useEffect, useState } from 'react';
import { CURATED_FOR } from './constants';

const useCuratedFor = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchCuratedData();
  }, []);

  const fetchCuratedData = async () => {
    const data = await fetch(CURATED_FOR);
    const json = await data.json();
    setData(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
  };
  return data;
};

export default useCuratedFor;

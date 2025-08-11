import { useState, useEffect } from "react";
import mockData from '../../__mocks__/chart';
import { ChartData } from './types';

const useGetData = () => {
  const [data, setData] = useState<ChartData | null>(null);

  const fetchData = async () => {
    const response = await mockData();
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data };
};

export default useGetData;

import { useState, useEffect } from "react";
import { mockDataMonth, mockDataThreeMonths } from '../../__mocks__/chart';
import { ChartData } from './types';

const useGetData = (period: number) => {
  const [data, setData] = useState<ChartData | null>(null);

  const fetchData = async () => {
    if (period !== 30) {
      const response = await mockDataThreeMonths();
      setData(response.data);
    } else {
      const response = await mockDataMonth();
      setData(response.data);
    }
  };
  

  useEffect(() => {
    fetchData();
  }, [period]);

  return { data };
};

export default useGetData;

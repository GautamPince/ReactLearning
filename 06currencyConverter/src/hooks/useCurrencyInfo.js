// import { useEffect, useState } from "react";


// function useCurrencyInfo(currency) {
//    const [data, setData] = useState({});
//    useEffect(() => {
//       // Fetching currency data from the API  
//       let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
//       fetch(url)
//          .then((response) => response.json())
//          .then((response) => setData(response[currency]))
//       console.log(data)
//    }, [currency])
//    console.log("useCurrencyInfo", data);
//    return data;

// }
// export default useCurrencyInfo;

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
   const [data, setData] = useState({});

   useEffect(() => {
      if (!currency) return; // avoid fetch if currency is not set

      const fetchData = async () => {
         try {
            const url = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json
`;
            const response = await fetch(url);
            const json = await response.json();
            setData(json[currency]);
         } catch (error) {
            console.error("Error fetching currency data:", error);
            setData({});
         }
      };

      fetchData();
   }, [currency]);

   return data;
}

export default useCurrencyInfo;

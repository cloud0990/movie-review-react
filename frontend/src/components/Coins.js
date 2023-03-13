import { useEffect, useState } from "react";
function Coins() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  // fetch: API 를 사용하여 서버와 비동기 요청하는 방식 중 하나
  // 2nd Argument 비워두면 Component 첫 로딩 시 1회만 동작
  useEffect(() => {
      fetch("https://api.coinpaprika.com/v1/tickers")
          .then((response) => response.json())
          .then((json) => {
              setCoins(json);
              setLoading(false);
          });

  }, []);

  return (
    <div>
      <h1>Coins {loading ? "" : `(${coins.length})`}</h1>
        {loading
            ? <strong>Loading..</strong>
            : <select>
                {coins.map((coin) => (
                    <option>
                        {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
                    </option>
                ))}
            </select>
        }
    </div>
  );
}

export default Coins;

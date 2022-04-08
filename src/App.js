import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [current, setCurrent] = useState(0);
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers?limit=50")
      .then(response=> response.json())
      .then(json=>{
        setCoins(json);
        setLoading(false);
      });
  },[]);
  const onChange = (ev) => setCurrent(ev.target.value);
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? "Loading..." : 
      <div>
        <input type="number" value={current} onChange={onChange} placeholder="How many dollars you get?" />
        <br/>
        <select>
          {coins.map(coin=><option key={coin.id}>{coin.name} ({coin.symbol}): {current/(coin.quotes.USD.price)}</option>)}
        </select>
      </div>
      }
      
    </div>
  );
}

export default App;

import React from "react";

async function getExampleRates() {
  const res = await fetch("http://localhost:3001/exchange", {
    cache: "no-store",
  });
  return res.json();
}

const ExchangeRate = async () => {
  const exhanges = await getExampleRates();
  console.log(exhanges, "user");
  return (
    <div>
      <h1 id={exhanges[0].id} className="font-bold">
        {exhanges[0].currency} : {exhanges[0].value.toLocaleString()}
      </h1>
    </div>
  );
};

export default ExchangeRate;

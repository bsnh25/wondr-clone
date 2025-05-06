export const dynamic = "force-static"; //untuk membuat halaman ini menjadi statis (tell next js)

async function getRates() {
  const res = await fetch("http://localhost:3000/api/rates", {
    // cache: "force-cache",
  });
  return res.json();
}

const InterestRates = async () => {
  const rates = await getRates();
  //   console.log(rates, "rates");

  return (
    <div>
      <h1>Suku Bunga Tabungan</h1>
      <ul>
        {rates &&
          rates.map((rate) => (
            <li key={rate.id}>
              {rate.name}: {rate.value}%
            </li>
          ))}
      </ul>
    </div>
  );
};

export default InterestRates;

"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

const Event = ({ params }) => {
  const router = useRouter();
  const [detailEvent, setDetailEvent] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDimensions({
        width: window.screen.width,
        height: window.screen.height,
      });
    }

    async function searchEvent() {
      try {
        const res = await fetch(
          `http://localhost:3000/api/lifestyle/${await params.slug}`
        );
        const jsonRes = await res.json(); // <- pakai await di sini
        // const found = jsonRes.find((event) => event.slug === params.slug); // <- pakai params.slug
        setDetailEvent(jsonRes.data);
        console.log(jsonRes.data);
      } catch (err) {
        console.error("Failed to fetch event", err);
      }
    }

    if (params !== null && params.slug) {
      console.log("MASOOOOK 1");
      console.log(params, "params");
      console.log(params.slug, "slug params");

      searchEvent();
    } else {
      return console.error("Slug Not Define");
    }
  }, [params]);

  if (!detailEvent) return <div>Loading...</div>;

  return (
    <main className="mt-[48px] md:mt-[80px] max-w-screen-xl md:max-w-screen-sm lg:max-w-screen-xl px-[24px] md:px-[30px] mx-auto ">
      {/* back button */}
      <button
        className="bg-orange-300 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-sm"
        onClick={() => router.back()}
      >
        Back
      </button>

      {/* Image Event */}
      <div className="mt-[32px] md:mt-[64px]">
        <div className="quill mb-3 font-bold text-[16px] leading-[24px] md:text-[24px] md:leading-[32px] text-black line-clamp-4">
          <div className="quill">
            <p>{detailEvent.nama}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-screen-sm mt-[24px] bg-gray-100 p-5 rounded-4xl">
        <div className="flex flex-col items-center ">
          <Image
            src={`/${detailEvent.img || null}.jpg`}
            className="rounded-[24px] w-full h-full"
            alt="java jazz banner"
            width={dimensions.width * 0.9}
            height={dimensions.height * 0.3}
          />
        </div>
        <h1 className="mt-4 fs-4 font text-sm italic">
          Buy 1 Get 2 Tickets BNI Java Jazz Festival
        </h1>
        <h2 className="mt-2 fs-6 text-sm italic">
          Pembelian melalui wondr by BNI &amp;{" "}
          <span className="font-bold">javajazzfestival.com</span>
        </h2>
      </div>

      <div className="card rounded-0 p-3 mt-3 ">
        <strong className="mt-2 mb-3 fs-6 fw-bold">Syarat dan ketentuan</strong>
        <div>
          <ul className="list-disc pl-5">
            <li>Promo Buy 1 Get 2 berlaku untuk pembelian Daily Pass.</li>
            <li>Promo Buy 1 Get 2 tidak berlaku untuk pembelian 3-Days Pass</li>
            <li>
              Berlaku maksimum pembelian 4 tiket / Nasabah / hari selama periode
              program (atau 8 tiket termasuk bonus tiket).
            </li>
            <li>
              Pembelian melalui Menu Lifestyle BNI Java Jazz Festival di wondr
              by BNI.
            </li>
            <li>
              <strong>Mulai 22 April 2025, </strong>pembelian tiket juga dapat
              dilakukan melalui website{" "}
              <a
                href="http://www.javajazzfestival.com"
                className="underline text-blue-600 hover:text-blue-800"
              >
                www.javajazzfestival.com
              </a>{" "}
              dengan Kartu Kredit, Debit &amp; BNI Emerald.
            </li>
            <li>
              Pembelian tiket via website tidak berlaku untuk seluruh Kartu
              Kredit BNI Amex.
            </li>
            <li>
              Promo buy 1 get 2 via website dengan Kartu Debit BNI berlaku untuk
              transaksi dengan Kartu Debit BNI berlogo Mastercard.
            </li>
            <li>
              Berlaku kuota: 2.000 transaksi selama periode program (sudah
              include bonus ticket).
            </li>
            <li>
              Promo Buy 1 Get 2 di wondr by BNI berlaku untuk pembayaran dengan
              sumber dana Tabungan.
            </li>
            <li>
              <a
                href="https://bniexperience.bni.co.id/promo/detail/faq-pembelian-tiket-nebysf"
                className="underline text-blue-600 hover:text-blue-800"
              >
                FAQ Pembelian Tiket Buy 1 Get 2 di wondr by BNI.
              </a>
            </li>
            <li>
              Periode promo :
              <ul className="list-disc pl-5 mt-1">
                <li>Batch 1 : 19 Maret – 30 April 2025.</li>
                <li>
                  Mulai 22 April 2025, periode program di perpanjang hingga 7
                  Mei 2025
                </li>
              </ul>
            </li>
          </ul>

          <p className="mt-4">
            <strong>Cicilan 0% Tenor 3 Bulan</strong>
          </p>
          <ul className="list-disc pl-5">
            <li>Cicilan 0% Tenor 3 bulan untuk minimum transaksi Rp500.000.</li>
            <li>
              Hanya tenor 3 bulan yang berlaku untuk program Cicilan 0% ini.
            </li>
            <li>
              Promo berlaku untuk transaksi di website Java Jazz Festival 2025:{" "}
              <a
                href="https://admin.bniexperience.com/promo/tickets.javajazzfestival.com/2025"
                className="underline text-blue-600 hover:text-blue-800"
              >
                tickets.javajazzfestival.com/2025
              </a>{" "}
              dan Kantor Java Festival Production Simprug.
            </li>
            <li>
              Cicilan 0% tenor 3 bulan berlaku untuk seluruh Kartu Kredit BNI
              JCB, Mastercard, Visa kecuali Amex dan Corporate Card.
            </li>
            <li>
              Program Cicilan 0% dapat digabungkan dengan promo Buy 1 Get 2 dan
              Diskon hingga 30% BNI Rewards Point.
            </li>
            <li>
              Berlaku untuk seluruh Kartu Kredit BNI JCB, Mastercard, Visa
              kecuali Amex dan Corporate Card.
            </li>
            <li>Tidak terdapat kuota dalam program ini.</li>
          </ul>

          <p className="mt-4">
            <strong>Diskon hingga 30% dengan BNI Rewards Point</strong>
          </p>
          <ul className="list-disc pl-5">
            <li>Diskon hingga 30% dengan BNI Rewards Point.</li>
            <li>Berlaku minimum transaksi Rp250.000.</li>
            <li>Maksimum point yang ditukarkan adalah Rp500.000.</li>
            <li>
              Promo berlaku untuk transaksi di EDC BNI yang terdapat pada Kantor
              Java Festival Production Simprug.
            </li>
            <li>
              Diskon hingga 30% dengan BNI Rewards Point berlaku untuk seluruh
              Kartu Kredit BNI, kecuali kartu Co-Branding Garuda, MAP Club dan
              Corporate Card.
            </li>
            <li>
              Program BNI Rewards Point dapat digabungkan dengan promo Buy 1 Get
              2 dan Cicilan 0% tenor 3 bulan.
            </li>
            <li>
              Berlaku untuk seluruh Kartu Kredit BNI, kecuali kartu Co-Branding
              Garuda, MAP Club dan Corporate Card.
            </li>
            <li>Tidak terdapat kuota dalam program ini.</li>
          </ul>

          <p className="mt-4">
            Info lebih lanjut hubungi{" "}
            <strong>
              BNI Call 1500046
              <br />
            </strong>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Event;

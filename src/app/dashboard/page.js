"use client";
import React, { useEffect } from "react";
// export const dynamic = "force-static"; //untuk membuat halaman ini menjadi statis (tell next js)
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// async function getUser() {
//   const res = await fetch(`http://localhost:3001/user`, {
//     // cache: "no-store",
//   });
//   return res.json();
// }
const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleLogout = async (e) => {
    e.preventDefault();

    await signOut({ callbackUrl: "/login" });
  };

  useEffect(() => {
    console.log(status, "status");

    if (status === "unauthenticated") {
      router.push("/login");
    } else if (session === undefined) {
      router.push("/login");
    }
    console.log(session, "user");
  }, [status]);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div>
      <h1>Selamat Datang, {session?.user.name}</h1>
      {/* <p>Saldo: Rp {user[0].balance.toLocaleString()}</p> */}
      <button
        className="rounded-2xl text-black border-2"
        onClick={handleLogout}
        type="button"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;

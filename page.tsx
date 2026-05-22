"use client";

import Link from "next/link";

export default function CustomerDashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 p-6">

      {/* Header */}
      <div className="bg-white rounded-3xl shadow-md p-6 flex flex-col md:flex-row items-start md:items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-extrabold text-cyan-800">
            Dashboard Pelanggan PDAM
          </h1>

          <p className="text-cyan-600 mt-2">
            Selamat datang kembali 👋
          </p>
        </div>

        <Link href={"/customer/tagihan"}>
          <button className="mt-4 md:mt-0 bg-cyan-600 hover:bg-cyan-700 transition text-white px-6 py-3 rounded-2xl shadow-lg font-semibold">
            Lihat Tagihan
          </button>
        </Link>

      </div>

      {/* Statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-white rounded-3xl shadow-md p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-100 rounded-full -mr-10 -mt-10"></div>

          <p className="text-gray-500 mb-2">
            Pemakaian Air
          </p>

          <h2 className="text-4xl font-bold text-cyan-700">
            24 m³
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full -mr-10 -mt-10"></div>

          <p className="text-gray-500 mb-2">
            Tagihan Bulan Ini
          </p>

          <h2 className="text-4xl font-bold text-blue-700">
            Rp 185K
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100 rounded-full -mr-10 -mt-10"></div>

          <p className="text-gray-500 mb-2">
            Status Pembayaran
          </p>

          <h2 className="text-2xl font-bold text-emerald-700">
            Lunas
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-sky-100 rounded-full -mr-10 -mt-10"></div>

          <p className="text-gray-500 mb-2">
            Nomor Pelanggan
          </p>

          <h2 className="text-2xl font-bold text-sky-700">
            12004567
          </h2>
        </div>

      </div>

      {/* Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Riwayat Tagihan */}
        <div className="xl:col-span-2 bg-white rounded-3xl shadow-md p-6">

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-2xl font-bold text-cyan-800">
              Riwayat Tagihan
            </h2>

            <button className="text-cyan-700 hover:underline">
              Lihat Semua
            </button>

          </div>

          <div className="space-y-4">

            <div className="flex items-center justify-between bg-cyan-50 p-5 rounded-2xl">

              <div>
                <h3 className="font-semibold text-black">
                  Januari 2026
                </h3>

                <p className="text-sm text-gray-500">
                  Pemakaian 22 m³
                </p>
              </div>

              <div className="text-right">
                <p className="font-bold text-cyan-700">
                  Rp 170.000
                </p>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Lunas
                </span>
              </div>

            </div>

            <div className="flex items-center justify-between bg-blue-50 p-5 rounded-2xl">

              <div>
                <h3 className="font-semibold text-black">
                  Februari 2026
                </h3>

                <p className="text-sm text-gray-500">
                  Pemakaian 24 m³
                </p>
              </div>

              <div className="text-right">
                <p className="font-bold text-blue-700">
                  Rp 185.000
                </p>

                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                  Pending
                </span>
              </div>

            </div>

            <div className="flex items-center justify-between bg-sky-50 p-5 rounded-2xl">

              <div>
                <h3 className="font-semibold text-black">
                  Maret 2026
                </h3>

                <p className="text-sm text-gray-500">
                  Pemakaian 20 m³
                </p>
              </div>

              <div className="text-right">
                <p className="font-bold text-sky-700">
                  Rp 160.000
                </p>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Lunas
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="space-y-6">

          {/* Informasi */}
          <div className="bg-white rounded-3xl shadow-md p-6">

            <h2 className="text-2xl font-bold text-cyan-800 mb-5">
              Informasi PDAM
            </h2>

            <div className="space-y-4">

              <div className="bg-cyan-50 p-4 rounded-2xl">
                <h3 className="font-semibold text-cyan-800">
                  Jadwal Pemeliharaan
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  Pemeliharaan jaringan air tanggal 25 Mei 2026.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-2xl">
                <h3 className="font-semibold text-blue-800">
                  Pengaduan
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  Laporkan gangguan air melalui menu pengaduan.
                </p>
              </div>

            </div>

          </div>

          {/* Card */}
          <div className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white rounded-3xl shadow-lg p-6">

            <h2 className="text-3xl font-bold mb-3">
              Hemat Air 💧
            </h2>

            <p className="text-cyan-100 mb-6">
              Gunakan air seperlunya untuk menjaga lingkungan tetap bersih.
            </p>

            <button className="bg-white text-cyan-700 px-5 py-3 rounded-2xl font-semibold hover:bg-cyan-100 transition">
              Pelajari Tips
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}
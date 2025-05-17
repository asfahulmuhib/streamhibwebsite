
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-streamhib-blue mb-4">
          Mulai Streaming 24/7 Hari Ini
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Pilih paket yang sesuai dengan kebutuhan Anda. Semua paket dilengkapi dengan fitur yang sama dan dukungan teknis penuh.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <Card className="border-streamhib-blue/20 hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-2">
              <h3 className="text-xl font-bold">Set 1</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">Rp200k</span>
                <span className="text-gray-500 ml-1">/bulan</span>
              </div>
            </CardHeader>
            <CardContent className="pt-4 pb-6">
              <ul className="text-left space-y-2">                
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-streamhib-red/10 text-streamhib-red flex items-center justify-center text-xs mr-2">✓</div>
                  <span>10 Live, Res 720p, FPS 30, Bit 2500</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-streamhib-red/10 text-streamhib-red flex items-center justify-center text-xs mr-2">✓</div>
                  <span>8 Live, Res 1080p, FPS 30, Bit 6500</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-streamhib-red/10 text-streamhib-red flex items-center justify-center text-xs mr-2">✓</div>
                  <span>Sewaktu-waktu IP Berubah</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-streamhib-red/10 text-streamhib-red flex items-center justify-center text-xs mr-2">✓</div>
                  <span>Support YouTube & Facebook</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-streamhib-red/10 text-streamhib-red flex items-center justify-center text-xs mr-2">✓</div>
                  <span>Fitur Penjadwalan Youtube</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-streamhib-red/10 text-streamhib-red flex items-center justify-center text-xs mr-2">✓</div>
                  <span>Memakai Server DO</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-streamhib-red/10 text-streamhib-red flex items-center justify-center text-xs mr-2">✓</div>
                  <span>Penyimpanan 60GB</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-streamhib-red/10 text-streamhib-red flex items-center justify-center text-xs mr-2">✓</div>
                  <span>Support Banyak Channel Youtube</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-streamhib-red hover:bg-streamhib-red/90">
                Pesan Sekarang
              </Button>
            </CardFooter>
          </Card>
          
          {/* Pro Plan */}
          <Card className="border-streamhib-blue relative overflow-hidden shadow-lg">
            <div className="absolute -right-12 top-6 bg-streamhib-red text-white text-xs font-bold px-12 py-1 transform rotate-45">
              POPULER
            </div>
            <CardHeader className="pb-2">
              <h3 className="text-xl font-bold">Set 2</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">Rp250k</span>
                <span className="text-gray-500 ml-1">/bulan</span>
              </div>
            </CardHeader>
            <CardContent className="pt-4 pb-6">
              <ul className="text-left space-y-2">
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-streamhib-red/10 text-streamhib-red flex items-center justify-center text-xs mr-2">✓</div>
                  <span>25 Live, Res 720p, FPS 30, Bit 2500</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-streamhib-red/10 text-streamhib-red flex items-center justify-center text-xs mr-2">✓</div>
                  <span>17 Live, Res 1080p, FPS 30, Bit 6500</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-streamhib-red/10 text-streamhib-red flex items-center justify-center text-xs mr-2">✓</div>
                  <span>8 Live, Res 4k, FPS 30, Bit 12000</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-streamhib-red/10 text-streamhib-red flex items-center justify-center text-xs mr-2">✓</div>
                  <span>Support YouTube & Facebook</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-streamhib-red/10 text-streamhib-red flex items-center justify-center text-xs mr-2">✓</div>
                  <span>Fitur Penjadwalan Youtube</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-streamhib-red/10 text-streamhib-red flex items-center justify-center text-xs mr-2">✓</div>
                  <span>Lebih Stabil & IP Tidak Berubah-ubah</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-streamhib-red/10 text-streamhib-red flex items-center justify-center text-xs mr-2">✓</div>
                  <span>Penyimpanan 40GB</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-streamhib-red/10 text-streamhib-red flex items-center justify-center text-xs mr-2">✓</div>
                  <span>Support Banyak Channel Youtube</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-streamhib-blue hover:bg-streamhib-blue/90">
                🚀 Pesan Sekarang
              </Button>
            </CardFooter>
          </Card>
          
          {/* Business Plan */}
          <Card className="border-streamhib-blue/20 hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-2">
              <h3 className="text-xl font-bold">Set 3</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">Rp350k</span>
                <span className="text-gray-500 ml-1">/bulan</span>
              </div>
            </CardHeader>
            <CardContent className="pt-4 pb-6">
              <ul className="text-left space-y-2">
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-streamhib-red/10 text-streamhib-red flex items-center justify-center text-xs mr-2">✓</div>
                  <span>52 Live, Res 720p, FPS 30, Bit 2500</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-streamhib-red/10 text-streamhib-red flex items-center justify-center text-xs mr-2">✓</div>
                  <span>33 Live, Res 1080p, FPS 30, Bit 6500</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-streamhib-red/10 text-streamhib-red flex items-center justify-center text-xs mr-2">✓</div>
                  <span>14 Live, Res 4k, FPS 30, Bit 12000</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-streamhib-red/10 text-streamhib-red flex items-center justify-center text-xs mr-2">✓</div>
                  <span>Support YouTube & Facebook</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-streamhib-red/10 text-streamhib-red flex items-center justify-center text-xs mr-2">✓</div>
                  <span>Fitur Penjadwalan Youtube</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-streamhib-red/10 text-streamhib-red flex items-center justify-center text-xs mr-2">✓</div>
                  <span>Lebih Stabil & IP Tidak Berubah-ubah</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-streamhib-red/10 text-streamhib-red flex items-center justify-center text-xs mr-2">✓</div>
                  <span>Penyimpanan 80GB</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-streamhib-red/10 text-streamhib-red flex items-center justify-center text-xs mr-2">✓</div>
                  <span>Support Banyak Channel Youtube</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-streamhib-red hover:bg-streamhib-red/90">
                🎯 Pesan Sekarang
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-8 bg-gray-50 rounded-lg p-6 max-w-3xl mx-auto">
          <p className="text-center text-gray-600">
            Pemesanan bisa juga langsung transfer sesuai nominal Harga yang tertera ke Rekening Seabank
            <br /> <span className="font-semibold">901872537380</span>
            <br /> a/n <span className="font-semibold">Asfahul Muhib</span>
            <br /> Kemudian silahkan kirim bukti transfer ke <span className="font-semibold">Whatsapp atau Telegram</span> StreamHib.
            <br />Bisa langsung aktif hari ini!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

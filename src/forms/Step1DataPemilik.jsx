import React from 'react';
import InputGroup from '../components/InputGroup';

const Step1DataPemilik = ({ register, errors }) => {
  return (
    <div className="flex flex-col gap-6">
      
      {/* --- BAGIAN 1: PRE-FORMULIR --- */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Header Kuning */}
        <div className="bg-mantap-yellow px-6 py-3 border-b border-gray-200">
          <h3 className="font-bold text-gray-900 text-lg">Pre-Formulir</h3>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Tipe Nasabah (Radio Button) */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Tipe Nasabah <span className="text-red-500">*</span></label>
            <div className="flex gap-6">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="radio" 
                  value="Perorangan" 
                  {...register("tipeNasabah", { required: "Pilih tipe nasabah" })}
                  className="w-5 h-5 text-mantap-blue focus:ring-mantap-yellow"
                />
                <span>Perorangan</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="radio" 
                  value="Badan Usaha" 
                  {...register("tipeNasabah", { required: "Pilih tipe nasabah" })}
                  className="w-5 h-5 text-mantap-blue focus:ring-mantap-yellow"
                />
                <span>Badan Usaha</span>
              </label>
            </div>
            {errors.tipeNasabah && <span className="text-xs text-red-500">{errors.tipeNasabah.message}</span>}
          </div>

          {/* Tipe Layanan QRIS (Radio Button) */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Tipe Layanan QRIS <span className="text-red-500">*</span></label>
            <div className="flex gap-6">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="radio" 
                  value="Statis" 
                  {...register("tipeQris", { required: "Pilih layanan QRIS" })}
                  className="w-5 h-5 text-mantap-blue focus:ring-mantap-yellow"
                />
                <span>QRIS Statis</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="radio" 
                  value="Dinamis" 
                  {...register("tipeQris", { required: "Pilih layanan QRIS" })}
                  className="w-5 h-5 text-mantap-blue focus:ring-mantap-yellow"
                />
                <span>QRIS Dinamis</span>
              </label>
            </div>
             {errors.tipeQris && <span className="text-xs text-red-500">{errors.tipeQris.message}</span>}
          </div>
        </div>
      </div>


      {/* --- BAGIAN 2: DATA PEMILIK --- */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Header Kuning */}
        <div className="bg-mantap-yellow px-6 py-3 border-b border-gray-200">
          <h3 className="font-bold text-gray-900 text-lg">Data Pemilik</h3>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Kolom Kiri */}
            <div className="space-y-4">
               {/* Dropdown Jenis Identitas */}
               <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Jenis Identitas</label>
                  <select 
                    {...register("jenisIdentitas")} 
                    className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mantap-yellow"
                  >
                      <option value="KTP">KTP</option>
                      <option value="PASSPORT">Passport</option>
                      <option value="SIM">SIM</option>
                  </select>
               </div>

               <InputGroup 
                  label="Nama Pemilik/Pengurus" 
                  name="namaPemilik" 
                  register={register} 
                  required 
                  placeholder="Contoh: Andi Pratama"
                  error={errors.namaPemilik} 
               />
            </div>

            {/* Kolom Kanan */}
            <div className="space-y-4">
              <InputGroup 
                  label="Nomor Identitas" 
                  name="nomorIdentitas" 
                  register={register} 
                  required 
                  type="number"
                  placeholder="317509..."
                  error={errors.nomorIdentitas} 
               />

              <InputGroup 
                  label="No HP Pemilik/Pengurus" 
                  name="noHp" 
                  register={register} 
                  required 
                  type="number"
                  placeholder="081234..."
                  error={errors.noHp} 
               />
            </div>

          </div>

          {/* NPWP Full Width */}
          <div className="mt-4">
             <InputGroup 
                label="NPWP Pemilik" 
                name="npwpPemilik" 
                register={register} 
                // Di screenshot NPWP sepertinya tidak wajib (tidak ada bintang merah)
                placeholder="Masukkan NPWP"
                error={errors.npwpPemilik} 
             />
          </div>

        </div>
      </div>
      
    </div>
  );
};

export default Step1DataPemilik;
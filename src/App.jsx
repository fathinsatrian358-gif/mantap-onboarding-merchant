import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Stepper from './components/Stepper';
import Step1DataPemilik from './forms/Step1DataPemilik';

function App() {
  // 1. STATE: Untuk melacak user sedang di step nomor berapa (Mulai dari 1)
  const [currentStep, setCurrentStep] = useState(1);
  
  // 2. SETUP FORM: Menggunakan React Hook Form
  const { 
    register, 
    handleSubmit, 
    trigger, // Fungsi untuk memicu validasi manual
    formState: { errors } 
  } = useForm({
    mode: "onChange" // Validasi langsung jalan saat user mengetik
  });

  // 3. FUNGSI TOMBOL "LANJUT"
  const onNext = async () => {
    // Cek validasi dulu. Jika ada error di Step 1, tidak boleh lanjut.
    const isValid = await trigger(); 
    if (isValid) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo(0, 0); // Scroll ke atas saat ganti halaman
    }
  };

  // 4. FUNGSI TOMBOL "KEMBALI"
  const onBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  // 5. FUNGSI SUBMIT AKHIR (API INTEGRATION)
  const onSubmit = (data) => {
    console.log(">>> DATA SIAP KIRIM KE API:", data);
    
    // Simulasi Loading
    alert("Data berhasil disubmit! Cek Console Browser (F12) untuk melihat JSON.");
    
    // --- CONTOH KONEKSI API ---
    // axios.post('https://api.mandiritaspen.co.id/merchant/register', data)
    //   .then(response => { console.log('Sukses'); })
    //   .catch(error => { console.error('Gagal'); });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 font-sans text-gray-800">
      
      {/* --- HEADER WEBSITE --- */}
      <div className="bg-white shadow-sm border-b border-gray-200 py-4 px-6 md:px-12 mb-6">
         <h1 className="text-2xl font-bold text-mantap-blue">Daftar Merchant</h1>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        
        {/* --- STEPPER (Navigasi Atas) --- */}
        <Stepper currentStep={currentStep} />

        {/* --- FORM WRAPPER --- */}
        <form onSubmit={handleSubmit(onSubmit)}>
          
          {/* STEP 1: Data Pemilik & Pre-Formulir */}
          <div className={currentStep === 1 ? "block" : "hidden"}>
             <Step1DataPemilik register={register} errors={errors} />
          </div>

          {/* STEP 2: Placeholder (Bisnis) */}
          {currentStep === 2 && (
             <div className="bg-white p-12 text-center rounded-lg shadow border border-gray-200">
                <h2 className="text-xl font-bold text-mantap-blue mb-2">Data Bisnis</h2>
                <p className="text-gray-500">Formulir detail usaha akan muncul di sini (Tugas selanjutnya).</p>
             </div>
          )}

          {/* STEP 3: Placeholder (Dokumen) */}
          {currentStep === 3 && (
             <div className="bg-white p-12 text-center rounded-lg shadow border border-gray-200">
                <h2 className="text-xl font-bold text-mantap-blue mb-2">Upload Dokumen</h2>
                <p className="text-gray-500">Area upload KTP & NPWP akan muncul di sini.</p>
             </div>
          )}

           {/* STEP 4: Finish */}
           {currentStep === 4 && (
             <div className="bg-white p-12 text-center rounded-lg shadow border border-gray-200">
                <h2 className="text-xl font-bold text-green-600 mb-2">Pendaftaran Selesai!</h2>
                <p className="text-gray-500 mb-4">Silakan klik tombol Submit di bawah untuk mengirim data.</p>
             </div>
          )}

          {/* --- TOMBOL NAVIGASI BAWAH --- */}
          <div className="mt-8 flex justify-end gap-4 border-t pt-6">
            
            {/* Tombol KEMBALI (Muncul hanya jika bukan halaman 1) */}
            {currentStep > 1 && (
                <button 
                  type="button" 
                  onClick={onBack}
                  className="px-6 py-2.5 rounded-md border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-colors"
                >
                  Kembali
                </button>
            )}

            {/* Tombol LANJUT / SUBMIT */}
            {currentStep < 4 ? (
                <button 
                  type="button" 
                  onClick={onNext}
                  className="px-8 py-2.5 rounded-md bg-mantap-blue text-white font-bold shadow-md hover:bg-blue-900 transition-transform active:scale-95"
                >
                  Simpan dan Lanjut
                </button>
            ) : (
                <button 
                  type="submit" 
                  className="px-8 py-2.5 rounded-md bg-mantap-yellow text-gray-900 font-bold shadow-md hover:bg-yellow-500 transition-transform active:scale-95"
                >
                  Submit Pendaftaran
                </button>
            )}
          </div>

        </form>

      </div>
    </div>
  );
}

export default App;
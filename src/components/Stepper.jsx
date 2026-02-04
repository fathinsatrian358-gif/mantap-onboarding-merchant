import React from 'react';
import { User, Briefcase, FileText, CheckCircle } from 'lucide-react'; 

const Stepper = ({ currentStep }) => {
  // Definisi Step
  const steps = [
    { id: 1, icon: <User size={20} />, label: "Identitas" },
    { id: 2, icon: <Briefcase size={20} />, label: "Bisnis" },
    { id: 3, icon: <FileText size={20} />, label: "Dokumen" },
    { id: 4, icon: <CheckCircle size={20} />, label: "Selesai" },
  ];

  return (
    <div className="w-full py-6">
      <div className="flex items-center justify-between px-4 md:px-12 relative">
        
        {/* Garis Latar Belakang (Abu-abu) */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 -z-10" />

        {steps.map((step, index) => {
          // Cek status step (apakah sudah aktif/lewat)
          const isActive = currentStep >= step.id;
          const isCompleted = currentStep > step.id;

          return (
            <div key={step.id} className="flex flex-col items-center bg-white px-2">
              {/* Lingkaran Icon */}
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
                  ${isActive 
                    ? 'bg-mantap-blue border-mantap-blue text-white shadow-lg scale-110' 
                    : 'bg-white border-gray-300 text-gray-400'}
                `}
              >
                {/* Jika sudah lewat, ganti icon jadi centang, jika belum pakai icon asli */}
                {isCompleted ? <CheckCircle size={20} /> : step.icon}
              </div>

              {/* Label Text di bawah icon */}
              <span className={`text-xs mt-2 font-semibold transition-colors duration-300 ${isActive ? 'text-mantap-blue' : 'text-gray-400'}`}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
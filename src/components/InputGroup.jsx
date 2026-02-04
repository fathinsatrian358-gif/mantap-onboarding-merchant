import React from 'react';

const InputGroup = ({ label, name, register, required, type = "text", placeholder, error }) => {
  return (
    <div className="mb-4">
      {/* Label di atas input */}
      <label className="block text-sm font-bold text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      {/* Kotak Input */}
      <input
        type={type}
        {...register(name, { required: required ? "Wajib diisi" : false })}
        placeholder={placeholder}
        className={`w-full p-2.5 border rounded-md text-sm shadow-sm transition-all
          focus:outline-none focus:ring-2 focus:ring-mantap-yellow focus:border-mantap-yellow
          ${error ? "border-red-500 bg-red-50" : "border-gray-300 bg-white"}
        `}
      />
      
      {/* Pesan Error (Muncul jika ada error) */}
      {error && <span className="text-xs text-red-500 mt-1">{error.message}</span>}
    </div>
  );
};

export default InputGroup;
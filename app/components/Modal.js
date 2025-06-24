// components/Modal.js
import React from "react";

const Modal = ({ isOpen, onClose, contact, email }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#121212] p-6 rounded-md shadow-lg w-80 relative z-60">
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <p className="mb-2"><strong>Whatsapp:</strong> {contact}</p>
        <p className="mb-4"><strong>Email:</strong> {email}</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;

// WhatsappButton.js
import React from 'react';

const WhatsappButton = () => {
    return (
        <a
            href="https://wa.me/491772294983" // Burada numaranızı güncelleyin
            className="fixed bottom-5 right-5 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-50 animate-bounce"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src="whatsappicon.svg" // İkon dosyasının yolunu güncelleyin
                alt="WhatsApp"
                className="w-8 h-8"
            />
        </a>
    );
};

export default WhatsappButton;

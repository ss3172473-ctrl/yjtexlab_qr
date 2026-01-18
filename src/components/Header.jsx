import React from 'react';
import logo from '../assets/logo.png';

export const Header = () => {
    return (
        <header className="flex flex-col items-center pt-12 pb-8 px-6">
            <div className="w-24 h-24 mb-4 relative flex items-center justify-center">
                {/* If logo image fails, we show text, but for now assuming image works */}
                <img
                    src={logo}
                    alt="YJ TexLab Logo"
                    className="w-full h-full object-contain drop-shadow-sm"
                />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-[#1D1D1F] mb-1 font-[Outfit]">
                YJ TexLab
            </h1>
            <p className="text-[#86868B] text-sm font-medium">
                간편 결제 및 공지 안내
            </p>
        </header>
    );
};

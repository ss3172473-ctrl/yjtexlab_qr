import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, CreditCard, MessageCircle, ExternalLink, MessageSquare } from 'lucide-react';
import { Header } from './components/Header';
import { Button } from './components/Button';
import { Toast } from './components/Toast';
import bgImage from './assets/bg.png';

function App() {
  const [showToast, setShowToast] = useState(false);

  const handleCopy = () => {
    // 3333-25-3076694 (KakaoBank)
    const account = "3333-25-3076694";
    navigator.clipboard.writeText(account).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    });
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center">
      {/* Background with Overlay */}
      <div className="fixed inset-0 z-0">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover opacity-60 blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-white/40" />
      </div>

      {/* Content Container */}
      <main className="relative z-10 w-full max-w-md px-6 flex flex-col min-h-screen pb-24">

        <Header />

        {/* Main Section: Payment Buttons */}
        <div className="flex flex-col gap-4 mb-8">

          {/* Toss Pay */}
          <Button
            variant="toss"
            href="supertoss://send?amount=0&bank=%EC%B9%B4%EC%B9%B4%EC%98%A4%EB%B1%85%ED%81%AC&accountNo=3333253076694&origin=qr"
            className="justify-between px-6"
          >
            <span className="flex items-center gap-3">
              {/* SVG Logo specific for Toss could go here, usually blue 't' */}
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="font-bold text-lg">t</span>
              </div>
              토스페이로 송금하기
            </span>
          </Button>

          {/* Naver Pay */}
          <Button
            variant="naver"
            href="https://pay.naver.com/remit/qr/inflow?v=1&a=3333253076694&c=090&d=9b658dc2b7e67c459212100128925839"
            className="justify-between px-6"
          >
            <span className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="font-bold text-lg">N</span>
              </div>
              네이버페이로 송금하기
            </span>
          </Button>

          {/* Copy Account */}
          <Button
            variant="primary"
            onClick={handleCopy}
            className="justify-between px-6 text-gray-700 hover:text-gray-900"
          >
            <span className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
                <Copy size={18} />
              </div>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-sm text-gray-500">카카오뱅크</span>
                <span className="font-semibold">3333-25-3076694</span>
              </div>
            </span>
            <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-md">복사하기</span>
          </Button>
        </div>

        {/* Sub Section: Community Links */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <Button
            variant="outline"
            href="https://open.kakao.com/o/gRa7iRbi"
          >
            <div className="flex items-center gap-2">
              <MessageCircle size={16} className="text-yellow-900" />
              <span>카톡 공지방</span>
            </div>
          </Button>

          <Button
            variant="outline"
            href="https://band.us/@yjtexlab"
          >
            <div className="flex items-center gap-2">
              <ExternalLink size={16} className="text-green-600" />
              <span>네이버 밴드</span>
            </div>
          </Button>
        </div>

        {/* Footer Text / Branding */}
        <div className="mt-auto text-center pb-8">
          <p className="text-xs text-gray-400">
            © YJ TexLab. All rights reserved.
          </p>
        </div>

        {/* Floating Action Button (1:1 Inquiry) */}
        <Button
          variant="floating"
          href="http://pf.kakao.com/_LRAAX"
        >
          <MessageSquare size={20} fill="#3C1E1E" />
          <span>1:1 문의하기</span>
        </Button>

      </main>

      <Toast
        message="계좌번호가 복사되었습니다"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}

export default App;

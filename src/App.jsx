import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, MessageCircle, ExternalLink, MessageSquare } from 'lucide-react';
import { Header } from './components/Header';
import { Button } from './components/Button';
import { Toast } from './components/Toast';

function App() {
  const [showToast, setShowToast] = useState(false);

  const handleCopy = () => {
    const account = "3333-25-3076694";
    navigator.clipboard.writeText(account).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    });
  };

  const handleNaverPay = (e) => {
    if (e) e.preventDefault();
    const webUrl = "https://pay.naver.com/remit/bridge/app?originUrl=https%3A%2F%2Fpay.naver.com%2Fremit%2Fqr%2Finflow%3Fv%3D1%26a%3D3333253076694%26c%3D090%26d%3D9b658dc2b7e67c459212100128925839";
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // 딥링크: 네이버 앱 강제 실행
      const naverAppUrl = `naversearchapp://inappbrowser?url=${encodeURIComponent(webUrl)}&target=blank&version=1`;
      window.location.href = naverAppUrl;

      // 네이버 앱이 없을 경우를 대비한 폴백 처리 (1.5초 후 실행)
      setTimeout(() => {
        window.location.href = webUrl;
      }, 1500);
    } else {
      // PC 등 모바일이 아닌 환경에서는 일반 웹 링크
      window.location.href = webUrl;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="h-[100dvh] w-full bg-[#f8f9fa] text-[#111111] flex flex-col items-center py-6 px-5 max-w-md mx-auto relative overflow-hidden"
    >

      {/* 1. Header */}
      <motion.div variants={itemVariants} className="flex-none mb-4">
        <Header />
      </motion.div>

      {/* 2. Content Area (Pushes to center/top, flexible) */}
      <div className="w-full flex-1 flex flex-col gap-8">

        {/* Payment Buttons Group */}
        <div className="flex flex-col gap-3 w-full">
          <motion.div variants={itemVariants}>
            <Button
              variant="toss"
              href="supertoss://send?amount=0&bank=%EC%B9%B4%EC%B9%B4%EC%98%A4%EB%B1%85%ED%81%AC&accountNo=3333253076694&origin=qr"
              className="px-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-full flex items-center justify-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="font-bold text-lg text-white">t</span>
                </div>
                <span className="text-[18px] font-bold">토스페이로 송금하기</span>
              </div>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              variant="naver"
              onClick={handleNaverPay}
              className="px-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-full flex items-center justify-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="font-bold text-lg text-white">N</span>
                </div>
                <span className="text-[18px] font-bold">네이버페이로 송금하기</span>
              </div>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              variant="primary"
              onClick={() => {
                const account = "카카오뱅크 3333-25-3076694";
                // Robust copy with fallback
                if (navigator.clipboard && navigator.clipboard.writeText) {
                  navigator.clipboard.writeText(account).then(() => {
                    setShowToast(true);
                    setTimeout(() => setShowToast(false), 2000);
                  }).catch(err => {
                    // Fallback if promise fails
                    const textArea = document.createElement("textarea");
                    textArea.value = account;
                    document.body.appendChild(textArea);
                    textArea.select();
                    try {
                      document.execCommand('copy');
                      setShowToast(true);
                      setTimeout(() => setShowToast(false), 2000);
                    } catch (err) {
                      console.error('Copy failed', err);
                    }
                    document.body.removeChild(textArea);
                  });
                } else {
                  // Fallback for older browsers/webviews
                  const textArea = document.createElement("textarea");
                  textArea.value = account;
                  document.body.appendChild(textArea);
                  textArea.select();
                  try {
                    document.execCommand('copy');
                    setShowToast(true);
                    setTimeout(() => setShowToast(false), 2000);
                  } catch (err) {
                    console.error('Copy failed', err);
                  }
                  document.body.removeChild(textArea);
                }
              }}
              className="px-6 justify-center"
            >
              <div className="flex items-center gap-3">
                <Copy size={18} className="text-gray-500" />
                <span className="text-[16px] font-bold text-gray-800">계좌 복사하기</span>
              </div>
            </Button>
          </motion.div>
        </div>

        {/* Community Section */}
        <div className="w-full flex flex-col gap-2 mt-2">
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-[13px] font-bold text-[#111111] bg-white/50 inline-block px-3 py-1 rounded-full border border-black/5">
              📢 창고 개방 및 온라인 판매 공지를 받고 싶다면?
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              href="https://open.kakao.com/o/gRa7iRbi"
              className="justify-center"
            >
              <div className="flex items-center gap-2">
                <MessageCircle size={18} className="text-[#3E2723]" />
                <span className="text-[15px] font-bold text-gray-700">카톡 공지방</span>
              </div>
            </Button>

            <Button
              variant="outline"
              href="https://band.us/@yjtexlab"
              className="justify-center"
            >
              <div className="flex items-center gap-2">
                <ExternalLink size={18} className="text-[#03C75A]" />
                <span className="text-[15px] font-bold text-gray-700">네이버 밴드</span>
              </div>
            </Button>
          </motion.div>
        </div>

      </div>

      {/* 3. Footer (Bottom Fixed area) */}
      <motion.div variants={itemVariants} className="flex-none pt-4 pb-2">
        <Button
          variant="floating"
          href="http://pf.kakao.com/_LRAAX"
        >
          <MessageSquare size={16} fill="#371D1E" strokeWidth={0} />
          <span>1:1 문의하기</span>
        </Button>
      </motion.div>

      <Toast
        message="계좌번호가 복사되었습니다"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </motion.div>
  );
}

export default App;

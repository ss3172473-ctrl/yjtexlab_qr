/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                toss: ['Toss Face Font', 'Pretendard', 'sans-serif'],
                naver: ['NanumSquare', 'Pretendard', 'sans-serif'],
            },
            boxShadow: {
                'premium-blue': '0 8px 30px rgba(0,100,255,0.3)',
                'premium-green': '0 8px 30px rgba(3,199,90,0.3)',
            }
        },
    },
    plugins: [],
}

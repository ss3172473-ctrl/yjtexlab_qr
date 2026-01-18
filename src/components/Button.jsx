import { motion } from 'framer-motion';

export const Button = ({
    children,
    onClick,
    href,
    variant = 'primary',
    className = '',
    ...props
}) => {
    const baseStyles = "w-full flex items-center relative overflow-hidden transition-all duration-200";

    // Ultra-visible, high-contrast styles
    const variants = {
        // Copy Button: Clean White with strong border/shadow
        primary: "h-[64px] bg-white rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-gray-200 active:scale-[0.98]",

        // Toss: Solid Vibrant Blue
        toss: "h-[64px] bg-[#0064FF] text-white rounded-[20px] shadow-[0_4px_12px_rgba(0,100,255,0.3)] active:scale-[0.98]",

        // Naver: Solid Vibrant Green
        naver: "h-[64px] bg-[#03C75A] text-white rounded-[20px] shadow-[0_4px_12px_rgba(3,199,90,0.3)] active:scale-[0.98]",

        // Links: White small blocks
        outline: "h-[56px] bg-white border border-gray-200 rounded-[16px] shadow-sm text-gray-700 active:scale-[0.98]",

        // Small Footer Button (Yellow Pills)
        floating: "h-[42px] bg-[#FAE100] text-[#371D1E] px-6 rounded-full text-sm font-bold shadow-sm active:scale-[0.98] inline-flex"
    };

    const Component = href ? motion.a : motion.button;

    return (
        <Component
            href={href}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            target={href ? "_blank" : undefined}
            rel={href ? "noopener noreferrer" : undefined}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {/* Subtle shine effect overlay for premium feel */}
            {(variant === 'toss' || variant === 'naver') && (
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
            )}
            {children}
        </Component>
    );
};

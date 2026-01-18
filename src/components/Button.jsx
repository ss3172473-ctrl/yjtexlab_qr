import { motion } from 'framer-motion';

export const Button = ({
    children,
    onClick,
    href,
    variant = 'primary',
    className = '',
    ...props
}) => {
    const baseStyles = "w-full flex items-center justify-center font-medium transition-all duration-200 active:scale-95";

    const variants = {
        primary: "h-16 bg-white shadow-md rounded-[20px] text-lg hover:shadow-lg border border-transparent",
        toss: "h-16 bg-[#0064FF] text-white shadow-md rounded-[20px] text-lg hover:bg-[#0052cc]",
        naver: "h-16 bg-[#03C75A] text-white shadow-md rounded-[20px] text-lg hover:bg-[#02b351]",
        outline: "h-12 bg-white/80 border border-gray-200 rounded-[16px] text-sm text-gray-700 hover:bg-white",
        floating: "fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#FAE100] text-[#3C1E1E] px-6 py-3 rounded-full shadow-lg font-bold flex items-center gap-2 hover:shadow-xl"
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
            {children}
        </Component>
    );
};

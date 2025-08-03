import clsx from "clsx"
import { motion } from "framer-motion";

interface ButtonProps {
    children: React.ReactNode,
    variant: "default" | "gradient",
}

const variants = {
    default: "bg-[var(--accent)] hover:shadow-[0px_0px_100px_var(--shadow-accent)]",
    gradient: "bg-linear-45 from-[var(--primary)] to-[var(--accent)] hover:shadow-[10px_0px_100px_var(--shadow-primary)]"
}

const Button = ({
    children,
    variant,
}: ButtonProps) => {
    return (
        <button className={clsx("w-fit h-[2.5rem] md:h-[3rem] text-gray-950 rounded-[8px] transition-all duration-300 ease-in-out hover:scale-105 ", variants[variant])}
        >
            {children}
        </button>
    )
}


export default Button;
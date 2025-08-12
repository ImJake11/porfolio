"use client";

import { motion } from "framer-motion";
import { LucideProps } from "lucide-react";

interface CardProps {
    Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
    title: string;
    desc: string;
}

const Card = ({ Icon, title, desc }: CardProps) => {
    return (
        <motion.div
            className="w-full h-full card-bg-gradient rounded-[12px] border-[var(--background-secondary)] border-[2px] group flex flex-col py-3 px-5 gap-2 transition-all ease-linear duration-300 hover:border-[var(--primary)] hover:shadow-[0_0_30px_var(--shadow-primary)] inve"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} // triggers at 30% visible
        >
            <Icon
                size={40}
                color="var(--primary)"
                className="group-hover:scale-110 transition-all ease-in duration-200"
            />
            <span className="text-2xl text-white">{title}</span>
            <p className="text-[var(--muted-foreground)]">{desc}</p>
        </motion.div>
    );
};

export default Card;
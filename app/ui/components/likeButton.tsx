'use client';

import { toggleDialog } from '@/app/lib/redux/slice';
import { createBrowserClient } from '@supabase/ssr';
import { Heart } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

const LikeButton = () => {
    const [currentLikes, setCurrentLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const dispatch = useDispatch();

    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    )

    const handleLike = async () => {
        if (isLiked) {
            setIsLiked(false);
            setCurrentLikes(currentLikes - 1);
            const id = window.localStorage.getItem("like-id");
            await supabase.from('portfolio-likes').delete().eq('id', Number(id));
            window.localStorage.removeItem('like-id');
            return;
        };

        setIsLiked(true);
        setCurrentLikes(currentLikes + 1)
        const { data, error } = await supabase.from('portfolio-likes').insert({}).select("id").single();
        if (data) {
            window.localStorage.setItem('like-id', JSON.stringify(data.id));
        }
        dispatch(toggleDialog({
            message: "I really appreciate your support! Your like means a lot to me.",
            type: "like"
        }))

    }

    useEffect(() => {
        const fetchLikes = async () => {
            const id = window.localStorage.getItem("like-id");

            if (id) {
                setIsLiked(true);
            }

            const { data, error } = await supabase
                .from('portfolio-likes')
                .select('*');

            if (error) {
                console.log("Failed to get number of likes");
            }

            if (data) {
                setCurrentLikes(data.length ?? 0)
            }
        }

        fetchLikes();
    }, []);

    return (
        <div className='flex gap-3 items-center'>

            <button className={`h-[3rem] w-fit rounded-[4px] px-5 border ${isLiked ? "border-pink-600 bg-pink-600" : "border-[var(--secondary)] bg-transparent"} flex gap-2 items-center transition-all duration-200 ease-in`}
                onClick={handleLike}
            >

                <Heart className={`${isLiked ? "fill-white text-white" : "text-white"}`} size={18} />
                <span className='text-white'>{isLiked ? "Liked" : "Like"}</span>
            </button>
            <span className='text-white text-2xl'>{currentLikes}</span>
        </div>
    )
}

export default LikeButton

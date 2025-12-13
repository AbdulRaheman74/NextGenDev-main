import React from 'react';

export const HeroVideo: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={`relative overflow-hidden rounded-3xl ${className}`}>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-80"
            >
                <source src="https://cdn.pixabay.com/video/2016/11/15/6421-191721132_large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay to blend with black theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none" />
        </div>
    );
};

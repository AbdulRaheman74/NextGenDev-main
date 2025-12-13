import React, { useState, Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export const SplineScene: React.FC<SplineSceneProps> = ({ scene, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <Spline
        scene={scene}
        onLoad={() => setIsLoading(false)}
        className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}
      />
    </div>
  );
};

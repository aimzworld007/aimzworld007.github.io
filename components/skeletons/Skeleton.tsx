import React from 'react';

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  const classes = `
    bg-gray-200 dark:bg-gray-700/50
    relative
    overflow-hidden
    ${className || ''}
  `;

  return (
    <div className={classes}>
      <div className="shimmer-animation absolute inset-0 -translate-x-full" />
    </div>
  );
};

export default Skeleton;

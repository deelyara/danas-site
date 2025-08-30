'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProjectMediaProps {
  src: string;
  alt: string;
  type?: 'image' | 'video';
  caption?: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function ProjectMedia({ 
  src, 
  alt, 
  type = 'image',
  caption,
  className = '',
  width = 1200,
  height = 675,
  priority = false
}: ProjectMediaProps) {
  const [isLoading, setIsLoading] = useState(true);

  if (type === 'video') {
    const aspectStyle = { aspectRatio: `${width}/${height}` } as React.CSSProperties;
    return (
      <div className={`project-media ${className}`}>
        <figure>
          <div style={aspectStyle} className="w-full overflow-hidden rounded-md">
            <video 
              controls 
              className="w-full h-full object-cover"
              preload="metadata"
            >
              <source src={src} type="video/mp4" />
              Your browser doesn&apos;t support video playback.
            </video>
          </div>
          {caption && (
            <figcaption className="project-media-caption">
              {caption}
            </figcaption>
          )}
        </figure>
      </div>
    );
  }

  return (
    <div className={`project-media ${className}`}>
      <figure>
        <div className="relative">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`project-media-image ${isLoading ? 'loading' : ''}`}
            onLoadingComplete={() => setIsLoading(false)}
            quality={75}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority={priority}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k="
          />
        </div>
        {caption && (
          <figcaption className="project-media-caption">
            {caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
}

// Grid layout for multiple media items
interface MediaGridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3;
}

export function MediaGrid({ children, columns = 2 }: MediaGridProps) {
  return (
    <div className={`project-media-grid project-media-grid-${columns}`}>
      {children}
    </div>
  );
}
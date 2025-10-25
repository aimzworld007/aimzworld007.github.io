import React, { useEffect, useRef } from 'react';
import { PortfolioProject } from '../types';
import PortfolioCard from './PortfolioCard';

// Declare Swiper constructor for TypeScript since it's loaded from a CDN
declare var Swiper: any;

interface PortfolioSliderProps {
  projects: PortfolioProject[];
  onProjectClick: (project: PortfolioProject) => void;
}

const PortfolioSlider: React.FC<PortfolioSliderProps> = ({ projects, onProjectClick }) => {
  const swiperRef = useRef(null);
  const swiperInstance = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && projects.length > 0) {
      // Destroy previous instance if it exists to prevent conflicts when filtering
      if (swiperInstance.current) {
        swiperInstance.current.destroy(true, true);
      }
      
      // Initialize Swiper
      swiperInstance.current = new Swiper(swiperRef.current, {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: projects.length > 3, // Loop only if there are enough slides for the largest view
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      });
    }
    
    // Cleanup on component unmount
    return () => {
      if (swiperInstance.current) {
        swiperInstance.current.destroy(true, true);
        swiperInstance.current = null;
      }
    };
  }, [projects]); // Re-initialize Swiper whenever the projects array changes

  return (
    <div ref={swiperRef} className="swiper w-full !pb-10">
      <div className="swiper-wrapper">
        {projects.map((project, index) => (
          <div key={`${project.title}-${index}`} className="swiper-slide h-auto">
            <PortfolioCard project={project} onClick={() => onProjectClick(project)} />
          </div>
        ))}
      </div>
      
      {/* Add Pagination */}
      <div className="swiper-pagination"></div>

      {/* Add Navigation if there's more than one slide on desktop */}
      <div className="swiper-button-prev hidden md:flex"></div>
      <div className="swiper-button-next hidden md:flex"></div>
    </div>
  );
};

export default PortfolioSlider;
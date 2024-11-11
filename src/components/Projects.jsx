import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets';

const Projects = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);

    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth >= 1024){
                setCardsToShow(projectsData.length);
            } else {
                setCardsToShow(1)
            }
        } 

            updateCardsToShow();

            window.addEventListener('resize', updateCardsToShow);
            return() => window.removeEventListener('resize', updateCardsToShow)
        
    }, [])

    const nextProject = ()=>{
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }
    const PrevProject = () => {
       setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1 )
    };

  return (
    <div
      className="container d-flex flex-column mx-auto py-4 md:px-20 w-100 overflow-hidden lg:px-32"
      id="Projects"
    >
      <h1>
        Projects <span className="text-decoration-underline">Completed</span>
      </h1>
      <p className="text-secondary mw-100 mb-5">
        Crafting Spaces, Builiding Legacies-Explore Our Portfolio
      </p>

      {/* Slider Buttons */}

      <div className="d-flex justify-content-end align-items-center mb-5 w-100">
        <button
          className="btn p-3 rounded me-2"
          aria-label="Previous Project"
          style={{
            backgroundColor: "#e9ecef",
          }}
          onClick={PrevProject}
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>

        <button
          className="btn p-3 rounded"
          aria-label="Next Project"
          style={{
            backgroundColor: "#e9ecef",
          }}
          onClick={nextProject}
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Slider Container */}
      <div className="overflow-hidden">
        <div className="d-flex flex-nowrap transition"
            style={{
                transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`
            }}
        >
          {projectsData.map((project, index) => (
            <div
              className="flex-shrink-0 me-4 position-relative"
              style={{ width: "100%", maxWidth: "300px" }}
              key={index}
            >
              <img
                src={project.image}
                alt={project.title}
                className="img-fluid w-100 h-auto mb-5"
              />

              <div className="position-absolute start-0 end-0 bottom-0 d-flex justify-content-center mb-4">
                <div className="d-inline-block bg-white px-4 py-2 custom-width custom-shadow">
                  <h2>{project.title}</h2>
                  <p>
                    {project.price}
                    <span> | </span>
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects

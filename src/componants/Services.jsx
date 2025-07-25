import React from 'react'

export default function Services() {
    const handleBounce = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const moveX = ((x - centerX) / centerX) * 10; // max 10px
        const moveY = ((y - centerY) / centerY) * 10;

        card.style.transform = `translate(${moveX}px, ${moveY}px)`;
        card.style.transition = "transform 0.1s ease-out";
    };

    const resetBounce = (e) => {
        const card = e.currentTarget;
        card.style.transform = `translate(0, 0)`;
        card.style.transition = "transform 0.3s ease-in-out";
    };


    return (
        <>
            <div className="container-fluid section-padding d-none">
                <div className="container">
                    <div className="heading">
                        <h1>my<span>services</span></h1>
                        <div className="servicesmainbox">
                            <div
                                className="servicesbox"
                                onMouseMove={(e) => handleBounce(e)}
                                onMouseLeave={(e) => resetBounce(e)}
                            >
                                <div className="serices-content">
                                    <i class="fa-solid fa-code"></i>
                                    <h3>Web Development</h3>
                                    <p>I offer high-quality web development services and create interactive websites tailored to clients</p>
                                    <div className="button-hover-effect">
                                        <a href="">Read more</a>
                                        <div className="backgrounddbtn"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="servicesbox" onMouseMove={(e) => handleBounce(e)}
                                onMouseLeave={(e) => resetBounce(e)}>
                                <div className='serices-content'>
                                    <i class="fa-solid fa-pen-fancy"></i>
                                    <h3>graphics design</h3>
                                    <p>I offer high-qulity web devlopment services and creating interactive websites tailored to client</p>
                                    <div className='button-hover-effect'>
                                        <a href="">Read more</a>
                                        <div className='backgrounddbtn'>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="servicesbox" onMouseMove={(e) => handleBounce(e)}
                                onMouseLeave={(e) => resetBounce(e)}>
                                <div className='serices-content'>
                                    <i class="fa-solid fa-chart-simple"></i>
                                    <h3>digital marketing </h3>
                                    <p>I offer high-qulity web devlopment services and creating interactive websites tailored to client</p>
                                    <div className='button-hover-effect'>
                                        <a href="">Read more</a>
                                        <div className='backgrounddbtn'>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

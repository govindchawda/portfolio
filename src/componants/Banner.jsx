// import { useRef, useEffect } from 'react';
// import React from 'react'

// export default function Banner() {
  //     const canvasRef = useRef(null);
  
//       useEffect(() => {
  //         const canvas = canvasRef.current;
  
  //         // Set width/height before getting context
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;

//         const ctx = canvas.getContext("2d");

//         const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//         const fontSize = 16;
//         const columns = canvas.width / fontSize;
//         const drops = Array(Math.floor(columns)).fill(1);

//         const drawMatrix = () => {
//         //   ctx.fillStyle = "#00203fff";
//           ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
//           ctx.fillRect(0, 0, canvas.width, canvas.height);

//         //   ctx.fillStyle = "#adefd1ff";
//           ctx.fillStyle = "#00FFAB";
//         //   ctx.fillStyle = "#0F0";
//           ctx.font = fontSize + "px monospace";

//           for (let i = 0; i < drops.length; i++) {
//             const text = letters[Math.floor(Math.random() * letters.length)];
//             ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    
//             if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
//               drops[i] = 0;
//             }

//             drops[i]++;
//           }
//         };

//         const interval = setInterval(drawMatrix, 35);

//         const handleResize = () => {
  //           canvas.width = window.innerWidth;
  //           canvas.height = window.innerHeight;
  //         };
  
  //         window.addEventListener("resize", handleResize);
  
  //         return () => {
    //           clearInterval(interval);
    //           window.removeEventListener("resize", handleResize);
    //         };
    //       }, []);
    
    //   return (
      //     <>
      
      
      //       <div className='banner'>
      //       <canvas
//       className='canvas'
//         ref={canvasRef}
//         style={{
  //             position: "fixed",
  //             top: 0,
  //             left: 0,
//             zIndex: -1,
//             backgroundColor: "black", // 🔥 FIX ADDED
//         }}
//         />  
//         <div className='content'>
//             <img src="https://i.ibb.co/TDqd2q4H/202f817d-5979-44f9-a3c3-67d2fd013ec9.jpg" alt="" />
//             {/* <p className='d-flex'>Hii i am <strong>Govind Chawda</strong></p> */}
//             <section class="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4 text-center">
//   <h1 class="yello text-4xl md:text-5xl font-bold mb-4">Hi, I'm <span class="text-500">Govind Chawda</span></h1>
//   <h2 class="orane text-xl md:text-2xl mb-6">Welcome to my Portfolio</h2>
//   <p class=" text-base md:text-lg max-w-xl mb-8">
//     Thank you for visiting! Please have a look at my portfolio and feel free to share your valuable feedback.
//   </p>
//   <a href="#contact" class="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl transition duration-300">
//     Give Your Review
//   </a>
// </section>

//         </div>
//         </div>  
//     </>
//   )
// }

import { useEffect, useRef } from "react";
export default function Banner() {

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const resizeCanvas = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);

    const points = [];
    const pointCount = Math.floor((width * height) / 5000); // density control

    for (let i = 0; i < pointCount; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      points.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        // ctx.fillStyle = "#F8F900";
        ctx.fillStyle = "#0CC0F7";
        ctx.fill();
      });

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 120})`;
            ctx.lineWidth = 0.2;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

return(
  <>
  <div className="banner-section">
     <canvas ref={canvasRef} className="banner fixed top-0 left-0 w-full h-full -z-10" />
     <div className="banner-top">
     <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="bannercontent">
            {/* <h2><span>hi there</span></h2> */}
            {/* <h1 className="typed-out">i am web devloper</h1> */}
            <h1 className="typed-out">i'm web devloper</h1>
            <p>I am a passionate Web Developer with 2+ years of experience, skilled in creating and designing responsive and user-friendly websites. I have worked on multiple technologies and tools, gaining strong expertise in real-time project development. Currently, I am working on building an ERP system, which has enhanced my experience in handling complex and scalable applications</p>
            {/* <p>I am a web developer with 2 years of experience. I have <br /> created and designed many websites and much more...</p> */}
            <a href="tel:7803963991"><span>Hire me</span></a>
            <a  href="/Govind_chawda_resume_46.pdf"
        download="Govind_chawda_resume.pdf" style={{marginLeft:'30px'}}><span>Resume</span></a>
           
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="bannerimage">
            <img src="https://avatars.githubusercontent.com/u/108026572?v=4" alt="" />
          </div>
          <div className="animate-icon">
  <div className="round-icon linkedin">
    <i class="fa-brands fa-linkedin"></i>
    <a href="https://www.linkedin.com/in/govind-chawda-787460376/">
    <span className="linkedin">linkedin</span>
    </a>
  </div>
  <div className="round-icon instagram">
    <i class="fa-brands fa-instagram"></i>
        <a href="https://www.instagram.com/govind_chawda46/">
    <span className="instagram">instagram</span>
    </a>
  </div>
  <div className="round-icon facebook">
    <i class="fa-brands fa-facebook"></i>
    <a href="https://www.facebook.com/profile.php?id=100055557854101">
    <span className="facebook">facebook</span>
    </a>
  </div>
  <div className="round-icon github">
    <i class="fa-brands fa-github"></i>
    <a href="https://github.com/govindchawda">
    <span className="github">github</span>
    </a>
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
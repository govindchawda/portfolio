// import React, { useState } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();

//   //   const { name, email, phone, message } = formData;

//   //   // Validation
//   //   if (!name || !email || !phone || !message) {
//   //     toast.error('Please fill in all fields');
//   //     return;
//   //   }

//   //   // Save to localStorage
//   //   localStorage.setItem('contactForm', JSON.stringify(formData));

//   //   toast.success('Message submitted successfully!');

//   //   // Clear form
//   //   setFormData({ name: '', email: '', phone: '', message: '' });
//   // };

//   return (
//     <>
//       <div className='container-fluid section-padding'>
//         <div className="container">
//           <div className="heading">
//             <h1>contact<span>us</span></h1>
//           </div>
//           <div className="row contactbox">
//             <div className="col-sm-12 col-md-12 col-lg-3">
//               <h3 className=''>get ready to create great</h3>
//               <div className='contact-icons'>
//                 <div className='icns'>
//                   <div>
//                     <i class="fa-solid fa-envelope "></i>
//                   </div>
//                   <div className='icons-mail'>
//                     <p>email</p>
//                     <span>gchawda466@gmail.com</span>
//                   </div>
//                 </div>
//                 <div className='icns'>
//                   <div>
//                     <i class="fa-solid fa-phone"></i>
//                   </div>
//                   <div className='icons-mail'>
//                     <div>

//                       <p>Contact</p>
//                     </div>
//                     <div>

//                       <span>7803963991</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className='icns'>
//                   <div>
//                     <i class="fa-solid fa-location-dot"></i>
//                   </div>
//                   <div className='icons-mail'>
//                     <p>location</p>
//                     <span>Annpurna, Indore</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-sm-12 col-md-9 ">
//               <form action="https://formspree.io/f/mrblpwqe" method='post' className='row' >
//                 <div className="col-sm-12">
//                   <div className="mt-3">
//                     <input
//                       type="text"
//                       required
//                       className='form-control'
//                       placeholder='your name'
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 <div className='col-sm-12'>
//                   <div className="mt-3">
//                     <input
//                       type="email"
//                       required
//                       className='form-control'
//                       placeholder='your email'
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 <div className='col-sm-12'>
//                   <div className="mt-3">
//                     <input
//                       type="text"
//                       required
//                       className='form-control'
//                       placeholder='phone number'
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 <div className='col-sm-8 col-sm-6'>
//                   <div className="mt-3">
//                     <textarea
//                       required
//                       className='form-control'
//                       placeholder='your message'
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 <div className="col-sm-4 serices-content">
//                   <div className='button-hover-effect'>
//                     <button type='submit'>submit</button>
//                     <div className='backgrounddbtn'></div>
//                   </div>
//                 </div>

//                 <ToastContainer />
//                 {/* <ToastContainer position='top-center' /> */}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }



import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/mrblpwqe', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: new FormData(e.target)
      });

      if (response.ok) {
        toast.success('Message submitted successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        toast.error('Failed to send. Try again later.');
      }
    } catch (error) {
      toast.error('Network error. Please try again.');
    }
  };

  return (
    <>
      <div className='container-fluid section-padding'>
        <div className="container">
          <div className="heading">
            <h1>contact<span>us</span></h1>
          </div>
          <div className="row contactbox">
            <div className="col-sm-12 col-md-12 col-lg-3">
              <h3 className=''>get ready to create great</h3>
              <div className='contact-icons'>
                <div className='icns'>
                  <div>
                    <i className="fa-solid fa-envelope "></i>
                  </div>
                  <div className='icons-mail'>
                    <p>email</p>
                    <span>gchawda466@gmail.com</span>
                  </div>
                </div>
                <div className='icns'>
                  <div>
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className='icons-mail'>
                    <div>
                      <p>Contact</p>
                    </div>
                    <div>
                      <span>7803963991</span>
                    </div>
                  </div>
                </div>
                <div className='icns'>
                  <div>
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className='icons-mail'>
                    <p>location</p>
                    <span>Annpurna, Indore</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-9 ">
              <form onSubmit={handleSubmit} className='row'>
                <div className="col-sm-12">
                  <div className="mt-3">
                    <input
                      type="text"
                      required
                      className='form-control'
                      placeholder='your name'
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className='col-sm-12'>
                  <div className="mt-3">
                    <input
                      type="email"
                      required
                      className='form-control'
                      placeholder='your email'
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className='col-sm-12'>
                  <div className="mt-3">
                    <input
                      type="text"
                      required
                      className='form-control'
                      placeholder='phone number'
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className='col-sm-8 col-sm-6'>
                  <div className="mt-3">
                    <textarea
                      required
                      className='form-control'
                      placeholder='your message'
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-sm-4 serices-content">
                  <div className='button-hover-effect'>
                    <button type='submit'>submit</button>
                    <div className='backgrounddbtn'></div>
                  </div>
                </div>

                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* check  12*/}
    </>
  );
}

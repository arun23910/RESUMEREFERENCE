// import React from "react";
// import { BsArrowRight } from "react-icons/bs";
// // import { RiSendPlaneFill } from "react-icons/ri";

// const Contact = () => {
//   return (
//     <div id="contact" className="container m-auto mt-16">
//       {/* heading */}
//       <div 
//       // data-aos="fade-up"
//        className="relative mb-5">
//         <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
//           Contact
//         </h3>
//         <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
//       </div>

//       {/* card*/}
//       <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
//         <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
//           <div className="flex-3 w-1/2 gap-3 flex items-end justify-end  flex-col sm:w-3/4">
//             <div 
//             data-aos="zoom-in"
//             >
//               <h1 className="text-5xl font-bold sm:text-3xl">You Need</h1>
//               <h3 className="text-xl sm:text-lg">
//                 Beautiful design for your website leave a request
//               </h3>
//             </div>
//           </div>
//           <div className=" flex p-5 items-center justify-center ">
//             <button
              
//               data-aos="zoom-in"
              
//               className= " text-yellow-500 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] "
//             >
//               <BsArrowRight className=" md:rotate-90" />
//             </button>
//           </div>
//         </div>
//         <div className="right flex-1">
//           <form
            
//             data-aos="zoom-in"
            
//             className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
//             action="mailto:karthikfoul66@gmail.com"
//           >
//             <input
//               className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
//               type="email"
//               placeholder="e.g. example@email.com"
//               name=""
//             />
//             <input
//               className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
//               type="text"
//               placeholder="e.g. Karthik"
//               name=""
//             />
//             <textarea
//               className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
//               rows="4"
//               cols="50"
//               placeholder="Write your message"
//               name=""
//               id=""
//             />
//             <button
//               className="bg-yellow-500 w-full text-white font-semibold  p-2 rounded-lg flex items-center justify-center space-x-1"
//               type="submit"
//             >
//               <span>Send</span>
//               {/* <RiSendPlaneFill/> */}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React, { useState, useEffect } from 'react';
import { BsArrowRight } from "react-icons/bs";
import toast, { Toaster } from 'react-hot-toast';
import emailjs from "@emailjs/browser";
// import { RiSendPlaneFill } from "react-icons/ri";

// import videoSource from '../../assets/video.mp4'; 

const Contact = () => {

  const [firstname, setFirstname] = useState();
  const [email, setEmail] = useState();
  const [message, setmessage] = useState();
  const [phone, setphone] = useState();
  const[show,setShow]=useState(false)
  


  //video
    const videoSources = [
      require('../../assets/video.mp4'),
      require('../../assets/video2.mp4'),
      require('../../assets/video3.mp4'),
       require('../../assets/video4.mp4'),
    ];
  
    const [selectedVideo, setSelectedVideo] = useState();
  
    useEffect(() => {
    const  arr =[]
      // Randomly select a video source on page load
      const randomIndex = Math.floor(Math.random() * videoSources.length);
      setSelectedVideo(videoSources[randomIndex]);
      localStorage["video"]=videoSources[randomIndex]
    }, []);
console.log(selectedVideo)


//mail
useEffect(() => {
  if(show ==true){
    
    if(!email){toast.error("Please Enter mail")}
    else if(!firstname){toast.error("Please Enter Name")}
    else if(!message){toast.error("Please Enter message")}
    else{
      toast.success('Thanks for visiting our site')

      const delayMilliseconds = 3000; // Adjust the delay as needed

      
//         // Navigate to the home page
      

//       //   const fullMessage = `Name: ${firstname}\nEmail: ${email}\nMessage:${message}\n Phonenumber: ${phone}\n`;

      // const mailtoLink = `mailto:karthikfoul66@gmail.com?subject=${encodeURIComponent("Thanks for visiting our site"
    
      //   )}&body=${encodeURIComponent(fullMessage)}`;
    
//       // window.location.href = mailtoLink;


      const data = {
        Email: email,
        name: firstname,
        Phonenumber:phone,
        massgae:message,
        // type: 'Standard',
      }
      const service_id = "service_wwo78fd";
      const template_id = "template_suctq7k";
      const user_id = "uyglwKo2T8RHaK1jx";
      emailjs.send(
        service_id,
        template_id,
        data,
        user_id
      )
        .then(
          (result) => {
            // console.log(result.text);
            // alert(result,"send")
            toast.success('Email sent successfully')

            setTimeout(() => {
            setEmail('')
            setFirstname('')
            setmessage('')
            setphone('')
             window.location.reload()

            }, delayMilliseconds);
          },
          (error) => {
             console.log(error.text);
          }
        );
      
    }


setShow(false)



}
},[show]);
 console.log(localStorage.video,"iiiiiiiiiiiii")

  return (
    <div id="contact" className="container m-auto mt-16">
      {/* heading */}
      <div 
      // data-aos="fade-up"
       className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Contact
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* card*/}
    
      <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
        <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          {/* <div className="flex-3 w-1/2 gap-3 flex items-end justify-end  flex-col sm:w-3/4"> */}
            {/* <div 
            data-aos="zoom-in"
            >
              <h1 className="text-5xl font-bold sm:text-3xl">You Need</h1>
              <h3 className="text-xl sm:text-lg">
                Beautiful design for your website leave a request
              </h3>
            </div>
          </div>
          <div className=" flex p-5 items-center justify-center ">
            <button
              
              data-aos="zoom-in"
              
              className= " text-yellow-500 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] "
            >
              <BsArrowRight className=" md:rotate-90" />
            </button> */}
            { localStorage.video ?
            <div>
           <video playsInline autoPlay className="backvideo" loop muted>

<source data-hero-bg-video-target="videoSource" type="video/mp4" src={localStorage.video} />
</video>
            </div>

            : 
            <div>
             <video playsInline autoPlay className="backvideo" loop muted>

<source data-hero-bg-video-target="videoSource" type="video/mp4" src={videoSources[0]} />
</video>
           </div>
            
            
        }

<div className="test" id="demo">

          </div>
        </div>


{/* new */}


        <div className="right flex-1">
          {/* <form */}
            <div
            data-aos="zoom-in"
            
            className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
            //  action="mailto:karthikfoul66@gmail.com"
            //  action="mailto:karthikfoul66@gmail.com"
          >
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="email"
              placeholder="Your Mail id"
              name=""
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="text"
              placeholder="Your name"
              name=""
              onChange={(e) => setFirstname(e.target.value)}
            />
             <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="text"
              placeholder="Phone number"
              name=""
              onChange={(e) => setphone(e.target.value)}
            />
            <textarea
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              rows="4"
              cols="50"
              placeholder="Write your message"
              name=""
              id=""
              onChange={(e) => setmessage(e.target.value)}
            />
            <button
              className="bg-yellow-500 w-full text-white font-semibold  p-2 rounded-lg flex items-center justify-center space-x-1"
              type="submit"
              onClick={()=>{
                // alert("hi")
                setShow(true)}}
            >
              <span>Send</span>
              {/* <RiSendPlaneFill/> */}
            </button>
            </div>
          {/* </form> */}
        </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default Contact;

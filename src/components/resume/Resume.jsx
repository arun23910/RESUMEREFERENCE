import React, { useState, useEffect } from "react";





const About = () => {
  const [viewmore, setviewmore] = useState(false);

  
  return (
    <div id="About" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          About
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                Sr.Software Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Religh Technologies,Bangalore
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  June 2023 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                Project Description:
I had the privilege of being part of an elite development team responsible for creating a cutting-edge luxury car rental eCommerce website. This project aimed to provide an exceptional online platform for customers to browse, select, and reserve high-end luxury vehicles for various occasions. My role was pivotal in translating design concepts and business requirements into a fully functional and visually appealing website.

Key Achievements and Responsibilities:
Front-End Development:
Led the front-end development efforts, collaborating closely with UI/UX designers to implement a user-friendly and visually stunning interface.
Utilized modern web technologies, including HTML, CSS, and JavaScript, to create responsive and dynamic web pages, ensuring seamless user experiences across devices.
React.js Integration:
Integrated React.js to build interactive user interfaces and facilitate a smoother browsing and booking experience for customers.
Utilized component-based architecture to create reusable UI elements, streamlining development and maintenance.
Back-End Development:
Developed the server-side logic using Node.js and Express.js, enabling robust and efficient handling of user requests, data storage, and security features.
Implemented RESTful API endpoints for communication between the front-end and back-end systems, ensuring data integrity and reliability.
Database Management:
Designed and managed the database using SQL, optimizing data storage for fast retrieval and scalability.
Implemented user authentication and authorization systems to protect sensitive user data and transactions.
                </p>
              </div>
              
            </div>
{/* //new  */}<div>&nbsp;</div>
            <div className=" relative gap-1.5	">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px]  ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                Python Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                KGIT Services, Bangalore
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                Apr 2020 - June 2023
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                Created script for extracting the data from unstructured document such as pdf and converting them to csv or excel with Regular expressions and pandas in python.Created API using Django.Experience in writing CSS Selectors and XPATH expressions to identify web elements.Developed Automation for browser for scrapping the data from a website store that in Database.Worked in developing the screens for delete, Edit, Enable, Disable and Impersonate Users in web application with Django  Managed code versioning with Github and deployment to staging and production servers  Worked in various python IDE’s Such as Pycharm,Vscode,jupyter  Generating JSON data and storing it in NOSQL database (MongoDB).  Experience in using version control system (GIT) and Jira Tool.
                </p>
              </div>
              
            </div>
          <button onClick={()=>{

setviewmore(true)

          }}>Viwe more</button>

{
            viewmore ?
              <div>
            <div>&nbsp;</div>
            <div className=" relative gap-1.5	">
             
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px]  ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
            
              
              
            </div>


              </div>
              : 
              <div>
              
             </div>
              
              
          }

        
          
            
          </fieldset>
          
        </div>
        






        <div className="right mb-500px flex-1 flex  justify-center">
          <fieldset
            data-aos="zoom-in"
            className="  w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  B.Tech, Computer Science
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Pondicherry Engineering  College 
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2012 - Year 2016
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                As a graduate student, I have developed a diverse and valuable skill set. I possess proficiency in various web development technologies, including HTML, CSS, JavaScript, and React JS, which enables me to excel on the front-end of web development. Additionally, I have strong backend skills, encompassing Python, Flask, Django, Node.js, API development, and MongoDB. My experience extends to database management using MySQL, making me well-versed in the complete web development stack. Furthermore, my problem-solving abilities, rooted in a solid understanding of data structures and algorithms, demonstrate a robust foundation in computer science fundamentals. This combination of skills positions me as a versatile developer capable of tackling a wide range of web development projects, both on the client-side and server-side.   </p>
              </div>
            </div>
{/* new */}
            <div>&nbsp;</div>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
               
                <p className=" text-[.9rem] text-justify text-gray-500">
                In the tech industry, this skill set is highly sought after, and I am well-prepared to take on various web development challenges. I envision creating full-stack web applications, exploring advanced React patterns and technologies, experimenting with different database systems, and actively contributing to open-source projects to continually enhance my expertise and gain hands-on experience.
                </p>
              </div>
            </div>
          </fieldset>
        </div>


        
      </div>
    </div>
  );
};

export default About;

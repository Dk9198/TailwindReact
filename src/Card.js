import React from 'react';

function Card({subname, imgsrc,staff,times})
{
    return(
        /*outline*/                /*Card*/
        <div className="flex items-center justify-center min-h-screen container mx-auto ">

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
               
                    <div className="card rounded-xl shadow-lg bg-slate-200">
                        
                        <div className="p-1 flex flex-col">
                           
                            <div className="rounded-xl overflow-hidden bg-slate-500 ">
                                
                            </div>

                            <h5 className="text-2xl md:text-3xl font-medium mt-3  ">
                                Astronomy
                            </h5>
                        
                           
                            <img  src={imgsrc} className="rounded-xl h-96" alt=""/>
                            
                            <p className="font-serif text-lg mt-3 bg-teal-600 text-amber-300 rounded-lg">
                                {subname} 
                            </p>

                           
                    <div className="grid grid-cols-1 md:grid-cols-2" >
                        
                            <div className=" grid grid-cols-8 md:grid-cols-6">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-1 my-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                
                            <div className = "text-sm   col-span-7   md:col-span-5  text-left  mx-1 my-2.5 ">
                                {staff}
                            </div>
                            </div>

                            <div className="grid grid-cols-8 md:grid-cols-6">
                           
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-1 my-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                           
                           <div className = "text-sm col-span-7 md:col-span-5 text-left mx-1 my-2.5" >
                               {times}
                            </div>
                        
                            </div>
                
                    </div>
                               
                           <a href="#" className="text-center bg-teal-600 text-amber-300 py-2 rounded-lg mt-4  hover:text-amber-200 hover:bg-slate-700  focus:scale-95 transtion-all duration-200 ease-out ">Explore</a>
                       
                        </div>   
                    </div>
                </div>
        </div>
    );}
export default Card ;


/*
.prj_txt {
  text-align: center;
  font-family: "Luckiest Guy", cursive;
  font-size: 11vw;
  object-fit: cover;
  justify-content: center;
  background-image: url(gif.gif);
  background-size: 50vw;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
*/
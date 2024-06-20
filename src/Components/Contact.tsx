import { FaRegEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
  <div id="contact" className="absolute py-12 bg-gray11 lg:left-[25%] md:left-[10%] left-[10%] right-[15%] lg:h-screen md:h-[60%] h-[85%] lg:mt-[360%] md:mt-[775%] mt-[2080%] "> 
                <div className="flex relative flex-col justify-center items-center text-white">
                    <div className="absolute top-[10%] lg:left-[15%] md:left-[5%] left-[5%]">
                        <h3 className="flex text-center gap-2 border border-gray10 rounded-2xl px-5 py-2 text-xs w-[140px] "><FaRegEnvelope className="text-sm"/>CONTACT</h3> 
                        <h1 className="lg:text-5xl md:text-4xl text-2xl lg:leading-[5rem] md:leading-[5rem] mt-8">Let&apos;s Work  <span className="text-buttongreen">Together!</span></h1>
                    </div>
                </div>

                <div className=" lg:mt-[20%] md:mt-[20%] mt-[40%] gap-5 text-white ml-5 justify-center items-center flex">
                        <form action="">
                        <div className="m-5">
                            <div className="mb-4 flex">
                                <label htmlFor="firstname" className="mr-8 text-xl">Firstname:</label>
                                <input type="text" className="bg-transparent " placeholder="First name" />
                            </div>
                            <div className="mb-4 flex">
                                <label htmlFor="email" className="mr-[75px] text-xl">Email:</label>
                                <input type="email" className="bg-transparent " placeholder="email@gamil.com" />
                            </div>
                            <div className="mb-4 flex">
                                <label htmlFor="contact" className="mr-[52px] text-xl">Contact:</label>
                                <input type="text" className="bg-transparent " placeholder="contact" />
                            </div>
                            <div className="mb-4 flex flex-col gap-5">
                                <label htmlFor="message" className="pr-3 text-xl">Message:</label>
                                <textarea name="meassgae" id="message" rows={10} cols={20} className="bg-transparent border border-gray12"></textarea>
                            </div>

                            <div>
                                <button className="py-3 px-8 rounded-3xl font-semibold bg-buttongreen text-gray11">Submit</button>
                            </div>
                        </div>

                    </form>
                    

                    
                </div>

      
    </div>
  );
}

export default Contact;

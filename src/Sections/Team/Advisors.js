import React from "react";
import advisorsJson from "./advisors.json";
import linkedin_logo from "../../assets/Team/linkedin.svg";
import "./team.css";


const Team = () => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 1080);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1080);
        };

        window.addEventListener("resize", handleResize);
    }, []);

    return (
        <div className="container flex-col items-center justify-center">
            <div className="heading relative w-fit">
                <p className="text-[50px] font-bold text-white text-center">Meet Our Advisors</p>
            </div>
            {isMobile ? (
                <div className="carousel carousel-center w-[100%] p-4 space-x-4  rounded-box">
                    {advisorsJson.map((member) => (
                    <div className="carousel-item w-full justify-center">
                        <div className="card rounded-[8px] relative w-[100%] overflow-hidden">
                            <img
                                src={`${process.env.PUBLIC_URL}/${member.img}`}
                                className="relative top-0 right-0 z-0 rounded-[8px]"
                            />
                            <div className="card_background w-full h-[500px] absolute bottom-[-30%] right-0 z-[1]"></div>
                            <div className="card_content absolute bottom-[0%] left-0 w-full h-full p-3 z-[1] flex flex-col gap-3 justify-end ">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[30px] font-bold text-white leading-none ">
                                        {member.name}
                                    </p>
                                    <p className="text-[23px] font-medium text-white ">
                                        {member.position}
                                    </p>
                                </div>
                                <a href={member.linkedin} className="ml-auto ">
                                    <img src={linkedin_logo} />
                                </a>
                            </div>
                        </div>
                    </div>
                    ))}
                    
                </div>
            ) : (
                <div className="flex flex-wrap justify-center gap-10">
                    {advisorsJson.map((member) => (
                        <div className="card focus:outline-none rounded-[8px] relative w-[330px] overflow-hidden">
                            <img
                                src={`${process.env.PUBLIC_URL}/${member.img}`}
                                className="relative top-0 right-0 z-0 rounded-[8px]"
                            />
                            <div className="card_background rounded-[8px] w-full h-[500px] absolute bottom-[-60%] right-0 z-[1]"></div>
                            <div className="card_content rounded-[8px] absolute bottom-[-35%] left-0 w-full h-full p-3 z-[1] flex flex-col gap-3 justify-end ">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[28px] font-bold text-white leading-none whitespace-nowrap">
                                        {member.name}
                                    </p>
                                </div>
                                <p className="text-[16px] font-medium text-white" dangerouslySetInnerHTML={{ __html: member.desc }}>
                                
                                </p>
                                <a href={member.linkedin} className="ml-auto ">
                                    <img src={linkedin_logo} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Team;

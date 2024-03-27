import React from "react";
import Marquee from "react-fast-marquee";
import "./partners.css";
import logo1 from "../../assets/logos/1.png";
import logo2 from "../../assets/logos/2.png";
import logo3 from "../../assets/logos/3.png";
import logo4 from "../../assets/logos/4.png";
import logo5 from "../../assets/logos/5.png";
import logo6 from "../../assets/logos/6.png";
import logo7 from "../../assets/logos/7.png";
import logo8 from "../../assets/logos/8.png";
import logo9 from "../../assets/logos/9.png";
import logo10 from "../../assets/logos/10.png";
import logo11 from "../../assets/logos/11.png";
import logo12 from "../../assets/logos/12.png";
import logo13 from "../../assets/logos/13.png";
import logo14 from "../../assets/logos/14.png";
import logo15 from "../../assets/logos/15.png";
import logo16 from "../../assets/logos/16.png";
import logo17 from "../../assets/logos/17.png";
import logo18 from "../../assets/logos/18.png";
import logo19 from "../../assets/logos/19.png";
import logo20 from "../../assets/logos/20.png";
import logo21 from "../../assets/logos/21.png";
import logo22 from "../../assets/logos/22.png";
import logo23 from "../../assets/logos/23.png";
import logo24 from "../../assets/logos/24.png";
import logo25 from "../../assets/logos/25.png";
import logo26 from "../../assets/logos/26.png";
import logo27 from "../../assets/logos/27.png";
import logo28 from "../../assets/logos/28.png";
import logo29 from "../../assets/logos/29.png";
import logo30 from "../../assets/logos/30.png";

function App() {
  const logos = [
    logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9,logo10,logo11,logo12,logo13,logo14,logo15,logo16,logo17,logo18,logo19,logo20,logo21,logo22,logo23,logo24,logo25,logo26,logo27,logo28,logo29,logo30
  ];

  return (
    <div className="container slider-container">
      <div className="flex justify-center items-center flex-col w-full overflow-hidden gap-[20px]">
        <p className="font-sans font-bold text-[50px] text-white">
          They Trust Us
        </p>
        <Marquee
          direction="right"
          speed={100}
          pauseOnHover
          style={{
            width:"100%",
            userSelect: "none",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0))",
            maskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0))",
          }}
        >
          {logos.map((el) => (
            <div className="image_wrapper">
              <img src={el} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default App;

/*const Marquee = styled.div`
  display: flex;
  width: 1450px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;


const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
   border: 1px solid black; 
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
*/

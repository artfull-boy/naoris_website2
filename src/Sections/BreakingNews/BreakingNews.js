import React from "react";
import Marquee from "react-fast-marquee";

const NewsTicker = ({ news }) => {
  return (
    <div className="bg-[#f00] text-white py-[10px] absolute left-0 bottom-0">
      <Marquee gradient={false} speed={150}>
        {news.map((item, index) => (
          <span key={index} style={{ marginRight: "50px" }}>
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default NewsTicker;

import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Player } from "@lottiefiles/react-lottie-player";
import useCases from '../CaseStudies/cases.json'
import './usecase.css'

const UseCase = () => {
    const {id} = useParams()
    const usecase_elem = useCases.find(item => item.id == id)
  return (
    <div className="media overflow-hidden flex flex-col justify-start w-full relative items-center gap-8 container z-[2] pb-96 vsm:pb-60 h-fit pt-24">
      <img
        src={`${process.env.PUBLIC_URL}/assets/bg_use.png`}
        className="absolute top-[-68px] left-0 z-[2]  w-full h-full cards:hidden block"
      ></img>
      <img
        src={`${process.env.PUBLIC_URL}/assets/bg_useM.png`}
        className="absolute top-[-68px] left-0 z-[2]  w-full h-full cards:block hidden"
      ></img>
      
      <div className="flex w-full justify-between items-center z-[2]">
        <div className="flex gap-2 items-center">
            <Link className='vsm:w-[60px]' to={'/case_studies'}><img src={`${process.env.PUBLIC_URL}/assets/Line.png`} className='vsm:w-[60px]'></img></Link>
          <p className="text-white uppercase vsm:text-[25px] font-bold text-[40px] pl-[37px] leading-normal tracking-[16px] vsm:tracking-wider">
            {usecase_elem.title}
          </p>
        </div>
        <div className="animation vsm:hidden">
          <Player
            autoplay
            loop
            src="https://lottie.host/ca2dc6b8-3201-409a-acfc-523011f9dd42/bd12pEceex.json"
            className="size-[300px] vsm:size-[200px]"
          ></Player>
        </div>
      </div>
      <div className='flex flex-col z-[2] gap-[120px]'>
        {usecase_elem.title == "IntelliChain Inventory System" && 
        <div className='flex flex-col gap-[46px]'>
            <p className='solution text-white uppercase font-bold text-[34px] vsm:text-[30px] leading-[40px]'>IDENTIFY AND COMBAT STATIC STOCKS WITHIN A FACTORY:</p>
            <p className='pl-[25px] text-[25px] vsm:text-[18px] text-white '>IoT sensors and cameras supported by AI can be used to identify static stocks over a certain period of time within a factory. The goal of such an initiative is to address static inventory.</p>
        </div>
        
        }
        <div className='flex flex-col gap-[46px]'>
            <p className='solution text-white uppercase font-bold text-[34px] vsm:text-[30px] leading-[40px]'>Solution</p>
            <p className='pl-[25px] text-[25px] vsm:text-[18px] text-white '>{usecase_elem.solution}</p>
        </div>
        <div className='flex flex-col gap-[46px]'>
            <p className='solution text-white uppercase font-bold text-[34px] vsm:text-[30px] leading-[40px]'>Results</p>
            <p className='pl-[25px] text-[25px] text-white vsm:text-[18px] '>{usecase_elem.results}</p>
        </div>
      </div>
      <div className="absolute bottom-[-90px] left-[-20px] w-full last_hope"></div>
    </div>
  )
}

export default UseCase
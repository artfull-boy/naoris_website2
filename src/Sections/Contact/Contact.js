import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { motion } from "framer-motion";
import {
  headingVariants,
} from "../../animations";
import "./contact.css";
import map from '../../assets/map.png'
import { POST } from '../../app/api/send/route';


const Contact = () => {
  const fadeRight = {
    hidden: { opacity: 0, x: 500 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };
  const fadeLeft = {
    hidden: { opacity: 0, x: -500 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm();
  const onSubmiting = async (data) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSuccess(true);
    setLoading(false);
    setTimeout(() => {
      setIsSuccess(false);
    }, 1000);
    reset();
  };
  return (
    <div className="container flex justify-between">
      <div className="flex justify-center items-center flex-col w-full overflow-hidden gap-[50px]">
        <motion.div
          className="heading relative w-fit"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
        >
          <p className="text-[50px] font-bold text-white text-center vsm:text-[35px]">
            Contact Us
          </p>
        </motion.div>
        <div className="flex justify-between items-center medium:flex-col medium:gap-8">
          <motion.form 
          onSubmit={handleSubmit(onSubmiting)}
          variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{once:true}} 
          className="flex flex-wrap gap-[35px] w-[48%] justify-start medium:w-[100%] medium:order-6"
          >
            <div className="flex flex-col gap-[5px] md:w-[45%] w-[100%]">
              <label
                className="text-white font-semibold leading-[18px] text-[16px]"
                htmlFor="first_name"
              >
                Full Name{" "}
                <span className="text-red-600 text-[16px] font-semibold leading-[18px] ">
                  *
                </span>
              </label>
              <input
                className="p-[10px] bg-white rounded-[10px] w-full h-[50px]  transition-outline duration-300 outline-none text-black"
                {...register("first_name", {
                  required: "Full Name is Required",
                })}
                type="text"
                id="first_name"
                onClick={(e) =>
                    e.currentTarget.classList.add("outline-[#336AEA]")
                  }
                  onBlur={(e) =>
                    e.currentTarget.classList.remove("outline-[#336AEA]")
                  }
              ></input>
              {errors.first_name && (
                <p className="text-red-500">{errors.first_name.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-[5px] md:w-[45%] w-[100%]">
              <label
                className="text-[#fff] font-semibold leading-[18px] text-[16px]"
                htmlFor="email"
              >
                Email{" "}
                <span className="text-red-600 text-[16px] font-semibold leading-[18px] ">
                  *
                </span>
              </label>
              <input
                className="bg-white p-[10px] rounded-[6px] w-full h-[50px]  transition-outline duration-300 outline-none text-black"
                {...register("email", {
                  required: "Email is Required",
                })}
                type="email"
                id="email"
                onClick={(e) =>
                  e.currentTarget.classList.add("outline-[#336AEA]")
                }
                onBlur={(e) =>
                  e.currentTarget.classList.remove("outline-[#336AEA]")
                }
              ></input>
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-[5px] md:w-[45%] w-[100%]">
              <label
                className="text-[#fff] font-semibold leading-[18px] text-[16px]"
                htmlFor="phone"
              >
                Phone number{" "}
              </label>
              <input
                className="bg-white p-[10px] rounded-[6px] w-full h-[50px]  transition-outline duration-300 outline-none text-black"
                {...register("phone")}
                type="number"
                id="phone"
                onClick={(e) =>
                  e.currentTarget.classList.add("outline-[#336AEA]")
                }
                onBlur={(e) =>
                  e.currentTarget.classList.remove("outline-[#336AEA]")
                }
              ></input>
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-[5px] md:w-[45%] w-[100%]">
              <label
                className="text-white font-semibold leading-[18px] text-[16px]"
                htmlFor="subject"
              >
                Subject{" "}
                <span className="text-red-600 text-[16px] font-semibold leading-[18px] ">
                  *
                </span>
              </label>
              <input
                className="p-[10px] bg-white rounded-[10px] w-full h-[50px]  transition-outline duration-300 outline-none text-black"
                {...register("subject", {required: "Subject is Required"})}
                type="text"
                id="subject"
                onClick={(e) =>
                    e.currentTarget.classList.add("outline-[#336AEA]")
                  }
                  onBlur={(e) =>
                    e.currentTarget.classList.remove("outline-[#336AEA]")
                  }
              ></input>
              {errors.subject && (
                <p className="text-red-500">{errors.subject.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-[5px] md:w-[calc(90%+30px)] w-[100%]">
              <label
                className="text-[#fff] font-semibold  leading-[18px] text-[16px]"
                htmlFor="msg"
              >
                Message
                <span className="text-red-600 text-[16px] font-semibold leading-[18px] ">
                  *
                </span>
              </label>
              <textarea
                rows="4" // Set the number of visible lines
                className="bg-white text-black p-[10px] rounded-[6px] w-full   transition-outline duration-300 outline-none"
                {...register("msg", { required: "Message is Required" })}
                type="text"
                id="msg"
                onClick={(e) =>
                  e.currentTarget.classList.add("outline-[#336AEA]")
                }
                onBlur={(e) =>
                  e.currentTarget.classList.remove("outline-[#336AEA]")
                }
              ></textarea>
              {errors.msg && (
                <p className="text-red-500">{errors.msg.message}</p>
              )}
            </div>
            <button
              className={`m-auto botona text-white py-[10px] font-semibold hover:bg-[#3661c8] transition-colors duration-300 h-[50px] ${
                isSuccess ? "bg-green-600" : "bg-[#336AEA]"
              }`}
              type="submit"
              disabled={isSubmitting || isSuccess}
            >
              {loading
                ? "Loading..."
                : isSuccess
                ? "Successfully Sent"
                : "Send Message"}
            </button>
          </motion.form>
          <motion.div className="seperator 2xl:h-[500px] lg:h-[600px] medium:hidden ml-[40px]"></motion.div>
          <motion.img variants={fadeRight} initial="hidden" whileInView="visible" viewport={{once:true}} src={map} className="w-[48%] ml-auto medium:w-[100%] medium:ml-0 medium:order-0">
            
          </motion.img>
        </div>
      </div>
    </div>
  );
};

export default Contact;

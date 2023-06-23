'use client';
import {motion} from "framer-motion";
import { TypingText } from '../components'
import styles from "../styles";
import {fadeIn,staggerContainer} from "../utils/motion";
const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0 "></div>
    <motion.div 
    variants={staggerContainer}
    initial='hidden'
    whileInView="show"
    viewport={{once:false,amount:0.25}}
    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
      <TypingText title="| About Spiderverse" textStyles="text-center"/>
      <motion.p
      variants={fadeIn('up','tween', 0.2,1)}
      className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white ">
      <span className="font-extrabold text-white">Marvel Universe</span> is a concept that explores the existence of multiple versions of Spider-Man across different dimensions. It introduces the idea that various iterations of the beloved web-slinger, from different universes, can coexist and interact. This concept gained significant popularity with the release of the film <span className="font-extrabold text-white">Spider-Man: Into the Spider-Verse</span> in 2018.In the multiverse, each Spider-Man possesses unique abilities, costumes, and backgrounds, reflecting the diverse nature of the Spider-Man legacy. From the classic Peter Parker to alternative versions like Miles Morales, Gwen Stacy, and Spider-Man Noir, each character brings their own distinct qualities and storytelling possibilities.
      </motion.p>

      <motion.img
      variants={fadeIn('up','tween',0.3,1)}
      src='/arrow-down.svg'
      alt="arrow"
      className="w-[18px] h-[28px] object-contain mt-[28px]"/>
    </motion.div>
  </section>
);

export default About;

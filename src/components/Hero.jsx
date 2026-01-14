// import { motion } from 'framer-motion';

// import { styles } from '../styles';
// import { ComputersCanvas } from './canvas';


// const Hero = () => {
//   return (
//     <section className='relative w-full h-screen mx-auto'>
//       <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#3867ff]' />
//           <div className='w-1 sm:h-80 h-40 blue-gradient' />
//         </div>
//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm 
//             <span className='text-[#3867ff]'> Jude</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             I develop Mobile/Web applications, and design creative graphics<br className='sm:block hidden' /> and user interfaces designs.
//           </p>
//         </div>
//       </div>

//       <ComputersCanvas />

//       <div className='absolute xm:bottom-10 bottom-32 w-full flex justify-center items-center'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0]
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: 'loop'
//               }}
//               className= 'w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   )
// }

// export default Hero


import { motion } from 'framer-motion';
import TypeWriterEffect from 'react-typewriter-effect';
import { Typewriter } from 'react-simple-typewriter';


import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#3867ff]' />
          <div className='w-1 sm:h-80 h-40 blue-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#3867ff]'>Jude</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <Typewriter
              words={[
                'I develop Mobile/Web applications, design creative graphics,',
              ]}
              cursor={false}
              typeSpeed={50}
              delaySpeed={100}
            />
          </p>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <Typewriter
              words={[
                'and create user interfaces.',
              ]}
              cursor
              cursorColor="#3867ff"
              typeSpeed={50}
              delaySpeed={8000}
            />
          </p>

          {/* <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <TypeWriterEffect
              textStyle={{
                fontSize: '1.5rem',
                color: '#ffffff',
                fontFamily: 'inherit',
              }}
              startDelay={100}
              cursorColor="#3867ff"
              multiText={[
                'I develop Mobile/Web applications, design creative graphics,',
              ]}
              typeSpeed={50}
              hideCursorAfterText={true}
            />
          </p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <TypeWriterEffect
              textStyle={{
                fontSize: '1.5rem',
                color: '#ffffff',
                fontFamily: 'inherit',
                whiteSpace: 'pre-line',
              }}
              startDelay={8000}
              cursorColor="#3867ff"
              multiText={[
                'and create user interfaces.',
              ]}
              multiTextDelay={1500}
              typeSpeed={50}
              hideCursorAfterText={true}
            />
          </p> */}
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xm:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

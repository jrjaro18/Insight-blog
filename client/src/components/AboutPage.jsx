import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useMotionValueEvent, useTransform } from 'framer-motion'
import { Parallax } from 'react-parallax'

import './CSS/AboutPage.css'
const AboutPage = () => {
  const headingCSS = {
    textDecoration: "unset",
    color: "whitesmoke",
    fontSize: "2vw",
  }
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    //console.log(latest);
    console.log(scrollYProgress.current);
  })

  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale1 = useTransform(scrollYProgress, [0.1, 0.16], [0.9, 1]);
  const opacity1 = useTransform(scrollYProgress, [0.1, 0.16], [0, 1]);

  const scalec1 = useTransform(scrollYProgress, [0.3, 0.38], [1, 0.75]);
  const opacityc1 = useTransform(scrollYProgress, [0.3, 0.38], [1, 0]);

  const scalec2 = useTransform(scrollYProgress, [0.39, 0.46], [1, 0.75]);
  const opacityc2 = useTransform(scrollYProgress, [0.39, 0.46], [1, 0]);

  const scalec3 = useTransform(scrollYProgress, [0.50, 0.57], [1, 0.75]);
  const opacityc3 = useTransform(scrollYProgress, [0.50, 0.57], [1, 0]);

  const scalec4 = useTransform(scrollYProgress, [0.60, 0.69], [1, 0.75]);
  const opacityc4 = useTransform(scrollYProgress, [0.60, 0.69], [1, 0]);

  const scalec5 = useTransform(scrollYProgress, [0.70, 0.77], [1, 0.75]);
  const opacityc5 = useTransform(scrollYProgress, [0.70, 0.79], [1, 0]);

  const scalec6 = useTransform(scrollYProgress, [0.82, 0.90], [1, 0.75]);
  const opacityc6 = useTransform(scrollYProgress, [0.82, 0.90], [1, 0]);

  return (
    <React.Fragment>

      <motion.div className="aboutcontainer" animate={{ opacity: [0, 1] }} transition={{ duration: 1 }}>

        <div className="aboutheading">
          <ul>
            <motion.li>
              <Link to="/about" style={headingCSS}>I N S I G H T</Link>
            </motion.li>
            <motion.li>
              <Link to="/" style={headingCSS}>HOME</Link>
            </motion.li>
          </ul>
        </div>

        <Parallax bgImage={require('../images/laptop1.jpg')} blur={2}>
          <motion.div className="aboutcontent" animate={{ opacity: [0, 1] }}  transition={{ duration: 3 }} style={{ height: "80vh", width: "97vw", scale, opacity }}>
            <motion.div whileInView={{ y: [-4, 4, -4] }} transition={{ duration: 3, repeat: 'infinty' }}>
              <div className='aboutcontentleft'>
                I N S I G H T
              </div>
              <div className='aboutcontentleft'>
                A Simple Way To See The World
              </div>
            </motion.div>
          </motion.div>
          <motion.div className="aboutcontent" animate={{ x: [-400, 0] }} transition={{ duration: 7 }} style={{ height: "95vh", width: "97vw" }}>
            <motion.div whileInView={{ y: [-4, 4, -4] }} style={{ opacity: opacity1, scale: scale1 }} transition={{ duration: 3, repeat: 'infinty', damping: 'spring' }}>
              <div className='aboutcontentleft'>
                Why Insight?
              </div>
              <div className="aboutcontent">
                INSIGHT empowers individuals through insightful content. We provide a space for sharing, discussing, and celebrating ideas. Our goal is to inspire and inform readers, fostering a community of curious minds seeking to learn, grow, and make a positive impact.
              </div>
            </motion.div>
          </motion.div>
        </Parallax>

        <motion.img src="https://th.bing.com/th/id/OIG.IVkMlIvntzqQaQXjrgxR?pid=ImgGn" style={{ height: "100vh", width: "97vw", position: "sticky", zIndex: "9", top: "3vh" }} whileInView={{ opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 5, repeat:10000}} />
        
        <motion.div className='aboutcontent2' style={{ position: 'absolute', color: 'white', marginBottom: '2vh', zIndex: "8",top:'225vh'}} >
          
          <motion.div className='aboutcontent2text' style={{opacity:opacityc1,scale:scalec1}}>
            <motion.div whileInView={{ y: [-4, 4, -4] }} transition={{ duration: 3, repeat: 'infinty', damping: 'spring' }}>
              <div className='aboutcontentleft'>Stories that ignite inspiration and motivation.</div><br />
            </motion.div>
          </motion.div>

          <motion.div className='aboutcontent2text' style={{opacity:opacityc2,scale:scalec2}}>
            <motion.div whileInView={{ y: [-4, 4, -4] }} transition={{ duration: 3, repeat: 'infinty', damping: 'spring' }}>
              <div className='aboutcontentleft'>Articles that challenge and stimulate your thinking.</div><br />
            </motion.div>
          </motion.div>
          <motion.div className='aboutcontent2text' style={{opacity:opacityc3,scale:scalec3}}>
            <motion.div whileInView={{ y: [-4, 4, -4] }} transition={{ duration: 3, repeat: 'infinty', damping: 'spring' }}>
              <div className='aboutcontentleft'>Insights from industry-leading experts and thought leaders.</div><br />
            </motion.div>
          </motion.div>

          <motion.div className='aboutcontent2text'style={{opacity:opacityc4,scale:scalec4}}>
            <motion.div whileInView={{ y: [-4, 4, -4] }} transition={{ duration: 3, repeat: 'infinty', damping: 'spring' }}>
              <div className='aboutcontentleft'> Practical guides for acquiring new skills and knowledge.</div><br />
            </motion.div>
          </motion.div>

          <motion.div className='aboutcontent2text' style={{opacity:opacityc5,scale:scalec5}}>
            <motion.div whileInView={{ y: [-4, 4, -4] }} transition={{ duration: 3, repeat: 'infinty', damping: 'spring' }}>
              <div className='aboutcontentleft'>Curated resources for further exploration and learning.
              </div><br />
            </motion.div>
          </motion.div>

          <motion.div className='aboutcontent2text' style={{opacity:opacityc6,scale:scalec6}}>
            <motion.div whileInView={{ y: [-4, 4, -4] }} transition={{ duration: 3, repeat: 'infinty', damping: 'spring' }}>
              <div className='aboutcontentleft'>Uplifting quotes to inspire and uplift your spirits.</div><br />
            </motion.div>
          </motion.div>
          <motion.div className="aboutcontentleft" whileInView={{ y: [-4, 4, -4] }} transition={{ duration: 3, repeat: 'infinty', damping: 'spring' }} style={{paddingTop:"30vh", textAlign:"center"}} >
           Join I N S I G H T and be the part of Revolution!
          </motion.div>
        </motion.div>
        
      </motion.div>
    </React.Fragment>
  )
}

export default AboutPage
import CodesList from "../components/CodesList";
import HeroSearchSection from "../components/HeroSearchSection";
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <motion.div animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:0.5}}>
      <HeroSearchSection/>
      <CodesList/>
    </motion.div>
  )
}

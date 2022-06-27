import { motion } from 'framer-motion'
import { CgSpinnerTwoAlt } from 'react-icons/cg'

const Spinner = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <motion.div
        className='m-auto h-fit w-fit'
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        animate={{ rotate: 360 }}
      >
        <CgSpinnerTwoAlt className='m-auto text-5xl text-secondary' />
      </motion.div>
    </div>
  )
}

export default Spinner

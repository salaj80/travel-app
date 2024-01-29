import React from 'react'
import snt from '../assets/snt1.jpg'
import zkn from '../assets/zkn1.jpg'
import lfk from '../assets/lfk1.jpg'
import mkn from '../assets/mkn1.jpg'
import rds from '../assets/rds1.jpg'
import crf from '../assets/crf1.jpg'
import SelectsCard from './SelectsCard'

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      
    <SelectsCard bg={snt} text='Santorini'/>
    <SelectsCard bg={zkn} text='Zakynthos'/>
    <SelectsCard bg={lfk} text='Lefkada'/>
    <SelectsCard bg={mkn} text='Mykonos'/>
    <SelectsCard bg={rds} text='Rhodos'/>
    <SelectsCard bg={crf} text='Corfu'/>

    </div>
  )
}

export default Selects

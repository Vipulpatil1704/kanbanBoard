import React from 'react'
import './Card.css'
import NoPriority from '../assets/NoPriority'
import UrgentPriority from '../assets/UrgentPriority'
import HighPriority from '../assets/HighPriority'
import MediumPriority from '../assets/MediumPriority'
import LowPriority from '../assets/LowPriority'
import LowPriorityGrey from '../assets/UrgentPriorityGrey'
import UrgentPriorityGrey from '../assets/UrgentPriorityGrey'
import Todo from '../assets/Todo'
import InProgress from '../assets/InProgress'
import Backlog from '../assets/Backlog'
export default function Card({id,title,tag,userId,status,priority,userAvatar,availability}) {
  return (
    <div className='card'>
        <div className='card-first-row'>
            <div>{id}</div>
            {localStorage.getItem('group')==='user'?null:<span className='avatar-container'><img className='avatar' src={userAvatar}/><div className={`availability ${availability===true ? 'available' :'not-available'}`}></div></span>}     
        </div>
        <div className='card-title'>
          {localStorage.getItem('group')==='status' ? null : status==='Todo' ? <Todo/> : status==='In progress' ? <InProgress/> : status==='Backlog' ? <Backlog/> :null}
          <div className='title'>{title}</div>  
        </div>
        <div className='priority-div'>
          {localStorage.getItem('group')==='priority'? null :<div>{priority===0 ? <NoPriority/>: priority===1 ? <LowPriority/> : priority===2 ? <MediumPriority/>: priority===3 ? <HighPriority/>: priority===4 ? <UrgentPriorityGrey/>:null}</div>}
          <div>• {tag}</div>
        </div>
        
    </div>
  )
}

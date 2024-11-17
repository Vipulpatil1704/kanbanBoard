import React from 'react'
import './Dashboard.css'
import Card from '../Card/Card'
import { useSelector } from 'react-redux'
import Todo from '../assets/Todo';
import InProgress from '../assets/InProgress';
import Backlog from '../assets/Backlog';
import NoPriority from '../assets/NoPriority';
import LowPriority from '../assets/LowPriority'
import MediumPriority from '../assets/MediumPriority'
import HighPriority from '../assets/HighPriority'
import UrgentPriority from '../assets/UrgentPriority';
import Done from '../assets/Done';
import Cancelled from '../assets/Cancelled';
export default function Dashboard() {
    const { selectedData, loading, message } = useSelector((state) => state.selectDataReducer);
    const {allUser}=useSelector((state)=>state.dataReducer);
    // console.log(allUser);
    const group = localStorage.getItem('group');
    const order = localStorage.getItem('ordervalue');
    function randomNumber(num){
        return Math.floor(Math.random()*num);
    }
    function generateRandomBackground(){
        let hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let res="";
        for(let i=0;i<6;i++){
            res+=hex[randomNumber(hex.length)];
        }
        return res;
    }
    // console.log(generateRandomBackground());
    return (
        //Showing priority items from left to right is a good practise as user need not to turn neck from entire left to right to see first priority list.
        <div className={`dashboard-container ${group==='priority' ? 'reverseOrder' : ''}`}>
            {selectedData && selectedData.map((element, index) => {
                let ranBack=generateRandomBackground();
                {/* console.log(element[index].title); */}
                //additional part as in assets , images of users not given so I am using 3rd party api to generate Avatar for the users.
                const name = element[index].title.split(" ");
                let avatar = "";
                let userAvail=true;
                if (group === 'user') {
                        avatar = `https://ui-avatars.com/api/?name=${name[0]}+${name[1]? name[1]:''}&background=${ranBack}&color=ffffff`;
                        //it might be possible that user is not having last name so first check if it is not available then give empty string.
                        let userName=allUser.find((item)=>item.name===element[index].title);
                        userAvail=userName.available;
                        console.log(userAvail);
                }

                return <div className="dashboard">
                    <div>

                        <div className="left-view">
                            <div className="card-title">
                                {group === 'status' ? element[index].title === 'Todo' ? <Todo /> : element[index].title === 'In progress' ? <InProgress /> : element[index].title === 'Backlog' ? <Backlog /> : element[index].title==='Done' ? <Done/> : element[index].title==='Cancelled' ? <Cancelled/> :null : null}
                                

                                {group === 'priority' ? element[index].title === 'No Priority' ? <NoPriority /> : element[index].title === 'Low' ? <LowPriority /> : element[index].title === 'Medium' ? <MediumPriority /> : element[index].title === 'High' ? <HighPriority /> : element[index].title === 'Urgent' ? <UrgentPriority /> : null : null}
                                {group==='user' ? <span className='avatar-container'><img className='avatar' src={avatar}/><div className={`availability ${userAvail===true ? 'available' :'not-available'}`}></div></span> :null}
                                <span>{element[index].title}</span>
                                <span>{element[index].value.length}</span>
                            </div>
                        </div>
                        <div class="rightView">
                            <button className='button'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.75 4C8.75 3.58579 8.41421 3.25 8 3.25C7.58579 3.25 7.25 3.58579 7.25 4V7.25H4C3.58579 7.25 3.25 7.58579 3.25 8C3.25 8.41421 3.58579 8.75 4 8.75H7.25V12C7.25 12.4142 7.58579 12.75 8 12.75C8.41421 12.75 8.75 12.4142 8.75 12V8.75H12C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25H8.75V4Z" fill="#5C5C5E" />
                            </svg></button>
                            
                            <button className='button'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 6.5C3.39782 6.5 3.77936 6.65804 4.06066 6.93934C4.34196 7.22064 4.5 7.60218 4.5 8C4.5 8.39782 4.34196 8.77936 4.06066 9.06066C3.77936 9.34196 3.39782 9.5 3 9.5C2.60218 9.5 2.22064 9.34196 1.93934 9.06066C1.65804 8.77936 1.5 8.39782 1.5 8C1.5 7.60218 1.65804 7.22064 1.93934 6.93934C2.22064 6.65804 2.60218 6.5 3 6.5ZM8 6.5C8.39782 6.5 8.77936 6.65804 9.06066 6.93934C9.34196 7.22064 9.5 7.60218 9.5 8C9.5 8.39782 9.34196 8.77936 9.06066 9.06066C8.77936 9.34196 8.39782 9.5 8 9.5C7.60218 9.5 7.22064 9.34196 6.93934 9.06066C6.65804 8.77936 6.5 8.39782 6.5 8C6.5 7.60218 6.65804 7.22064 6.93934 6.93934C7.22064 6.65804 7.60218 6.5 8 6.5ZM13 6.5C13.3978 6.5 13.7794 6.65804 14.0607 6.93934C14.342 7.22064 14.5 7.60218 14.5 8C14.5 8.39782 14.342 8.77936 14.0607 9.06066C13.7794 9.34196 13.3978 9.5 13 9.5C12.6022 9.5 12.2206 9.34196 11.9393 9.06066C11.658 8.77936 11.5 8.39782 11.5 8C11.5 7.60218 11.658 7.22064 11.9393 6.93934C12.2206 6.65804 12.6022 6.5 13 6.5Z" fill="#5C5C5E" />
                            </svg></button>
                        </div>
                    </div>
                    <div>
                        {
                            element[index].value.map((element) => {
                                const id = element.id;
                                const title = element.title;
                                const tag = element.tag[0];
                                const userId = element.userId;
                                const status = element.status;
                                const priority = element.priority;
                                let userName=allUser.find((item)=>item.id===userId);
                                let foundUser=userName.name.split(" ");
                                let ranBack=generateRandomBackground();
                                let userAvatar=`https://ui-avatars.com/api/?name=${foundUser[0]}+${foundUser[1] ? foundUser[1]:''}&background=${ranBack}&color=ffffff`
                                return <Card id={id} title={title} tag={tag} userId={userId} status={status} priority={priority} userAvatar={userAvatar} availability={userName.available} />
                            })
                        }
                    </div>  
                </div>
            })}

        </div>
    )
}

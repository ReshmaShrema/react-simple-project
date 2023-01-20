import React from 'react'
import { useState } from 'react';
import NewGoal from '../NewGoal/NewGoal'
import  './Goal.css'
function Goal() {

  const [courseGoals,setCouseGoals] = useState([
    {
      item: "Finish the Course",
      id: 1,
    },
    {
      item: "Learn all about the course main topic",
      id: 2,
    },
    {
      item: "Help other students in the course Q&amp;A",
      id: 3,
    },
  ]);
const addNewGoalHandler = newGoal =>{
      setCouseGoals((prevCourseGoals)=>{
      return prevCourseGoals.concat(newGoal)
      })//here we create new array so that we use concat instead of push(update the existing array)
    }
    
  return (
    <div className='course-goals'>
        <h1>Course Goals</h1>
        <NewGoal onAddGoal = {addNewGoalHandler}/>
            <ul className='goal-list'>
              {courseGoals.map((goal)=>{
                    return <li key={goal.id}>{goal.item}</li>
              }                  
              )}
                
            </ul>
    </div>
  )
}

export default Goal;
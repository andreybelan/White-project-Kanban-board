import React, {useState} from 'react'
import './Input.css'

export default function Input(props) {
  const {tasks, setTasks} = props;
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if(taskText.length > 0){
      const newTasks = tasks.map(num => {
        if(num.title === 'Backlog'){
          num.text.push({
            id: Date.now(),
            task: taskText,
            description: ''
          })
        }
        return num
      })
      setTasks([...newTasks]);
      setTaskText('');
    }  
  }   

  return (
    <div className="input">
      <input  type="text" 
              className="input__text"
              placeholder="Enter the text" 
              value={taskText} 
              onChange={event => setTaskText(event.target.value)} onKeyPress={e => e.key === 'Enter' ? addTask() : ''} 
      />

      <button className="input__button" onClick={addTask}>
        Submit
      </button>
    </div>
  )
}


import React, { useRef } from 'react'

const AddTask = ({taskList, setTaskList, task, setTask}) => {
    const inputText = useRef(null); 

    const handleButton = () => {
      // console.log(inputText.current.value);

      if(task.id) { // When we want to update the taskList.
        const date = new Date();
        const updateTask = taskList.map((todo) => (
          todo.id === task.id ? {...todo, task: inputText.current.value, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo
        ))
        setTaskList(updateTask);
        setTask([]);
      }else{ // When we want to add new task in list.
        const date = new Date();
        const newTask = {
        id: taskList.length + 1,
        task: inputText.current.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        }
        if(inputText.current.value !== ''){
          setTaskList([...taskList, newTask]); // This is way to add new record as well as maintain the old records.
          setTask([]);
        }
      }

      
    }

  return (
    <div className='w-5/12 flex rounded-md border-2 mt-[7%] left-0 mx-auto shadow'>
        <form action="" className='my-4 mx-5 w-11/12' onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder='add task' value={task.task || ''} className='p-2 w-10/12 mr-2 rounded-lg border-2 focus:outline-none placeholder-slate-500' ref={inputText} onChange={e => setTask({...task, task:e.target.value})} />    
            <button className='bg-green-500 text-white p-2 rounded-md font-medium px-5' onClick={handleButton}>
                {task.id ? 'Update' : 'Add'}
            </button>  
        </form>
    </div>
  )
}

export default AddTask

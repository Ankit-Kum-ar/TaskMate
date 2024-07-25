import React from 'react'
import TaskBox from './TaskBox'
const ShowTask = ({taskList, setTaskList, task, setTask}) => {
    const handleClearAll = () => {
        setTaskList([]);
    }
  return (
    <div className='border-2 shadow w-11/12 left-0 mx-auto mt-[2%] p-3'>
        <p className='font-semibold mb-3'>
            Todo
            <span className='ml-2 rounded-full font-normal bg-slate-300 px-2 py-1 text-sm'>
                {taskList.length}
            </span>
            <button className='bg-blue-600 ml-1 text-white px-2 py-1 font-medium rounded-md hover:bg-blue-800' onClick={handleClearAll}>
                Clear All
            </button>
        </p>      

        <div className='flex flex-wrap justify-center items-center'>
            {
                taskList.map(tasks => (
                    <TaskBox key={tasks.id} id={tasks.id} text={tasks.task} timeInfo={tasks.time} taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask}/>
                ))
            }
        </div>
    </div>
  )
}

export default ShowTask

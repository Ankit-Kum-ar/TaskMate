import React from 'react'
import { FaRegPenToSquare } from 'react-icons/fa6'
import { MdDelete } from 'react-icons/md'

const TaskBox = ({text, timeInfo, taskList, setTaskList, id, task, setTask}) => {
    const handleDelete = (id) => {
        const newList = taskList.filter(todo => todo.id !== id);
        setTaskList(newList);
    }

    const handleEdit = (id) => {
        const selectedTask = taskList.find((todo) => todo.id === id);
        setTask(selectedTask);
    }
  return (
        <div className='border-2 border-l-4 border-l-blue-600 rounded p-3 md:w-[31%] w-[93%] mx-2 md:my-4 my-2 hover:bg-slate-100'>
            <div className='flex mb-1'>
                <p className='mr-auto font-sans'>{text}</p>
                <button className='mx-2' onClick={() => handleEdit(id)}><FaRegPenToSquare /></button>
                <button onClick={() => handleDelete(id)}><MdDelete/></button>
            </div>
            <p className='text-xs text-gray-500'>{timeInfo}</p>
        </div>  
  )
}

export default TaskBox

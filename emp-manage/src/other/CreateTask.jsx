import React from 'react'

const CreateTask = () => {
  return (
    <>
         <div className="h-screen w-full p-1">
      <div className="bg-[#1c1c1c] rounded mt-7">
        <form action="#" className="flex w-full flex-wrap  item-start justify-between">
          <div className="w-1/2 pl-4 mt-5 mb-4">
          <div>
            <h3 className= "text-sm text-gray-100 mb-0.5">Task list</h3>
            <input
              type="text"
              className= "text-gray-400 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              placeholder="Featch API"
            />
            </div>
             <div>
            <h3 className="text-sm text-gray-100 mb-0.5">Date</h3>
            <input className="text-gray-400 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="date" name="" id="" />
          </div>
          <div>
            <h3 className="text-sm text-gray-100 mb-0.5">Asign to</h3>
            <input
              className="text-gray-400 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              placeholder="employee Name"
              type="text"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-100 mb-0.5">Category</h3>
            <input
              className=" text-gray-400 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              placeholder="design, dev ,etc"
              type="text"
            />
          </div>
          </div>
          <div className=" w-2/5 flex-col items-center pr-4 mt-4 mb-4">
            <h3 className="text-sm text-gray-100 mb-0.5">Description</h3>
            <textarea
              className="text-gray-100 w-full h-44 text-sm py-2 rounded outline-none bg-transparent border-[1px] border-gray-400 "
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          <button className="text-bold bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Create Task</button>
          </div>
        </form>
      </div>
      </div>
    </>
  )
}

export default CreateTask

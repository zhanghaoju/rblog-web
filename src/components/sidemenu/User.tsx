import React from 'react'

const User = () => {
  return (
    <div className="flex flex-col items-center w-72  mt-5 mx-auto rounded-xl bg-sky-300 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105">
      <div className='flex flex-col items-center justify-center'>
        <img
          src="https://iblog-react.oss-cn-shanghai.aliyuncs.com/iblog-web/avatar.jpeg"
          alt=""
          className="w-24 h-24 mt-1 rounded-full"
        />
        <p className='flex items-center w-64 h-12 pl-2 mt-2  overflow-clip'>座右铭座右铭座右铭座右铭座右铭座右铭座右铭</p>
      </div>
      <div className='w-76 h-20 pl-1 mt-2  rounded-xl overflow-clip'>
        <span className='inline-block mb-1 px-2 mx-1 text-ls bg-indigo-400 rounded-lg shadow'>个人</span>
        <span className='inline-block mb-1 px-2 mx-1 text-ls bg-indigo-400 rounded-lg shadow'>人</span>
        <span className='inline-block mb-1 px-2 mx-1 text-ls bg-indigo-400 rounded-lg shadow'>人</span>
        <span className='inline-block mb-1 px-2 mx-1 text-ls bg-indigo-400 rounded-lg shadow'>标签</span>
        <span className='inline-block mb-1 px-2 mx-1 text-ls bg-indigo-400 rounded-lg shadow'>个人标签</span>
        <span className='inline-block mb-1 px-2 mx-1 text-ls bg-indigo-400 rounded-lg shadow'>1</span>
        <span className='inline-block mb-1 px-2 mx-1 text-ls bg-indigo-400 rounded-lg shadow'>个人标签</span>
        <span className='inline-block mb-1 px-2 mx-1 text-ls bg-indigo-400 rounded-lg shadow'>个人标签</span>
        <span className='inline-block mb-1 px-2 mx-1 text-ls bg-indigo-400 rounded-lg shadow'>个人标签</span>
        <span className='inline-block mb-1 px-2 mx-1 text-ls bg-indigo-400 rounded-lg shadow'>个人标签</span>
      </div>
    </div>
  )
}

export default User

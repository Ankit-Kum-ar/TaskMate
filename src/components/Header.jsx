import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div className="shadow-md mx-[4%] mt-2 border-2 rounded-lg flex justify-between">
        <div className="flex">
            <img src={logo} alt="TaskMate LOGO" className="w-14 py-3 ml-1 px-2"/>
            <h1 className="text-[22px] font-sans mt-4 text-gray-600">Taskmate</h1>
        </div>

        <div className="flex p-3 ">
            <button className="bg-blue-700 text-white p-2 rounded-md font-medium px-3">Welcome Back</button>
        </div>
    </div>
  )
}

export default Header

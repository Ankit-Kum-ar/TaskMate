import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div className="shadow-md mx-[4%] mt-2 border-2 rounded-lg flex justify-between">
        <div className="flex">
            <img src={logo} alt="TaskMate LOGO" className="md:w-14 w-12 py-3 md:ml-1 px-2"/>
            <h1 className="md:text-[22px] text-md  font-sans mt-4  text-gray-600">Taskmate</h1>
        </div>

        <div className="flex p-3 ">
            <button className="bg-blue-700 text-white md:p-2 p-1 md:text-base text-sm rounded-md font-medium md:px-3 px-2">Welcome Back</button>
        </div>
    </div>
  )
}

export default Header

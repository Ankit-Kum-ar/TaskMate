import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div className="shadow-md mx-[4%] mt-2 border-2 rounded-lg flex justify-between">
        <div className="flex">
            <img src={logo} alt="TaskMate LOGO" className="w-14 py-3 ml-1 px-2"/>
            <h1 className="text-[22px] font-sans mt-4 text-gray-600">Taskmate</h1>
        </div>

        <div className="flex mt-[2%] gap-1 px-3 ">
            <button className="rounded-full bg-white w-[22px] h-[22px] border-2 hover:border-[3.3px] " ></button>
            <button className="rounded-full bg-[#EFEFEF] w-[22px] h-[22px] border-2"></button>
            <button className="rounded-full bg-black w-[22px] h-[22px] border-2"></button>
            <button className="rounded-full bg-custom-gradient-1 w-[22px] h-[22px] border-2"></button>
            <button className="rounded-full bg-red-900 w-[22px] h-[22px] border-2"></button>
            <button className="rounded-full bg-lime-950 w-[22px] h-[22px] border-2 "></button>
        </div>
    </div>
  )
}

export default Header

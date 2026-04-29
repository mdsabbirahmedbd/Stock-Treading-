import { FaBook } from "react-icons/fa";
const Orders = () =>  {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[60vh] text-center px-4">
      <FaBook className="text-4xl text-indigo-500 mb-4" />
      <p className="text-gray-400 text-sm mb-5">You haven't placed any orders today</p>
      <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white border-none px-6">
        Get started
      </button>
    </div>
  )
}
export default Orders
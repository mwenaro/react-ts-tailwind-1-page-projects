import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="h-1/2 w-1/2 m-auto bg-black text-red-600 flex flex-col justify-center items-center">
            <p className="text-lg md:text-3xl font-bold text-center">Page Not Founds</p>
            <p className="text-xl font-semibold text-center">Go <Link to = {'/'} >Home</Link></p>
    </div>
  )
}

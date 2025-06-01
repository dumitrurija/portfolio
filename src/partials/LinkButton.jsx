import { Link } from "react-router-dom"

function LinkButton({ to, children }) {
    return (
        <Link to={to} className="w-fit text-white border border-purple-400 px-3 py-2 hover:bg-purple-900 transition max-md:m-auto">{children}</Link>
    )
}

export default LinkButton
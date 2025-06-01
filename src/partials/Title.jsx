import { Link } from "react-router-dom"

function Title({ name, length, viewAllLink = "", currentLanguage, symbol="#" }) {
    return (
        <div id="title" className="flex justify-between items-center text-white">
            <div className="flex gap-4 items-center w-2/3 text-3xl max-sm:w-full">
                <div className="flex">
                    <span className="text-purple-400">{symbol}</span>
                    <h2 className="whitespace-nowrap">{name}</h2>
                </div>
                <hr className={`${length} border-purple-400`}/>
            </div>
            {viewAllLink && <Link to={viewAllLink} className="hover:scale-110 transition whitespace-nowrap ml-4">{currentLanguage}</Link>}
        </div>
    )
}

export default Title
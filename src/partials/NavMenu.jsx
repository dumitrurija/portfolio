import { Link, useLocation } from "react-router-dom"

function NavMenu({ dataText, setLanguage, isMobileView, toggleMobileMenu }) {
    const currentPage = useLocation().pathname
    const isCurrentPage = (page) => {
        return page !== currentPage && "text-gray-400"
    }

    return <ul className={`flex gap-8 ${isMobileView && "flex-col text-3xl"}`}>
                {Object.values(dataText.navMenu).map((el, i) => 
                    <li key={el.id} onClick={() => toggleMobileMenu(false)}>
                        <Link to={el.url} className={`flex gap-px font-medium hover:text-white ${isCurrentPage(el.url)}`}>         
                            <span className="text-purple-400">#</span>
                            {el.name}
                        </Link>
                    </li>
                )}
                
                <select onChange={(e) => setLanguage(e.target.value)} className="text-gray-400 w-fit hover:text-white cursor-pointer">
                    {dataText.languages.map((el, i) => <option key={i} value={el.toLowerCase()}>{el}</option>)}
                </select>
            </ul>  
}

export default NavMenu
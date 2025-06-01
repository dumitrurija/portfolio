import { Navigate, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

function NotFound() {
    const [seconds, setSeconds] = useState(8)
    
    const navigate = useNavigate()

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(s => {
                if (s <= 1) {
                    clearInterval(intervalId)
                    navigate("/")
                    return 0
                }
                return s-1
            })
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [navigate])

    return (
        <section id="notfound" className="md:h-[500px] flex flex-col justify-center items-center">
            <h1 className="font-bold text-3xl">404 – Page Not Found</h1>
            <h2>You will be redirected in {seconds}s...</h2>
        </section>
    )
}

export default NotFound
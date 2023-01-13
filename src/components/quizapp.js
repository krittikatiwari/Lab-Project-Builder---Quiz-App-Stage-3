import { Link } from "react-router-dom"



export default function(){
    return(
        <div className="color">
            <h1>Quizz App</h1>
            <div className="butt">
            <Link to={"/app"} className='green' >Play</Link>
            </div>
        </div>
    )
}
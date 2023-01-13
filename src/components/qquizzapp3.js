import { Link } from "react-router-dom";







export default function(){


    const right=localStorage.getItem("right");
    const wrong=localStorage.getItem("wrong");


    return(
        <div className="cent" >
            <div className="result">
                <h1>Result</h1>
            </div>
            <div className="cont">
                <div className="prac">
                    <h3> </h3>
                </div>
                <div className="score">
                    <h2>Your score is {parseInt(eval(`${right}/15*100`))+'%'}</h2>
                </div>
                <div className="set">
                    <div>Total number of questions</div>
                    <div>15</div>
                </div>
                <div className="set">
                    <div>Number of attempted questions</div>
                    <div>{eval(`${right}+${wrong}`)}</div>
                </div>
                <div className="set">
                    <div>Number of correct answers</div>
                    <div>{right}</div>
                </div>
                <div className="set">
                    <div>Number of wrong answers</div>
                    <div>{wrong}</div>
                </div>
            </div>
            <div>
                <Link to={"/app"} >
                <button className="again">Play again</button>
                </Link>
                <Link to={"/"} >
                <button className="back">Back to home</button>
                </Link>
            </div>
        </div>
    )
}
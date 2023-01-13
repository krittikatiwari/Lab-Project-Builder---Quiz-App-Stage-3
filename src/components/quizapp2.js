import React,{useState} from "react";
import { Link } from "react-router-dom";





export default function (props) {

    const [value,change] = useState(0);
    const [wrong,setwrong] = useState(0);
    const [right,setright] = useState(0);

    const next=()=>{
        if(value<14){
        change(value+1);
        }
        else{
            change(14)
        }
    }

    const prev=()=>{
        if(value>0){
            change(value-1);
        }
        else{
            change(0)
        }
    }

    const quit=()=>{
        let get=window.confirm("Are you sure you want to Quit the test?");
        if(get){
            change(0)
        }
    }

    const click=(ques,ans)=>{
        if(ques===ans){
            alert("correct answer")
            setright(right+1)
        }else{
            alert("Wrong answer")
            setwrong(wrong+1)
        }
        if(value<14){
            change(value+1);
            }
            else{
                change(14)
            }
    }

    const finish=()=>{
        localStorage.setItem("right",right);
        localStorage.setItem("wrong",wrong);
    }

    let set=props.anmol[value];
    

    return(
        <div className="border">
            <div  className="top" >
                <h1>Question</h1>
            </div>
            <div className="left">
                {value+1} of 15 
            </div>
            <div className="ques">
                {set.question}
            </div>
            <div className="grid">
                <div onClick={()=>click(set.optionA,set.answer)} className="option">{set.optionA}</div>
                <div onClick={()=>click(set.optionB,set.answer)} className="option">{set.optionB}</div>
                <div onClick={()=>click(set.optionC,set.answer)} className="option">{set.optionC}</div>
                <div onClick={()=>click(set.optionD,set.answer)} className="option">{set.optionD}</div>
            </div>
            <div>
                <button className="prev" onClick={()=>prev()}>Previous</button>
                <button className="next" onClick={()=>next()}>Next</button>
                <button className="quit" onClick={()=>quit()}>Quit</button>
                <Link to="/result">
                    <button onClick={finish} >Finish</button>
                </Link> 
            </div>
        </div>
    )
}

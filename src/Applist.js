import React from 'react';
import {AddNewTask} from "./Apptask";

export class ToDoAppList extends React.Component{
    constructor(props){
        super();
    }


    render(){
        var item = this.props.task.map((element,i)=>{
            return <li key={i}>{element}</li>
        })
        return(
           <ul>
               {item}
            </ul>
        )
    }
}
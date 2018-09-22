import React from 'react';

export class AddNewTask extends React.Component{

    constructor(){
        super();
        this.state = {
            textInput:"aaaa",
            list:[]
        };
       
    }
    
    changUserInput(input){
        this.setState({
            textInput:input
        })
    }

    addToList(input){
        var listArray = this.state.list;
        listArray.push(input);

        this.setState({
            list:listArray,
            textInput:" "
        })
    }

    handleRemove(item,event){
        event.preventDefault();
           var list1 = this.state.list.filter((list2) =>{
               return list2 !== item  
           }) 
           this.setState({
              list:list1                       
           })
        
    }

    render(){
        return(
           <div>
                <input type="text" 
                onChange={(e) => this.changUserInput(e.target.value)} />
              <button onClick={() => this.addToList(this.state.textInput)}>add</button>
            <ul>
                {this.state.list.map((value,i) => <li key={i}>{value}<a href="" onClick={this.handleRemove.bind(this,value)}>[x]</a></li>)}
            </ul>
           </div>
            
            
        );
    }
}
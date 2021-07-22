import React, { Component } from 'react';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state= {
            button:['','','','','','','','',''],
            turn:false,
            onclick_button:true,
        }
    }
    clickButtonGame= (index)=>{
        // console.log(this.state);
       
        if(this.state.onclick_button===false) return;
        
        let value = '';
        if(this.state.turn===true) value = 'X';
        else value = 'O';
        const new_button=this.state.button;
        if(new_button[index]===''){
            new_button[index]=value;

            this.setState({button:new_button,turn:!this.state.turn});
            if(this.calculateWinner(this.state.button)){
                this.setState({
                    onclick_button:false,});
                alert(value +' win');
            }
        }
    }

    renderGame = () => {
       const buttons=this.state.button;
        const element = buttons.map((item,index) => {
            // console.log(index);
            return (
                // <div className="col-xl-4 col-sm-4">
                    <input className="button_game" type="button" key={index} value ={item} onClick={()=>this.clickButtonGame(index)} />
                // </div>
            )
        });
        return element;
    }

    calculateWinner=(button) =>{
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (button[a] && button[a] === button[b] && button[a] === button[c]) {
            return button[a];
          }
        }
        return null;
      }
      resetGame= () => {
        this.setState({
            button:['','','','','','','','',''],
            turn:false,
            onclick_button:true,
        });
    }
    render() {
        return (
            <div style={{width:"300px"}}>
                <div className="col-xl-12">

                    {this.renderGame()}
                    <input className="" type="button"  value ='reset game' onClick={()=>this.resetGame()} />
                </div>
            </div>
        );
    }
}

export default Game;
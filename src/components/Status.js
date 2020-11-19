import React, { PureComponent } from 'react'

export default class Status extends PureComponent{
    render(){
        const {doLength,undoLength,DeleteAllDoData} = this.props;
        return <>
            <div id="todo-stats">
                <span className="todo-count">
                    <span className="number">{undoLength}</span>
                    <span className="word">项待完成</span>
                </span>
                <span className="todo-clear">
                    {doLength>0?(
                        <a onClick={(e)=>{
                            DeleteAllDoData()
                        }}>
                            清除
                            <span className="number-done">{doLength}</span>
                            项已完成
                            <span className="word-done"></span>
                        </a>
                    ):''}
                    
                </span>
            </div>
        </>
    }
}
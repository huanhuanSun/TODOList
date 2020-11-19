import React from 'react'
import Li from './Li';

export default function Todos(props){
    const {data,UpdateDataProperty,DeleteSingleData,UpdateDataContent} = props;
    
    return <>
        <div id="todos">
            <ul id="todo-list">
            {
                data.map((item,index)=>{
                    return (
                        <Li 
                            key={item.id} 
                            item={item}  
                            UpdateDataProperty={UpdateDataProperty} 
                            DeleteSingleData={DeleteSingleData}
                            UpdateDataContent={UpdateDataContent}
                        />
                    )
                })
            }
            </ul>
        </div>
    </>
}

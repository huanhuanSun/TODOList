import React from 'react'

export default function Create(prop){
    const {AddData} = prop;
    return <>
        <div id="create-todo">
            <input 
                type="text" 
                id="new-todo" 
                placeholder="What need to be done?" 
                onKeyDown={(e)=>{
                    if(e.keyCode === 13) {
                        // console.log(e.target.value)
                        if (e.target.value.trim()) {
                            AddData(e.target.value)
                            e.target.value=''
                        }
                        else{
                            alert('请输入内容')
                        }
                    }
                }}
            />
        </div>
    </>
}

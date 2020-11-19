import React, { PureComponent,createRef } from 'react'


export default class Li extends PureComponent{
    constructor(props){
        console.log(props)
        super(props);
        this.state ={
            val:props.item.content,//将内容备份一份
            edit:false
        }
    }
    editText = createRef();

    //组件更新之前执行
    componentDidUpdate(preProps,prevState){
        //判断是否是刚进入编辑状态 上一次是false当前是true
        if(!prevState.edit && this.state.edit) {
            this.editText.current.focus();
        }
    }

    /*
        编辑内容：1.记录下原来的content,退出编辑时，若输入内筒为空，则恢复原来的内容，否则 为新内容

    */

    render(){
        const {item,UpdateDataProperty,DeleteSingleData,UpdateDataContent} = this.props;
        return <li  className={this.state.edit?"editing":''}>
        <div className={"todo "+(item.checked?'done':'')}>
            <div className="display">
                <input type="checkbox" className="check" 
                    checked={item.checked}
                    onChange={(e)=>{
                        UpdateDataProperty(item.id,e.target.checked)
                    }}
                />
                <div 
                    className="todo-content"
                    onDoubleClick={(e)=>{
                        this.setState({
                            edit:true
                        })
                    }}
                >{item.content}</div>
                <span className="todo-destroy" 
                    onClick={()=>{
                        // console.log()
                        DeleteSingleData(item.id)
                    }}
                ></span>
            </div>
            <div className="edit">
                <input  
                    type="text" 
                    className="todo-input"
                    value={this.state.val}
                    ref={this.editText}
                    onChange={(e)=>{
                        //编辑时不修改原有数据
                        this.setState({
                            val:e.target.value
                        })
                    }}
                    onBlur={(e)=>{
                        //退出编辑时  判断当前的修改是否为空
                        if (this.state.val.trim()) {
                            UpdateDataContent(item.id,e.target.value)
                        }
                        else {
                            //为空 则恢复原有内容
                            this.setState({
                                val:item.content
                            })
                        }
                        this.setState({
                            edit:false
                        })
                        
                    }}
                    onKeyDown={(e)=>{
                        if(e.keyCode === 13) {
                            if(e.target.value.trim()) {
                                UpdateDataContent(item.id,e.target.value)
                                this.setState({
                                    edit:false
                                })
                            }
                            else {
                                this.setState({
                                    val:item.content,
                                    edit:false
                                })
                            }
                        }
                    }}
                />
            </div>
        </div>
    </li>
    }
}
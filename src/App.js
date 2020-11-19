import React, { Fragment, PureComponent } from 'react'
import Header from './components/Header'
import Todos from './components/Todos'
import Create from './components/Create'
import Status from './components/Status'


// function App() {
//   return (
//     <div id="todoapp">
//       <Header/>
//       <Create />
//       <Todos />
//       <Status/>
//     </div>
//   );
// }

class App extends React.Component {
  state={
    data:[
      {
        id:1,
        content:'lala',
        checked:false
      },
      {
        id:2,
        content:'lulu',
        checked:true
      }
    ]
  }

  //添加数据
  AddData=(val)=>{
    let {data} = this.state;
    this.setState({
      data:[...data,{
        id:Date.now(),
        content:val,
        checked:false
      }]
    })
  }

  //修改数据状态
  UpdateDataProperty=(id,checked)=>{
    let {data} = this.state;
    for (let i = 0;i < data.length; i++) {
      if (data[i].id===id) {
        data[i].checked = checked
      }
    }
    this.setState({
      //深拷贝
      data:data.map(item=>{return {...item}})
    })
  }

  //修改编辑后的数据
  UpdateDataContent=(id,content)=>{
    let {data}  = this.state;
    for (let i = 0; i <data.length;i++) {
      if (data[i].id===id) {
        data[i].content = content;
      }
    }
    this.setState({
      data:data.map(item=>{return {...item}})
    })
  }

  //删除单个数据
  DeleteSIngleData = (id) =>{
    let {data} =  this.state;
    this.setState({
      data:data.filter(item=>item.id!==id)
    })

  }
  //删除所有已完成
  DeleteAllDoData = () =>{
    let {data} = this.state;
    this.setState({
      data:data.filter(item=>!item.checked)
    })
  }



  // shouldComponentUpdate(nextProps,nextState){
  //   console.log(this.state.data,nextState.data)
  //   return true
  // }

  render(){
    let {data} = this.state;
    const doLength = data.filter(item=>item.checked).length;
    const undoLength = data.length - doLength;
    return (
      <div id="todoapp">
        <Header/>
        <Create AddData={this.AddData}/>
        {
          this.state.data.length>0?(
            <Fragment>
              <Todos 
                data={this.state.data} 
                UpdateDataProperty={this.UpdateDataProperty} 
                DeleteData={this.DeleteData}
                UpdateDataContent={this.UpdateDataContent}
              />
              <Status
                doLength={doLength} 
                undoLength={undoLength}
                DeleteAllDoData={this.DeleteAllDoData}
              />
            </Fragment>
          ):''
        }
      </div>
    );
  }
}

export default App;

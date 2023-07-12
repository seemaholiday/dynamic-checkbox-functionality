import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [tableData, setTableData] = useState([])
  useEffect(()=>{
    const fetchData=()=>{
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTableData(json))
    }
    fetchData()
  }, [])
  const onChangeCheckBoxEvent=(e, index)=>{
    // console.log(e, index)
    let res = [...tableData]
    res[index].completed = e.target.checked
    setTableData(res)

  }
  return (
    <div className="App">
      
      <table>
        {/* <h3 style={{paddingLeft:'100px'}}>Table Dynamic Checkbox</h3> */}
        <th>Id</th>
        <th>Title</th>
        <th>Status</th>
          {
            tableData.map((item, index)=>{
              return(
                <tr>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td><input type="checkbox" checked={item.completed} onChange={(e)=>onChangeCheckBoxEvent(e, index)}/></td>
                </tr>
              )
            })
          }
      </table>
    </div>
  );
}

export default App;

import Header from './Header';
import Search from './Search';
import './../App.css';
import TableData from './TableData';
import AddUser from './AddUser';
import { useState } from 'react';
import DataUser from './DataJson.json';

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [textSearch, setTextSearch] = useState("");
  const [data, setDataUserProps] = useState(DataUser);
  const [isChangeStatusEdit, setIsChangeStatusEdit] = useState(false);
  const [dataUser, setDataUser] = useState(Object);
  const checkAddUser = () => {
    setIsChecked(true)
  }

  const checkClodeAddUser = () => {
    setIsChecked(false)
  }

  const getTextSearch = (dl)=> {
    setTextSearch(dl);
  }

  const getNewUser = (name,tel,permission) => {
    var user = {};
    user.id = "";
    user.name= name;
    user.tel = tel;
    user.permission = parseInt(permission);
    setDataUserProps(prevState => [...prevState,user]);
  }


  var searchResult =[];
  data.forEach(element => {
    if(element.name.indexOf(textSearch) !==-1)
    {
      searchResult.push(element);
    }
  })

  const editUser = (user) => {
    setIsChangeStatusEdit(true);
    setDataUser(user);
    //console.log(dataUser);
  }

  const changeEditUserClick= ()=>{
    setIsChangeStatusEdit(false);
  }

  const getDataUserEdit = (User)=>{
      data.forEach((value,key)=>{
        if(value.id===User.id){
          value.name= User.name;
          value.tel= User.tel;
          value.permission = parseInt(User.permission);
        }
      })
  }

  const deleteUser = (id)=> {
    setDataUserProps(data.filter(item=> item.id !==id));
  }
  return (
    
    <div>
      <Header />
      <div className="searchForm" style={{ marginTop: '-20px' }}>
        <div className="container">
            <Search clickAddUsser={() => { checkAddUser() }} getTextSearch = {(dl)=> {getTextSearch(dl)}} clickCloseAddUser={()=> { checkClodeAddUser() }} hienThiForm={isChecked} changeStatusEdit = {isChangeStatusEdit} 
              clickChangeEditUser = {()=> {changeEditUserClick()}} sendDataUser= {dataUser} 
              getDataEditUser= {(User)=>{getDataUserEdit(User)}}
             />
          <div className="row">
            <TableData editUserFun = {(user,status)=> {editUser(user,status)}} DataUserProps={searchResult}
              deleteUser = {(id)=> {deleteUser(id)}}
            />
            <AddUser addNewUser = {(name,tel,permission)=> {getNewUser(name,tel,permission)}} hienThiForm={isChecked} />
          </div>
        </div>
      </div>
      <div className="bg-light" style={{ width: '100%', height: '100px' }}>
      </div>
    </div>
  );
}

export default App;

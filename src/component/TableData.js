import React from 'react';
import DataRow from './DataRow';
const TableData = (props) => {
  return (
      <div className="col mt-2">
      <table className="table table-striped">
        <thead className="thead-inverse">
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Số điện thoại</th>
            <th>Quyền</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
         {
            props.DataUserProps.map((value,key) => (
            <DataRow editUserFun2 = {()=> {props.editUserFun(value,true)}} key = {key} userID= {key+1} userName={value.name} phoneNumber = {value.tel} permission = {value.permission}
            deleteBtnClick = {()=>{props.deleteUser(value.id)}}
            />
          ))
         }
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
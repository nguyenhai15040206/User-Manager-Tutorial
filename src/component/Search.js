import React, { useState } from 'react';
import EditUser from './EditUser';

function Search(props) {
    const hienThiNut = () => {
        if (props.hienThiForm === true) {
            return <button style={{ width: '200px' }} onClick={() => { props.clickCloseAddUser() }} className="btn btn-outline-danger">Đóng lại</button>
        } else {
            return <button style={{ width: '200px' }} onClick={() => { props.clickAddUsser() }} className="btn btn-outline-success">Thêm mới</button>
        }
    }

    const hienThiFormEdit = () => {
        if (props.changeStatusEdit === true) {
            return (
                <div className="col-12">
                    <EditUser getUserInfoEdit = {(user)=>{getUserInfoEdit(user)}} clickChangeStatus = {()=>{props.clickChangeEditUser()}} UserEdit = {props.sendDataUser}
                    />
                </div>
            );
        }
    }

    const [tempValue, setTeampValue] = useState('');
    const [isUser, setDataUser] = useState({
        id: 0,
        name: "",
        tel: "",
        permission: 0
    });
    const isChangeText = (event) => {
        setTeampValue(event.target.value);
        props.getTextSearch(tempValue)
    }
    const getUserInfoEdit = (user)=>{
        props.getDataEditUser(user);
        setDataUser({
            id: user.id,
            name: user.name,
            tel: user.tel,
            permission: parseInt(user.permission)
        });
    }
    return (
        <div className="row">
            
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" onChange={(event) => { isChangeText(event) }} className="form-control" placeholder="Nhập từ khóa" aria-describedby="helpId" style={{ width: '500px' }} />
                        <button onClick={() => { props.getTextSearch(tempValue) }} className="btn btn-primary" style={{ width: '100px' }}>Tìm</button>
                    </div>
                </div>

            </div>
            <div className="col-12">
                <hr />
            </div>
            {  hienThiFormEdit()}
            <div className="btn-group ml-3 mt-2">
                {hienThiNut()}
            </div>
        </div>
    );
}

export default Search;
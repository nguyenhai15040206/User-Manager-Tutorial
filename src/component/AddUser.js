import React, { useState } from 'react';

const AddUser = (props) => {

    const anHienForm = () => {
        if (props.hienThiForm === true) {
            return (
                <div className="col mt-2">
                    <form>
                    <div className="card-text-left border">
                        <div className="card-header mt-2">Thêm mới</div>
                        <div className="card-body">
                            <div className="form-group">
                                <input name="name" onChange={(event) => { isChange(event) }} type="text" className="form-control" placeholder="Tên người dùng" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <input name="tel" type="text" onChange={(event) => { isChange(event) }} className="form-control" placeholder="Số điện thoại" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <select name="permission" className="form-control" onChange={(event) => { isChange(event) }} >
                                    <option>Chọn quyền mặt định</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Modrator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <center><button type="reset" onClick={()=>{props.addNewUser(User.name,User.tel,User.permission)}} className="btn btn-block btn-primary" style={{ width: '100%' }}>Thêm mới</button></center>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            );
        }else{
            return null;
        }
    }

    const [User, setUser] = useState({
        id: "",
        name: "",
        tel: "",
        permission: 0
    });



    const isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        setUser(prevState =>{
            return {
                ...prevState,
                [name]:value
            }
        })
        
    }
    
    return (
        <div>
            {anHienForm()}
        </div>

    );
};

export default AddUser;
import React, { useState } from 'react';

const EditUser = (props) => {

    var User = props.UserEdit;
    const [getDataEdit, setDataEdit] = useState(User);

    const isChange = (event)=> {
        var name = event.target.name;
        var value = event.target.value;
        setDataEdit(prevState => {
            return {
                ...prevState,
                [name]:value
            }
        });
    }

    const saveBtn= ()=>{
        props.getUserInfoEdit(getDataEdit);
        props.clickChangeStatus();
    }
    return (
        <form>
            <div className="card-text-left border bg-light">
                <div className="card-header mt-2">Thêm mới</div>
                <div className="card-body">
                    <div className="form-group">
                        <input onChange={(event)=>{isChange(event)}} name="name" type="text" className="form-control" defaultValue={User.name} placeholder="Tên người dùng"  aria-describedby="helpId" ></input>
                    </div>
                    <div className="form-group">
                        <input onChange={(event)=>{isChange(event)}} name="tel" type="text" className="form-control" defaultValue= {User.tel} placeholder="Số điện thoại" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <select onChange={(event)=>{isChange(event)}} defaultValue={parseInt(User.permission)} name="permission" className="form-control"  >
                            <option>Chọn quyền mặt định</option>
                            <option value={1}>Admin</option>
                            <option value={2}>Modrator</option>
                            <option value={3}>Normal</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <center><button onClick= {()=> {saveBtn()}} type="reset" className="btn btn-block btn-warning" style={{ width: '100%' }}>Cập nhật </button></center>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default EditUser;
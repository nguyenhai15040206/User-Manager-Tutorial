import React from 'react';

const DataRow = (props) => {

    const permission = () => {
        if(props.permission === 1)
        {
            return "Admin";
        }else if(props.permission === 2){
            return "Modrator";
        } else if( props.permission ===3){
            return "Normal";
        }
    }
    return (
        <tr>
            <td >{props.userID}</td>
            <td>{props.userName}</td>
            <td>{props.phoneNumber}</td>
            <td>
                {
                    permission()
                }
            </td>
            <td>
              <div className="btn-group">
                <div className="btn btn-warning" onClick ={()=> {props.editUserFun2()}}> <i className="fa fa-edit   " /> Sửa</div>
                <div className="btn btn-danger" onClick={()=>{props.deleteBtnClick()}}>Xóa</div>
              </div>
            </td>
          </tr>
    );
};

export default DataRow;
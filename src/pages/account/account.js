
import './account.css'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import account from '..//..//img/hinh-nen-may-tinh-4k-thien-nhien-2.webp'
const Account= () =>{
    const [checkAccount,setCheckAccount] = useState(false)
    useEffect(()=>{
        //lấy dữ liệu trên localstrange về rồi kiểm tra xem có sẳn không 
        const checkAccount = localStorage.getItem('checkAccount')
        if(!checkAccount) setCheckAccount(false)
        else if(checkAccount != null) setCheckAccount(true)
    },[localStorage])

    const OutAccount =()=>{
        localStorage.setItem('checkAccount', false)
        window.location.reload()
    }
    return (
        // nếu k có tài khoản thì hiện cái trên còn không thì hiện ảnh có tk
        <div>
          {!checkAccount ? (
            <div style={{ display: 'flex' }}>
              <Link className="loggin" to="/register">
                Đăng kí
              </Link>
              <Link className="loggin" to="/loggin">
                Đăng nhập
              </Link>
            </div>
          ) : (
            <div style={{ display: 'flex' }} className='NewAccounts'>
                <img src={account} alt=''/>
                <p>Nguyễn trung trực</p> 
                <div className='dt' onClick={OutAccount}>Đăng xuất</div>
                
            </div>
          )}
        </div>
      );
}
export default Account
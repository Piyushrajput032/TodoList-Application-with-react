import styled from "styled-components";
import { useSelector ,useDispatch} from "react-redux";
import {MdDeleteForever} from 'react-icons/all.js'
import { removeUsers } from "../store/slice/UserSlice";
const DisplayUsers = () => {

    const dispatch=useDispatch();
    const data=useSelector((state)=>{
        return state.users;
    })
    const deletUser=(id)=>{
        dispatch(removeUsers(id))
    }
    return (
        <Wrapper>
            {
                data.map((user,id)=>{
                    return <li key={id}>
                        {user}
                        <button onClick={()=>{deletUser(id)}} className=" btn-delete">
                            <MdDeleteForever className="delete-icon"/>
                        </button>
                    </li>  
                })
            }
        </Wrapper>
    )
}
const Wrapper = styled.section`
li{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:1rem;
    border-bottom:1px solid #eee;

    &:first-child{
    border-top:1px solid #eee;
    }
}`

export default DisplayUsers;
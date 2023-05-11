import {GiEarthAmerica} from "react-icons/gi";

export default function Nav(){
    return(
        <div style={{
            display:"flex",
            backgroundColor:"#F75428",
            borderTopLeftRadius:"10px",
            borderTopRightRadius:"10px",
            color:"white",
            padding:"20px",
            margin:"10px",
            justifyContent:"center"}}>
            
            <GiEarthAmerica size={30}/> <p style={{margin:"auto 0 auto 10px"}}>My future travel journal</p>         
        </div>
    )
}
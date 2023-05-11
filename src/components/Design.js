import {ImLocation} from 'react-icons/im';


export default function Design(props){

    return(
        <div style={{margin:"50px 40px 50px 40px",display:"flex"}} className='mediaColumn bodyMargin'>
            {/* <div style={{width:"200px",height:"200px"}}> */}
                <img
                className='imgColumn'
                src={require(`../images/${props.imageURL}`)}
                style={{width:"200px",height:"200px",borderRadius:"10px"}}/>
            {/* </div> */}

            <div style={{margin:"auto 10px auto 20px"}}>
                <p>
                    <span>
                        <ImLocation className='iconStyle'/>
                    </span>
                    <span>{props.location}</span>
                    <span><a href={props.googleMapLink} style={{color:"grey",paddingLeft:"20px"}} target='_blank'>View on Google Maps</a></span>
                </p>

                <h1 style={{paddingTop:"5px"}}>{props.title}</h1>

                <h6 style={{marginTop:"20px"}}>{props.date.startDate} - {props.date.endDate}</h6>

                <p>{props.description}</p>
            </div>
        </div>
    )
}
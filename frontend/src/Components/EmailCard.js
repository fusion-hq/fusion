import { get_time_diff } from "../utils/utility"

export default function EmailCard({email, time}){
    return (
        <div style={{display: 'flex', marginBottom: 10}}>
            <div style={{background: "rgb(24, 144, 255)", width: "10px"}}></div>
            <div style={{width: "100%",  display: "flex", flexWrap: 'wrap', justifyContent: 'space-between', padding: "20px"}}>
                <div>{email}</div>
                <div>{get_time_diff(time)}</div>
            </div>
        </div>
        
    )
}
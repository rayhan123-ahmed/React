export const CustomButton = ({text})=>{
    // const HandleClick = ()=>{
    //     alert('button has been clicked')
    // }
    // return <button onClick={HandleClick}>Like</button>

    return <button onClick={()=>{alert('Thanks for liking')}}>{text}</button>
}
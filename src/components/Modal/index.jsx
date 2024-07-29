export default function Modal(props){
    return (
        <>
        <div
        id="modal"
        className={`relative z-50 w-full ${props.open ? "" : "hidden"}`}
        >
        <div className=""></div>
            
        </div>
        
        </>
    )
}
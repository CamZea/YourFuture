export default function InputCommunity(props){
    const handleForSubmit=async(event) =>{
        event.preventDefault();
        const community ={
            text:props.commmunity,
            created_at:Date.now(),
        };
        await props.handleListCommunity(community);
    };

    return (
        <>
        <form 
        onSubmit={handleForSubmit}
        id="form"
    
        >
        <input
        id="input-community"
        type="text"
        value={props.community}
        onChange={props.handleInputCommunity}
        placeholder="Escribe el nombre de tu comunidad"
         />
        <button href="" class="text-white text-md p-2 ">Unirme a una comunidad</button>

        </form>
        
        </>
    )
}
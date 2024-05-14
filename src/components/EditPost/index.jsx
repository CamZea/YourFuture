import { useState, useEffect } from "react";
export default function UpdatePost(props){

    
    const [editedPost, setEditedPost] = useState(props.currentPost?.text);

    const handleEditPost = (event) => {
    setEditedPost(event.target.value);
  };
    const handleFormEditSubmit = async (event) => {
    event.preventDefault();

    await props.handleUpdatePost(props.currentPost, editedPost);
  }
  useEffect(() => {
    setEditedPost(props.currentPost?.text);
    // Es una dependencia, depende del editedtask, al momento de hacer editar
  },[ props.currentPost?.text]);

  return (
    <>
    <form action="" 
                  id="form-edit"
                  onSubmit={handleFormEditSubmit}>
                    <div className="flex justify-end">
                    <input
                  id="input-edit-task"
                  type="text"
                  value={editedPost}
                  //cada vez que se escribe algo se llama a la funcion OnChange
                  onChange={handleEditPost}
                  className="ml-23 py-1 px-4 text-xs bg-transparent border-gray-300 rounded-md outline-none"
                />
                 <button
                    type="submit"
                    className="  rounded-md text-white text-xs"
                  >
                    
                  </button>

                    </div>
            
              </form>
              </>

  )
}

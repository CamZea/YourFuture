export async function createUser(name, lastname, email, password){
    try {
        const response = await fetch('http://127.0.0.1:8000/api/v1/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                name,
                lastname,
                email,
                password,
                is_super_user:false}),
            });
            
            const data =  await response.json();
            if (response.ok) {
                return data
            }else {
                console.log(data);
                return null

            }
        }catch(error){
        console.log("Error", error);
        return null;
    }
  }

  export async function signIn(email,password){
    try {
        const response= await fetch('http://127.0.0.1:8000/api/v1/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password:password,
            }),
        });
        const data =  await response.json();
        if (response.ok) {
            return data
        }else {
            console.log(data);
            return null
        }
    }catch(error){
     console.log("Error", error);
     return null;
    }
}
  



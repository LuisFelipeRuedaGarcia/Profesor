const ulr = "http://localhost/ArTeM01-047/Profesor/backend/controles/campers.php?op=GetAll"


export const getEstudaintes = async () =>{
    try{
        const result = await fetch (ulr);
        const datosUsuarios = await result.json();
        return datosUsuarios;
        
    }
    catch(error){
        console.log(error);
    }
}

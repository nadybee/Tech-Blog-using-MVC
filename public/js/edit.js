async function deleteBlogHandler (event){
   
    console.log('inside delete blogpost handler')
    if(event.target.hasAttribute('data-delete')){
        console.log(event.target)
    const id = event.target.getAttribute('data-delete')

    await fetch (`/api/dashboard/${id}`,{
        method: 'DELETE'
    })
.then (() => {

document.location.reload() 
 })


}
    
  }
  
  
    document
    .querySelector('.card')
    .addEventListener('click', deleteBlogHandler);
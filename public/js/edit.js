async function deleteBlogHandler (event){
   
    console.log('inside delete blogpost handler')
    if(event.target.hasAttribute('data-delete')){
        console.log(event.target)
    const id = event.target.getAttribute('data-delete')

    const response = await fetch (`/api/dashboard/${id}`,{
        method: 'DELETE'
    })
    if(response.ok){
        document.location.replace('/dashboard')
    }
    else {
        alert('Failed to delete blogpost')
        }
    }
  }
  
  
    document
    .querySelector('.edit-buttons')
    .addEventListener('click', deleteBlogHandler);
const deleteBlogHandler = async (event)=> {
   
    if(event.target.hasAttribute('data-delete')){
        console.log('inside delete blogpost handler')
        // console.log(event.target)
        const id = event.target.getAttribute('data-delete');  

    const response = await fetch (`/api/post/${id}`,{
        method: 'DELETE',
    })
    if(response.ok){
        document.location.replace('/dashboard')
         console.log('delete')
    }
    else {
        alert('Failed to delete blogpost')
        }
    }
  }

//   const editBlogHandler = async (event)=> {
//     const blog_title = document.getAttribute('data-title').value.trim();
//     const content = document.getAttribute('data-content').value.trim();


//     if(event.target.hasAttribute('data-edit')){
//         console.log('inside edit blogpost handler')
//         // console.log(event.target)
//         const id = event.target.getAttribute('data-edit');  

//     const response = await fetch (`/api/post/edit/${id}`,{
//         method: 'POST',
//         body: JSON.stringify({ 
//           blog_title, 
//           content
//     })
// })
//     if(response.ok){
//         document.location.replace('/dashboard')
//     }
//     else {
//         alert('Failed to delete blogpost')
//         }
//     }
//   }  
  
  
    document
    .querySelector('.edit-buttons')
    .addEventListener('click', deleteBlogHandler);


    // document
    // .querySelector('.edit-buttons')
    // .addEventListener('click', editBlogHandler);
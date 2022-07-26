// const deleteBlog = (id) => {
//     fetch(`/api/post/${id}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
// }

// const handleBlogDelete =(e)=>{
//     e.stopPropagation();
//     const blog = e.target;
//     const blogId =blog.parentElement.getAttribute('data-delete').blogid;
//     console.log(blogId)
//     deleteBlog(blogId).then(()=>{
//         console.log('awesome')
//         document.location.replace('/dashboard')

//     })

const deleteBlogHandler = async (event)=> {
    console.log(event.target)
//    event.stopPropagation()
    if(event.target.hasAttribute('data-delete')){
        console.log('inside delete blogpost handler')
        // console.log(event.target)
        const id = event.target.getAttribute('data-delete');  

    const response = await fetch (`/api/post/${id}`,{
        method: 'DELETE',
    })
    if(response.ok){
        // document.location.replace('/dashboard')
         console.log('delete')
    }

    
    }
    else if (event.target.hasAttribute('data-edit')){
     console.log('inside edit blogpost handler')
        // console.log(event.target)
        const blog_title = document.querySelector('.title').innerText
        const content = document.querySelector('.content').innerText
    console.log(blog_title)
    console.log(content)
        const id = event.target.getAttribute('data-edit');  

    const response = await fetch (`/api/post/edit/${id}`,{
        method: 'PUT',
        body: JSON.stringify({ 
          blog_title, 
          content
    })
})
    if(response.ok){
        console.log(response)
        // document.location.replace('/dashboard')
    }

    }

    // else {
    //     alert('Failed')
    //     }
    }
  

//   const editBlogHandler = async (event)=> {
    


//     if(event.target.hasAttribute('data-edit')){
//         console.log('inside edit blogpost handler')
//         // console.log(event.target)
//         const blog_title = event.target.getAttribute('data-title').value.trim();
//         const content = event.target.getAttribute('data-content').value.trim();
    
//         const id = event.target.getAttribute('data-edit');  

//     const response = await fetch (`/api/post/edit/${id}`,{
//         method: 'PUT',
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
  
  
    document.querySelector('.blog-posts').addEventListener('click', deleteBlogHandler);
    // document .querySelector('.edit-buttons').addEventListener('click', editBlogHandler);
async function commentPostFormHandler (event){
      event.preventDefault();
    console.log('inside comment form handler')
  //  console.log(document.querySelector('.blog-id').dataset)
    const blogId = document.querySelector('.blog-id').dataset.blogid;
      const content = document.querySelector('#comment').value;
      // console.log( blog_title + content)
      console.log(blogId)
      if (!content) {
        alert('please enter a comment')
        return;
      }
  
         await fetch('/api/blogpost', {
          method: 'POST',
          body: JSON.stringify({ 
            content,
            blogId
          }),
          headers: { 'Content-Type': 'application/json' },

        })
        .then (() => {
 
   document.location.reload()
         })
.catch (err => console.log(err))
console.log('posted!')
  }
    

  
    document
    .querySelector('#post-comment')
    .addEventListener('click', commentPostFormHandler);
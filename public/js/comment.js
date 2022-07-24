async function commentPostFormHandler (event){
      event.preventDefault();
    console.log('inside comment form handler')
      const content = document.querySelector('#comment').value;
      // console.log( blog_title + content)
    
      if (!content) {
        alert('please enter a comment')
        return;
      }
  
         await fetch('/api/blogpost', {
          method: 'POST',
          body: JSON.stringify({ 
           content
          }),
          headers: { 'Content-Type': 'application/json' },
        })
//         .then (() => {
  
//    document.location.reload()
//          })
.catch (err => console.log(err))
console.log('posted!')
  }
    

  
    document
    .querySelector('#post-comment')
    .addEventListener('click', commentPostFormHandler);
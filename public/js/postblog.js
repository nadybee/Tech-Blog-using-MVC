async function blogpostFormHandler (event){
  // console.log(event)
    event.preventDefault();
  console.log('inside blogpost form handler')
    const blog_title = document.querySelector('#blog-title').value.trim();
    const content = document.querySelector('#blog-content').value.trim();
    // console.log( blog_title + content)
  
    if (!blog_title || !content) {
      alert('please fill out all required fields')
      return;
    }

       await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ 
          blog_title, 
          content,
        }),
        headers: { 'Content-Type': 'application/json' },
      })
      .then (() => {

        document.location.reload() 
         })
}


  document
  .querySelector('#create-blog')
  .addEventListener('click', blogpostFormHandler);
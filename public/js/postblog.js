const blogpostFormHandler = async (event) => {
    event.preventDefault();
  console.log('inside blogpost form handler')
    const blog_title = document.querySelector('#blog-title').value.trim();
    const content = document.querySelector('#blog-content').value.trim();
    console.log( blog_title + content)
  
    if (blog_title && content) {
      const response = await fetch('/api/dashboard', {
        method: 'POST',
        body: JSON.stringify({ blog_title, content}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('could not post your blog.');
      }
    }
  };

  document
  .querySelector('#create-blog')
  .addEventListener('submit', blogpostFormHandler);
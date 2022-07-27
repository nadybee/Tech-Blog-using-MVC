/** handles post request for creatubg a new post */
async function blogpostFormHandler(event) {
  event.preventDefault()
  //user input
  const blog_title = document.querySelector("#blog-title").value.trim()
  const content = document.querySelector("#blog-content").value.trim()

  if (!blog_title || !content) {
    alert("please fill out all required fields")
    return
  }

  await fetch("/api/post", {
    method: "POST",
    body: JSON.stringify({
      blog_title,
      content,
    }),
    headers: { "Content-Type": "application/json" },
  }).then(() => {
    document.location.reload()
  })
}

document
  .querySelector("#create-blog")
  .addEventListener("click", blogpostFormHandler)

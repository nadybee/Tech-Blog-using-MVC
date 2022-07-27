//handles user editing or deleting their own blog post.

const changeBlogHandler = async (event) => {
  // console.log(event.target)
  // console.log('clicked')

  if (event.target.hasAttribute("data-delete")) {
    // console.log(event.target)
    const id = event.target.getAttribute("data-delete")
    // console.log(id)

    const response = await fetch(`/api/post/${id}`, {
      method: "DELETE",
    })
    if (response.ok) {
      document.location.replace("/dashboard")
      //  console.log('delete')
    }
  } else if (event.target.hasAttribute("data-edit")) {
    //  console.log('inside edit blogpost handler')
    // console.log(event.target)

    const blog_card = event.target.closest(".card")
    // console.log(blog_card)
    const blog_title = blog_card.querySelector(".title").innerText
    const content = blog_card
      .querySelector(".card-body")
      .querySelector(".content").innerText

    // console.log(blog_title)
    // console.log(content)
    const id = event.target.getAttribute("data-edit")

    const response = await fetch(`/api/post/edit/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        blog_title,
        content,
      }),
      headers: { "Content-Type": "application/json" },
    })
    if (response.ok) {
      // console.log(response)
      document.location.replace("/dashboard")
    }
  }
}

document.addEventListener("click", changeBlogHandler)

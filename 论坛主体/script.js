const postForm = document.getElementById('post-form');
const postList = document.getElementById('post-list');

postForm.addEventListener('submit', createPost);

function createPost(e) {
  e.preventDefault();

  const titleInput = document.getElementById('title');
  const contentInput = document.getElementById('content');

  const title = titleInput.value;
  const content = contentInput.value;

  const postItem = document.createElement('li');
  const postTitle = document.createElement('h3');
  const postContent = document.createElement('p');

  postTitle.textContent = title;
  postContent.textContent = content;

  postItem.appendChild(postTitle);
  postItem.appendChild(postContent);

  postList.appendChild(postItem);

  titleInput.value = '';
  contentInput.value = '';
}
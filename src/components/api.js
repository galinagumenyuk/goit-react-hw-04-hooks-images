const KEY = "23837167-bf1b53cb947cc958b90463dad";

export default function getImages(query, page, onSuccess, onFinally) {
  fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then((res) => res.json())
    .then((data) => data.hits)
    .then((results) => onSuccess(results))
    .finally(() => onFinally());
}

export default function api(url) {
  return fetch(window.__api_base_url__ + url)
    .then(response => response.json())
    .catch(console.error);
}

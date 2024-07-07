const fetchWithInterceptors = (url, options = {}) => {  
  console.time(url);
  
  return fetch(url, options)
    .then(response => {
      console.timeLog(url);
      if (!response.ok) {
        return Promise.reject(new Error('Failed to fetch'));
      }
      return response;
    })
    .catch(error => {
      console.timeEnd(url);
      return Promise.reject(error);
    });
}

fetchWithInterceptors('/api/data/articles?timeout=3000')
  .then(response => response.json())
  .then(data => {
    const articles = data.articles;
    document.querySelector('#data').innerHTML = articles[0].content;
  })
  .catch(error => {
    console.error('Error:', error);
  });
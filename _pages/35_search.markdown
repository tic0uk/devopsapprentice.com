---
layout: default
permalink: /search/
title: Search
---
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<div class="introheader">
Site Search
</div>



<!-- Html Elements for Search -->
<div id="search-container" class="searchbar">
<input type="text" id="search-input" placeholder="search...">
<ul id="results-container" class="searchbar"></ul>
</div>

<!-- Script pointing to search-script.js -->
<script src="/js/script.js" type="text/javascript"></script>

<!-- Configuration -->
<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json'
})
</script>

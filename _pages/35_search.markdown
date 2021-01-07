---
layout: default
permalink: /search/
title: Search
description: Search all articles and posts on devopsapprentice.com
image: /_pictures/threemonitorsetup.jpg
---

<div class="introheader">
Site Search
</div>



<!-- Html Elements for Search -->
<div id="search-container" class="searchbar">
<input type="text" id="search-input" placeholder="Search...">
<ul id="results-container" class="searchbar"></ul>
</div>

<!-- Script pointing to search-script.js -->
<script src="/js/script.js"></script>

<!-- Configuration -->
<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json'
})
</script>

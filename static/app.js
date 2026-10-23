(function () {
  'use strict';

  var root = document.documentElement;
  var themeButtons = document.querySelectorAll('.theme-toggle');

  function setTheme(light) {
    root.classList.toggle('light', light);
    root.classList.toggle('dark', !light);
    try {
      localStorage.setItem('theme', light ? 'light' : 'dark');
    } catch (error) {}
  }

  themeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      setTheme(!root.classList.contains('light'));
    });
  });

  var searchInput = document.getElementById('search-input');
  var searchResults = document.getElementById('search-results');
  var searchIndex = null;
  var searchRequest = 0;

  function loadSearchIndex() {
    if (!searchIndex) {
      searchIndex = fetch('/search-index.json')
        .then(function (response) {
          return response.ok ? response.json() : [];
        })
        .catch(function () {
          return [];
        });
    }
    return searchIndex;
  }

  function normalize(value) {
    return String(value || '').toLocaleLowerCase('tr-TR');
  }

  function searchScore(entry, words) {
    var title = normalize(entry.title);
    var description = normalize(entry.description);
    var summary = normalize(entry.summary);
    var tags = normalize((entry.tags || []).join(' '));
    var score = 0;

    for (var i = 0; i < words.length; i += 1) {
      var word = words[i];
      var hit = 0;
      if (title.indexOf(word) !== -1) hit += 8;
      if (tags.indexOf(word) !== -1) hit += 4;
      if (description.indexOf(word) !== -1) hit += 3;
      if (summary.indexOf(word) !== -1) hit += 1;
      if (hit === 0) return 0;
      score += hit;
    }

    return score;
  }

  function renderSearchResults(entries) {
    searchResults.replaceChildren();

    if (!entries.length) {
      var empty = document.createElement('div');
      empty.className = 'search-empty';
      empty.textContent = 'Sonuç bulunamadı.';
      searchResults.appendChild(empty);
      searchResults.hidden = false;
      return;
    }

    entries.forEach(function (entry) {
      var link = document.createElement('a');
      link.className = 'search-result';
      link.href = entry.url;

      var title = document.createElement('strong');
      title.textContent = entry.title;

      var description = document.createElement('span');
      description.textContent = entry.description || entry.summary || '';

      link.appendChild(title);
      link.appendChild(description);
      searchResults.appendChild(link);
    });

    searchResults.hidden = false;
  }

  function updateSearch() {
    var query = searchInput.value.trim();
    if (!query) {
      searchResults.hidden = true;
      return;
    }

    var request = ++searchRequest;
    var words = normalize(query).split(/\s+/).filter(Boolean);

    loadSearchIndex().then(function (entries) {
      if (request !== searchRequest) return;

      var matches = entries
        .map(function (entry) {
          return { entry: entry, score: searchScore(entry, words) };
        })
        .filter(function (match) {
          return match.score > 0;
        })
        .sort(function (a, b) {
          return b.score - a.score;
        })
        .slice(0, 8)
        .map(function (match) {
          return match.entry;
        });

      renderSearchResults(matches);
    });
  }

  if (searchInput && searchResults) {
    searchInput.addEventListener('input', updateSearch);
    searchInput.addEventListener('focus', loadSearchIndex);

    document.addEventListener('click', function (event) {
      if (!event.target.closest('.search-wrap')) {
        searchResults.hidden = true;
      }
    });

    if (window.location.hash === '#search') {
      searchInput.focus();
      searchInput.scrollIntoView({ block: 'center' });
    }
  }

  document.querySelectorAll('[data-search-btn]').forEach(function (button) {
    button.addEventListener('click', function () {
      if (searchInput) {
        searchInput.focus();
        searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        window.location.href = '/#search';
      }
    });
  });

  var progressFill = document.getElementById('progress-fill');
  var backToTop = document.getElementById('back-to-top');

  function onScroll() {
    if (progressFill) {
      var scrollable = document.documentElement.scrollHeight - window.innerHeight;
      var progress = scrollable > 0 ? Math.min((window.scrollY / scrollable) * 100, 100) : 0;
      progressFill.style.width = progress + '%';
    }

    if (backToTop) {
      backToTop.classList.toggle('visible', window.scrollY > 500);
    }
  }

  if (progressFill || backToTop) {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  document.querySelectorAll('.prose pre').forEach(function (pre) {
    var code = pre.querySelector('code');
    if (!code) return;

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'copy-code';
    button.textContent = 'Kopyala';
    pre.appendChild(button);

    button.addEventListener('click', function () {
      navigator.clipboard
        .writeText(code.innerText)
        .then(function () {
          button.textContent = 'Kopyalandı';
          window.setTimeout(function () {
            button.textContent = 'Kopyala';
          }, 1500);
        })
        .catch(function () {
          button.textContent = 'Hata';
        });
    });
  });
})();

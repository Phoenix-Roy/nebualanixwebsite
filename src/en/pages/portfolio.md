---
title: Portfolio
date: 2024-02-04
---
Here's where you can find projects I've worked on!

## Programming (Github Repositories)

{% if repos.length > 0 %}
Number of Repositories: {{ repos.length }}

{% for repo in repos %}
* [{{ repo.name }}]({{ repo.html_url }})
{% if repo.description.length > 0 %}
    {{ repo.description }}
{% endif %}
{% endfor %} 
{% else %}
No repository data to display
{% endif %}

## Writing

### Recent Articles on Medium

Here are my most recent articles on Medium. For a full list, 
see my [profile](https://medium.com/@nebulanix).

{% for article in medium %}
* [{{ article.title }}]({{ article.link }}) - *(published {{ article.niceDate }})*
{% endfor %}
---
title: Portfolio
slug: portfolio
date: 2024-02-04
---
Voici mes projets!

## La Programmation (Dépôts Github)

{% if repos.length > 0 %}
Nombre de Dépôts: {{ repos.length }}

{% for repo in repos %}
* [{{ repo.name }}]({{ repo.html_url }})
{% if repo.description.length > 0 %}
    {{ repo.description }}
{% endif %}
{% endfor %} 
{% else %}
Pas de données disponibles
{% endif %}

## L'écriture

### Articles Récents sur Medium

Voici mes articles les plus récents sur Medium. Pour une liste complète, 
consultez mon [profil](https://medium.com/@nebulanix).

{% for article in medium %}
* [{{ article.title }}]({{ article.link }}) - *(publié {{ article.niceDate }})*
{% endfor %}
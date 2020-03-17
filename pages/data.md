---
layout: page
title: All Examples from the Collection
permalink: /data/
collection: csv_file_data
---
<hr/>
{% assign tags =  site.datavis | map: 'title' | uniq %}
{% for tag in tags %}
  <h3>{{ tag }}</h3>
  <ul>
  {% for datavis in site.datavis %}
    {% if datavis.title contains tag %}
    <li><a href="{{ site.baseurl }}{{ datavis.url }}">{{ datavis.title }}</a></li>
    <p class="post-excerpt">{{ datavis.description }}</p>
    {% endif %}
  {% endfor %}
  </ul>
  <hr/>
{% endfor %}

{% include interactive_metadata_table.html collection=page.collection %}

[comment]: <> This demo site comes with a specific `_include` called 
[comment]: <> `interactive_metadata_table` to help you make pages like this one complete with 
[comment]: <> interactive [DataTables](https://datatables.net/) and downloadable CSVs of [comment]: <> collection metadata.


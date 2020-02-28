---
layout: page
title: Browse the Collection
permalink: /collection/
---

This site's sample collection comprises a set of objects, each of which is represented by one or more images. The collection items in this demo are provided by the [Clark Data Labs](https://clarkdatalabs.github.io/) at the University of Michigan and the [Visualizing the Future](https://visualizingthefuture.github.io//) Fellowship community. 

<!--
Do not change the first facet_by, but you can change the specific for any thereafter.
You can add more facets by adding additional arguments to the collection_gallery.html file.
-->
{% include collection_gallery.html collection='datavis' 
        facet_by='pid'
        facet_by2 = 'purpose' 
        facet_by3 = 'object_type'
        facet_by4 = 'topic'
        %}
      
---
layout: page
title: Research
permalink: /research/
---

<section class="research-section">
  <h2>Current Working Papers</h2>

  {% for paper in site.research %}
    {% include research_entry.html paper=paper %}
  {% endfor %}
</section>

<section class="research-section">
  <h2>Publications</h2>
  <p class="section-note">Peer-reviewed publications will be listed here.</p>
</section>


<section class="research-section">
  <h2>Outreach</h2>

  {% for item in site.outreach %}
    {% include outreach_entry.html item=item %}
  {% endfor %}
</section>
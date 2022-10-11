---
title: 'Good to Great: Becoming a GA4 Power User by Understanding the Events Based
  Data Model'
date: '2022-10-11'
description: Explanation of how to use the events based data model in GA4.
---

What separates good from great GA4 users?

One of the hardest components to master is the new events-based data model in GA4. It’s also one of the most valuable things you can learn to level up your GA4 skills.
This is not a beginner topic, but the new events-data model is revolutionary, both in the paradigm shift it represents, and the insights it enables.

UA’s fundamental data model separated all events into buckets – pageviews, conversions, custom events. Each of these event types had different parameters associated with them. They were rigid, and often operated out of sight and provided predictable, but ultimately difficult to adapt data. For instance, custom events could take values like label, action, and category. This paradigm aligned closely with common web use cases. 

UA’s data model consistency made it easy for almost anyone to develop tagging. Its rigidity made it difficult to adapt to new use cases and non-web analytics (like mobile apps). GA4 adopts a data model similar to most modern data warehouses (eh-hem the GBQ integration).
GA4 thinks of everything as an event which can then be distinguished by its parameters (if you know data warehouses events = facts, parameters = dimensions). Each event has as many (or as few) parameters as it needs. This multi-dimensional data schema is very powerful, but it can become very unwieldy. 

UA forced you to have a simple schema (label, action, category). Now, you have the power to add as many dimensions as you need. Web teams must strategically approach defining their event schemas or else you’ll end up with every event having dozens of custom dimensions, none of which can be compared to other events.

As a data guy I LOVE this new approach. As a consultant, I hate it. It’s highly customizable and extensible, and fits into modern concepts of data architecture, but it means that analytics implementations with poor strategy can be almost unusable. More work on the front end, but greater payoff down the road (a theme for GA4?).

So that explains what GA4’s data model is, now how can you utilize it.

**GA4 has three types of events**

1. Automatically collected events – these work out of the box and require no setup, think session start and user engagement.

2. Enhanced Measurement events – these events work with minimal setup (you just have to flip a switch). The include scroll depth, downloads, and pageviews (by the way, if you don’t have this enabled, start there).

3. Recommended events – this is where it gets a little more complicated. Recommended events are events that GA4 recognizes (and will incorporate in its reporting), but require significant setup in order to utilize. To utilize these events, you must know what dimensions are required for each. [Here’s an example of a few](https://support.google.com/analytics/answer/9267735?hl=en).

4. Custom events – any event not already captured by GA4. These events are populated by custom dimensions.

BEFORE you ever create a custom event or dimension look to see if GA4 has one already built. This is the most important thing I want to express in this thread – GA4 has an array of dimensions and events that do not work out of the box, but when implemented greatly enhance the power of your analytics. 
Let me give an example: One event that GA4 is setup to collect (but isn’t collected automatically) is purchase. GA4 has prebuilt dimensions like currency, item_brand, item_ID and literally dozens more. If you send data to these dimensions Google will populate them in its prebuilt reports.

Another example that you’ll almost certainly use, is “landing page” which becomes a dimension that you can filter all pages by (to quickly see how your paid media is performing). These tools are powerful. To use them you need to know what capabilities GA4 has. Many of the prebuilt tools are built for econmmerce and so not super relevant to higher ed, but there are many that you can and should utilize.
So what about custom dimensions? In some cases, you will have types of events that you want to track that aren’t ones GA4 doesn’t have prebuilt. One I implement for all my clients is site_kpi. I define site_kpi as one of 4 key actions all our sites are built to promote: Apply, RFI, Visit, and Give. 
Here’s an example of how I’d implement this event

**Site KPI**

Dimension 1: kpi_type = (Apply|RFI|Visit|Give)

For this event I currently only need to utilize one custom dimension. The rest I need I can get from those already provided by Google such as landing page, audience type, content grouping, etc.
When designing tags for event in GTM and GA4 ask yourselves these questions:

*Is this an event that GA4 already supports? What dimensions does GA4 recommend for recording this event? If this is an event that GA4 doesn’t support what dimensions and metrics would I need to collect to understand the event? How will I use this event paradigm for future events I might want to track and do I have a custom event or dimension(s) that I’ve already created that I can leverage?
You should be able to list every event type that you are utilizing in your GA4 implementation and what dimensions, and metrics are associated with them.*

Master the events data model in GA4 and you will be able to do unbelievable things. Bonus points, you’ll also be able to connect GA4 to your data warehouse for crazy powerful insights, but this thread is already ridiculously long, so I’ll save that for another time.

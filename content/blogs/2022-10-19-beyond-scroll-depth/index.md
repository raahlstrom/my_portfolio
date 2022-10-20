---
title: Beyond Scroll Depth
date: '2022-10-19'
description: Replace scroll depth with a more accurate measure of success.
---

Percent scroll depth is a bad metric.
 
% Scroll depth is one of the most common ways we measure webpage content engagement. Its virtue is its simplicity, anyone can understand what it means when a user gets 50% of the way down the page before navigating away. While other ways of measuring engagement require a lot of implementation (think tagging CTA button clicks), % scroll depth is easy to deploy and requires very little context to understand its meaning. It's so ubiquitous Google added it as one of its standard metrics to GA4.
 
But its simplicity is also its downfall because it makes us believe we can do things with it we can't. % Scroll depth can only be used to compare one page against itself. You can't use % scroll depth to compare multiple pages against each other. Why? Because it's based on %. The problem is most webpages aren't the same length. Too often one webpage having better "scroll depth" than another is really the product of a 30% shorter webpage.
 
Good use of scroll depth: campaign A drove 50% more users 75% down the landing page as compared to campaign B
 
Bad use of scroll depth: Landing page C is more engaging than landing page D because twice as many users get to the bottom.
 
What can you use instead? I want to propose one option that keeps the good of scroll depth, but mitigates some of its shortcomings - scroll units. Instead of recording what % of a landing page users scroll to, record how many pixels deep they get. The tag is very similar in GTM. Pick a pixel interval count (don't make it too small or it can make your site load lag). Then, each time a user scrolls x pixels deeper into the page an event will fire. What you're left with is a metric that will allow you to compare different audiences on one landing page and different landing pages against each other.
 
When analyzing the data focus on the rate at which users leave the page. This method is also better because it makes it easy to pinpoint where on the page users are getting lost or finding what they're looking for.
 
This method is not perfect. Any scroll metric is likely inflated by users who quickly scroll through a page, but don't engage with any of the content. Always use multiple measures of engagement to understand the effectiveness of content on a page. Additionally, the goal of a website is not to compel users to scroll ever deeper. Sometimes, finding exactly what you're looking for at the top of a page and getting out is actually the sign of a more effective page. Know what your LP is trying to do before analyzing it.




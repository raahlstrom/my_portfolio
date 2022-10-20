---
title: Better Analytics with Empirical Bayes Estimation
date: '2022-10-19'
description: Using Empirical Bayes Estimation better approximates actual values when sample sizes vary between the samples being compared.
---

Are you accounting for uncertainty in your paid media and digital reporting?

One of the biggest shifts for when I moved from my survey research role to the analytics work I do now was the transitioning from plotting out the journey to piloting the ship. In analytics we need to communicate a lot of data, continuously, and recommend optimizations off of it. Your caveats, "it depends", and "on the other hand", can get lost. You need to spot icebergs and storms before your team runs into them.

In paid media and digital, we need to make decisions - one or two numbers that point us in the right direction. Nowhere is this more evident than in the wide use of KPIs as benchmarked averages to compare against.

At first I tried to solve this with more complex visuals, but again, when you're piloting the ship, when money is going out the door, and when the technical experience of your audience varies widely, you need something more directional.

I want to propose one solution today - empirical bayes estimation. Ok, I know what you're thinking. I just spent all this time talking about how NOT to be overly technical, and now I'm talking about bayes theorem?!

Bayesian techniques are really cool because they work the way our brains do. They allows you to start with what you expect to happen and then updates that assumption as you have more data. This isn't a how-to, but I want to explain why you should consider this approach.

Let's look at an example - say you have two channels, search and display. You are optimizing for clicks so you're looking at click through rate. Let's say search has a CTR of 5%, display is 3%. It might appear search is performing far better than display. CTR can be misleading though. It is a success rate calculation. For instance, I may make a pull up jump shot (success rate 100%), but that does NOT make me a better shooting guard than James Harden. True success is repeated success, and that's what bayes lets us quantify.

Returning to our example above, let's say search has only generated 50 total clicks, while display has generated 1000. Using empirical bayes, the adjusted CTR might look much closer to a tie - search is 3.2%, display is 2.9%. Still a simple KPI, but smarter.

This thread is meant to be a proof of concept, not a how-to (although if there's interest I'd defintely consider showing the math!!!), but I hope it gives you some ideas about how to elevate your reporting KPIs to better reflect uncertainty, and drive more data empowered decisions!
---
title: 'Prometheus University: The First Problems'
author: ''
date: '2023-01-11'
slug: []
categories: []
tags:
  - prometheus_university
description: In this blog post, the author describes their experience using chatGPT to build a university website from scratch. They discuss the process of using chatGPT in multiple simultaneous conversations to perform different tasks, the challenges of using chatGPT for large coding projects, and the limitations of chatGPT in terms of strategic thinking and design. The author also reflects on the potential of chatGPT as a tool for developers to be more efficient and effective, but notes that chatGPT is not a replacement for human skills in design and architecture. This blog post offers a practical exploration of the capabilities and limitations of chatGPT in web development.
---

Prometheus.edu is where I've started running into trouble. I think this was partially my fault, although it was interesting to kick the tires on chatGPT and start to hear where things rattle about a bit. There were several things that slowed my progress. First, the task is far more complicated. I want to create a working website that resembles one you'd find for any college or university. To do this I opened three chats simultaneously. One was my "strategist" feed (this is who developed my brand platform). One was my "UX designer" and one was my "developer". I've found in the past that if you try to do everything in one conversation, ChatGPT gets too smart for its own good and tries to pull in things from parts of your conversation that you don't necessarily want it to. One thing I've learned when using this tool (and from my general idea of how these systems work) is that you want to condition the algorithm to become a certain kind of "agent".


The T in GPT stands for transformer. It's a super crazy innovative bit of technology that is part of what makes chatGPT so smart. The thing that makes transformers revolutionary is that they can recall back to earlier in the conversation. I'll let chatGPT give a more detailed explanation. "ChatGPT explain transformers in AI in a non-technical way that someone unfamiliar with AI would understand". A transformer is a type of artificial intelligence model that is used to process and understand natural language… It works by analyzing the patterns and relationships within a large dataset of text and using this information to "transform" the input in a way that allows it to perform a specific task…One of the key features of transformers is that they are able to "attend" to different parts of the input at the same time, which allows them to capture complex relationships and connections within the data". Essentially if you have too many conversation threads going simultaneously, this "attention" can become a problem, and all the sudden you have the developer giving you design advice (not good!).


I began by asking my developer to tell me how to build a site using github pages (where I'm going to host this because it's easy and I already am comfortable with github from my real work). It actually gave amazingly clear instructions. + 1 Point chatGPT. I then asked it to help me device a simple file structure for my website which it did, nothing too exciting.


Ok, but here's where it got tricky - I want to see how far I can get just building. No CMS, no sophisticated coding environment. Just me and chatGPT. I quickly realized how daunting this was. Again, I don't build websites. I have built a little personal one, but nothing so big and complicated, and never without a template. I wasn't sure where to start. I asked my UX designer chatGPT to give me the description of my homepage. On the one hand, I was pretty impressed, what it delivered sounds pretty similar to many higher ed websites I've worked with. At the same time though it was really unimaginative, and I had asked it to give me descriptions of what should go in each section, but it mostly delivered simple ideas like "add some text and images". Not impressive. It was describing a simple higher ed website, but it wasn't synthesizing anything strategic for me.
My developer wasn't having any more luck. I quickly realized one of the big challenges with using chatGPT for coding large projects like a website is its inability to think about my whole codebase. It would quickly meet its word count when setting up an HTML or CSS template, for instance. ChatGPT is great at helping developers be better/faster/more efficient (trust me I know, I wrote the longest, most complex regex of my career with chatGPT the other day, it was awesome!!). But it's not good at the skills that really make a great web developer - the ability to design and interconnect vast, complex systems into a logical architecture. I found myself using too much of my own knowledge Frankenstein-ing together the various bits of code GPT gave me into something workable. It was still surprisingly good at creating code for me (I asked it to create a mega menu and I did, WOW!), but the dream of chatGPT simply building my website for me based on nothing more than written instructions seemed elusive…for now.


In essence, the three big problems I faced were

1.) writing code for a massive program (website) in chatGPT that has code living across multiple files simultaneously, inserting new components to my code all while maintaining the functionality and extensibility of what I'd already developed.

2.) I needed to think more about how to give GPT commands. I couldn't just jump in at the middle. I needed to think through how to build a website and then leverage GPT where appropriate. For instance, I wasn't going to be able to just tell it to spit out a homepage design and then code it for me. I was going to need to build my component library, basic page templates, and then use these elements to build my site. ChatGPT sometimes feels like a super brainy toddler. I need to cut up its food for it.

3.) I needed to find a way to get chatGPT to think strategically. I'm not a designer, can chatGPT be one? Or would I only be able to make it design the most bland straightforward school website imaginable?
At the time of writing this I'm not sure, but when I try this all out I'll keep you posted, otherwise this will be a very very quick experiment!!!

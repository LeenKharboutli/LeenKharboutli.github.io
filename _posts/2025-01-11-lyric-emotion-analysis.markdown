---
layout: post
title:  "Analyzing Emotional Content in Lyrics using DistilBERT"
date:   2025-01-11 18:52:00 -0500
categories: jekyll update
---

This project aimed to answer a question I was quite curious about, as an avid music listener: "How has the emotional content of lyrics in songs changed over time?" [View the full project on GitHub.](https://github.com/LeenKharboutli/lyric-emotion-analysis)

The dataset used in this project is the "Music Dataset: Lyrics and Metadata from 1950 to 2019" by Moura et al. (2020), which consists of music lyrics and metadata on those lyrics spanning nearly seven decades.

For this analysis, I used a pretrained DistilBERT model loaded from the Hugging Face Model Hub. I fine-tuned this DistilBERT model on the "Emotions Dataset for NLP" dataset by Govi (2019), which contains labeled data collected from Twitter, labeled by one of six emotions: "anger", "joy", "surprise", "fear", "love", and "sadness". I then used this fined-tuned model to predict an emotion label for the lyrics of each song in the "Music Dataset: Lyrics and Metadata from 1950 to 2019" dataset.

Then, in a Jupyter Notebook, I took the predictions made by DistilBERT, associated each with its corresponding entry in the original "Music Dataset: Lyrics and Metadata from 1950 to 2019" dataset, and performed a time series analysis on this data. The aim was to see what trends there might have been in the overall emotional content of lyrics released over this time period.

What I found in this analysis is that songs released in a particular year were increasingly more likely to express "anger" and "fear" and less likely to express "love", as time went on.



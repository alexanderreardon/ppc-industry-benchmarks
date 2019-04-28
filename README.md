# PPC Industry Benchmarks

Shows the average CTR, CPC, Conversion Rate, and CPA for both Search and Display campaigns on Google Ads in an interactive chart. Based on 14,197 US-based WordStream client accounts.

### About

- Built using React and Chart.js
- All data courtesy of [WordStream](https://www.wordstream.com). Sources:
    - [Search & Display data (Google)](https://www.wordstream.com/blog/ws/2016/02/29/google-adwords-industry-benchmarks)
    - [Search & Display data (Bing)](https://www.wordstream.com/blog/ws/2017/11/06/bing-ads-performance-benchmarks)
    - [Shopping data (Google & Bing)](https://www.wordstream.com/blog/ws/2019/04/01/shopping-ads-benchmarks)


### TODO:
1. Add data labels to chart.
1. Add toggle for displaying data labels (?)

### Log:
4/27/2019 - Added Bing Ads support, language around dropdown dropdowns to guide user.
4/27/2019 - Added meta description & image tags, re-organized <head> in index.html. Added favicon.
4/28/2019 - Added data labels to chart using `chartjs-plugin-datalabels`.
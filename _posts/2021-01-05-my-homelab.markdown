---
layout: post
permalink: /myhomelab/
published: true
categories: Homelab
image: /_pictures/threemonitorsetup.jpg
sticky: true
description: Read about my current homelab set up and the equipment that I'm currently using for my studies and articles written on devopsapprentice.com.
tags: [nvidia,i5,homelab,virtualisation,virtualization,kvm,ssd,970,gtx,ram,furna,E2,standing,desk,linux,ubuntu,centos,corsair,vengeance,8600k,overclocked,three,monitor,monitors,PLL,dell,ultrasharp,3007WFP,U2412M,Lenovo,samsung,evo,NVMe,XP-Pen,Deco,Pro,Professional,Graphics,Drawing,Tablet,Logitech,G402,Hyperion,Fury,Sennheiser,HD, 599,Fiio,E10K,Headphone,Amplifier,Game,Max,GMX,Silent,White,PC,case,dual,boot,jekyll,digital,ocean,droplet] 
---
When you're first starting out, a homelab doesn't have to be an expensive rig that takes up lots of space. I'm currently using a single machine for all of my homelab projects and activities. I'm a firm believer that virtualisation bypasses the need for numerous separate machines unless you have a specific need.

If I need another computer in my network, I can simply spin up a new VM, attach it to the virtual network that I've set up and I'm good to go. If I make a mistake on a VM, it's no issue to simply remove the machine. I can use snapshots before any risky moves and restoration to a working known state takes minutes.

At this point, I'll only buy more hardware when I have a task or project that definitely needs dedicated hardware. I was a gigging musician for many years, and often bought gear without fulling using it, so I try to avoid that with computers these days.

One other thing to bear in mind is more and more production environments are moving into the cloud and using virtualisation. Getting experience in running virtual machines at home and understanding their strengths and limitations is a good skill to pick up in a safe environment. Modern computers will happily run at least one virtual machine at a time, and if you're sensible with resourcing then usually they can run a great deal more than that.

Having said all of that, my main rig and accessories have built up over the years and so has began to gather a price tag. It is absolutely possible to get a reasonably specced i5 with 8gb ram desktop for under £200 if you're willing to buy second hand, and I bought my wife's PC with those specs and a 250gb SSD for £105 off Ebay, so it pays to shop around. As time goes on, you can always upgrade parts if you buy a desktop.  

My main PC currently has the following specification;
<br><br>
<a href="/_pictures/threemonitorsetup.jpg" target="_blank">
<img src="/_pictures/threemonitorsetup.jpg" alt="three monitor home set up" style="margin-top:-2px;" class="leftimg" /></a>
<a href="https://ark.intel.com/content/www/us/en/ark/products/126685/intel-core-i5-8600k-processor-9m-cache-up-to-4-30-ghz.html" target="_blank">>> Intel i5-8600K overclocked from 3.6 GHz to 4.8 GHz<br></a>
<a href="https://www.scan.co.uk/products/16gb-(2x8gb)-corsair-ddr4-vengeance-lpx-black-pc4-19200-(2400)-non-ecc-unbuffered-cas-14-16-16-31-xm" target="_blank">>> 24GB Corsair Vengeance LPX DDR4 RAM<br></a>
<a href="https://www.techpowerup.com/gpu-specs/geforce-gtx-970.c2620" target="_blank">>> NVIDIA GeForce GTX 970<br></a>
<a href="https://www.scan.co.uk/products/game-max-silent-gaming-pc-computer-chassis-2x-usb-30-2x-fan-controllers-sd-card-reader-water-cooling" target="_blank">>> Game Max GMX Silent White PC case<br></a>
<a href="https://www.amazon.co.uk/Samsung-Inch-SATA-Internal-MZ-76E1T0B/dp/B078DPCY3T" target="blank">>> 1TB Samsung 860 EVO SSD (used for Linux)<br></a>
<a href="https://www.amazon.co.uk/Samsung-Inch-SATA-Internal-MZ-76E1T0B/dp/B0781Z7Y3S?th=1" target="blank">>> 500GB Samsung 860 EVO SSD (used for Windows)<br></a>
<a href="https://www.amazon.co.uk/Samsung-MZ-V7S250BW-Solid-State-Drive/dp/B07MHXYL6T/ref=sr_1_6?dchild=1&keywords=nvme+ssd+samsung&qid=1609861955&s=computers&sr=1-6" target="blank">>> 250 GB Samsung 970 EVO NVMe (used for Windows)<br></a>
<a href="https://shop.westerndigital.com/products/internal-drives/wd-black-desktop-sata-hdd#WD2003FZEX" target="_blank">>> WDD 2TB sata HDD (used for Windows)<br></a>
<br>

I stopped using Windows as my main OS on both my work and home machine and began to live out of Linux. I still dual boot a copy of Windows at home as I still use it for gaming and photo editingwhen I need to be sure a document will come out as planned), it's mostly gathering dust at the moment.

I'm also currently using the following in my office;
* <a href="https://www.dell.com/downloads/emea/services/uk/en/3007WFP.pdf" target="_blank">1x Dell Ultrasharp 30" 2560 x 1600 at 60 Hz (3007WFP)</a>
* <a href="https://www.dell.com/is/business/p/dell-u2412m/pd" target="_blank">2x Dell UltraSharp 24" 1920 x 1200 at 60hz (U2412M)</a>
* <a href="https://www.furna.co.uk/products/furna-electric-standing-desk-sit-stand-desk" target="_blank">Furna E2 Standing Desk</a>
* <a href="https://www.logitechg.com/en-gb/products/gaming-mice/g402-hyperion-fury-fps-gaming-mouse.html?utm_campaign=dr&utm_source=google&utm_medium=paid_search&gclid=CjwKCAiA_9r_BRBZEiwAHZ_v10M_gcFfOPD8d81aUEfvCND_ZobBYnerowwX8MQknzVZ6MLekZWZ1xoC7KMQAvD_BwE" target="_blank">Logitech G402 Hyperion Fury</a>
* <a href="https://www.amazon.co.uk/Sennheiser-Special-Open-Headphone-Black/dp/B07Q7S7247/ref=sr_1_4?dchild=1&keywords=sennheiser%2Bheadphones%2B599&qid=1610018324&s=electronics&sr=1-4&th=1" target="_blank">Sennheiser HD 599 Special Edition</a>
* <a href="https://www.amazon.co.uk/Fiio-E10K-Headphone-Amplifier-Black/dp/B00LP3AMC2" target="_blank">Fiio E10K Headphone Amplifier</a>
* <a href="https://www.amazon.co.uk/Lenovo-Keyboard-SK-8827-SD50L80069-4X30M86917/dp/B07MBF6LFC/ref=sr_1_6?dchild=1&keywords=lenovo+keyboard&qid=1610018000&s=electronics&sr=1-6" target="_blank">Lenovo Preferred Pro II USB Keyboard - UK English </a>
* <a href="https://www.amazon.co.uk/XP-Pen-Professional-Graphics-Pressure-Battery-Free/dp/B07RWZYVS9/ref=sr_1_7?dchild=1&keywords=xp-pen+deco&qid=1610018527&s=electronics&sr=1-7" target="_blank">XP-Pen Deco Pro Professional Graphics Drawing Tablet</a>

I'll likely upgrade the graphics card at some point in the next year but otherwise, I'm very happy with the set up I've got.

In addition to the above, I've recently purchased a cloud server from <a href="digitalocean.com" target="_blank">Digital Ocean</a> which is 1 x CPU, 2GB RAM and has 45GB SSD. This is being used to host this site, a mail server and I'm running continuous integration onto the server using Git. This website is built using <a href="https://jekyllrb.com/" target="_blank">Jekyll</a>, along with the <a href="https://jekyll-themes.com/leaf/" target="_blank">leaf theme</a>, which I've hacked to bits and made CSS changes all over the place to create what you're seeing now.

I'll update this page as I undoubtedly upgrade or purchase more equipment.

Thanks for reading,<br>
Tim
<br><br>
<div><a id="l" href="javascript:history.back()"><< Back to Previous Page</a>&nbsp;</div>
<br>

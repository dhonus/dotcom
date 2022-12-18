---
title: Useful NetBSD commands to get a working installation with DWM
date: "2022-12-16"
thumbnail: "bsd.jpg"
---

# Useful NetBSD commands to get working installation with DWM
I might need this in the future, really don&rsquo;t want to figure it out again and it&rsquo;s good website-filler.   
Some things are done quite differently to freebsd and thanks to its smaller userbase it can be hard to get good search results. Here I present some notes I have taken over the course of time I have spent using NetBSD. Also just before we start, note my system specs and make changes to the commands accordingly. i5 6600 (4 cores); AMD RX 570; 8G of ram; no wifi card; B150M-D3H motherboard hence its ethernet.
To avoid typing out all these commands, I made a script to automate them. But you can&rsquo;t have it. It&rsquo;s mine. All jokes aside, I haven&rsquo;t tested it and it would probably just break your installation. The contents, however, are more or less what you will find in this guide.

## To fix SSL errors with curl and git
```shell
$ pkgin in mozilla-rootcerts
$ mozilla-rootcerts install
```

## Good website to get sauce
[paedebucher.ch](https://paedubucher.ch/articles/2020-08-11-freebsd-on-the-desktop.html)

## Get a good mirror
Or watch your computer download at speeds of the 1980s. Most mirrors are pretty horrid... Anyway, you need to run these nice commands.
```shell
 $ PKG_PATH="https://cdn.NetBSD.org/pub/pkgsrc/packages/NetBSD/$(uname -p)/$(uname -r | cut -d_ -f1)/All"
 $ export PKG_PATH
 $ pkg_add -v pkgin
```

The following commands after having pkgin installed
```shell
 $ mkdir -p /usr/pkg/etc/pkgin
 $ touch /usr/pkg/etc/pkgin/repositories.conf
 $ vim /usr/pkg/etc/pkgin/repositories.conf
```

The file repositories.conf has the a list of your mirrors. At the end of the file add the following:  
* <strong>IMPORTANT!</strong> Change the number after &hellip;/amd64/ to your version of NetBSD. In my case, I am using 9.1, so I will write in 9.1. Also note that <strong>amd64 = x86_64</strong>. Oh the names.  
  * ```http://ftp.netbsd.org/pub/pkgsrc/packages/NetBSD/amd64/9.1/All/```
* If you are using a different architecture to amd64, visit the website <a href="http://ftp.netbsd.org/pub/pkgsrc/packages/NetBSD/">http://ftp.netbsd.org/pub/pkgsrc/packages/NetBSD/</a> in your browser and find your actual architecture and use its link that looks like the one above. Then export the same link like this:
  * ```$ export PKG_PATH=”http://ftp.netbsd.org/pub/pkgsrc/packages/NetBSD/amd64/9.1/All/```

You can then install the pkgin package manager and use it from then onwards, your mirrors should work fine now. Remember to change the number when you upgrade to a new version of NetBSD.  
```shell
$ pkg_add -v pkgin
$ pkgin update
```

## dwm won't compile
This is to be expected, GNU/Linux and BSDs are different systems. Thankfully the suckless devs, [although apparently Nazis](https://news.ycombinator.com/item?id=20845633), are really good programmers and only a few things will have to change.
```shell
$ cd dwm
$ make
```
#### drw.c:5:10: fatal error: 'X11/Xlib.h' file not found
```#include <X11/Xlib.h>```

If you&rsquo;ve used dwm on freeBSD or openBSD, you may be used to changing the location of the X11R6 header files to <em>local</em> in the <strong>config.mk</strong> file. This file, located inside your dwm folder needs these variables changed, but in a way that is different to open and freebsd.

Install freetype2, you will need it:
```shell
$ pkgin in freetype2
```

### Use this command to find the missing file.
```shell
$ find / -type f -name Xlib.h
```

## NetBSD 
```shell
X11INC = /usr/X11R6/include   -->  X11INC = /usr/X11R7/include
X11LIB = /usr/X11R6/lib  --> 	X11LIB = /usr/X11R7/lib
...
FREETYPEINC = /usr/X11R7/include/freetype2
```

## FreeBSD
```shell
X11INC = /usr/X11R6/include   -->  X11INC = /usr/local/include 
X11LIB = /usr/X11R6/lib  --> 	X11LIB = /usr/local/lib
...
FREETYPEINC = /usr/local/include/freetype2
```
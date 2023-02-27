---
title: RSS reader in Rust
date: "2023-02-27"
thumbnail: "rss.png"
---

## Arcanum RSS
I had long wanted to write my own RSS reader, even just for the exercise. 
I've used a few different ones over the years, but I've never been satisfied with any of them.
And so, I decided to write my own. 

Here is a link to the [repository](https://github.com/dhonus/arcanum).

## Tauri
At around the same time I had discovered [Tauri](https://tauri.studio/en/). Tauri is a very interesting framework.
It is very similar to Electron, but the backend is written in Rust instead of Node.js. Also, if that wasn't enough,
it doesn't bundle a full chromium binary in the exectuable, but instead uses the system's webview.
This gives us a few advantages:
* much faster
* MUCH smaller (5-6 MB instead of 100+ MB)
* much more secure

The development process using Tauri is very similar to that of Electron. You are free to use any
web framework you want, and you can use any JS library you want. I decided to use Svelte out of my
preference for the framework, and because tauri provides a template for it.

The problems of Tauri essentially stem from the fact that it is still in beta.
The stability is quite good, but there are still some issues with the documentation and the API.
For example, figuring out why the compiled AppImage file couldn't write to the filesystem took me
quite a while. It turns out that Tauri requires you to use their API calls to write to the filesystem,
and not the standard Rust ones.

This piece of code was the solution to my problem:
```
use tauri::api::path::{app_data_dir, data_dir};
use std::env;

let path = path::data_dir().unwrap();
let the_path = path.to_str().unwrap();

println!("The current directory is {} and the suggested if", the_path);

let root = Path::new(the_path);
assert!(env::set_current_dir(&root).is_ok());
```
By setting a new working directory, I was able to write to the filesystem and not to a random /tmp directory.

## Tech used
An RSS reader is very simple. It is a single page application that displays a list of feeds, and
a list of articles from the selected feed. I have, however, still used a few libraries to make this project:
* [rss](https://crates.io/crates/rss) for parsing RSS feeds
* [reqwest](https://crates.io/crates/reqwest) for making HTTP requests
* [svelte](https://crates.io/crates/svelte) for binding Rust structs to Svelte components
* [tauri](https://crates.io/crates/tauri) for interacting with the system
* [tauri-svelte](https://crates.io/crates/tauri-svelte) for binding Rust functions to Svelte components
* [csv](https://crates.io/crates/csv) for reading and writing the feed list



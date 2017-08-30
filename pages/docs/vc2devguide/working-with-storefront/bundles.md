---
title: Bundles
description: This article describes a process of creating JS and CSS bundles for Virto Commerce
layout: docs
date: 2016-05-16T10:49:50.627Z
priority: 7
---
## Bundling & minification

**Attention:** while theme including **bundlesconfig.json** file, you *must not* use [Bundler & Minifier](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.BundlerMinifier) Visual Studio extension with theme. Look at [Appendix: bundling & minification process workflow](#appendix-bundling--minification-process-workflow) for details about why.

### Visual Studio (any version)

Bundling & minification will work automatically when you save file and on build.

Tip: if bundling & minification failed, you, probably, need to run gulp **watch** task manually after that. Go to **Task Runner Explorer** (in Visual Studio) and click **Run** on task **watch**.

### Visual Studio Code

Bundling & minification will work automatically on build. If you want to automatically bundle & minify files on save, please, install & configure [Blade Runnner](https://marketplace.visualstudio.com/items?itemName=yukidoi.blade-runner) Visual Studio Code extension.

Tip: if bundling & minification failed, you, probably, need to run gulp **watch** task manually after that. Go to **Command Palette (Ctrl+Shift+P)** and type
```
task watch
```
then press Enter.

### Other editors

Run
```
gulp watch
```
on command line if you want to bundle & minify files on save or run
```
gulp default
```
manually when you need to bundle & minify theme files.

### How to add bundle to layout

```
{% raw %}{{ 'bundle/scripts.js' | static_asset_url | append_version | script_tag }}{% endraw %}
```
  * **static_asset_url** means that this file is static content of site;
  * **script_tag** or **stylesheet_tag** will generate
    ```
    <script ... >
    ```
    or
    ```
    <link rel="stylesheet" ... >
    ```
  * **append_version** is used to correctly invalidate browser cache for bundles, make sure that it's added after **static_content_url** (or other url filter), not at the end, for example.

## Appendix: List of available tasks

1. **default**: default task. Bundles and minifies theme files.
2. **clean**: removes bundled & minified files.
3. **lint**: runs **eslint** to check for warnings & errors in javascript files. Look at [eslint site](https://eslint.org/) for details.
4. **min** and **min:js**, **min:css**, **min:html**: minify all or specified types of files.
6. **watch**: watching to any changes on bundled & configuration files and update bundles when any change occurs.
7. **compress**: creates zip package with all needed files to deploy theme on storefront.

## Appendix: Bundling & minification process workflow

We're using gulp to bundle & minify files on theme, because it support a lot of possible customizations and has a plugins for css minification and correct source maps generation. Wrong source map generation and lack of css minification is a primary reason why we do not use Bundler & Minifier extension in Visual Studio.

When you run the **default** task to bundle & minify theme, the following happens:
1. ESLint runs and output warnings and errors in javascript code.
2. Javascript minifies and source maps generates.
3. CSS processes by [Autoprefixer](https://github.com/postcss/autoprefixer) with [the following browsers support](docs/vc2userguide/what-is-commerce-manager/minimum-requirements) (documentation may be sometimes outdated; browser versions specified in gulpfile then specified in docs, not vice versa).
4. CSS minifies and source maps generates.

---
author: 'Virtocommerce'
date: '2016-06-09'
category: Release
is-trending: 'true'
permalink: blogs/news/virtocommerce-2-11-release-notes
tags:
  - '2'
  - Announcements
  - Ecommerce
  - 'Enterprise Ecommerce'
  - Features
  - 'Open Source'
  - 'Release notes'
  - 'SEO'
title: 'VirtoCommerce 2.11 Release Notes'
main-image: 'assets/images/blog/release-2-11-primula.jpg'
published: Private
---
The main focus of this release was the development process change and related source code redesign.
<!--excerpt-->"
![](assets/images/blog/without-source-code-development-process-data-flow-1.png "Developing a custom solution. Data Flow Diagram")

# Modules management

Many changes were made to modules management UI:

![](assets/images/blog/modules.png)

The main modules data source is the (online) module registry. All module versions will be stored there since the 2.11 release. Now you can install or update a VC module instantly after its release and add it to the registry.

Check for more info on [Modules management](http://docs.virtocommerce.com/x/4wDr) tutorial.

# Source code repository restructure

The repository structure has changed dramatically. The [vc-platform](https://github.com/VirtoCommerce/vc-platform) repository on GitHub was split into multiple repositories having clear and concrete purposes:

* Only a clean VirtoCommerce Platform was left in the vc-platform repository.
* Storefront website now resides on its own [vc-storefront](https://github.com/VirtoCommerce/vc-storefront) repository.
* Every logical module was isolated from the Platform (and other modules) to its own repository (vc-module-catalog, vc-module-store, vc-module-cart to name a few).

![](assets/images/blog/vc-repository-split.png "vc-community repository structure change")

# Future releases and versioning

2.11 is the last version to release VC Platform, Storefront and Commerce modules all at once and while keeping the identical version number. We'll be delivering "feature based" releases more often so deployers will receive changes and features more quickly.

The version numbers of VC parts should diverge over time.

# Documentation updates

Some new articles appeared on our documentation site covering the long awaited topics for developers:

* [Developing a custom solution](http://docs.virtocommerce.com/x/BwAEAQ)
* [Working with platform API](http://docs.virtocommerce.com/x/JQAqAQ)
* [How to generate module API C# client](http://docs.virtocommerce.com/x/BwAqAQ)
* [Process of custom module contributing](http://docs.virtocommerce.com/x/XQAqAQ)
* [Creating module packages](http://docs.virtocommerce.com/x/3gDr)
* [Storefront Source Code Getting Started](http://docs.virtocommerce.com/x/TQAqAQ)
* [How to localize catalog product names in storefront](http://docs.virtocommerce.com/x/CQAnAQ)

Articles reviewed and updated:

* [Modules management](http://docs.virtocommerce.com/x/4wDr) tutorial
* [Deploy from GitHub to Microsoft Cloud Azure](http://docs.virtocommerce.com/x/K4Dd)
* [Source Code Getting Started](http://docs.virtocommerce.com/x/W4Dd)
* [Creating new module](http://docs.virtocommerce.com/x/aQDL)
* [Extending Members domain types](http://docs.virtocommerce.com/x/FQAgAQ)

## Migration to ver. 2.11

Migrate your own modules to 2.11 as described in - coming soon:)
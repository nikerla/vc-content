---
title: Virto Commerce 2 Documentation - Developer Guide - Bundles
layout: docs
date: 2016-05-16T10:49:50.627Z
permalink: docs/vc2devguide/bundles
---
[Docs](docs) / [Virto Commerce 2 Documentation](docs/vc2devguide) / [Working with Storefront](docs/vc2devguide/working-with-storefront) / Bundles
***
# Bundles

Open the App_Start\BundleConfig.cs file and examine the RegisterBundles method which is used to create, register and configure bundles. The following code shows a portion of the RegisterBundles method.

![](assets/images/docs/budnles1.png)

This code creates new JavaScript and CSS bundles for Storefront and Checkout layouts.

After you have registered your bundles you can easily add it to your theme layout using **script_bundle_tag** liquid tag.

![](assets/images/docs/bundles2.png)
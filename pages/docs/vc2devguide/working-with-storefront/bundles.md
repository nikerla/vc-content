---
title: Bundles
description: This article describes a process of creating JS and CSS bundles for Virto Commerce
layout: docs
date: 2016-05-16T10:49:50.627Z
priority: 7
---
Open the App_Start\BundleConfig.cs file and examine the RegisterBundles method which is used to create, register and configure bundles. The following code shows a portion of the RegisterBundles method.

![](../../../assets/images/docs/budnles1.png)

This code creates new JavaScript and CSS bundles for Storefront and Checkout layouts.

After you have registered your bundles you can easily add it to your theme layout using **script_bundle_tag** liquid tag.

![](../../../assets/images/docs/bundles2.png)
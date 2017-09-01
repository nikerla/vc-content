---
date: '2017-08-31'
title: 'Deploy Storefront from precompiled binaries'
layout: docs
---
## Summary

Use this guide to <a class="crosslink" href="https://virtocommerce.com/ecommerce-hosting" target="_blank">deploy</a> and configure precompiled Virto Commerce Storefront.

## Prerequisites

* Windows Server 2008 R2 SP1 or later
* Internet Information Services 7 or later
* <a href="https://www.microsoft.com/en-us/download/details.aspx?id=40784" rel="nofollow">Visual C++ Redistributable Packages for Visual Studio</a>
* Microsoft .NET Framework 4.6.1
* Microsoft SQL Server 2008 or later

## Downloading the precomplied binaries:

Navigate to the <a href="https://github.com/VirtoCommerce/vc-storefront/releases">Releases section of Virto Commerce Storefront in GitHub.</a>

You will find **VirtoCommerce.Storefront.2.x.x.zip** file. In this file the site has already been built and can be run without additional compilation. It does not includes all the source code.

Unpack this zip to a local directory **C:\vc-storefront**. After that you will have the directory with storefront precompiled files.

### Upload files to the web server

Upload all data from **C:\vc-storefront** folder to the web server in IIS application root directory **C:\inetpub\wwwroot**.

## Setup

### Configure Web API base URL

* Open the **Web.config** in a text editor.
* In the **connectionStrings** section find the **add** node named **VirtoCommerce BaseUrl**. Change its **connectionString** attribute value to the URL of your **VirtoCommerce Platform** application.

### Configure Web API credentials

* Open the **Web.config** in a text editor.
* In the **appSettings** section find the **add** nodes named **vc-public-ApiAppId** and **vc-public-ApiSecretKey** and change its values to values generated in **VirtoCommerce Platform** application.

### Configure CMS content storage

* Open the **Web.config** in a text editor.
* In the **connectionStrings** section find the **add** node named **ContentConnectionString**. Change its **connectionString** attribute value to the path of folder specified in **CmsContentConnectionString** connection string in your **VirtoCommerce Platform** installation (**~/App_Data/cms-content** by default, i.e. you must use **provider=LocalStorage;rootPath=C:\inetpub\wwwroot\admin\App_Data\cms-content** connection string in this case).

### Configure permissions for App_Data folder

Open properties for **C:\inetpub\wwwroot\App_Data** folder and give permission **Modify** to **IIS_IUSRS** user group:

![Setting permissions for App_Data folder](../../../../assets/images/docs/image2016-4-29_17-18-17.png "Setting permissions for App_Data folder")

### Configure IIS

* Open the **IIS Manager** and create a new website or new application inside an existing website.
* In the **Physical path** field enter the full path to the **C:\inetpub\wwwroot** folder:
![Website configuration in IIS](../../../../assets/images/docs/add-storefront-website.png "Website configuration in IIS")
* Select application pool which uses **.NET CLR Version 4.0** and **Integrated** pipeline mode:
![Select an application pool](../../../../assets/images/docs/image2016-4-29_17-20-13.png "Select an application pool")

Open the VirtoCommerce Storefront application in the browser.

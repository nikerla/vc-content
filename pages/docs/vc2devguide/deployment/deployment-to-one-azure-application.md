---
title: Deploy platform and storefront to one Azure application
description: Detailed instructions described how to deploy Virto Commerce platform and storefront to one Azure application
layout: docs
date: 2016-07-11T14:22:18.390Z
priority: 1
---

## Step-by-step guide
* First make storefront  azure deployment  as it described in  [Storefront Microsoft Azure Getting Started](docs/vc2devguide/deployment/storefront-deployment/storefront-microsoft-azure-getting-started) only skip **Content Storage Connection string** step
* Clone  <a href="https://github.com/VirtoCommerce/vc-platform" target="_blank">Virto Commerce platform from GitHub</a>  to local disk - '**C:\vc-platform**'.
* Execute '**C:\vc-platform\deploy.cmd**' script and wait until it finished as result should appear folder - '**C:/vc-platform/artifacts/wwwroot**'.
* Add  '**C:\vc-platform\artifacts\wwwroot\platform**' to zip archive 
`zip -r platform.zip artifacts\wwwroot\platform`
* Open *Kudu* management console from previously deployed  storefront azure app service 
![Open kudu console](../../../../assets/images/docs/deployment-to-one-azure-application-1.png "Open kudu console")
![Select CMD in kudu console](../../../../assets/images/docs/deployment-to-one-azure-application-2.png "Select CMD in kudu console")
* Navigate to the '**D:\home\site\wwwroot**'
![Navigate to the wwwrot](../../../../assets/images/docs/deployment-to-one-azure-application-5.png "Navigate to the wwwrot")
* Drag and drop local '**platform.zip**' file to  '**D:\home\site\wwwroot**' folder
![drag platform zip](../../../../assets/images/docs/deployment-to-one-azure-application-3.png "drag platform zip")
* Go to the storefront app service settings and add new virtual application '**/admin**' with path '**site\wwwroot\platform**'
![add admin application](../../../../assets/images/docs/deployment-to-one-azure-application-4.png "add admin application")
* Add **CmsContentConnectionString** application setting with value '**provider=LocalStorage;rootPath=~/../App_Data/cms-content**' to use shared CMS folder between manager and storefront
* After all steps Virto Commerce manager will be available by next url '**your-storefront-application-url/admin**'
 

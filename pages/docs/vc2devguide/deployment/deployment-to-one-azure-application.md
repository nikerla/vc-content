---
title: Deploy platform and storefront to one Azure application
description: Detailed instructions described how to deploy Virto Commerce platform and storefront to one Azure application
layout: docs
date: 2016-12-16T14:22:18.390Z
priority: 1
---

## Step-by-step guide
* First make storefront  azure deployment  as it described in  [Deploy from GitHub to Microsoft Cloud Azure](docs/vc2devguide/deployment/platform-deployment/deploy-from-github-to-microsoft-cloud-azure) with one exception need to  enter in the  '**Content Storage Connection string**' and '**Content Storage Connection Sting**' any values. For example default values as in screenshot.
![Deploy storefront](../../../../assets/images/docs/deploy-to-single-app-1.png "Deploy storefront")
* Download latest precompiled release  <a href="https://github.com/VirtoCommerce/vc-platform/releases" target="_blank">Virto Commerce platform from GitHub</a>  to local disk - '**C:\tmp\VirtoCommerce.Platform.2.12.4.zip**'.
* Open *Kudu* management console from previously deployed  storefront azure app service  <a href="https://your-storefront-application-url.scm.azurewebsites.net/DebugConsole" target="_blank">https://your-storefront-application-url.scm.azurewebsites.net/DebugConsole</a>  
* Navigate to the '**D:\home\site\wwwroot**'
* Drag and drop local '**C:\tmp\VirtoCommerce.Platform.2.12.4.zip**' file to  '**D:\home\site\wwwroot**' folder
![drag platform zip](../../../../assets/images/docs/deploy-to-single-app-2.png "drag platform zip")
* Rename  '**VirtoCommerce.Platform.Web**' folder to '**platform**' with next command
`mv VirtoCommerce.Platform.Web platform`
![rename folder](../../../../assets/images/docs/deploy-to-single-app-3.png "rename folder")
* Go to '**Sql databases**' in azure portal and create new SQL Server with name '**virtocommerce-db**' and database with name '**virtocommerce**'
![create database](../../../../assets/images/docs/deploy-to-single-app-4.png "create database")

* Go to the storefront app service settings and add new virtual application '**/admin**' with path '**site\wwwroot\platform**'
![add admin application](../../../../assets/images/docs/deploy-to-single-app-5.png "add admin application")
* Add new connection string '**CmsContentConnectionString**' with value '**provider=LocalStorage;rootPath=~/../App_Data/cms-content**' to use shared CMS folder between manager and storefront
* Add new sql connection string '**VirtoCommerce**'  with value copied from azure SQL server details created in previous step. '**Server=tcp:virtocommerce-db.database.windows.net,1433;Initial Catalog=virtocommerce;Persist Security Info=False;User ID=virto;Password=\{your-password\};MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;**'. 
* Change exist setting '**VirtoCommerceBaseUrl**' to value with your VC admin url '**http://your-storefront-application-url.azurewebsites.net/admin**'
![change app settings](../../../../assets/images/docs/deploy-to-single-app-6.png "change app settings")

* After all steps Virto Commerce manager will be available by next url <a href="https://your-storefront-application-url.azurewebsites.net/admin" target="_blank">https://your-storefront-application-url.azurewebsites.net/admin</a>
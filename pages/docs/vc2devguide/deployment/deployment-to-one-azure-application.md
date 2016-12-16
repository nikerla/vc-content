---
title: Deploy platform and storefront to one Azure application
description: Detailed instructions described how to deploy Virto Commerce platform and storefront to one Azure application
layout: docs
date: 2016-12-16T14:22:18.390Z
priority: 1
---

## Step-by-step guide
1. First create storefront azure deployment as it is described in [Deploy from GitHub to Microsoft Cloud Azure](docs/vc2devguide/deployment/platform-deployment/deploy-from-github-to-microsoft-cloud-azure) with one exception, there is no need to change default value for '**Virto Commerce Manager Url**'. For example default value '**http://localhost/admin**' as in screenshot. We will cahange this setting later. ![Deploy storefront](../../../../assets/images/docs/deploy-to-single-app-1.png "Deploy storefront")
2. Download the latest precompiled release <a href="https://github.com/VirtoCommerce/vc-platform/releases" target="_blank">Virto Commerce platform from GitHub</a> to local disk - '**C:\tmp\VirtoCommerce.Platform.2.12.4.zip**'.
3. Open *Kudu* management console from previously deployed storefront azure app service <a href="#" target="_blank">https://\{\{your-storefront-application-url\}\}.scm.azurewebsites.net/DebugConsole</a>  
4. Navigate to the '**D:\home\site\wwwroot**'
5. Drag and drop local '**C:\tmp\VirtoCommerce.Platform.2.12.4.zip**' file to  '**D:\home\site\wwwroot**' folder ![drag platform zip](../../../../assets/images/docs/deploy-to-single-app-2.png "drag platform zip")
6. Rename  '**VirtoCommerce.Platform.Web**' folder to '**platform**' with next command `mv VirtoCommerce.Platform.Web platform` ![rename folder](../../../../assets/images/docs/deploy-to-single-app-3.png "rename folder")
7. Go to '**Sql databases**' in azure portal and create new SQL Server with a name '**virtocommerce-db**' and database with a name '**virtocommerce**' ![create database](../../../../assets/images/docs/deploy-to-single-app-4.png "create database")
8. Go to the storefront app service settings and add new virtual application '**/admin**' with path '**site\wwwroot\platform**' ![add admin application](../../../../assets/images/docs/deploy-to-single-app-5.png "add admin application")
9. Add new connection string '**CmsContentConnectionString**' with value '**provider=LocalStorage;rootPath=~/../App_Data/cms-content**' to use shared CMS folder between manager and storefront
10. Add new sql connection string '**VirtoCommerce**'  with a value copied from azure SQL server details created in previous step. '**Server=tcp:virtocommerce-db.database.windows.net,1433;Initial Catalog=virtocommerce;Persist Security Info=False;User ID=virto;Password=\{\{your-db-password\}\};MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;**'. 
11. Change existing setting '**VirtoCommerceBaseUrl**' to value with your VC admin url '**http://\{\{your-storefront-application-url\}\}.azurewebsites.net/admin**' ![change app settings](../../../../assets/images/docs/deploy-to-single-app-6.png "change app settings")
12. After all the above steps completed, Virto Commerce Manager will be available using the following url <a href="#" target="_blank">https://\{\{your-storefront-application-url\}\}.azurewebsites.net/admin</a>
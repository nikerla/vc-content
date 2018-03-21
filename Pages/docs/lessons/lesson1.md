---
aliases:
  - docs/lessons/lesson1
date: '2018-03-20'
layout: docs
title: 'Lesson 1'

---
## Summary

Use this guide to <a class="crosslink" href="https://virtocommerce.com/ecommerce-hosting" target="_blank">deploy</a> and configure precompiled Virto Commerce Platform and Virto Commerce Storefront.

## Prerequisites

* <a href="https://www.microsoft.com/en-us/download/details.aspx?id=5842" target="_blank">Windows Server 2008 R2 SP1 or later</a>(for Platform and Storefront)
* <a href="https://helpdeskgeek.com/windows-7/turn-on-microsoft-internet-information-services-in-windows-7/" target="_blank">Enable Internet Information Services 7 or later</a>(for Platform and Storefront)
* <a href="https://www.microsoft.com/en-us/download/details.aspx?id=49981" target="_blank">Microsoft .NET Framework 4.6.1</a>(for Platform and Storefront)
* <a href="https://www.microsoft.com/en-us/sql-server/sql-server-downloads" target="_blank">Microsoft SQL Server 2008 or later</a>(for Platform and Storefront)
* <a href="https://go.microsoft.com/fwlink/?LinkId=746572" target="_blank">Visual C++ Redistributable Packages for Visual Studio</a>(for Storefront only)

## Initial configuration of VirtoCommerce Platform (Runtime version).

Navigate to the <a href="https://github.com/VirtoCommerce/vc-platform/releases" rel="nofollow">Releases section of Virto Commerce Platform in GitHub.</a>

You will find **VirtoCommerce.Platform.2.x.x.zip** file. In this file the site has already been built and can be run without additional compilation. It does not includes all the source code.

Unpack follow zip to local disk to path **C:\vc-platform**. In result you should get the folder which contains platform precompiled code.

### Upload files to the web server

Upload all data from **C:\vc-platform** folder to the web server in IIS application root directory **C:\inetpub\wwwroot\admin**

## Setup of Virto Commerce Platform

### Configure connection strings

* Open the **Web.config** file in a text editor.
* In the **connectionStrings** section add or change **add** nodes:
  * **VirtoCommerce**: parameters for  SQL server database. Provided user should have permission to create new database.
    ```
    <add name="VirtoCommerce" connectionString="Data Source={SQL Server URL};Initial Catalog={Database name};Persist Security Info=True;User ID=virto;Password=virto;MultipleActiveResultSets=True;Connect Timeout=420" providerName="System.Data.SqlClient" />
    ```
  * **SearchConnectionString**: type of search engine and its parameters.
    ```
    <add name="SearchConnectionString" connectionString="provider={Provider name};{additional parameters};scope={common name (prefix) of all indexes}" />
    ```
  * **AssetsConnectionString**: type of asset storage and its parameters.
    ```
    <add name="AssetsConnectionString" connectionString="provider={Provider name};rootPath={Path to folder with assets};{additional parameters}" />
    ```
  * **CmsContentConnectionString**: type of CMS content storage and its parameters (**provider=LocalStorage;rootPath=~/App_Data/cms-content** connection string will be used by default)..
    ```
    <add name="CmsContentConnectionString" connectionString="provider={Provider name};rootPath={URL to CMS content location}" />
    ```

### Configure permissions for App_Data folder of VirtoCommerce Platform

Open properties for **C:\inetpub\wwwroot\admin\App_Data** folder and give permission **Modify** to **IIS_IUSRS** user group.

![Setting App_Data folder security options](../../../../assets/images/docs/image2015-3-18_16-44-47.png "Setting App_Data folder security options")

### Configure IIS

* Open the **IIS Manager** and create a new website or new application named **admin** inside an existing website.
* In the **Physical path** field enter the full path to the platform site data folder **C:\inetpub\wwwroot\admin**
![Website configuration in IIS](../../../../assets/images/docs/add-admin-application-binaries.png "Website configuration in IIS")
* Select application pool which uses **.NET CLR Version 4.0** and **Integrated** pipeline mode:
![Select application pool for Virto Commerce Platform](../../../../assets/images/docs/image2015-3-19_9-39-32.png "Select application pool for Virto Commerce Platform")
* Inside the admin application add the new virtual directory with alias **assets** and physical path **C:\inetpub\wwwroot\admin\App_Data\Assets**. If there is no **Assets** directory inside **App_Data**, create it.
![Create a virtual folder for Virto Commerce Platform assets](../../../../assets/images/docs/create-platform-assets-virtual-folder-binaries.png "Create a virtual folder for Virto Commerce Platform assets")

## First sign in

* Open the Virto Commerce Platform application in the browser.
* On the first request the application will create and initialize database. After that you should see the sign in page. Use the following credentials:
  * Login: **admin**
  * Password: **store**

### Change administrator password

* In the left menu select **More → Configuration → Security**.
* Select **Users**
* Select the **admin** user.
* Click **Change password**.
* Enter the new password twice and click **OK**.

### Change API credentials for storefront application

* In the left menu select **More → Configuration → Security**.
* Select **Users**
* Select the **frontend** user.
* Click the **API Keys** widget.
* Select the **Frontend Hmac** key
* Click **Generate**, then **OK**, then **Save**.

### Configure permissions for App_Data folder

Open properties for **C:\inetpub\wwwroot\admin\App_Data** folder and give permission **Modify** to **IIS_IUSRS** user group.

![Setting App_Data folder security options](../../../../assets/images/docs/image2015-3-18_16-44-47.png "Setting App_Data folder security options")

### Configure IIS

* Open the **IIS Manager** and create a new website or new application named **admin** inside an existing website.
* In the **Physical path** field enter the full path to the platform site data folder **C:\inetpub\wwwroot\admin**
![Website configuration in IIS](../../../../assets/images/docs/add-admin-application-binaries.png "Website configuration in IIS")
* Select application pool which uses **.NET CLR Version 4.0** and **Integrated** pipeline mode:
![Select application pool for Virto Commerce Platform](../../../../assets/images/docs/image2015-3-19_9-39-32.png "Select application pool for Virto Commerce Platform")
* Inside the admin application add the new virtual directory with alias **assets** and physical path **C:\inetpub\wwwroot\admin\App_Data\Assets**. If there is no **Assets** directory inside **App_Data**, create it.
![Create a virtual folder for Virto Commerce Platform assets](../../../../assets/images/docs/create-platform-assets-virtual-folder-binaries.png "Create a virtual folder for Virto Commerce Platform assets")

## First sign in

* Open the Virto Commerce Platform application in the browser.
* On the first request the application will create and initialize database. After that you should see the sign in page. Use the following credentials:
  * Login: **admin**
  * Password: **store**

### Change administrator password

* In the left menu select **More → Configuration → Security**.
* Select **Users**
* Select the **admin** user.
* Click **Change password**.
* Enter the new password twice and click **OK**.

### Change API credentials for storefront application

* In the left menu select **More → Configuration → Security**.
* Select **Users**
* Select the **frontend** user.
* Click the **API Keys** widget.
* Select the **Frontend Hmac** key
* Click **Generate**, then **OK**, then **Save**.

## Initial configuration of VirtoCommerce Storefront (Runtime version).

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


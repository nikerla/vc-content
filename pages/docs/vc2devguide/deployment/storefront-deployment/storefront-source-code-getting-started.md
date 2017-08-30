---
title: Storefront Source Code Getting Started
description: Use this guide to setup and run VirtoCommerce Storefront application on a local machine
layout: docs
date: 2016-12-02T14:16:14.047Z
priority: 1
---
Use this guide to setup and <a class="crosslink" href="https://virtocommerce.com/ecommerce-website" target="_blank">run VirtoCommerce Storefront application</a> on a local machine.

## Get storefront from GitHub
The Virto commerce storefront can be installed in two ways as **binary precompilled** version or from **source code**.


### Downloading the precomplied storefront files:
Navigate to the  <a href="https://github.com/VirtoCommerce/vc-storefront/releases" rel="nofollow">Releases Section of Virto Commerce storefront in GitHub.</a>

You will find VirtoCommerce.Storefront.2.x.x.zip file. In this file the site has already been built and can be run without additional compilation. It does not includes all the source code.

Unpack this zip to a local directory '**C:\vc-storefront**'. After that you will have the '**C:\vc-storefront\VirtoCommerce.Storefront**' directory with storefront precompiled files.

### Obtaining and building storefront from source code

Fork your own copy of VirtoCommerce Storefront to your account on GitHub:
* Open <a href="https://github.com/VirtoCommerce/vc-storefront" rel="nofollow">https://github.com/VirtoCommerce/vc-storefront</a> and click **Fork** in the upper right corner;
* If you are a member of an organization on GitHub, select the target for the fork.
* Clone the forked repository to local machine:
  ```
  git clone https://github.com/<<your account>>/vc-storefront.git
  ```
* Switch to the cloned directory:
  ```
  cd vc-storefront
  ```
* Add a reference to the original repository:
  ```
  git remote add upstream https://github.com/VirtoCommerce/vc-storefront
  ```

* Open **VirtoCommerce.Storefront.sln**.
* In Solution Explorer window right-click on solution and select **Manage NuGet Packages for Solution**.
* In the new window click **Restore** button
* Build the solution.

## Configuring VC Manager URL

* In the '**C:\vc-storefront\VirtoCommerce.Storefront\web.config**' file in the **connectionStrings** section find the "add" node named '**VirtoCommerceBaseUrl**'.
* Change its '**connectionString**' attribute value to the URL of your **VC Manager** application.

  ```
  <connectionStrings>
    ...
    <add name="VirtoCommerceBaseUrl" connectionString="{VC Manager url}" />
    ...
  </connectionStrings>
  ```

## Linking CMS Content

You need to link your real CMS Content folder with storefront and platform (to be able view CMS content with Content module).

Execute the following commands:<br/>
```
mklink /d "C:\vc-platform\VirtoCommerce.Platform.Web\App_Data\cms-content" "D:\cms-content"
mklink /d "C:\vc-storefront\VirtoCommerce.Storefront\App_Data\cms-content" "D:\cms-content"
```
(where **'D:\cms-content'** is your cms content folder)

You can also link invidual theme folders instead of full **'cms-content'** folder. To learn more about themes CMS content structure go to [themes documentation](docs/vc2devguide/working-with-storefront/theme-development).

## Configuring API client credentials

VC platform supports 2 types of authentication for API calls:

* Simple - when user id is passed in url for each API request. E.g., **http://demo.virtocommerce.com/admin/api/catalog/catalogs?api_key=a348fa7508d342f6a32f8bf6c6681a2a%20**
* HMAC - Hash-based message authentication code (HMAC) is used to identify a client and ensure the request integrity.

In order to enable Storefront app using VC platform API, first of all create a user in VC manager and generate API key of appropriate type (Simple or HMAC). Article [Working with platform API](docs/vc2devguide/development-scenarios/working-with-platform-api) describes how to configure and use API in your custom solution.

Next: set API client credentials in '**C:\vc-storefront\VirtoCommerce.Storefront\web.config**'

### Example of HMAC authentication configuration

```
<appSettings>
  ...
  <add key="vc-public-ApiAppId" value="27e0d789f12641049bd0e939185b4fd2" />
  <add key="vc-public-ApiSecretKey" value="34f0a3c12c9dbb59b63b5fece955b7b2b9a3b20f84370cba1524dd5c53503a2e2cb733536ecf7ea1e77319a47084a3a2c9d94d36069a432ecc73b72aeba6ea78" />
  ...
</appSettings>
```

### Example of Simple authentication configuration

```
<appSettings>
  ...
  <add key="vc-public-ApiAppId" value="a348fa7508d342f6a32f8bf6c6681a2a" />
  ...
</appSettings>
```

## Test Storefront app

Right click on **VirtoCommerce.Storefront** project, select **View > View in Browser** or use your preferred way to start a web project. The store home page should open.

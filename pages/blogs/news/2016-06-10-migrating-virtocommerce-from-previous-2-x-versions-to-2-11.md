---
category: Release
author: 'Virtocommerce'
date: '2016-06-10'
is-trending: 'true'
permalink: blogs/news/migrating-virtocommerce-from-previous-2-x-versions-to-2-11
tags:
  - Announcements
title: 'Migrating VirtoCommerce from previous 2.x versions to 2.11'
published: Private
---
# On local file system

* Make new platform installation http://docs.virtocommerce.com/display/vc2devguide/Source+Code+Getting+Started and leave old database connection string.
* Make new storefront installation http://docs.virtocommerce.com/display/vc2devguide/Storefront+Source+Code+Getting+Started
* (Optional) If you have some changes in CMS content you need to copy it to 2.11 platform */App_Data/cms-content* folder:
 <!--excerpt-->
> COPY FROM
>
> {storefront 2.x path}\STOREFRONT\VirtoCommerce.Storefront\App_Data\Themes\*.*
>
> excluding default  folder
>
> TO
> 
> {platform 2.11 path}\VirtoCommerce.Platform.Web\App_Data\cms-content.

# On Microsoft Azure cloud

* Make new platform deployment to azure to new or already exist resource group  http://docs.virtocommerce.com/display/vc2devguide/Deploy+from+GitHub+to+Microsoft+Cloud+Azure without sample data (in sample data installation setup wizard step click None)
* For newly deployed platform version 2.11 set database connection string, just copy the database connection string from a previous VC 2.x application  settings

![](assets/images/blog/azure-application-settings.png)
* Make new storefront deployment  to new or already exist resource group http://docs.virtocommerce.com/display/vc2devguide/Storefront+Microsoft+Azure+Getting+Started
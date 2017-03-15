---
category: release
date: '2017-03-15'
permalink: blog/release-notes-2017-03-15
published: false
tags:
  - virtocommerce
  - announcements
  - ecommerce
  - enterprise-ecommerce
  - features
  - open-source
title: 'March 2017 release notes'

---
The main topics for the release: New main menu in manager, comparing products and storefront 'smart' cache invalidation and more other significant improvements

## New main menu in manager
We are fully redesigned our main menu in VC manager to be it more satisfy a Azure portal main menu and will be convenient for customization
<img alt="Main menu" src="../../assets/images/blog/new-main-menu.PNG" />

## Comparing products
This feature allows to you compare data between products, such as price, specifications and properties.

<img alt="Comparing products" src="../../assets/images/blog/comparing-product.PNG" />

## 'Smart' storefront cache invalidation
We made special code and  API in Cache.module which observed all changes of these objects types CMS, Catalog, Pricing, Store and expose special API method
<a href="http://demo.virtocommerce.com/admin/docs/ui/index#!/Smart_caching_module/ChangesTracking_GetLastModifiedDate">GET /api/changes/lastmodifieddate</a>
which resturns time for latest changes 

Storefront monitoring this API  and invalidate cache if API returns new timestamp.

Smart cache invalidation can be enabled or disabled in storefront web.config by changing follow settings

```
   <add key="VirtoCommerce:Storefront:ChangesTracking:Enabled" value="true" />
   <!-- polling interval -->
   <add key="VirtoCommerce:Storefront:ChangesTracking:Interval" value="0:1:0" />
```
Also we added manual cache reset operation.
<img alt="Cache reset" src="../../assets/images/blog/store-cache-reset.PNG" />

## Log all order changes and payment transactions history

Now all changes with customer order and all nested operations have logged, and can be viewed.
<img alt="Order changes log" src="../../assets/images/blog/order-changes.PNG" />



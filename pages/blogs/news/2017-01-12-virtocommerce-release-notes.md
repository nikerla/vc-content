---
author: VirtoCommerce
category: release
date: 2017-01-12 10:00
excerpt: We are pleased to announce a new Virto Commerce release!
main-image: ...
permalink: blog/sitemaps-module-release
tags: [virtocommerce, announcements, ecommerce, enterprise-ecommerce, features, open-source, bulk-order]
---
## Bulk order

Current release contains a new storefront feature - bulk orders.

Bulk order can be enabled or disabled via theme settings (settings_data.json) - parameter **bulk_order_enabled**. If it has a value **true** storefront main menu items **Bulk order** will appear.

![](assets/images/blog/bulk_order_1.png)

There are two ways to create a bulk order:

* via form fields
* via copy/paste of CSV file

### Create a bulk order via form fields

Bulk order page contains a form fields to enter product SKUs and a quantity for each SKU.

![](assets/images/blog/bulk_order_2.png)

If a catalog doesn't contain some of the entered SKUs they will not be added to a cart and the corresponding informer will appear.

### Create a bulk order via CSV

There is another possibility to create a bulk order - via copy/paste a content of a CSV file into special field on the bulk order page.

![](assets/images/blog/bulk_order_3.png)

The CSV content should have the next format: SKU,quantity. For example:

```
6AF8SM0VPFV6,30
```

If a catalog doesn't contain some of the entered SKUs they will not be added to a cart and the corresponding informer will appear.
---
category: Release
date: '2016-09-20'
published: Private

---
Release notes for "September 2016" release
========
## Platform
* AbstractTypeFactory...
* MetaForm control for constructing forms dynamically from given metadata.


## Customer Order
* Customer Order are now freely extendable both in backend and IU. New properties can be added to Order and any order operation without any modification to existing Orders module source code. Just create new module, derive new class from existing (e.g., CustomerOder) or add new entities (deriving from OrderOperation). Check our new <a href="https://github.com/VirtoCommerce/vc-samples/tree/master/OrderModule2" target="_blank">sample "OrderModule2"</a> for such customization details.
* All Order management UI properties in Manager are registered and loaded dynamically. The properties collection is accessible and manageable from any module!
* Totals calculation updated
* Advanced Order filtering in UI

![filter.PNG](assets/cms-content/Blogs/vc-site/assets/filter.PNG)

## JavaScript Shopping Cart module
Storefront or Mobile application are only ones of your possible sales channels. Right now VirtoCommerce makes it easy to add ecommerce functionality to share and sell your products on any website.

![vcsalechannels](https://cloud.githubusercontent.com/assets/16013311/18511407/d76a3c14-7a83-11e6-9c07-c09c1c7f0289.PNG)

You have designed an awesome blog with Wordpress or other platform, and now you can start making money by adding easy-to-use VirtoCommerce JavaScriptShoppingCart. It works by offering a small piece of code, which can be implemented on your site to turn any element into a Buy button.

https://github.com/VirtoCommerce/vc-module-javascript-shoppingcart

## Storefront
### Client generation with Autorest
We've switched the C# clients generation tool to Autorest. This simplified code management a lot:

* No more complicated client projects generation 
* No more awkward packages maintenance on NuGet
* New C# client generation takes seconds, not hours!
* Each referenced client package in StoreFront project was replaced with Autorest generated single C# class:

![generated API client classes](assets/cms-content/Blogs/vc-site/assets/apiClients.PNG)


### Checkout
???
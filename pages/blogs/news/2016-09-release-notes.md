Release notes for "September 2016" release
========
##Platform
* AbstractTypeFactory...
* MetaForm control for constructing forms dynamically from given metadata.


##Customer Order
* Customer Order are now freely extendable both in backend and IU. New properties can be added to Order and any order operation without any modification to existing Orders module source code. Just create new module, derive new class from existing (e.g., CustomerOder) or add new entities (deriving from OrderOperation). Check our new <a href="https://github.com/VirtoCommerce/vc-samples/tree/master/OrderModule2" target="_blank">sample "OrderModule2"</a> for such customization details.
* All Order management UI properties in Manager are registered and loaded dynamically. The properties collection is accessible and manageable from any module!
* Totals calculation updated
* Advanced Order filtering in UI
<<img>>


##Storefront
###Client generation with Autorest
We've switched the C# clients generation tool to Autorest.  This simplified code management a lot:

* No more complicated client projects generation 
* No more awkward packages maintenance on NuGet
* New C# client generation takes seconds, not hours!
* Each referenced client package in StoreFront project was replaced with Autorest generated single C# class:

<<image here>>

###Checkout
???



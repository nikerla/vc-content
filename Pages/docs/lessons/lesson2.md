---
title: Lesson 2
description: Import data
layout: docs
date: 2018-04-04
priority: 2
---
## Summary

Use this guide to import new products into Virto Commerce Platform(backend) catalog and test them locally in Virto Commerce Storefront(frontend).

## Prerequisites

* Download the <a href="https://github.com/VirtoCommerce/vc-content/tree/lesson2/Pages/docs/lessons/electronics-new-products-example.csv" target="_blank">electronics-new-products-example.csv</a> file with new products.
* Word Excel or <a href="https://www.libreoffice.org/" target="_blank">LibreOffice(*free*)</a>.

## Create catalog data file in .csv format

* To create file with products like downloaded **electronics-new-products-example.csv** you need to create new file in any of Word Excel or LibreOffice programm.
* In Excel just select the product properties you need from the list and fill in the product properties columns as in our document.
* In LibreOffice you need to create table with the number of columns equal to the number of properties of your products and fill it. For a delimiter, select a comma.
* Save file in .csv format.

## How to create new Catalog or use an existing one

* Open locally Virto Commerce Platform(see how to deploy and open it in <a href="https://github.com/VirtoCommerce/vc-content/tree/lesson2/Pages/docs/lessons/lesson1.md" target="_blank">Lesson 1</a>)
* There are 2 scenarios for adding new products: adding to a new catalog or to an existing one.

### Create a new category and subcategory
* To create new category in **Electronics Theme** click on **More > Catalog > Electronics** > click on **+Add** > choose the **Category** > add category name **Laptops** and code(optional), push on button **Create**.
* You need to create search index: click on **Search index missing** and on **Build index** icon, next - select **Tax type**. Save new category by click button **Save**.
* Click on the **Laptops** in categories list. To create new subcategory, click on **+Add** > choose the **Category** > add category name **Asus-Laptops** and code(optional), push on button **Create**.
* You need to create search index: click on **Search index missing** and on **Build index** icon, next - select **Tax type**. Save new subcategory by click button **Save**.
* By click on **More > Catalog > Laptops > Asus-Laptops** you will see all created categories.

### Use an existing catalog and categories
* Click on **More > Catalog**. Select the catalog and category names in which you want to add new products.

## Import and mapping your catalog data to Virto Commerce Platform(*backend*)

* At the top of the **Asus-Laptops** category page click the **Import** icon > **VirtoCommerce CSV import** > select **Comma** in **Csv column delimiter** > click on image to upload **electronics-new-products-example.csv** file. Wait a minute...
* After uploading your data, click on **Map column**. On this page you will see and edit how the properties of your products will be maped to the default properties defined in application, just so they will be saved to the database after you clicking buttons **Ok** and **Start Import**. Wait a minute...

## Open new products in Virto Commerce Platform(*backend*)

* Now you can see and edit all new products after clicking on **More > Catalog > Laptops > Asus-Laptops**

## Creating a new menu item in Virto Commerce Storefront(*frontend*)

* To add new category to menu in Virto Commerce Storefront(*frontend*) open Virto Commerce Platform(*backend*), click on **More > Content > Link list in Electronics > en-US main menu > icon + Add link** and add Link Title - **Laptops**, URL - **~/laptops**, Links to - **Category**, Linked object **Laptops**, save changes.
* To add new subcategory to menu in Virto Commerce Storefront(*frontend*) open Virto Commerce Platform(*backend*), click on **More > Content > Link list in Electronics > icon + Add** and add Name - **Laptops**, Language - **en-US**, Links to - **Category**, Linked object **Laptops** and click on button **Create**.
* To add new link for subcategory **Asus Laptops** to menu in Virto Commerce Storefront(*frontend*) open Virto Commerce Platform(*backend*), click on **More > Content > Link list in Electronics > en-US Laptops > icon + Add link** and add Name - **Laptops**, Language - **en-US**, Link Title - **Asus Laptops**, URL - **~/asus-laptops**, save changes.

## Build search indexes and reset cache

* You need to build search indexes for new categories and products - open Virto Commerce Platform(*backend*), go to **More > Search index** > select all document types via check boxes > click on icon Build index**.
* You need to reset cache - open Virto Commerce Platform(*backend*), go to **More > Stores > Electronics > icon Reset cache on Store details**, save changes.

## Open new products in Virto Commerce Storefront(*frontend*)

* Open locally Virto Commerce Storefront(see how to deploy and open it in <a href="https://github.com/VirtoCommerce/vc-content/tree/lesson2/Pages/docs/lessons/lesson1.md" target="_blank">Lesson 1</a>).
* Now you can see new menu item **Laptops**, new subitem **Asus Laptops** and all new products in Virto Commerce Storefront(*frontend*).

## Product default properties in Virto Commerce Platform(*backend*)

* To create a new catalog file, you need to know which defined product properties you can use:

<table> 
  <tr> 
     <th><b>Property Name</b></th> 
     <th><b>Data Type</b></th> 
     <th><b>Example</b></th> 
  </tr> 
  <tr> 
     <td>Name(required)</td> 
     <td>text</td> 
     <td>Asus VivoBook W202NA-DH02 Rugged 11.6-inch Windows 10 Home Laptop</td> 
  </tr> 
  <tr> 
     <td>Id</td> 
     <td>text</td> 
     <td>689dad074edd495897dd34d1846c4bfe</td> 
  </tr>  
  <tr> 
     <td>Sku(required)</td> 
     <td>text</td> 
     <td>123123dfg</td> 
  </tr> 
  <tr> 
     <td>CategoryPath(required if CategoryId is empty)</td> 
     <td>text</td> 
     <td>Laptops/Asus-Laptops</td> 
  </tr>  
  <tr> 
     <td>CategoryId(required if CategoryPath is empty)</td> 
     <td>text</td> 
     <td>53e239451c844442a3b2fe9aa82d95c8</td> 
  </tr>  
  <tr> 
     <td>MainProductId</td> 
     <td>text</td> 
     <td>a82d95c853e239451c238442a3b2fe9a</td> 
  </tr>  
  <tr> 
     <td>PrimaryImage</td> 
     <td>text</td> 
     <td>http://localhost/admin/assets/catalog/PAHCVX870/1420483149000_1109406.jpg</td> 
  </tr>  
  <tr> 
     <td>AltImage</td> 
     <td>text</td> 
     <td>panasonic-hc-vx870k-4k-ultra-hd-camcorder</td> 
  </tr>  
  <tr> 
     <td>SeoUrl</td> 
     <td>text</td> 
     <td>panasonic-hc-vx870k-4k-ultra-hd-camcorder</td> 
  </tr>   
  <tr> 
     <td>SeoTitle</td> 
     <td>text</td> 
     <td></td> 
  </tr>   
  <tr> 
     <td>SeoDescription</td> 
     <td>text</td> 
     <td></td> 
  </tr>   
  <tr> 
     <td>SeoLanguage</td> 
     <td>text</td> 
     <td>en-US</td> 
  </tr>   
  <tr> 
     <td>SeoStore(StoreId)</td> 
     <td>text</td> 
     <td>844442a3b2fe9aa82d95c853e239451c</td> 
  </tr>   
  <tr> 
     <td>Review</td> 
     <td>number(0 or 1)</td> 
     <td>1</td> 
  </tr>   
  <tr> 
     <td>ReviewType(ReviewTypeId)</td> 
     <td>text</td> 
     <td>8a82d95c44442a3b2fe9a853e239451c</td> 
  </tr>    
  <tr> 
     <td>IsActive</td> 
     <td>number(0 or 1)</td> 
     <td>1</td> 
  </tr>    
  <tr> 
     <td>IsBuyable</td> 
     <td>number(0 or 1)</td> 
     <td>1</td> 
  </tr>     
  <tr> 
     <td>TrackInventory</td> 
     <td>number(0 or 1)</td> 
     <td>1</td> 
  </tr>    
  <tr> 
     <td>PriceId</td> 
     <td>text</td> 
     <td>d95c448a82442a3b2fe9a853e239451c</td> 
  </tr>   
  <tr> 
     <td>SalePrice</td> 
     <td>number</td> 
     <td>199.5</td> 
  </tr> 
  <tr> 
     <td>ListPrice(required)</td> 
     <td>number</td> 
     <td>199.5</td> 
  </tr> 
  <tr> 
     <td>Currency</td> 
     <td>text</td> 
     <td>USD</td> 
  </tr>    
  <tr> 
     <td>PriceListId</td> 
     <td>text</td> 
     <td>8a82442a3b2fed95c449a853e239451c</td> 
  </tr> 
  <tr> 
     <td>Quantity(required, 0 and more)</td> 
     <td>number</td> 
     <td>25</td> 
  </tr>     
  <tr> 
     <td>ManufacturerPartNumber</td> 
     <td>text</td> 
     <td>8a82442a3b2fed95c449a853e239451c</td> 
  </tr>     
  <tr> 
     <td>Gtin</td> 
     <td>text</td> 
     <td></td> 
  </tr>     
  <tr> 
     <td>MeasureUnit</td> 
     <td>text</td> 
     <td>mm</td> 
  </tr>     
  <tr> 
     <td>WeightUnit</td> 
     <td>text</td> 
     <td>gram</td> 
  </tr>   
  <tr> 
     <td>Weight</td> 
     <td>number</td> 
     <td>19.5</td> 
  </tr>   
  <tr> 
     <td>Height</td> 
     <td>number</td> 
     <td>19.5</td> 
  </tr>   
  <tr> 
     <td>Length</td> 
     <td>number</td> 
     <td>19.5</td> 
  </tr>   
  <tr> 
     <td>Width</td> 
     <td>number</td> 
     <td>19.5</td> 
  </tr>     
  <tr> 
     <td>TaxType</td> 
     <td>text</td> 
     <td>582fed9c449a853e239a82442a3b451c</td> 
  </tr>     
  <tr> 
     <td>ProductType</td> 
     <td>text</td> 
     <td>89a853e239a8242fed95c4442a3b451c</td> 
  </tr>     
  <tr> 
     <td>ShippingType</td> 
     <td>text</td> 
     <td>95c449a853e239a82442a3b4582fed1c</td> 
  </tr> 
  <tr> 
     <td>Vendor</td> 
     <td>text</td> 
     <td>Asus</td> 
  </tr>      
  <tr> 
     <td>DownloadType</td> 
     <td>text</td> 
     <td>95c449a853e239a82442a3b4582fed1c</td> 
  </tr>       
  <tr> 
     <td>DownloadExpiration</td> 
     <td>date</td> 
     <td>2018-04-05 21:47</td> 
  </tr>     
  <tr> 
     <td>HasUserAgreement</td> 
     <td>number(null, 0 or 1)</td> 
     <td>1</td> 
  </tr>  
</table>

* To create your custom property of product you need to define it: in Virto Commerce Platform(*backend*) go to needed category > click on it's name by right mouse button and select **Manage** > **Properties** > **+ Add property**. Add new property name, 2 Display names - in english and deutsch, enable Multi language switch, if the property can have multiple value - enable mulivalue switch, select in Applies to **Product** and choose Value Type. If you need, set up Validation rules and Attributes. Click on **Save** at Manage property and **Ok buttons at Properties list of your category. Now you can add this property to .csv file for all products of this category. 

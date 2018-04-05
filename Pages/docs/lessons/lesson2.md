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

* <a href="" target="_blank">Download the catalog-example.csv file with new products</a>
* Word Excel or <a href="https://www.libreoffice.org/" target="_blank">LibreOffice(*free*)</a>

## Product default properties in Virto Commerce Platform

To create a new catalog file, you need to know which product properties you can use:
* Name
* Id
* Sku - required(number)
* CategoryPath - required(name of category for new products)
* CategoryId
* MainProductId
* PrimaryImage
* AltImage
* SeoUrl
* SeoTitle
* SeoDescription
* SeoLanguage
* SeoStore
* Review
* ReviewType
* IsActive
* IsBuyable
* TrackInventory
* PriceId
* SalePrice
* ListPrice
* Currency
* PriceListId
* Quantity
* ManufacturerPartNumber
* Gtin
* MeasureUnit
* WeightUnit
* Weight
* Height
* Length
* Width
* TaxType
* ProductType
* ShippingType
* Vendor
* DownloadType
* DownloadExpiration
* HasUserAgreement

## Create catalog data file in .csv format

* To create file with products like downloaded **electronics-new-products-example.csv** you need to create new file in any of Word Excel or LibreOffice programm.
* In Excel just select the product properties you need from the list and fill in the product properties columns as in our document.
* In LibreOffice you need to create table with the number of columns equal to the number of properties of your products and fill it. For a delimiter, select a comma.
* Save file in .csv format.

## How to create new Catalog or use an existing one

* Open locally Virto Commerce Platform(see how to deploy and open it in <a href="" target="_blank">Lesson 1</a>)
* There are 2 scenarios for adding new products: adding to a new catalog or to an existing one.

### Create a new category and subcategory
* To create new category in **Electronics Theme** click on **More > Catalog > Electronics** > click on **+Add** > choose the **Category** > add category name **Laptops** and code(optional), push on button **Create**.
* You need to create search index: click on **Search index missing** and on **Build index** icon, next - select **Tax type**. Save new category by click button **Save**.
* Click on the **Laptops** in categories list. To create new subcategory, click on **+Add** > choose the **Category** > add category name **Asus-Laptops** and code(optional), push on button **Create**.
* You need to create search index: click on **Search index missing** and on **Build index** icon, next - select **Tax type**. Save new subcategory by click button **Save**.
* By click on **More > Catalog > Laptops > Asus-Laptops** you will see all created categories.

### Use an existing catalog and categories
* Click on **More > Catalog**. Select the catalog and category names in which you want to add new products.

## Import and mapping your catalog data to Virto Commerce Platform

* At the top of the **Asus-Laptops** category page click the **Import** icon > **VirtoCommerce CSV import** > select **Comma** in **Csv column delimiter** > click on image to upload **electronics-new-products-example.csv** file. Wait a minute...
* After uploading your data, click on **Map column**. On this page you will see and edit how the properties of your products will be maped to the default properties defined in application, just so they will be saved to the database after you clicking buttons **Ok** and **Start Import**. Wait a minute...

## Open new products in Virto Commerce Platform(*backend*)

* Now you can see and edit all new products after clicking on **More > Catalog > Laptops > Asus-Laptops**

## Open new products in Virto Commerce Storefront(*frontend*)

* Open locally Virto Commerce Storefront(see how to deploy and open it in <a href="" target="_blank">Lesson 1</a>)

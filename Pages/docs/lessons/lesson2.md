---
aliases:
  - docs/lessons/lesson2
date: '2018-04-04'
layout: docs
title: 'Lesson 2'

---
## Summary

Use this guide to import new products into Virto Commerce Platform(backend) catalog and test them locally in Virto Commerce Storefront(frontend).

## Prerequisites

* <a href="" target="_blank">Download the catalog-example.csv file with new products</a>
* Word Excel or <a href="https://www.libreoffice.org/" target="_blank">LibreOffice(*free*)</a>

## How to create new Catalog or use an existing one

* Open locally Virto Commerce Platform(see <a href="" target="_blank">Lesson 1</a>)
* There are 2 scenarios for adding new products: adding to a new catalog or to an existing one
### Create a new catalog and product categories
* Click on **More > Catalog**. If you want to create new catalog, click on **+Add** and choose the **Catalog**, add catalog name and language(optional), push on button **Create**
* Click on the new catalog name. To create new category, click on **+Add** at **Categories & Items** tab and choose the **Category**, add category name and code(optional), push on button **Create**
* Select the catalog and category names in which you want to add new products
* You need to create search index - click on **Search index missing** and on **Build index** icon

### Use an existing catalog and categories
* Click on **More > Catalog**. Select the catalog and category names in which you want to add new products

### Product default properties in Virto Commerce Platform

To create a new catalog file, you need to know which product properties you can use:
* Name
* Id
* Sku
* CategoryPath
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

## How to create Catalog Data in Excel format
* To create file with products like catalog-example.csv you need to create new file in any of Word Excel or LibreOffice programm
* In Excel just select the product properties you need from the list and fill in the product properties columns as in our document
* In LibreOffice you need to create table with the number of columns equal to the number of properties of your products and fill it 
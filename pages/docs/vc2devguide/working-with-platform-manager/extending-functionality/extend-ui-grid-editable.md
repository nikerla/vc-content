---
title: Extending UI Grid with new editable column
description: The article describes a process of creating a new module for Virto Commerce which extends UI Grid in another module
layout: docs
date: 2017-05-05T11:27:54.917Z
priority: 5

---
## Summary

This tutorial will show the steps required when creating a new module which extends some UI Grid with new editable column in another module.

Download / fork source code for described modules from GitHub [vc-samples repository](https://github.com/VirtoCommerce/vc-samples).

## Overview

**External.PriceModule** extend **PricingModule** with new filed and visualize it in product prices Grid.

This example contains functionality which extends database model, for more information visit [Managing Module Database](https://virtocommerce.com/docs/vc2devguide/working-with-platform-manager/extending-functionality/managing-module-database) page.

UI Grid extends with javascript code extension. New column name should be represented in ***.json** resource file.

## Extend database model and migration process

External.PriceModule module extends **Price** object with new field:

```C#
public class Price2 : Price
{
    public decimal? BasePrice { get; set; }
}
```

After adding initial migration new migration class should be something like this:

```C#
public override void Up()
{
    CreateTable(
        "dbo.Price2",
        c => new
        {
            Id = c.String(nullable: false, maxLength: 128),
            BasePrice = c.Decimal(precision: 18, scale: 2),
        })
        .PrimaryKey(t => t.Id)
        .ForeignKey("dbo.Price", t => t.Id)
        .Index(t => t.Id);

    //Convert  all exist Price records to Price2
    Sql("INSERT INTO dbo.Price2 (Id) SELECT Id FROM dbo.Price");
}

public override void Down()
{
    DropForeignKey("dbo.Price2", "Id", "dbo.Price");
    DropIndex("dbo.Price2", new[] { "Id" });
    DropTable("dbo.Price2");
}
```

Sql script with insert statement should be added by hand to fill the **Price2** table with *IDs* from the **Price** table to ensure correct cast between to types.

## UI Grid with price list

**PricingModule** contains grid with price list for selected product wich we can extend with our new field.

Add new **price2.js** file in *Scripts* directory.

Create module name and register it as dependency:

```JS
//Call this to register our module to main application
var moduleName = "virtoCommerce.samples.externalPrice";

if (AppDependencies != undefined) {
    AppDependencies.push(moduleName);
}
```

**PricingModule** contains price list grid with *pricelist-grid* identifier. Creation of this grid is discribed in [prices-list.tpl.html](https://github.com/VirtoCommerce/vc-module-pricing/blob/master/VirtoCommerce.PricingModule.Web/Scripts/blades/prices-list.tpl.html) file.
To extend *pricelist-grid* grid add new column definition with specified parameters:

```JS
angular.module(moduleName, [])
.run(['platformWebApp.ui-grid.extension', function (gridOptionExtension) {
    gridOptionExtension.registerExtension('pricelist-grid', function (gridOptions) {
        gridOptions.columnDefs.push({
            name: 'basePrice',
            displayName: 'external-pricing.blades.prices-list.labels.base-price',
            editableCellTemplate: 'sale-cellTextEditor',
            validators: { saleValidator: true },
            cellTemplate: 'priceCellTitleValidator',
            enableCellEdit: true
        });
    });
}]);
```

* *pricelist-grid* - price list grid identifier which we extend.
* *basePrice* - name of new field.
* *external-pricing.blades.prices-list.labels.base-price* is path to localized string which will be described below.

Create folder *Localizations* and add new *en.VirtoCommerce.ExternalPrice.json* file with following content:

```json
{
  "external-pricing": {
    "blades": {
      "prices-list": {
        "labels": {
          "base-price": "Base price"
        }
      }
    }
  }
}
```

Compile your solution, restart IIS and open Manager in browser to check how your new module looks like.

If **External.PriceModule** folder is not located under Manager's **~/Modules** virtual directory, you should create a directory symbolic link to **External.PriceModule.Web** folder:

run Command Prompt as an administrator; navigate to the physical location folder of Manager's ~/Modules virtual directory; run command: mklink /d managedModule **path_to_External.PriceModule.Web_folder**.

![](https://raw.githubusercontent.com/VirtoCommerce/vc-content/dev/pages/assets/images/docs/External.Price2-Grid-Extend.png)

Price list grid extends with new column and value in this column can be modified.


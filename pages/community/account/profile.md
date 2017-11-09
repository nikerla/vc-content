---
title: Virto commerce - Enterprise .NET open-source ecommerce cloud platform. About Us
description: Virto commerce - Enterprise .NET open-source ecommerce cloud platform. About Us
date: 2014-01-30
permalink: profile
---
<div ng-controller="accountController" class="vc-contributor">
    <div class="bg-banner">
        <div class="banner-t">Profile</div>
    </div>
    <form ng-init="initialize()" class="responsive">
        <div class="columns">
            <div class="column">
                <div class="control-group">
                    <label>First Name</label>
                    <input ng-model="user.name" type="text" class="form-input">
                </div>
                <div class="control-group">
                    <label>Last Name</label>
                    <input ng-model="user.lastName" type="text" class="form-input">
                </div>
                <div class="control-group">
                    <label>Organization</label>
                    <input ng-model="user.company" type="text" class="form-input">
                </div>
                <div class="control-group right">
                    <a ng-click="save(user);" class="button fill">Save</a>
                    <a ng-click="cancel();" class="button fill">Cancel</a>
                </div>
            </div>
        </div>
    </form>
</div>

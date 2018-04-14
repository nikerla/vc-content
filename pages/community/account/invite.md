---
title: Virto commerce - Enterprise .NET open-source ecommerce cloud platform. About Us
description: Virto commerce - Enterprise .NET open-source ecommerce cloud platform. About Us
date: 2014-01-30
permalink: account/invite
---
<div class="roadmap __responsive" ng-controller="accountController">
    <div class="columns buffer-bot">
        <div class="column">
            <div class="block">
                <h1 class="head-title text-center">Get started for free!</h1>
                <p class="text text-center">Welcome to the developer community</p>
                <div class="control-group">
                    <div>
                        <a class="button fill width-full" href="account/externallogin?authType=GitHub&returnUrl=/vc-community"><i class="fa fa-github"></i> Log in with GitHub</a>
                        <!--<a class="btn btn-default btn-lg btn-block" href="account/externallogin?authType=StackExchange&returnUrl=/vccom/vc-community"><i class="fa fa-stack-overflow"></i> Log in with StackExchange</a>-->
                    </div>
                    <p class="text-center">&mdash; {{ 'common.or' | t }}  &mdash;</p>
                    <label class="text-center" for="email">Create Your Account</label>
                    <input ng-model="customer.email" type="email" tabindex="1" class="form-input" name="email" id="email" placeholder="{{ 'customer.recover_password.email' | t }}">
                    <p>
                        <input ng-click="getInvite()" type="submit" class="button fill width-full" tabindex="2" value="Sign in for a free account" />
                    </p>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="block buffer-top">
                <h3>Why join?</h3>
                <ul class="list">
                    <li>
                        <span class="title">Get documentation and source code</span>
                        <span class="descr">
                            Get full access to our source code, along with up-to-date documentation
                        </span>
                    </li>
                    <li>
                        <span class="title">Receive support</span>
                        <span class="descr">
                            Have questions? Find answers on our developer community support
                            pages, or interact with other team memebers of Virto Commerce
                            community
                        </span>
                    </li>
                    <li>
                        <span class="title">Licenses</span>
                        <span class="descr">
                            Add, access, and manage your Virto Commerce licenses
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
{{ '//ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.1.min.js' | script_tag }}
{{ '//ajax.aspnetcdn.com/ajax/jquery.validate/1.13.1/jquery.validate.min.js' | script_tag }}
<script type="text/javascript">
    $(function () {
        //custom validation
        $('form#register_by_invite').validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
            },
            errorElement: "p",
            messages: {
                email: "Please enter your Email Address",
            },
            submitHandler: function (form) {
                form.submit();
            }
        });
    });
</script>
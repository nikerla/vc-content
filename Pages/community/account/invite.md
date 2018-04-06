---
title: Virto commerce - Enterprise .NET open-source ecommerce cloud platform. About Us
description: Virto commerce - Enterprise .NET open-source ecommerce cloud platform. About Us
date: 2014-01-30
permalink: account/invite
---
<div class="roadmap __responsive" style="text-align:center; padding-bottom: 40px;">
    <h1 class="head-title">Get started for free!</h1>
    <p class="text">Welcome to the developer community</p>
    <div class="columns">
        <div class="block">
            <div class="control-group">
                <div>
                    <a class="button fill" style="width: 400px;" href="account/externallogin?authType=GitHub&returnUrl=/vc-community"><i class="fa fa-github"></i> Log in with GitHub</a>
                    <!--<a class="btn btn-default btn-lg btn-block" href="account/externallogin?authType=StackExchange&returnUrl=/vccom/vc-community"><i class="fa fa-stack-overflow"></i> Log in with StackExchange</a>-->
                </div>
                <p>&mdash; {{ 'common.or' | t }}  &mdash;</p>
                <label for="email">Create Your Account</label>
                <input style="width: 400px;" type="email" tabindex="1" value="" class="form-input" name="email" id="email" placeholder="{{ 'customer.recover_password.email' | t }}" autocorrect="off" autocapitalize="off">
                <p>
                    <input style="width: 400px;" type="submit" class="button fill" tabindex="2" value="Sign in for a free account" />
                </p>
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
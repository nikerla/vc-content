---
title: Virto commerce - Enterprise .NET open-source ecommerce cloud platform. About Us
description: Virto commerce - Enterprise .NET open-source ecommerce cloud platform. About Us
date: 2014-01-30
permalink: login
---
<div ng-controller="accountController" class="roadmap responsive">
	<h1 style="margin-left: 18px;" class="head-title">Login</h1>
	<div class="columns">
		<div style="bottom: 20px; position: relative;" class="column">
			<div class="block">
				<form name="loginForm" method="post">
					<input type="hidden" name="Contact[Subject]" value="Contact Partner" />
					<input type="hidden" name="Contact[RedirectUrl]" value='~/thank-you-contact-partner' />
					<input style="display: none" name="Contact[PartnerId]" value="" />
					<div class="control-group">
						<label for="Contact[UserName]">User name:</label>
                        <input ng-model="user.user_name" class="form-input" style="width:300px;" type="text" value="" name="customer[user_name]" id="customer_user_name" placeholder="User Name" autocorrect="off" autocapitalize="off" autofocus ng-required="user.user_name" />
					</div>			
					<div class="control-group">
						<label for="Password">Password:</label>
						<input ng-model="user.password" class="form-input" style="width:300px;" type="password" value="" name="customer[password]" id="customer_password" placeholder="Password" ng-required="user.password"/>
					</div>
                     <div style="display: inline-flex; word-spacing: normal!important;">{{'or Login with: '}}<div style="position: relative;bottom: 10px;"><img src="gh-ico.png" alt=""> Github</div></div>
                    <p>
                        <div style="top: 25px; position: relative;" class="control-group">
					    	<button ng-click="signIn(user)" type="submit" class="button fill" ng-required="loginForm.$valid==true">Submit</button>
					    	<button ng-click="user = [];" type="submit" class="button fill">Cancel</button>
					    </div>
                    </p>
                     <a style="word-spacing: normal!important;" href="{{ '/registration' | absolute_url }}">or Create an Account</a>
				</form>
			</div>
		</div>
		<div class="column">
			<div class="block">
				<h3>Frequently asked questions</h3>
				<ul class="list">
					<li>
						<span class="title">When will I get reply from a partner?</span>
						<span class="descr">You should get reply from a partner within a business day. Please be aware of partner timezone. If 
						you don't get any reply within a day, please email us at sales@virtocommerce.com and will make sure you get questions answered.</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
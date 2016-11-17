---
title: Virto commerce - Enterprise .NET open-source ecommerce cloud platform. Request Services
description: Virto commerce - Enterprise .NET open-source ecommerce cloud platform. Try Now!
date: 2016-11-14
permalink: try-now-test
---
<div class="roadmap __responsive">
	<h1 class="head-title">Try Virto Commerce</h1>
	<p class="text">Tell us about your project and requirements and we’ll contact you shortly.</p>
	<div class="columns">
		<div class="column">
			<div class="block">
				<form action="{{ '/contact' | absolute_url }}" method="post">
					<input id="Contact[Subject]" type="hidden" name="Contact[Subject]" value="Try Virto Commerce" />
					<input id="Contact[RedirectUrl]" type="hidden" name="Contact[RedirectUrl]" value="~/thank-you" />
					<div class="column">
						<div class="control-group">
							<label for="Email">Your email</label>
							<input id="Contact[Email]" tabindex="1" type="text" name="Contact[Email]" class="form-input" required="required" autocomplete="email" />
						</div>					
					</div>
					<div class="control-group">
						<label for="SoftwareType">What describes you best?</label>
						<select id="Contact[SoftwareType]" name="Contact[SoftwareType]" type="text" class="form-input" tabindex="2">
							<option value="" selected>--</option>
							<option value="I am developer trying Virto Commerce">I am developer trying Virto Commerce</option>
							<option value="I am non-technical user trying Virto Commerce">I am non-technical user trying Virto Commerce</option>
							<option value="I have a solution using different software">I have a solution using different software</option>
							<option value="I am creating a solution for a customer">I am creating a solution for a customer</option>
						</select>					
					</div>
					<div class="control-group">
						<button type="submit" class="button fill" tabindex="3">Try Now</button>
					</div>
				</form>
			</div>
		</div>
		<div class="column">
			<div class="block">
				<h3>Frequently asked questions</h3>
				<ul class="list">
					<li>
						<span class="title">Is the source code provided?</span>
						<span class="descr">Yes, link to complete source code will be provided after completing the form.</span>
					</li>
					<li>
						<span class="title">How do I request for a demo?</span>
						<span class="descr">We'd love to demo our awesome platform for you! <a href="/demo">Sign-up for a personal demo/a> and we'll be right on it.</span>
					</li>
					<li>
						<span class="title">What is Cloud Hosting Services?</span>
						<span class="descr">Cloud hosting is a unique service we offer that allow our customers to focus on developing business features while our experienced engineers handle code and architecture validation, product code merges  in your source repository, deployments to production and much more.</span>
					</li>
					<li>
						<span class="title">Can I use Community Edition?</span>
						<span class="descr">Community edition can only be used for sites or businesses that generate less than 1 million USD gross annual revenue. Sites running community edition must have "powered by link" in the layout which displays a link to virtocommerce.com.</span>
					</li>
					<li>
						<span class="title">How do I remove "powered by link" while using Community Edition?</span>
						<span class="descr">You will need to get our production deployment community license. Please fill the form on this page and make sure to complete information about your company and website domain you want to use for community license.</span>
					</li>
                    	<li>
							<span class="title">Want to provide feedback?</span>
							<span class="descr">Use our <a href="https://virtocommerce.uservoice.com" rel="nofollow" target="_blank">User Voice Feedback</a> site to submit ideas or comment on existing ones.</span>
						</li>
				</ul>
			</div>
		</div>
	</div> 
</div>
{% include 'technologies' %}
---
title: Common pains of eCommerce websites migration and how to avoid them
description: This Virto Commerce whitepaper provides insight on how to avoid and overcome the typical ecommerce platform migration problems.
date: 2017-06-09
permalink: migration-whitepaper
---
<div class="roadmap __responsive">
	<h1 class="head-title">Download Whitepaper</h1>
	<div class="columns">
		<div class="column">
			<div class="block">
				<form action="{{ '/contact' | absolute_url }}" method="post">
					<input id="Contact[Subject]" type="hidden" name="Contact[Subject]" value="Whitepaper Download" />
					<input id="Contact[RedirectUrl]" type="hidden" name="Contact[RedirectUrl]" value="~/assets/files/whitepaper-ecommerce-platform-migration-problems.pdf" />
					<div class="column">
						<div class="control-group">
							<label for="FullName">First name (required)</label>
							<input id="Contact[FirstName]" tabindex="1" type="text" name="Contact[FirstName]" class="form-input" required="required" autocomplete="given-name" />
						</div>
						<div class="control-group">
							<label for="Email">Email (required)</label>
							<input id="Contact[Email]" tabindex="3" type="text" name="Contact[Email]" class="form-input" required="required" autocomplete="email" />
						</div>
						<div class="control-group">
							<label for="CompanyName">Company name</label>
							<input id="Contact[CompanyName]" tabindex="5" type="text" name="Contact[CompanyName]" class="form-input" autocomplete="organization"/>
						</div>						
					</div>
					<div class="column">
						<div class="control-group">
							<label for="LastName">Last name (required)</label>
							<input id="Contact[LastName]" tabindex="2" type="text" name="Contact[LastName]" class="form-input" required="required" autocomplete="family-name"/>
						</div>		
						<div class="control-group">
							<label for="Phone">Phone</label>
							<input id="Contact[Phone]" type="tel" tabindex="4" name="Contact[Phone]" class="form-input" autocomplete="mobile"/>
						</div>
						<div class="control-group">
							<label for="JobTitle">Job Title (required)</label>
							<input id="Contact[JobTitle]" type="text" tabindex="6" name="Contact[JobTitle]" class="form-input" required="required" autocomplete="organization-title" />
						</div>														
					</div>
					<div class="control-group">
						<label for="SoftwareType">Which Virto product are you considering?</label>
						<label><input id="Contact[SoftwareType][Enterprise]" tabindex="7" name="Contact[SoftwareType]" type="radio" value="Enterprise Edition" /> Enterprise Edition</label>
						<label><input id="Contact[SoftwareType][Cloud]" name="Contact[SoftwareType]" type="radio" value="Cloud Edition" /> Cloud Edition</label>
						<label><input id="Contact[SoftwareType][Community]" name="Contact[SoftwareType]" type="radio" value="Community" /> Community Edition</label>
						<label><input id="Contact[SoftwareType][Training]" name="Contact[SoftwareType]" type="radio" value="Training" /> Training Services</label>
						<label><input id="Contact[SoftwareType][Consulting]" name="Contact[SoftwareType]" type="radio" value="Consulting" /> Consulting Services</label>
						<label><input id="Contact[SoftwareType][NotSure]" name="Contact[SoftwareType]" type="radio" value="Not Sure" /> I'm not sure yet</label>
					</div>
					<div class="control-group">
						<label for="Revenue">Revenue (Gross Merchandise Volume) per year (USD)</label>
						<select id="Contact[Revenue]" name="Contact[Revenue]" type="text" class="form-input" tabindex="8">
						<option value="" selected>Select expected revenue</option>
							<option value="1m">Up to 1 Million</option>
							<option value="5m">1 - 5 Million</option>
							<option value="10m">5 - 10 Million</option>
							<option value="25m">10 - 25 Million</option>
							<option value="MoreThan25m">More than 25 Million</option>
						</select>
					</div>
					<div class="control-group">
						<label for="web">Which website are you are considering</label>
						<input id="Contact[Website]" type="text" name="Contact[Website]" class="form-input" tabindex="9"/>
					</div>
					<div class="control-group">
						<label for="Message">Tell us about your site, company and traffic (required)</label>
						<textarea id="Contact[Message]" rows="10" cols="30" name="Contact[Message]" class="form-text" required="required" tabindex="10"></textarea>
					</div>
					<div class="control-group">
						<button type="submit" class="button fill" tabindex="11">Download Whitepaper</button>
					</div>
				</form>
			</div>
		</div>
		<div class="column">
			<div class="block">
				<h3>Common pains of eCommerce websites migration and how to avoid them</h3>
				<p class="text">
                    This Virto Commerce whitepaper provides insight on how to avoid and overcome the typical ecommerce platform migration problems.
                </p>
				<p style="margin-top: 100px; text-align: center;">
					<img src="../assets/images/whitepaper-download.png" />
				</p>
			</div>
		</div>
	</div> 
</div>
{% include 'technologies' %}

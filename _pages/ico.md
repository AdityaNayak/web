---
permalink: /ico
layout: bare
title: ICO Growth Labs
<!-- image: bg2.jpg -->
description: Yield driven community marketing for your ICO/STO/IEO. 
---
<script>
	layoutvar="ico";
</script>
<div class="m-ws-bottom-p b-ws-top-p suitbg">
	<div class="row">
		<div class="large-3 large-offset-3 medium-4 medium-offset-2 small-10 small-offset-1 columns np">
			<div class="row">
				<a href="{{site.url}}">
					<div class="small-3 hide-for-medium-only columns">
						<img src="{{site.url}}/assets/img/vantage-logo-full.png" style="margin-top:0.25em;">
					</div>
</a>
					<div class="small-3 medium-4 large-3 columns">
						<a href="{{site.url}}">
							<h2 class="sans2 bkc f-1-25x" style="line-height:1;">The <br> Vantage <br>Project</h2>
						</a>
					</div>
					<div class="small-6 medium-8 large-6 columns" style="border-left: 1px solid #dedede;">
						<h1 class="f-1-5x bold bc" style="line-height: 1.27;">ICO Growth <br/> Labs</h1>
					</div>
			</div>
		</div>
		<div class="small-12 medium-6 columns xs-ws-top">
			<ul class="menu align-right hover">
        <li><a href="https://meetings.hubspot.com/aditya16" class="button">Let's talk</a></li>
        <li><a href="{{site.url}}/jobs" class="dbc">Careers</a></li>
        <li><a href="{{site.url}}/ico" class="dbc active">ICO</a></li>
        <li><a href="{{site.url}}/blockchain" class="dbc">Blockchain</a></li>
      </ul>
		</div>
	</div>
	<div class="row">
		<div class="small-12 medium-10  large-8 large-offset-3 medium-offset-2 columns b-ws-top b-ws-top-p">
			<h2 class="f-2x bold dbc nm">Performance Driven Investor Acquisition</h2>
			<h2 class="f-1-5x bc bold xs-ws-top">Yield driven community marketing</h2>
			<h2 class="f-1-25x s-ws-top">For your ICO/STO/IEO</h2>
		</div>
	</div>
	<div class="row">
		<div class="small-12 medium-10 medium-offset-2 large-8 large-offset-3 columns m-ws-top">
			<p class="bkc nm f-1-25x">It’s hard to raise funds in a bear market, but you’re in the right place.</p>
			<p>We design and execute your ICO plan. And charge you when we deliver.</p>
		</div>
	</div>
	<!-- <div class="row">
		<div class="small-12 large-9 large-offset-3 columns b-ws-top b-ws-top-p b-ws-bottom">
			<h2 class="bold bkc sans2"><span class="f-2x">Performance Driven</span></h2>
			<h2 class="bold bkc sans2"><span class="f-2x">Investor Acquisition</span></h2>
			<h2 class="sans2"><span class="f-1-5x">for your ICO</span></h2>
			<p class="f-1-5x">We take care your ICO marketing campaign end to end. And take ownership of the outcome.</p>
			<p class="f-1-25x">Sounds Interesting?</p>
			<div class="button large cta0">Tell me more</div>
		</div>
	</div> -->
</div>
<div class="wbg">
	<div class="row cta_ico1_t">
		<div class="small-12 medium-10 large-8 large-offset-3 medium-offset-2 columns m-ws-top b-ws-bottom">
			<div class="f-1-5x bold dbc">How much do you want to raise with your ICO?</div>
			<form class="large cta_ico1_trg m-ws-top">
				<div class="row">
					<div class="small-12 medium-6 large-5 columns">
						<div class="input-group">
					  <span class="input-group-label f-2x bkc">$</span>
					  <label style="display: inherit;">
					  <input class="input-group-field text-right f-2x bkc" required min="1" type="number" placeholder="10" style="border-left: none; border-right: none; padding-right: 0; border-radius: 0;">
					  <span class="input-group-label f-2x scolor2 bold" style="padding-left: 0;">,000,000</span>
					  </label>
						</div>
					</div>
				  <div class="small-12 medium-4 end columns">
				    <input type="submit" class="button xlarge success fullwidth" value="How to do it">
				  </div>
				</div>
			</form>
		</div>
	</div>
	<div class="row cta_ico1_0" style="display: none;">
		<div class="small-12 medium-11 medium-centered large-8 columns columns b-ws-top-p">
				<div class="callout">
					<div class="cta_ico1_2" style="display: none;">
						<h4 class="dbc bold">Fantastic Goal!</h4>
						<p class="bc" style="display: none;">Here are the variables that will get you there:</p>
					</div>
					<div class="cta_ico1_1">
						<div class="progress warning nm" role="progressbar" tabindex="0" aria-valuenow="50" aria-valuemin="0" aria-valuetext="50 percent" aria-valuemax="100">
						  <div class="progress-meter" style="width: 10%"></div>
						</div>
					</div>
					<div class="cta_ico1_3" style="display: none;">
						<div class="row">
							<div class="small-12 columns">
								<div class="scrollbox" style="height: 20em;">
									{% for entry in site.data.checklist %}
								  <h6>{{ entry.title }}</h6>
								    <ul class="naked columns">
								    {% for item in entry.items %}
								      <li><label class="bkc"><input type="radio" class="nm">  {{ item.name }}</label></li>
								    {% endfor %}
								    </ul>
								  {% endfor %}
								</div>
							</div>
							<!-- <div class="small-4 columns" style="border-left: 1px solid #dedede;">
								<div class="s-ws-bottom s">Indicative Estimates</div>
								<div class="f-1-5x bold dbc">$10000</div>
								<div class="s-ws-bottom">Capital needed</div>
								<div class="f-1-25x dbc">$50K</div>
								<div class="m-ws-bottom">Total Cost</div>
								<div class="f-1-25x dbc">3 weeks</div>
								<div class="s-ws-bottom">Prep time</div>
								<div class="f-1-25x dbc">15 weeks</div>
								<div>ICO runtime</div>
							</div> -->
						</div>
						<div class="row">
							<div class="small-12 columns small-centered s-ws-top">
								<div class="columns cta_ico1_4">
									<div class="f-1-25x bold dbc">Would you like to get a free consultation <br> or advice on how to save a lot of money on ICO promotion?</div>
									<!-- <div class="s">We will also email the roadmap.</div> -->
									<form class="large s-ws-top cta_ico1_4trg" action="http://forms.hubspot.com/uploads/form/v2/4557883/cce5015e-b995-4d7d-9c51-99762a47316a" method="POST">
										<div class="row">
											<div class="small-12 medium-7 columns">
												<div class="input-group">
											  <input class="input-group-field f-2x" required type="email" placeholder="you@email.com">
											 	</div>
											</div>
										  <div class="small-12 medium-5 end columns">
										    <input type="submit" class="button xlarge fullwidth cta2" value="Tell me the truth">
										  </div>
										</div>
									</form>
								</div>
								<div class="columns cta_ico1_5" style="display: none;">
									<div class="f-1-25x bold dbc">Perfect! Let us know a convenient time for you</div>
									<a href="https://meetings.hubspot.com/aditya16" class="button xs-ws-top xlarge success">Book a time slot</a>
								</div>
							</div>
						</div>
					</div>
				</div>
		</div>
	</div>
	<div class="row">
		<div class="small-12 medium-10 medium-offset-2 large-centered large-6 columns b-ws-top">
			<div class="f-1-5x bold dbc">Here is how the process works</div>
		</div>
	</div>
	<div class="row">
		<div class="large-8 medium-centered medium-10 small-12 columns b-ws-top">
			<div class="row">
				<div class="small-12 medium-4 columns">
					<img src="{{site.url}}/assets/img/checklist.png" width="48px;" class="m-ws-left">
					<div class="f-1-25x bkc bold xs-ws-top">1. Prepare for Sale</div>
					<p style="margin-left: 1.2em;">Trust is the foundation of a successful token sale</p>
				</div>
				<div class="small-12 medium-4 columns">
					<img src="{{site.url}}/assets/img/eyedropper.png" width="48px;" class="m-ws-left">
					<div class="f-1-25x bkc bold xs-ws-top">2. Test User Demand</div>
					<p style="margin-left: 1.2em;">Measure Yield across all activities</p>
				</div>
				<div class="small-12 medium-4 columns">
					<img src="{{site.url}}/assets/img/rocket.png" width="48px;" class="m-ws-left">
					<div class="f-1-25x bkc bold xs-ws-top">3. Scale Growth</div>
					<p style="margin-left: 1.2em;">Driven by self-sustaining cashflow</p>
			</div>
		</div>
	</div>
</div>
<!-- <div style="background:#112e50 url('../assets/img/space.jpg') no-repeat; background-size:cover;">
	<div class="row">
		<div class="large-10 columns small-10 small-centered b-ws-top">
			<div class="row wc">
				<div class="small-12 columns text-center m-ws-bottom">
					<h3 class="nm">Typical ICO timeline</h3>
					<p class="wcolor2 s">The path from ICO to Successful fund raise looks like 24 weeks and lots of sincerity.</p>
				</div>
			</div>
			<div class="row wcolor">
				<div class="large-6 small-12 columns np">
					<div class="timeline">
					  <div class="timeline-item">
					    <div class="timeline-icon text-center">
					      <div class="s2 wcolor">Week</div>
					      <div class="bold wc s">0</div>
					    </div>
					    <div class="timeline-content">
					      <p class="bold">ICO Whitepaper</p>
					      <ul class="naked s nm">
									<li class="nm">Whitepaper review</li>
									<li class="nm">Tokenomics</li>
									<li class="nm">Legal Review</li>
									<li>ICO objective outline</li>
								</ul>
					    </div>
					  </div>
					  <div class="timeline-item">
					    <div class="timeline-icon text-center">
					      <div class="s2 wcolor">Week</div>
					      <div class="bold wc s">1-2</div>
					    </div>
					    <div class="timeline-content right">
					      <p class="bold">ICO Website + Smart Contract</p>
					      <ul class="naked s nm">
									<li class="nm">Smart Contract Management System</li>
									<li class="nm">Book Building Platform</li>
									<li class="nm">Legal Review</li>
									<li>Multi currency Payment Gateway</li>
								</ul>
					    </div>
					  </div>
					  <div class="timeline-item">
					    <div class="timeline-icon text-center">
					      <div class="s2 wcolor">Week</div>
					      <div class="bold wc s">3-7</div>
					    </div>
					    <div class="timeline-content">
					      <p class="bold">Pre ICO Lead generation</p>
					      <ul class="naked s nm">
									<li class="nm">ICO Pools</li>
									<li class="nm">ICO Growth Labs Investor Pool</li>
									<li>ICO Listings</li>
								</ul>
					    </div>
					  </div>
					  <div class="timeline-item">
					    <div class="timeline-icon text-center">
					      <div class="s2 wcolor">Week</div>
					      <div class="bold wc s">8-11</div>
					    </div>
					    <div class="timeline-content right">
					      <p class="bold">Convert Pre ICO Leads</p>
					      <ul class="naked s nm">
									<li class="nm">Investor Events</li>
									<li class="nm">Webinar as a service</li>
								</ul>
					    </div>
					  </div>
					  <div class="timeline-item">
					    <div class="timeline-icon text-center">
					      <div class="s2 wcolor">Week</div>
					      <div class="bold wc s">12-15</div>
					    </div>
					    <div class="timeline-content">
					      <p class="bold">Public ICO Lead generation</p>
					      <ul class="naked s nm">
									<li class="nm">Community Building</li>
									<li class="nm">PR</li>
									<li class="nm">Influencer Network</li>
									<li class="nm">Bounty Platform</li>
									<li class="nm">Digital Media Sales Funnel</li>
									<li class="nm">Lead Attribution System</li>
								</ul>
					    </div>
					  </div>
					  <div class="timeline-item">
					    <div class="timeline-icon text-center">
					      <div class="s2 wcolor">Week</div>
					      <div class="bold wc s">15-23</div>
					    </div>
					    <div class="timeline-content right">
					      <p class="bold">Convert Public ICO Leads</p>
					      <ul class="naked s">
									<li>Webinar as a service</li>
								</ul>
					    </div>
					  </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div> -->
<!-- <div class="helmetbg" name="services">
	<div class="row">
		<div class="small-12 columns">
			Your product (Pathbreaking whitepaper + Legit team) + our Distribution (data based performance driven marketing) = magic
		</div>
	</div>
	<div class="row">
		<div class="large-9 large-offset-3 small-12 columns text-center b-ws-top s-ws-bottom">
			<h3 class="bkc">Our packages</h3>
			<p class="scolor s">Everything you need. Structured for your complete peace of mind</p>
		</div>
	</div>
	<div class="row">
		<div class="large-offset-3 large-4 medium-5 small-12 columns">
			<div class="callout wcolor" style="background: url('../assets/img/callout.png')">
			<h5 class="bold wc">Marketing</h5>
			<ul class="naked">
				<li class="s">Whitepaper review</li>
				<li class="wc bold">Complete Sales (Pre and Public ICO) Funnel</li>
				<li class="wc bold">Proprietary Lead tracking system</li>
				<li class="wc bold">Access to 3000+ KYC verified our own Investor Community</li>
				<li class="wc bold">Webinar as a Service to close sales</li>
				<li class="wc bold nm">Channels</li>
				<li class="s nm">Community Management</li>
				<li class="s nm">Influencer Network</li>
				<li class="s nm">Bounty program</li>
				<li class="s nm">PR</li>
				<li class="s nm">Search and Social Media buy</li>
				<li class="s nm">Investor Events</li>
				<li class="s nm">ICO Listings</li>
				</ul>
				<div class="row collapse">
				<div class="small-2 medium-3 large-2 columns sans2 f-3x bold yc">
					10
				</div>
				<div class="small-10 medium-9 large-10 columns s-ws-top sans2 end" style="margin-left: -0.5em">
					<div class="bold wcolor">BTC</div>
					<div class="wc" style="margin-top:-6px;">+20% Rolling Cost</div>
					<div class="wc" style="margin-top:-6px;">+2% Success Fee</div>
				</div>
			</div>
		</div>
	</div>
		<div class="large-3 small-12 medium-4 columns m-ws-top">
			<h5 class="bold">Technology</h5>
			<ul class="naked">
				<li class="bold bkc nm">Smart Contract</li>
				<li class="nm s">ERC-20 universal standard</li>
				<li class="s">Smart Contract Management System</li>
				<li class="bold nm bkc">Book Building Platform</li>
				<li class="nm s">Custom configured ICO rules</li>
				<li class="nm s">Multi currency (Crypto + Fiat) Payment Integration + Compliant Invoicing</li>
				<li class="s">Know your customer (KYC) integration</li>
				<li class="nm s">Real-time Statistics Dashboard + Analytics</li>
				<li class="s">Self hosted Token sale platform</li>
				<li class="bold nm bkc">Security Audit</li>
				<li class="s nm">OWASP Test</li>
				<li class="s nm">Network infrastructure discovery and audit</li>
				<li class="s nm">Smart contract stress test</li>
				<li class="s nm">Penetration Test</li>
				<li class="s nm">Turing Seal</li>
			</ul>
			<div class="row collapse">
				<div class="small-1 medium-2 large-1 columns sans2 f-3x bold dbc">
					7
				</div>
				<div class="small-11 columns medium-10 large-11 s-ws-top sans2 end">
					<div class="bold scolor">BTC</div>
					<div class="bkc" style="margin-top:-6px;">+1% Success Fee</div>
				</div>
			</div>
		</div>
		<div class="large-2 small-12 medium-3 columns b-ws-top" style="border-left:1px solid #dedede">
			<h5 class="bold nm">À la carte</h5>
			<p class="s2 scolor2" style="line-height: 1">Not ready for full commitment? Let's try assorted pieces instead.</p>
			<ul class="naked">
				<li class="bold bkc ">Community Management</li>
				<li class="bold bkc ">Bounty Campaigns</li>
				<li class="bold bkc ">Marketing and Media Buy</li>
				<li class="bold bkc ">PR Outreach</li>
				<li class="bold bkc ">Content Marketing</li>
				<li class="bold bkc ">Branding and Online Presence</li>
			</ul>
			<div class="row collapse">
				<div class="small-12 columns scolor2 s2">
					Packages starting
				</div>
				<div class="small-1 medium-2 columns sans2 f-2x bold dbc">
					1
				</div>
				<div class="small-11 medium-10 columns s-ws-top sans2 end">
					<div class="bold scolor" style="margin-left: -0.5em;">BTC</div>
				</div>
			</div>
		</div>		
	</div>
</div> -->
<div class="lgbg">
	<div class="row">
		<!-- <div class="large-8 large-offset-4 small-12 columns text-center b-ws-top">
			<div class="button large b-ws-bottom" >Order Now</div>
		</div> -->
		<div class="small-12 columns text-center">
			<!-- <p class="f-2-5x sans2 dbc nm m-ws-top">With us, you don't buy a Service. you Buy an Outcome.</p> -->
			<!-- <div class="row">
				<div class="large-2 columns text-right">
					You focus on:
				</div>
				<div class="large-2 columns text-left">
					<ul class="naked bkc bold">
						<li class="nm">Initial Capital</li>
						<li>Product + Vision</li>
					</ul>
				</div>
				<div class="large-1 columns f-3x">
					+
				</div>
				<div class="large-2 columns text-right">
					We take care of:
				</div>
				<div class="large-2 columns text-left">
					<ul class="naked bkc bold">
						<li class="nm">Investor Acquisition</li>
						<li class="nm">Community Building</li>
						<li>And everything your ICO needs to succeed!</li>
					</ul>
				</div>
				<div class="large-1 columns f-3x">
					=
				</div>
				<div class="large-2 columns f-1-5x">
					Magic
				</div>
			</div> -->
			<!-- <div class="f-1-25x">Your explosure is limited to initial capital and your time spent on working on your product. We take care of the rest</div> -->
			<!-- <div class="f-1-25x s-ws-bottom">We take ownership of the complete process, leaving you space to focus on your business.</div> -->
		</div>
	</div>
</div>

<div class="lgbg">
	<div class="row">
		<div class="small-12 columns m-ws-top">
			<p class="nm bkc s bold">Your exposure</p>
			<p class="scolor2 s nm">Initial Capital</p>
			<p class="scolor2 s nm">Build something that people want</p>
			<div class="secondary progress nbg">
			  <div class="progress-meter" style="width: 25%"></div>
</div>
			<!-- <p class="scolor2 s nm">Consistent Project Progress Updates</p>
			<div class="secondary nbg progress">
			  <span class="progress-meter nbg stacked" style="width: 20%">
			  </span>
			  <span class="progress-meter stacked nbrr" style="width: 80%">
			  </span>
			</div> -->
			<div class="progress large">
			  <span class="progress-meter ybg stacked nbrr" style="width: 20%">
			    <p class="progress-meter-text">Preperation</p>
			  </span>
			  <span class="progress-meter stacked nbrr" style="width: 30%">
			    <p class="progress-meter-text">Presale</p>
			  </span>
			  <span class="progress-meter dbbg stacked nbrr" style="width: 50%">
			    <p class="progress-meter-text">Public Sale</p>
			  </span>
			</div>
			<div class="secondary nbg progress">
			  <span class="progress-meter nbg stacked" style="width: 20%">
			  </span>
			  <span class="progress-meter stacked nbrr" style="width: 80%">
			  </span>
			</div>
			<p class="scolor2 s nm text-right">Distribution + Marketing</p>
			<p class="scolor2 s nm text-right">No cost at your end. All Costs managed through Rolling Success Fee</p>
			<p class="bkc s bold text-right">Our responsibility</p>
		</div>
	</div>
</div>
<div class="lgbg">
	<div class="row">
		<div class="small-12 medium-10 medium-centered large-6 columns">
			<div class="f-1-5x bold dbc">Our trusted partner network</div>
			<div class="row">
				<div class="small-3 columns">
					<div class="bc"><span class="f-2x bold">400</span>+</div> Media Outlets
				</div>
				<div class="small-3 columns">
					<div class="bc"><span class="f-2x bold">100</span>+</div> Influencers
				</div>
				<div class="small-3 columns">
					<div class="bc"><span class="f-2x bold">60</span>+</div> Investment Partners
				</div>
				<div class="small-3 columns">
					<div class="bc"><span class="f-2x bold">10</span>+</div> Crypto Exchanges
				</div>
			</div>
		</div>
	</div>
</div>
<div class="lgbg">
	<div class="row">
		<div class="small-12 medium-10 medium-centered large-6 columns f-1-25x b-ws-top">
		<h4 class="bkc dbc bold">We are different</h4>
		<p class="bkc">We see user growth (distribution) as the highest yield leverage for business success, in an increasingly noisy world . And spend significant weight on acquiring, nurturing and building exceptional capability to do so.</p>
		<p>We see growth not as a problem of "how" can it be done, but instead "how much" is it going to cost to get done. And yes, cost is not limited to just capital. We then work to ensure that the costs are in the range low enough to make the unit trade profitable, and that in turn makes an exponential growth curve possible.</p>
		</div>
	</div>
	<div class="row">
		<div class="small-12 medium-10 medium-centered large-6 columns b-ws-top">
			<h5 class="bkc dbc bold">People behind the thought process</h5>
			<div class="row">
				<div class="small-2 columns s-ws-top">
					<img src="{{site.url}}/assets/img/prastut.jpg" class="circle-img">
					<div class="xs-ws-top text-right"><a class="ibtn scolor s2" href="https://www.linkedin.com/in/prastut/" target="_blank">Linked in</a></div><div class="text-right"><a class="ibtn scolor s2" href="https://twitter.com/prastutkumar" target="_blank">Twitter</a></div>
				</div>
				<div class="small-10 columns s-ws-top">
					<div class="bold bkc f-1-25x">Prastut Kumar</div>
					<p class="nm">Rational builder + Bits hacker. Built high output execution pipelines for multiple technology businesses. </p>
					<p class="xs-ws-top">Insatiably curious. Likes to connect dots by combining several disparate fields</p>
					<!-- <p class="xs-ws-top">And something more</p> -->
					</div>
				</div>
				<div class="row">
					<div class="small-2 columns s-ws-top">
						<img src="{{site.url}}/assets/img/aditya.jpg" class="circle-img">
						<div class="xs-ws-top text-right"><a class="ibtn scolor s2" href="https://www.linkedin.com/in/adityanayak/" target="_blank">Linked in</a></div><div class="text-right"><a class="ibtn scolor s2" href="https://twitter.com/AdityaNayak" target="_blank">Twitter</a></div>
					</div>
					<div class="small-10 columns s-ws-top">
						<div class="bold bkc f-1-25x">Aditya Kumar Nayak</div>
						<p class="nm">Rational thinker + Growth hacker. Accelerated multiple businesses from seed stage revenues (under $10K) to >$10 million in average annual revenue + healthy profits.</p>
						<p class="xs-ws-top">Contrarian investor. 10x'ed a $100K corpus in 2 years.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
<div class="lgbg">
	<!-- <div class="row">
		<div class="small-12 medium-8 large-centered large-10 columns small-centered b-ws-top">
			<div class="callout animate">
				<div class="row">
					<div class="large-5 small-12 medium-6 medium-centered large-uncentered columns">
						<img src="{{site.url}}/assets/img/ebook2.png" class="step0f">
						<img src="{{site.url}}/assets/img/loading.gif" style="display: none" class="step1f">
						<img src="{{site.url}}/assets/img/woman.png" style="display: none; border-bottom: 1px solid #dedede;" class="step3f">
					</div>
					<div class="large-7 small-12 columns">
						<div class="step0">
							<h5 class="scolor nm">Sign up for a Free Webinar and</h5>
							<h4 class="bkc bold">Top 10 Reasons your ICO will fail</h4>
							<div class="row">
								<div class="small-12 medium-8 columns">
									<form class="cta-main">
										<label class="bkc">Your Email
										<div class="input-group">
											<input class="input-group-field cta-email" type="email" require placeholder="We'll send the pack on your email">
										  <div class="input-group-button">
										    <input type="submit" class="button" value="Submit">
										  </div>
										</div>
										</label>
									</form>
								</div>
							</div>
							<p class="m-ws-top f-1-25x">You will also get access to the <span class="bold bkc" style="display: inline-block;">ICO starter pack</span> that includes:</p>
							<ul class="naked">
								<li class="nm bold">3 eBooks</li>
								<li class="nm s">10 effective Tokenomics models</li>
								<li class="nm s">Bancor: A simple truth we learnt after wasting $10,000</li>
								<li class="s">5 ways to not build a community</li>
								<li class="nm bold ">5 Cheatsheets + 5 Checklists</li>
								<li class="nm s">Your Tokenomics cheatsheet</li>
								<li class="nm s">Things to keep in mind before you make smart contract Live</li>
								<li class="nm s">Keep these things in mind while creating content</li>
								<li class="s">and more</li>
							</ul>
						</div>
						<div class="step1 text-center" style="display:none;">
							<div class="f-2x bkc">Awesome! </div>
							<h5 class="scolor processing">We are preparing your ICO start pack. Give us a few minutes</h5>
							<div class="done" style="display:none;">Your ICO Starter Pack has been sent to your inbox</div>					
							<div class="progress warning" role="progressbar" tabindex="0" aria-valuenow="50" aria-valuemin="0" aria-valuetext="50 percent" aria-valuemax="100">
							  <div class="progress-meter" style="width: 10%"></div>
							</div>
						</div>
						<div class="step2" style="display:none;">
							<div class="scolor f-1-25x">In the meanwhile, let's get to know each other</div>
							<h4 class="bkc bold nm">Tell us more about yourself</h4>
							<div class="scolor">And it'll serve as a starting point for our conversation</div>
						</div>
						<div class="step3" style="display:none;">
							<div class="row">
								<div class="large-9 columns">
									<form class="m-ws-top cta-main2" action="http://forms.hubspot.com/uploads/form/v2/4557883/cce5015e-b995-4d7d-9c51-99762a47316a" method="POST">
										<label class="bkc">Your Name
											<input type="text" class="funame" placeholder="What should we call you?">
										</label>
										<label class="bkc">Your Email
											<input type="email" class="email-val" placeholder="We'll send you an invite">
										</label>
										<label class="bkc">Your Project Link
											<input type="url" class="purl" placeholder="Show us more about your project">
										</label>
										<label class="bkc">What would you like our help on?
											<textarea class="msg" placeholder="Talk about your goals, focus on outcomes and be specific." rows="10"></textarea>
										</label>
										<input type="submit" class="button fullwidth">
									</form>
								</div>
							</div>
						</div>
						<div class="step4 text-center" style="display:none;">
							<div class="bkc f-2x bold s-ws-top xs-ws-bottom">Great! Let's connect</div>
							<a href="https://meetings.hubspot.com/aditya16" class="button success">Schedule a 30 min consultation</a>
						</div>	
					</div>
				</div>
			</div>
		</div>
	</div> -->
	<div class="row">
		<div class="small-12 columns text-center b-ws-top b-ws-top-p">
			<p class="f-2x nm bold bkc">Interested?</p>
			<p class="f-1-5x">We are here to do the heavy lifting for you</p>
			<div><a class="button large" href="https://meetings.hubspot.com/aditya16" target="_blank">Let's Talk</a></div>
			<img src="{{site.url}}/assets/img/crawler.jpg" class="b-ws-top">
		</div>
	</div>
</div>

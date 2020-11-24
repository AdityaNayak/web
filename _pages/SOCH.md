---
permalink: /soch/
layout: default
<!-- title: Buidl Labs -->
<!-- image: bg2.jpg -->
description: 
---
<div class="b-ws-top-p b-ws-bottom-p">
    <div class="grid-container">
        <div class="grid-x grid-padding-x align-center">
            <div class="small-12 medium-10 large-6 end cell b-ws-top b-ws-bottom-p">
                <h1>SOCH: A simpler, more resilient stable coin.</h1>
                <h2 class="b-ws-top">Need for a governance minimal stablecoin system</h2>
                <p>Paper currency started as receipts for gold kept with the bank. Uptil the 70s, you could even redeem it for gold.</p>
                <p>Current decentralized stable coins (DAI) merely mimic this model, with blockchain assets transposed. </p>
                <p>This old model is weak. It has too many moving parts that need supervision to maintain the peg. 
                    <br>Every moving part costs resilience and independence.</p>
                <p>For, what needs to be maintained, needs control. What needs control, requires authority. Thus creating power centers. 
                </p>
                <p>We can do better.</p>
                <h2 class="b-ws-top">Idea</h2>
                <h4 class="m-ws-top">Concept</h4>
                <p>x+(Δx - Δx)=x</p>
                <p>In trading, this is a representation of a market neutral-position.</p>
                <h4 class="m-ws-top">What is a market-neutral position?</h4>
                <p>In financial trading:</p>
                <p>If I take a long trade, and price goes from 100 to 110. I make 10 profit.</p>
                <p>If I take a short trade, and price goes from 110 to 100. I make a 10 loss.</p>
                <p>If I take 1 long trade and 1 short (same-sized) trades simultaneously, irrespective of where the price goes; I make no profit and no loss.</p> 
                <p>In other words, the value of my portfolio remains the same.</p>
                <p><b>This is called a market-neutral position.</b></p>
                <p class="m-ws-top"><bold>Try yourself:</bold></p>
                <div class="s-ws-top callout b lgbg">
                    <p class="bold">A $100 market-neutral portfolio</p>
                    <div class="grid-x grid-padding-x">
                        <div class="cell small-9">
                            Current ETH-USD price:
                        </div>
                        <div class="small-3 cell text-right">
                            <span class="ethprice">...</span>
                        </div>
                    </div>
                    <div class="grid-x grid-padding-x s-ws-top">
                        <div class="cell small-8 xs-ws-top">
                            Try a future ETH-USD price:
                        </div>
                        <div class="small-1 cell text-right np xs-ws-top">
                            $
                        </div>
                        <div class="small-3 cell">
                            <input type="number" id="sliderOutput2" class="text-right">
                        </div>
                    </div>
                    <div class="grid-x grid-margin-x">
                      <div class="cell small-9">
                        <div class="slider" data-slider data-initial-start="50" data-step="5" data-end="1000">
                          <span class="slider-handle"  data-slider-handle role="slider" tabindex="1" aria-controls="sliderOutput2"></span>
                          <span class="slider-fill" data-slider-fill></span>
                        </div>
                      </div>
                    </div>
                    <div class="grid-x grid-padding-x s-ws-top">
                        <div class="cell small-9 xs-ws-top">
                            Value of $50 Long position:
                        </div>
                        <div class="small-2 cell">
                            $ <span class="longpos">...</span>
                        </div>
                        <div class="small-1 cell np">
                            <span class="longposcent s2"></span>
                        </div>
                    </div>
                    <div class="grid-x grid-padding-x s-ws-top">
                        <div class="cell small-9 xs-ws-top">
                            Value of $50 Short position:
                        </div>
                        <div class="small-2 cell">
                            $ <span class="shortpos">...</span>
                        </div>
                        <div class="small-1 cell np">
                            <span class="shortposcent s2"></span>
                        </div>
                    </div>
                    <div class="grid-x grid-padding-x s-ws-top">
                        <div class="cell small-9 xs-ws-top">
                            Portfolio Value
                        </div>
                        <div class="small-2 cell">
                           $100
                        </div>
                        <div class="small-1 cell np">
                            <span class="s2">+0%</span>
                        </div>
                    </div>
                </div>
                <h4 class="m-ws-top">Perspective</h4>
                <p>The purpose of a stablecoin is to main its ‘value’, not price. Price is merely a denotation of value.</p>
                <p>Hence, value with net zero change, is 'stable' in price by consequence. A token that can peg it, is thus a stablecoin.</p>
            </div>
        </div>
    </div>
        <div class="dbbg">
        <div class="grid-container">
            <div class="grid-x grid-padding-x align-center">
                <div class="small-12 medium-10 large-6 end cell b-ws-bottom-p">
                    <p class="wc b-ws-top">Introducing: </p>
                    <img src="{{site.url}}/assets/img/lotus.svg" class="img-s">
                    <h3 class="s-ws-top wc">SOCH Stablecoin</h3>
                    <p class="f-1-25x wc">A token that pegs itself to a market-neutral portfolio and hence, remains stable in value.</p> 
                    <p class="wcolor">It's value is preserved by opening a 50% long + 50% short position in decentralized markets.</p>
                    <!-- <p class="bold">It needs nothing more to maintain its peg.</p> -->
                    <!-- <p>Remember, the goal is not a $ pegged currency, the goal is a ‘stable’ currency. </p> -->
                </div>
            </div>
        </div>
    </div>
    <div class="grid-container">
        <div class="grid-x grid-padding-x align-center">
            <div class="small-12 medium-10 large-6 end cell b-ws-top">
                <h2 class="b-ws-top">System Design</h2>
                <h4 class="m-ws-top">Minting contract</h4>
                <p><b>Input:</b> $x value of ETH/USDT/USDC or any erc-20 token.</p>
                <p><b>Process:</b></p>
                <ul>
                    <li>A 1x short position of value x/2 is opened on dydx eth-usd <a href="https://docs.dydx.exchange/#perpetual-protocol">perpetual contract</a>.</li>
                    <li>A 1x long position of value x/2 is opened on dydx eth-usd.</li>
                    <li>Total balance of the account is the sum of both these positions (including their profit/loss).</li>
                </ul>
                <p><b>Output:</b> 1 SOCH for each $ value of the net balance of the account are minted.</p>
                <!-- <p>The $ value of the current dydx portfolio is recorded and sent to issuer contract.</p> -->
                <!-- <p>The $ value of both these positions cumulated will match the input $ value.</p> -->
                <!-- <h4 class="m-ws-top">Issuer contract</h4>
                <p>1$ = 1 SOCH.</p>
                <p>Contract issues 1 SOCH for each $ of value.</p> -->
                <h4 class="m-ws-top">Redemption contract</h4>
                <p><b>Input:</b>x SOCH</p>
                <p><b>Process:</b></p>
                <ul>
                    <li>Both 1x long and short positions are closed and the account settled.</li>
                    <li>SOCH tokens are burnt and original collateral is returned back.</li>
                </ul>
                <p><b>Output:</b>$x value of ETH/USDT/USDC (whatever the original asset was)</p>
                <p class="m-ws-top bold">That’s it. </p>
                <p>Simplicity is a super power, indeed.</p>
                <h2 class="b-ws-top ">Let's discuss system Resilience</h2>
                <h3 class="m-ws-top">1. Observing attack vectors vis-a-vis other systems</h3>
                <h4 class="m-ws-top">a. High price-volatility of ETH</h4>
                <p><b>Attack:</b> Similar to <a href="https://blog.makerdao.com/the-market-collapse-of-march-12-2020-how-it-impacted-makerdao/">Black Thursday</a> event at Maker DAO.</p>
                <p><b>View:</b></p>
                <ul>
                  <li>Since value isn't backed by different volatile asset (eg. ETH), price fluctuations have no impact.</li>
                  <li><b>What about the risk of liquidation of short position?</b> <br> 
                  Even when the value of ETH moons, the increase in value of the long position increases the collateral and the short position is not liquidated.</li>
                </ul>
                <h4 class="m-ws-top">b. Failure of oracle</h4>
                <p><b>Attack:</b> The pricefeed from oracle could be manipulated or become stale due to network congestion. Similar to a <a href="https://www.youtube.com/watch?v=kz9xIk6B-Gs&t=357s">past Bax exploit.</a></p>
                <p><b>View:</b> Since both positions use the same oracle, net effect of inaccurate price would be 0.</p>
                <p>This vector was used in a past bzx exploit.</p>
                <h4 class="b-ws-top">c. Loss of peg</h4>
                <p><b>Attack:</b> If the price of SOCH goes above or below a $ in the open market.</p>
                <p><b>View:</b> Then it would be foolish to buy more expensive SOCH, when you can simple mind more at the exact 1:1 price. And vice-a-versa.</p>
                <h4 class="m-ws-top">d. Failure of collateral</h4>
                <p><b>Attack:</b> The underlying collateral gets seized or loses value. <a href="https://forum.makerdao.com/t/onboarding-usdc-as-collateral-to-mitigate-liquidity-risk/1570">Example.</a></p>
                <p><b>View:</b> There isn't any collateral, hence this risk doesn't exist.</p>
                <p>There is however a base currency (for eg. ETH/USDT pair uses USDT as the base currency). By using a synthetic pair like ETH/USD, this risk can be eliminated.</p>
                <p>This creates a risk of the settlement currency losing its value. (Settlement currency is the token that is used to measure the final value of both positions.)</p>
                <p>This leakage can be plugged by using markets that use ETH as the settlement currency. <a href="https://docs.dydx.exchange/#eth-usd-perpetual-contract-specification">This</a> dydx contract is one such example.</p>
                <h4 class="m-ws-top">e. Network congestion during times of price volatility</h4>
                <p><b>Attack:</b> Eth network gets clogged and eth price plunges.</p> 
                <p><b>View:</b> Since price is not an attack vector, portfolio value even with stale pricefeed is accurate.</p>
                <p>Congestion may hamper minging/redemption function temporarily, at best.</p>
                <h3 class="b-ws-top">2. Observing attack vectors of this system</h3>
                <h4 class="m-ws-top">a. Lack of liquidity</h4>
                <p><b>Attack:</b> If the underlying market's orderbook is thin, there may be slippage when opening and closing positions and that may leak value.</p>
                <p><b>View:</b> This is invalidated by design since both positions are opposites of each other and hence, trade into each other.</p>
                <h4 class="m-ws-top">b. Market structure failure</h4>
                <p><b>Attack:</b> If the exchange breaks, and/or there is an error/leakage in position opening/closing.</p>
                <p><b>View:</b> This is a valid attack vector. This vector should get resolved as the DeFi tooling matures. Current view is that the tools available today (specifically dydx) are good enough to test atleast a prototype, if not some more.</p>
                <p class="b-ws-top bold">Welcome to the first neutralcoin.</p>
                <h3 class="b-ws-top">This system design creates interesting system properties that make it better money:</h3>
                <h4 class="m-ws-top">Purposeless-ness</h4>
                <p>In traditional investing, simultaneously going long and short serves no purpose.</p>
                <p>It is Purposeless. That’s exactly what we need.</p>
                <p>Money is purposeless. Its value comes from what it can be transformed into. When that transformation is value positive, progress occurs.</p>
                <h4 class="m-ws-top">Resilience</h4>
                <p>With no parts that require supervision, the system becomes self-stabilizing, autonomous, and resilient. </p>
                <p>The system is pegged to itself. And hence, only needs efficient markets, not resilient assets. Even if the underlying asset goes to 0. The net value will still maintain its peg.</p>
                <h4 class="m-ws-top">Unclogged flow of wealth</h4>
                <p>150% collateral ratio as in the case of DAI is not needed. Whenever you need some SOCH, just mint some at 1:1 $ value.</p>
                <p>Because the system doesn’t peg to any collateral, it doesn’t need to account for buffer. Buffer is value that is locked away and not available to be spent forward. Not having to need one, unlocks more wealth.</p> 
            </div>
        </div>
    </div>
</div>



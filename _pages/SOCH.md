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
            <div class="small-12 medium-10 large-6 end cell b-ws-top">
                <h1>SOCH: A simpler, more resilient stable coin.</h1>
                <h2 class="b-ws-top">Why</h2>
                <p>Paper currency started as receipts for gold kept with the bank. Uptil the 70s, you could even redeem it for gold.</p>
                <p>Current decentralized stable coins (DAI) merely mimic this model, with blockchain assets transposed. </p>
                <p>This old model is weak. It has too many moving parts that need supervision to maintain the peg. 
                    <br>Every moving part costs resilience and independence. For, what needs to be maintained needs control. What needs control, requires authority. Thus creating power centers. 
                </p>
                <p>We can do better.</p>
                <h2 class="b-ws-top">How</h2>
                <h4 class="m-ws-top">Perspective</h4>
                <p>The purpose of a stablecoin is to main its ‘value’, not price. Price is merely a denotation of value.</p>
                <p>Hence, preserved constant value, is 'stable' by consequence. A token that can map it, is thus a stablecoin.</p>
                <h4 class="m-ws-top">Idea</h4>
                <p>y+(x + (-x))=y</p>
                <p>where, y = original value; x = change in value</p>
                <h4 class="m-ws-top">Market-Neutral</h4>
                <p>In financial trading:</p>
                <p>If I take a long trade, and price goes from 100 to 110. I make 10 profit.</p>
                <p>If I take a short trade, and price goes from 110 to 100. I make a 10 loss.</p>
                <p>If I take 1 long trade and 1 short (same-sized) trades simultaneously, irrespective of where the price goes; I make no profit and no loss.</p> 
                <p>In other words, the value of my portfolio remains the same.</p>
                <p>This is called a market-neutral position.</p>
                <p><bold>Try yourself:</bold></p>
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
                <img src="{{site.url}}/assets/img/lotus.svg" class="img-h b-ws-top">
                <h3 class="s-ws-top">SOCH Stablecoin</h3>
                <p>SOCH: A token that maps a market-neutral portfolio and hence, maintains a self-peg. 50% long + 50% short position on any market.</p>
                <p class="bold">It needs nothing more to maintain its peg.</p>
                <!-- <p>Remember, the goal is not a $ pegged currency, the goal is a ‘stable’ currency. </p> -->
                <h2 class="b-ws-top">What</h2>
                <h4 class="m-ws-top">Pegging function</h4>
                <p>When ETH/USDT/USDC is sent to it, it uses half of it to open a 1x short position on dydx eth-usd <a href="https://docs.dydx.exchange/#perpetual-protocol">perpetual contract</a>.</p>
                <p>It uses the other half to spot buy eth and add it to the collateral.</p>
                <p>The $ value of the current dydx portfolio is recorded and sent to issuer contract.</p>
                <!-- <p>The $ value of both these positions cumulated will match the input $ value.</p> -->
                <h4 class="m-ws-top">Issuer function</h4>
                <p>1$ = 1 SOCH.</p>
                <p>Contract issues 1 SOCH for each $ of value.</p>
                <h4 class="m-ws-top">Redeeming function</h4>
                <p>Reverse of the other 2 functions.</p>
                <p class="m-ws-top bold">That’s it. </p>
                <p>Simplicity is a super power, indeed.</p>
                <h2 class="b-ws-top">Observing attack vectors vis-a-vis other systems</h2>
                <h4 class="m-ws-top">Price of ETH</h4>
                <p>Irrespective of where ever the price goes, net value remains the same.</p>
                <p>Even when the value moons, the increase in value of the long position increases the collateral and the short position is not liquidated.</p>
                <h4 class="m-ws-top">Failure of oracle (inaccurate pricefeed)</h4>
                <p>Since both positions use the same oracle, net effect of inaccurate price would be 0.</p>
                <p>This vector was used in a bzx exploit.</p>
                <h4 class="m-ws-top">Failure of collaterized asset</h4>
                <p>This leakage is a function of the settlement currency, since the ticker price has no impact on the net value.</p>
                <p>This can be plugged by using markets that use ETH as the settlement currency. <a href="https://docs.dydx.exchange/#eth-usd-perpetual-contract-specification">This</a> dydx contract is one such example.</p>
                <p>This is specially relevant, in light of the debate around adding new collaterals to Maker.</p>
                <h4 class="m-ws-top">Network congestion during price volatility</h4>
                <p>Since price is not an attack vector, portfolio value even with stale pricefeed is accurate.</p>
                <p>Congestion may possibly hamper redemption function. That vector can be eliminated by chaining both transactions together.</p>
                <h2 class="b-ws-top">Observing new attack vectors</h2>
                <h4 class="m-ws-top">Lack of liquidity</h4>
                <p>Attack: If the orderbook is thin, there may be slippage when opening and closing positions and that may leak value.</p>
                <p>View: This is be not a problem since both positions are opposites of each other and trade into each other. Thus, creating and taking liquidity from each other.</p>
                <h4 class="m-ws-top">Market structure failure</h4>
                <p>Attack: If the exchange breaks, and there is an error in position opening/closing.</p>
                <p>View: This is a valid attack vector. This vector should get resolved as the DeFi tooling matures. Current view is that the tools available today (specifically dydx) are good enough to test atleast a prototype, if not more.</p>
                <p class="b-ws-top bold">Welcome to the first neutralcoin.</p>
                <h3 class="b-ws-top">This system design creates interesting system properties:</h3>
                <h4 class="m-ws-top">Purposeless</h4>
                <p>In traditional finance, going long and short serves no purpose.</p>
                <p>It is Purposeless. That’s exactly what we need.</p>
                <p>Money is purposeless. Its value comes from what it can be transformed into. When that transformation is value positive, progress occurs.</p>
                <h4 class="m-ws-top">Resilience</h4>
                <p>With no parts that require supervision, the system becomes self-stabilizing, autonomous, and resilient. </p>
                <p>The system is pegged to itself. And hence, only needs efficient markets, not resilient assets. Even if the underlying asset goes to 0. The overall portfolio will still maintain its peg.</p>
                <p>Also, having to worry about the credibility of which tokens to introduce into the system, like USDC in case of DAI, is now redundant. </p>
                <h4 class="m-ws-top">Unblocked wealth</h4>
                <p>Because the system doesn’t peg to any collateral, it doesn’t need to account for buffer.</p> 
                <p>150% collateral ratio as in the case of DAI is not needed. Whenever you need some SOCH, just mint some at 1:1 $ value.</p>
            </div>
        </div>
    </div>
</div>



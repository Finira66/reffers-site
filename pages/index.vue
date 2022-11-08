<template>
  <div>
    <TheHeader
        @modal-login="showModalLogin"
        @modal-register="showModalRegister"
    />

    <div>
      <SpriteIcons/>

      <main class="main">
        <section class="intro">
          <div class="intro__container container">
            <h1 class="intro__title">A Unique Affiliate Program</h1>
            <div class="intro__desc">
              Now, Crypto products and Forex trading are combined in one place
              called Finteria
            </div>
            <div class="intro__services">
              <div class="intro__service">
                <svg
                    class="icon icon_trading intro__service-icon"
                    height="1em"
                    width="1.025em"
                >
                  <use xlink:href="#icon-trading"></use>
                </svg>
                <div class="intro__service-title">Margin Trading</div>
                <div class="intro__service-bg intro__service-bg_revert">
                  <img src="@/assets/images/info-services.svg?2db04ff7"/>
                </div>
              </div>
              <div class="intro__service">
                <svg
                    class="icon icon_exchange intro__service-icon"
                    height="1em"
                    width="1em"
                >
                  <use xlink:href="#icon-exchange"></use>
                </svg>
                <div class="intro__service-title">Crypto Exchange</div>
                <div class="intro__service-bg intro__service-bg_revert">
                  <img src="@/assets/images/info-services.svg?2db04ff7"/>
                </div>
              </div>
              <div class="intro__service">
                <svg
                    class="icon icon_landing intro__service-icon"
                    height="1em"
                    width="0.9876543209876543em"
                >
                  <use xlink:href="#icon-landing"></use>
                </svg>
                <div class="intro__service-title">Landing</div>
                <div class="intro__service-bg">
                  <img src="@/assets/images/info-services.svg?2db04ff7"/>
                </div>
              </div>
              <div class="intro__service">
                <svg
                    class="icon icon_staking intro__service-icon"
                    height="1em"
                    width="1.1896551724137931em"
                >
                  <use xlink:href="#icon-staking"></use>
                </svg>
                <div class="intro__service-title">Staking</div>
                <div class="intro__service-bg">
                  <img src="@/assets/images/info-services.svg?2db04ff7"/>
                </div>
              </div>
            </div>
            <div class="intro__group">
              <div class="intro__subtitle">Up to $400 CPA</div>
              <div class="intro__legend">or 50% lifetime revenue share</div>
            </div>
            <div class="intro__button-wrap">
              <button
                  class="button button_large"
                  @click="showModalRegister"
              >Become an affiliate</button>
            </div>
            <div class="intro__counts">
              <div class="intro__count">
                <svg
                    class="icon icon_check intro__count-icon"
                    height="1em"
                    width="1em"
                >
                  <use xlink:href="#icon-check"></use>
                </svg>
                <div class="intro__count-content">
                  <div class="intro__count-title">Up to 15%</div>
                  <div class="intro__count-desc">High conversion rate</div>
                </div>
              </div>
              <div class="intro__count">
                <svg
                    class="icon icon_check intro__count-icon"
                    height="1em"
                    width="1em"
                >
                  <use xlink:href="#icon-check"></use>
                </svg>
                <div class="intro__count-content">
                  <div class="intro__count-title">180+ geo</div>
                  <div class="intro__count-desc">GEOs accepted</div>
                </div>
              </div>
              <div class="intro__count">
                <svg
                    class="icon icon_check intro__count-icon"
                    height="1em"
                    width="1em"
                >
                  <use xlink:href="#icon-check"></use>
                </svg>
                <div class="intro__count-content">
                  <div class="intro__count-title">3 payments</div>
                  <div class="intro__count-desc">Fiat, crypto or stablecoins</div>
                </div>
              </div>
              <div class="intro__count">
                <svg
                    class="icon icon_check intro__count-icon"
                    height="1em"
                    width="1em"
                >
                  <use xlink:href="#icon-check"></use>
                </svg>
                <div class="intro__count-content">
                  <div class="intro__count-title">7 languages</div>
                  <div class="intro__count-desc">
                    Affiliate Manager Team speaks
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="intro__bg">
            <img src="@/assets/images/intro-bg.png?29d4a43f"/>
          </div>
        </section>
        <section class="brands" id="products">
          <div class="brands__container container">
            <h2 class="title brands__title">Brands that sell themselves</h2>
            <div class="brands__item">
              <div class="brands__logo brands__logo_mobile">
                <img src="@/assets/images/finteria.svg?c5399dc9"/>
              </div>
              <div class="brands__image brands__image_shine">
                <img src="@/assets/images/brand-1.png?cf709822"/>
              </div>
              <div class="brands__content">
                <div class="brands__logo brands__logo_desktop">
                  <img src="@/assets/images/finteria.svg?c5399dc9"/>
                </div>
                <div class="brands__desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  maximus, nulla ut commodo sagittis, sapien dui mattis dui, non
                  pulvinar lorem felis necerat Lorem ipsum dolor sit amet,
                  consectetur
                </div>
                <div class="brands__subtitle">Sales poins</div>
                <ul class="brands__list">
                  <li class="brands__list-item">
                    <svg
                        class="icon icon_check-clear"
                        height="1em"
                        width="1.125em"
                    >
                      <use xlink:href="#icon-check-clear"></use>
                    </svg
                    >
                    <span>No GEO restrictions for clients</span>
                  </li>
                  <li class="brands__list-item">
                    <svg
                        class="icon icon_check-clear"
                        height="1em"
                        width="1.125em"
                    >
                      <use xlink:href="#icon-check-clear"></use>
                    </svg
                    >
                    <span>Meta Trader 5 or simple Web Trading platforms</span>
                  </li>
                  <li class="brands__list-item">
                    <svg
                        class="icon icon_check-clear"
                        height="1em"
                        width="1.125em"
                    >
                      <use xlink:href="#icon-check-clear"></use>
                    </svg
                    >
                    <span>Leverage 1:500, Bonus 100%</span>
                  </li>
                  <li class="brands__list-item">
                    <svg
                        class="icon icon_check-clear"
                        height="1em"
                        width="1.125em"
                    >
                      <use xlink:href="#icon-check-clear"></use>
                    </svg
                    >
                    <span
                    >Interest rate accounts with up to 12% annual rate</span
                    >
                  </li>
                  <li class="brands__list-item">
                    <svg
                        class="icon icon_check-clear"
                        height="1em"
                        width="1.125em"
                    >
                      <use xlink:href="#icon-check-clear"></use>
                    </svg
                    >
                    <span>Crypto-backed loans</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="brands__item">
              <div class="brands__logo brands__logo_mobile">
                <img src="@/assets/images/bitzaim_white.svg?3c85d6c0" class="bitzaim-logo"/>
              </div>
              <div class="brands__image">
                <img src="@/assets/images/brand-2.png?cf967264"/>
              </div>
              <div class="brands__content">
                <div class="brands__logo brands__logo_desktop ">
                  <img src="@/assets/images/bitzaim_white.svg?3c85d6c0" class="bitzaim-logo"/>
                </div>
                <div class="brands__desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  maximus, nulla ut commodo sagittis, sapien dui mattis dui, non
                  pulvinar lorem felis necerat Lorem ipsum dolor sit amet,
                  consectetur
                </div>
                <div class="brands__subtitle">Sales poins</div>
                <ul class="brands__list">
                  <li class="brands__list-item">
                    <svg
                        class="icon icon_check-plus"
                        height="1em"
                        width="0.9523809523809523em"
                    >
                      <use xlink:href="#icon-check-plus"></use>
                    </svg
                    >
                    <span>Swiss regulated company</span>
                  </li>
                  <li class="brands__list-item">
                    <svg
                        class="icon icon_check-clear"
                        height="1em"
                        width="1.125em"
                    >
                      <use xlink:href="#icon-check-clear"></use>
                    </svg
                    >
                    <span>Partnership with BitGo</span>
                  </li>
                  <li class="brands__list-item">
                    <svg
                        class="icon icon_check-clear"
                        height="1em"
                        width="1.125em"
                    >
                      <use xlink:href="#icon-check-clear"></use>
                    </svg
                    >
                    <span>Buy or exchange crypto in one click</span>
                  </li>
                  <li class="brands__list-item">
                    <svg
                        class="icon icon_check-clear"
                        height="1em"
                        width="1.125em"
                    >
                      <use xlink:href="#icon-check-clear"></use>
                    </svg
                    >
                    <span
                    >Interest rate accounts with up to 12% annual rate</span
                    >
                  </li>
                  <li class="brands__list-item">
                    <svg
                        class="icon icon_check-clear"
                        height="1em"
                        width="1.125em"
                    >
                      <use xlink:href="#icon-check-clear"></use>
                    </svg
                    >
                    <span>Crypto-backed loans</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section class="features" id="advantages">
          <div class="features__container container">
            <h2 class="title features__title">Why Finteria Affiliate?</h2>
            <div class="features__items">
              <div class="features__box">
                <svg
                    class="icon icon_payment features__box-icon"
                    height="1em"
                    width="1em"
                >
                  <use xlink:href="#icon-payment"></use>
                </svg>
                <div class="features__box-title">Payments</div>
                <div class="features__box-desc">
                  We automatically transfer your earnings to your preferred online
                  payment account twice a month
                </div>
              </div>
              <div class="features__box">
                <svg
                    class="icon icon_balance features__box-icon"
                    height="1em"
                    width="1em"
                >
                  <use xlink:href="#icon-balance"></use>
                </svg>
                <div class="features__box-title">No balance deduction</div>
                <div class="features__box-desc">
                  You can't have a negative balance in our program. Your revenue
                  is made up entirely of profits
                </div>
              </div>
              <div class="features__box">
                <svg
                    class="icon icon_platform features__box-icon"
                    height="1em"
                    width="1em"
                >
                  <use xlink:href="#icon-platform"></use>
                </svg>
                <div class="features__box-title">Cross-platform support</div>
                <div class="features__box-desc">
                  Our product is available in a web version and a mobile app. You
                  can drive traffic from all channels equally effectively
                </div>
              </div>
              <div class="features__box">
                <svg
                    class="icon icon_brand features__box-icon"
                    height="1em"
                    width="1em"
                >
                  <use xlink:href="#icon-brand"></use>
                </svg>
                <div class="features__box-title">Multi-language brand</div>
                <div class="features__box-desc">
                  IQ Option represents millions of customers from 175 countries
                  who speak 13 languages, and they always come back to our
                  platform for more
                </div>
              </div>
              <div class="features__box">
                <svg
                    class="icon icon_links features__box-icon"
                    height="1em"
                    width="1em"
                >
                  <use xlink:href="#icon-links"></use>
                </svg>
                <div class="features__box-title">Universal links</div>
                <div class="features__box-desc">
                  We do the work of detecting your users' location, language, and
                  device, and send them to the most suitable landing page
                </div>
              </div>
              <div class="features__box">
                <svg
                    class="icon icon_analytics features__box-icon"
                    height="1em"
                    width="1em"
                >
                  <use xlink:href="#icon-analytics"></use>
                </svg>
                <div class="features__box-title">Clear analytics</div>
                <div class="features__box-desc">
                  Analyze your results in real time using convenient reports and
                  data filters
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="reward">
          <div class="reward__container container">
            <h2 class="title reward__title">
              Get paid by CPA model according to countries
            </h2>

            <div class="reward__button-wrapper">
              <button
                  class="button button_large reward__button"
                  @click="showModalRegister"
              >Become an affiliate</button>
            </div>

            <div class="reward__table">
              <div class="reward__table-header">
                <div class="reward__table-wide">Region</div>
                <div class="reward__table-narrow"><b>Tier 1</b> (1-2 sales)</div>
                <div class="reward__table-narrow"><b>Tier 2</b> (2-4 sales)</div>
                <div class="reward__table-narrow"><b>Tier 3</b> (5+ sales)</div>
              </div>
              <div class="reward__table-item">
                <div class="reward__table-wide">
                  <svg
                      class="icon icon_place"
                      height="1em"
                      width="0.7368421052631579em"
                  >
                    <use xlink:href="#icon-place"></use>
                  </svg
                  >
                  <span>Western Europe</span>
                </div>
                <div class="reward__table-narrow"><span>$250</span></div>
                <div class="reward__table-narrow"><span>$350</span></div>
                <div class="reward__table-narrow"><b>$400</b></div>
              </div>
              <div class="reward__table-item">
                <div class="reward__table-wide">
                  <svg
                      class="icon icon_place"
                      height="1em"
                      width="0.7368421052631579em"
                  >
                    <use xlink:href="#icon-place"></use>
                  </svg
                  >
                  <span>Middle East</span>
                </div>
                <div class="reward__table-narrow"><span>$250</span></div>
                <div class="reward__table-narrow"><span>$350</span></div>
                <div class="reward__table-narrow"><b>$400</b></div>
              </div>
              <div class="reward__table-item">
                <div class="reward__table-wide">
                  <svg
                      class="icon icon_place"
                      height="1em"
                      width="0.7368421052631579em"
                  >
                    <use xlink:href="#icon-place"></use>
                  </svg
                  >
                  <span>Oceania</span>
                </div>
                <div class="reward__table-narrow"><span>$250</span></div>
                <div class="reward__table-narrow"><span>$300</span></div>
                <div class="reward__table-narrow"><b>$350</b></div>
              </div>
              <div class="reward__table-item">
                <div class="reward__table-wide">
                  <svg
                      class="icon icon_place"
                      height="1em"
                      width="0.7368421052631579em"
                  >
                    <use xlink:href="#icon-place"></use>
                  </svg
                  >
                  <span>North America</span>
                </div>
                <div class="reward__table-narrow"><span>$200</span></div>
                <div class="reward__table-narrow"><span>$250</span></div>
                <div class="reward__table-narrow"><b>$300</b></div>
              </div>
              <div class="reward__table-item">
                <div class="reward__table-wide">
                  <svg
                      class="icon icon_place"
                      height="1em"
                      width="0.7368421052631579em"
                  >
                    <use xlink:href="#icon-place"></use>
                  </svg
                  >
                  <span>Scandinavia</span>
                </div>
                <div class="reward__table-narrow"><span>$200</span></div>
                <div class="reward__table-narrow"><span>$250</span></div>
                <div class="reward__table-narrow"><b>$300</b></div>
              </div>
              <div class="reward__table-item">
                <div class="reward__table-wide">
                  <svg
                      class="icon icon_place"
                      height="1em"
                      width="0.7368421052631579em"
                  >
                    <use xlink:href="#icon-place"></use>
                  </svg
                  >
                  <span>Eastern Europe</span>
                </div>
                <div class="reward__table-narrow"><span>$150</span></div>
                <div class="reward__table-narrow"><span>$200</span></div>
                <div class="reward__table-narrow"><b>$250</b></div>
              </div>
              <div class="reward__table-item">
                <div class="reward__table-wide">
                  <svg
                      class="icon icon_place"
                      height="1em"
                      width="0.7368421052631579em"
                  >
                    <use xlink:href="#icon-place"></use>
                  </svg
                  >
                  <span>Russia</span>
                </div>
                <div class="reward__table-narrow"><span>$150</span></div>
                <div class="reward__table-narrow"><span>$200</span></div>
                <div class="reward__table-narrow"><b>$250</b></div>
              </div>
              <div class="reward__table-item">
                <div class="reward__table-wide">
                  <svg
                      class="icon icon_place"
                      height="1em"
                      width="0.7368421052631579em"
                  >
                    <use xlink:href="#icon-place"></use>
                  </svg
                  >
                  <span>Central & South America</span>
                </div>
                <div class="reward__table-narrow"><span>$150</span></div>
                <div class="reward__table-narrow"><span>$200</span></div>
                <div class="reward__table-narrow"><b>$250</b></div>
              </div>
              <div class="reward__table-item">
                <div class="reward__table-wide">
                  <svg
                      class="icon icon_place"
                      height="1em"
                      width="0.7368421052631579em"
                  >
                    <use xlink:href="#icon-place"></use>
                  </svg
                  >
                  <span>Asia</span>
                </div>
                <div class="reward__table-narrow"><span>$150</span></div>
                <div class="reward__table-narrow"><span>$200</span></div>
                <div class="reward__table-narrow"><b>$250</b></div>
              </div>
              <div class="reward__table-item">
                <div class="reward__table-wide">
                  <svg
                      class="icon icon_place"
                      height="1em"
                      width="0.7368421052631579em"
                  >
                    <use xlink:href="#icon-place"></use>
                  </svg
                  >
                  <span>Africa</span>
                </div>
                <div class="reward__table-narrow"><span>$050</span></div>
                <div class="reward__table-narrow"><span>$150</span></div>
                <div class="reward__table-narrow"><b>$200</b></div>
              </div>
            </div>
          </div>
        </section>
        <section class="steps" id="how-works">
          <div class="steps__container container">
            <h2 class="title steps__title">How to start earn as affiliate?</h2>
            <div class="steps__items">
              <div class="steps__box">
                <div class="steps__box-number">1</div>
                <div class="steps__box-title">Getting started</div>
                <div class="steps__box-desc">
                  If you have a website or blog or you purchase internet traffic,
                  you can publish your affiliate link on your site or ad
                </div>
              </div>
              <div class="steps__box">
                <div class="steps__box-number">2</div>
                <div class="steps__box-title">Your link</div>
                <div class="steps__box-desc">
                  Auser clicks your link or ad (you can't register yourself, your
                  relatives, or your friends). We tag this user with your unique
                  ID
                </div>
              </div>
              <div class="steps__box">
                <div class="steps__box-number">3</div>
                <div class="steps__box-title">Registering customers</div>
                <div class="steps__box-desc">
                  The user signs up on the IQ Option platform and starts trading
                </div>
              </div>
              <div class="steps__box">
                <div class="steps__box-number">4</div>
                <div class="steps__box-title">Profit accrual</div>
                <div class="steps__box-desc">
                  You receive up to 50% of broker's profit according to your
                  clients' trading activity
                </div>
              </div>
              <div class="steps__box">
                <div class="steps__box-number">5</div>
                <div class="steps__box-title">Payment</div>
                <div class="steps__box-desc">
                  Twice a month, we pay out your earnings using your preferred
                  payment system
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="payouts" id="payouts">
          <div class="payouts__container container">
            <h2 class="title payouts__title">Weekly payouts!</h2>
            <div class="payouts__desc">
              <p>
                We know that regular payments are important for your business
                success.
              </p>
              <p>We pay our affiliates with no delay and on a weekly basis.</p>
            </div>
            <div class="payouts__items">
              <div class="payouts__box">
                <img src="@/assets/images/skrill.svg?6da7466d"/>
              </div>
              <div class="payouts__box">
                <img src="@/assets/images/neteller.svg?263a0d85"/>
              </div>
              <div class="payouts__box">
                <img src="@/assets/images/fire.svg?61cc7291"/>
              </div>
              <div class="payouts__box">
                <img src="@/assets/images/bitcoin.svg?7ab3fedd"/>
              </div>
              <div class="payouts__box">
                <img src="@/assets/images/perfect.svg?400159cd"/>
              </div>
            </div>
            <div class="payouts__footer">
              <button
                  class="button button_large"
                  @click="showModalRegister"
              >Become an affiliate</button>
            </div>
          </div>
        </section>
      </main>

      <ModalRegister
        :isVisible="modalRegisterVisible"
        @close="showModalRegister"
      />

      <ModalLogin
          :isVisible="modalLoginVisible"
          @close="closeModalLogin"
      />
    </div>

    <TheFooter/>
  </div>
</template>

<script>
  export default {
    setup() {
      const modalLoginVisible = ref(false);
      const modalRegisterVisible = ref(false);

      function showModalLogin(value) {
        modalLoginVisible.value = value;
      }

      function showModalRegister(value) {
        modalRegisterVisible.value = value;
      }

      function closeModalLogin() {
        modalLoginVisible.value = false;
      }


      return {
        showModalLogin,
        modalLoginVisible,
        modalRegisterVisible,
        closeModalLogin,
        showModalRegister
      }
    }
  }
</script>


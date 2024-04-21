<style lang="scss">
  @import "@/assets/scss/global";
  @import "@/assets/scss/booger";
</style>

<script setup>

import BoogerLogo from '@/components/BoogerLogo.vue';
import AlgorandLogo from '@/components/AlgorandLogo.vue';
import TinymanLogo from '@/components/TinymanLogo.vue';
import HumbleLogo from '@/components/HumbleLogo.vue';
import PactLogo from './components/PactLogo.vue';
import AlloLogo from './components/AlloLogo.vue';

const CA = 'NH23I7ZEG6TX65KOKGZ22FKBRRP34WXC3HQ4Q6PSLSPYGXNA5RB2TPRFXA';
const CA_BURNED = 'BNFIREKGRXEHCFOEQLTX3PU5SUCMRKDU7WHNBGZA4SXPW42OAHZBP7BPHY';

const onCopyClick = async (address) => {
  const clipboard = navigator.clipboard;
  if (clipboard) {
    await clipboard.writeText(address);
  }
}

</script>

<template>
  <section class="booger-wrap">
    <div class="booger__container">
      <header class="booger__logo-container">
        <BoogerLogo />
      </header>
      <aside class="booger__aside">
        <blockquote class="booger__blockquote">
          <p class="booger__par">Hello, hello!</p>
          <p class="booger__par">Nice to meet.</p>
          <p class="booger__par">My name is <b class="booger__name">DruD</b>.</p>
          <p class="booger__par">And I am a <b class="booger__booger">Booger</b>.</p>
          <p class="booger__par">Simple meme coin, created on
            <AlgorandLogo />
          </p>
        </blockquote>
        <ul class="booger__data-box">
          <li class="booger__data-box-item">
            <dfn class="booger__data-header">Ticker:</dfn>
            <ins class="booger__data-value">DRUD</ins>
          </li>
          <li class="booger__data-box-item">
            <dfn class="booger__data-header">Total:</dfn>
            <ins class="booger__data-value">1 000 000 000</ins>
          </li>
          <li class="booger__data-box-item booger__data-box-item_extra-column">
            <dfn class="booger__data-header">Burned:</dfn>
            <aside class="booger__data-burned-wrap">
              <small class="booger__data-value booger__data-value_burned">850m</small>
              <ins class="booger__data-value_ca-burned">
                <span class="booger__ca booger__ca_burned">
                  {{CA_BURNED}}
                </span>
                <svg
                  @click="onCopyClick(CA_BURNED)"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="booger__copy-link"
                >
                  <path d="M20,6V17a1,1,0,0,1-1,1H9a1,1,0,0,1-1-1V3A1,1,0,0,1,9,2h7a1.05,1.05,0,0,1,.71.29l3,3A1,1,0,0,1,20,6ZM17,21a1,1,0,0,0-1-1H6V6A1,1,0,0,0,4,6V20a2,2,0,0,0,2,2H16A1,1,0,0,0,17,21Z"></path>
                </svg>
              </ins>
            </aside>
          </li>
          <li class="booger__data-box-item">
            <dfn class="booger__data-header">Address:</dfn>
            <ins class="booger__data-value booger__data-value_ca">
              <span class="booger__ca">{{CA}}</span>
              <svg
                @click="onCopyClick(CA)"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="booger__copy-link"
              >
                <path d="M20,6V17a1,1,0,0,1-1,1H9a1,1,0,0,1-1-1V3A1,1,0,0,1,9,2h7a1.05,1.05,0,0,1,.71.29l3,3A1,1,0,0,1,20,6ZM17,21a1,1,0,0,0-1-1H6V6A1,1,0,0,0,4,6V20a2,2,0,0,0,2,2H16A1,1,0,0,0,17,21Z"></path>
              </svg>
            </ins>
          </li>
          <li class="booger__data-box-item booger__data-box-item_extra-column">
            <dfn class="booger__data-header booger__data-header_tg">Details:</dfn>
            <a
              href="https://explorer.perawallet.app/asset/1730408100/"
              target="_blank"
              class="booger__pera-link"
              title="view details on explorer"
            ></a>
            <a
              href="https://allo.info/asset/1730408100/token"
              target="_blank"
              class="booger__allo-link"
              title="view details on explorer"
            >
              <AlloLogo />
            </a>
          </li>
          <li class="booger__data-box-item booger__data-box-item_pools">
            <dfn class="booger__data-header">Pools:</dfn>
            <a
              href="https://app.tinyman.org/#/pool/275MS5QOBOD7GLR673MRCC6VINCGO4GKXBK5WR5TRJXN7JIE4U2A34STJU"
              target="_blank"
              class="booger__tiny-link"
              title="get me on tinyman"
            >
              <TinymanLogo />
            </a>
            <a
              href="https://app.humble.sh/pool/add/1763845960"
              target="_blank"
              class="booger__humble-link"
              title="get me on humble"
            >
              <HumbleLogo />
            </a>
            <a
              href="https://app.pact.fi/pools?page=1&search=1765939400#table"
              target="_blank"
              class="booger__pact-link"
              title="get me on pact"
            >
              <PactLogo />
            </a>
          </li>
          <li class="booger__data-box-item">
            <dfn class="booger__data-header booger__data-header_tg">
              Tg
              <svg
                fill="#000"
                width="32px"
                height="32px"
                viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M228.646,34.7676a11.96514,11.96514,0,0,0-12.21778-2.0752L31.87109,105.19729a11.99915,11.99915,0,0,0,2.03467,22.93457L84,138.15139v61.833a11.8137,11.8137,0,0,0,7.40771,11.08593,12.17148,12.17148,0,0,0,4.66846.94434,11.83219,11.83219,0,0,0,8.40918-3.5459l28.59619-28.59619L175.2749,217.003a11.89844,11.89844,0,0,0,7.88819,3.00195,12.112,12.112,0,0,0,3.72265-.59082,11.89762,11.89762,0,0,0,8.01319-8.73925L232.5127,46.542A11.97177,11.97177,0,0,0,228.646,34.7676ZM32.2749,116.71877a3.86572,3.86572,0,0,1,2.522-4.07617L203.97217,46.18044,87.07227,130.60769,35.47461,120.28811A3.86618,3.86618,0,0,1,32.2749,116.71877Zm66.55322,86.09375A3.99976,3.99976,0,0,1,92,199.9844V143.72048l35.064,30.85669ZM224.71484,44.7549,187.10107,208.88772a4.0003,4.0003,0,0,1-6.5415,2.10937l-86.1543-75.8164,129.66309-93.645A3.80732,3.80732,0,0,1,224.71484,44.7549Z"/>
              </svg>:</dfn>
            <a
              href="https://t.me/boogerDRUD"
              target="_blank"
              class="booger__tg-link"
            >t.me/boogerDRUD</a>
          </li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<template>
  <header class="header">
    <div class="header__container container">
      <div class="hamburger">
          <span class="hamburger__bar"></span
          ><span class="hamburger__bar"></span
      ><span class="hamburger__bar"></span>
      </div>
      <div class="logo"><img src="@/assets/images/logo.svg?bc592844"/></div>
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <a class="nav__link" href="#products" @click.prevent="scrollTo('#products')">Products</a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#advantages" @click.prevent="scrollTo('#advantages')">Advantages</a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#how-works" @click.prevent="scrollTo('#how-works')">How it works</a>
          </li>
          <li class="nav__item"><a class="nav__link" href="#payouts" @click.prevent="scrollTo('#payouts')">Payouts</a></li>
        </ul>
      </nav>
      <div class="header__buttons">
        <a
            class="button button_outline header__button open-modal"
            @click.prevent="showModalLogin"
        >
          Sign In
        </a>

        <a
            class="button header__button open-modal"
            @click.prevent="showModalRegister"
        >
          Join now
        </a>

        <div class="discount">
          <svg class="icon icon_discount" height="1em" width="0.72em">
            <use xlink:href="#icon-discount"></use>
          </svg
          >
          <span>Join till end of june and get <b>$100 present</b></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  setup(props, context) {
    function showModalLogin() {
      context.emit('modal-login', true)
    }

    function showModalRegister() {
      context.emit('modal-register', true)
    }

    function scrollTo(selector) {
      document.querySelector(selector).scrollIntoView({block: "start", behavior: 'smooth'});
    }

    return {
      showModalLogin,
      showModalRegister,
      scrollTo
    }
  }
}
</script>

<style scoped>

</style>

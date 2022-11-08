<template>
  <div
      class="modal"
      data-modal="login"
      :class="{'modal_open': isVisible}"
  >
    <div
        class="modal__content"
        @click.stop
    >
      <div v-if="type === 'login'" class="modal__title">Login</div>
      <div v-else class="modal__title">Reset password</div>
      <form
          id="demo-form"
          class="form"
      >
        <div class="form__item">
          <div class="form__label">Username</div>
          <input
              class="form__input"
              type="text"
              name="user"
              required="required"
              v-model="data.user"
              :class="{'error': !isValid}"
          />
        </div>
        <div class="form__item">
          <div class="form__label">Password</div>
          <input
              class="form__input"
              type="password"
              name="pass"
              required="required"
              v-model="data.pass"
              :class="{'error': !isValid}"
          />
        </div>
        <div class="form__item form__item_closest">
          <button
              class="button button_large button_dark form__button"
              type="submit"
              @click.stop.prevent="submit"
              v-if="type === 'login'"
          >
            Login
          </button>

          <button
              class="button button_large button_dark form__button"
              type="submit"
              @click.stop.prevent="reset"
              v-else
          >
            Reset
          </button>
        </div>
        <div class="form__bottom" v-if="type === 'login'">
          <a href="#" @click.prevent="changeType">Forgot password?</a>
        </div>
      </form>
      <button
          class="modal__close"
          @click.prevent="closeModal"
      >
        <svg class="icon icon_cross" height="1em" width="1em">
          <use xlink:href="#icon-cross"></use>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import {reactive, ref} from 'vue'
import {login, resetPassword} from '@/api/api'

export default {
  props: ['isVisible'],
  setup(props, context) {

    const type = ref('login');

    const data = reactive({
      user: '',
      pass: ''
    })
    const isValid = ref(true);

    async function submit() {
      console.log('submit');
      try {
        isValid.value = true;

        const user = await login(data).then((response) => response.data);

        isValid.value = user.valid;

        if (isValid) {
          document.getElementById('demo-form').submit();
        }

        if (!isValid.value) return;
      } catch (error) {
        console.log(error);
      }
    }

    async function reset() {
      console.log('reset');
      try {
        const user = await resetPassword(data).then((response) => response.data);

        if (user.header === 200) {
          isValid.value = false;
        }

        if (user.header === 302) {
          isValid.value = true;
          alert(user.message);
          closeModal();
        }
      } catch (error) {
        console.log(error);
      }
    }

    function changeType() {
      isValid.value = true;
      type.value = 'reset';
      data.pass = '';
    }

    function closeModal() {
      data.user = '';
      data.pass = '';
      context.emit('close');
      type.value = 'login';
    }

    return {
      closeModal,
      submit,
      data,
      isValid,
      changeType,
      type,
      reset
    }
  }
}
</script>

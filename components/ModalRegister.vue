<template>
  <div
      class="modal"
      data-modal="reg"
      :class="{'modal_open': isVisible}"
  >
    <div class="modal__content">
      <div class="modal__title">Join Now</div>
      <form
          class="form"
          @submit.prevent="validate"
      >
        <div class="form__item">
          <div class="form__label">First Name*</div>
          <input
              class="form__input"
              type="text"
              name="firstName"
              required="required"
              v-model="data.first_name"
              :class="{'error': v$.first_name.$error}"
          />
        </div>
        <div class="form__item">
          <div class="form__label">Last Name*</div>
          <input
              class="form__input"
              type="text"
              name="lastName"
              required="required"
              v-model="data.last_name"
              :class="{'error': v$.last_name.$error}"
          />
        </div>
        <div class="form__item">
          <div class="form__label">Login*</div>
          <input
              class="form__input"
              type="text"
              name="login"
              required="required"
              v-model="data.login"
              :class="{'error': v$.login.$error}"
          />
        </div>
        <div class="form__item">
          <div class="form__label">
            Password*<span class="form__label-note">(8 digit)</span>
          </div>
          <input
              class="form__input"
              type="password"
              name="password"
              required="required"
              v-model="data.password"
              :class="{'error': v$.password.$error}"
          />
        </div>
        <div class="form__item">
          <div class="form__label">E-mail*</div>
          <input
              class="form__input"
              type="email"
              name="email"
              required="required"
              v-model="data.email"
              :class="{'error': v$.email.$error}"
          />
        </div>
        <div class="form__item">
          <div class="form__label">Alternative contact info</div>

          <v-select
              :options="options"
              placeholder="Choice"
              v-model="selected"
              :searchable="false"
          ></v-select>
        </div>

        <div class="form__item" v-if="skypeVisible">
          <div class="form__label">Skype</div>
          <input
              class="form__input"
              type="text"
              name="skype"
              v-model="data.skype"
          />
        </div>

        <div class="form__item" v-if="telegramVisible">
          <div class="form__label">Telegram</div>
          <input
              class="form__input"
              type="text"
              name="skype"
              v-model="data.telegram"
          />
        </div>

        <div class="form__item form__item_closest">
          <button
              class="button button_large button_dark form__button"
              type="submit"
          >
            Register
          </button>
        </div>

        <ClientOnly>
          <VueRecaptcha
              ref="recaptcha"
              size="invisible"
              :sitekey="sitekey"
              @verify="submitForm"
              @expired="onCaptchaExpired"
          />
        </ClientOnly>

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
import { ref, reactive } from "vue";
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { register } from "@/api/api";
import { VueSelect as vSelect } from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
  props: ['isVisible'],
  components: {
    vSelect,
  },
  setup(props, context) {
    function closeModal() {
      context.emit('close')
    }

    const selected = ref(null);
    const options = ref([
        'Skype',
        'Telegram'
    ])
    const telegramVisible = ref(false);
    const skypeVisible = ref(false);

    const sitekey = '6LecyN8gAAAAAPVn_Zh7909HniXIbsdhBq02kDgx';
    const recaptcha = ref(null);

    const data = reactive({
      first_name: '',
      last_name: '',
      login: '',
      password: '',
      email: '',
      telegram: '',
      skype: '',
      recaptcha_token: '',
    })

    const rules = {
      first_name: {required},
      last_name: {required},
      login: {required},
      password: {
        required,
        minLength: minLength(8),
      },
      email: {required, email},
    }

    const v$ = useVuelidate(rules, data)

    async function validate() {
      const isValidate = await v$.value.$validate();
      if (!isValidate) return;

      recaptcha.value.execute();
    }

    async function submitForm(recaptchaToken) {
      data.recaptcha_token = recaptchaToken
      try {
        const user = await register(data).then((response) => response.data);
        console.log(user);
        closeModal();
      } catch (error) {
        console.log(error)
      }
    }

    function onCaptchaExpired() {
      recaptcha.value.reset();
    }

    watch(selected, (value) => {
      if (value === "Telegram") {
        telegramVisible.value = true
      } else {
        data.telegram = ''
        telegramVisible.value = false
      }
      if (value === 'Skype') {
        skypeVisible.value = true
      } else {
        data.skype = ''
        skypeVisible.value = false
      }
    })

    return {
      closeModal,
      sitekey,
      data,
      v$,
      validate,
      submitForm,
      onCaptchaExpired,
      recaptcha,
      options,
      selected,
      telegramVisible,
      skypeVisible
    }
  }
}
</script>

<template>
  <div id="app" class="strap vue-app">
    <nav-menu />

    <router-view />

    <strap-window-manager />
    <strap-notification-manager />
  </div>
</template>

<script>
import { StrapNotificationManager, Notification } from '@inveasy/semstrap';
export default {
  name: 'app',
  components: {
    NavMenu: () => import('./components/NavMenu/component'),
    StrapWindowManager: () => import('@inveasy/semstrap').then((v) => v.StrapWindowManager),
    StrapNotificationManager
  },
  mounted() {
    this.$store.dispatch('semstrap/notifications/notify', new Notification({
      type: 'info',
      html: true,
      content: ':i18n:common.goToSource'
    }));
  }
};
</script>


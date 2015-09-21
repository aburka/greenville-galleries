import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Component.extend(LoginControllerMixin,{
  authenticator: 'authenticator:parse-username',

  tagName: 'span',

  classNames:['user-login-create'],
});
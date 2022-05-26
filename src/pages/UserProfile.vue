<template>
  <div class="content">
    <b-alert v-model="showDismissibleAlert" variant="success" dismissible>
      Dismissible Alert!
    </b-alert>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <edit-profile-form>
          </edit-profile-form>
        </div>
        <div class="col-md-4">
          <user-card>
          </user-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import EditProfileForm from './UserProfile/EditProfileForm.vue'
  import UserCard from './UserProfile/UserCard.vue'

  export default {
    created: function(){
      this.$on('expenseUploaded', data => {this.showDismissibleAlert = data})
    }, 
    components: {
      EditProfileForm,
      UserCard
    },
    data () { 
      return {
        showDismissibleAlert: false
      }
    }
  }

</script>
<style>

</style>

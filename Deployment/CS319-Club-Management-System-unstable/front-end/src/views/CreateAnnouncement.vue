<template>
  <div class="container">
    <div class="text-center mt-5">
      <h1>
        Welcome to creating an announcment for club {{ $route.params.clubID }}
      </h1>
    </div>
    <div class="row">
      <div class="col-lg-7 mx-auto">
        <div class="card mt-2 mx-auto p-4 bg-light">
          <div class="card-body bg-light">
            <div class="container">
              <form id="contact-form" role="form">
                <div class="controls">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Announcement Message *</label>
                        <textarea
                          name="message"
                          class="form-control"
                          placeholder="Write your message here."
                          rows="4"
                          required="required"
                          v-model="AnnouncementMsg"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <input
                        type="submit"
                        @click.prevent="
                          $store.dispatch('ManageClubs/CreateAnnouncement', $route.params.clubID)
                        "
                        class="btn btn-outline-secondary mr-1 btn-block"
                        value="Create Announcement"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    AnnouncementMsg: {
      get() {},
      set(newVal) {
        this.$store.commit('ManageClubs/setAnnouncement', newVal)
      },
    },
    c_id: {
      get() {},
      set() {
        this.$store.commit('ManageClubs/setClubID', $route.params.clubID)
      }
    }
  },
};
</script>

<style>
</style>
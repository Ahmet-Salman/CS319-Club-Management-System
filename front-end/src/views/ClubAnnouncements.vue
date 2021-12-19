<template>
  <div>
    <h1>Hello To announcements of club {{ club_id }}</h1>
    <div class="container">
      <div class="main-body">
        <div class="row">
          <div class="col-lg-8">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <h5 class="d-flex align-items-center mb-3">
                      Announcements
                    </h5>
                    <ul
                      v-if="announcements.length"
                      class="list-group list-group-flush"
                    >
                      <li
                        v-for="ann in announcements"
                        :key="ann.id"
                        class="
                          list-group-item
                          d-flex
                          justify-content-between
                          align-items-center
                          flex-wrap
                        "
                      >
                        <h6 class="badge badge-primary even-larger-badge mb-0">
                          ID: {{ ann.id }}
                        </h6>
                        <h6 class="badge badge-info even-larger-badge mb-0">
                          Date: {{ new Date(ann.date).getDate() }}/{{
                            new Date(ann.date).getMonth()
                          }}/{{ new Date(ann.date).getFullYear() }}
                        </h6>
                        <div
                          class="
                            d-flex
                            flex-column
                            align-items-center
                            text-center
                          "
                        >
                          <div
                            class="mt-3"
                            style="word-wrap: break-word; width: 300px"
                          >
                            <h4>Announcement:</h4>
                            <h6>{{ ann.content }}</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <h4 v-if="!announcements.length">
                      There are No Announcements
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClubDetails",
  data() {
    return {
      club_id: this.$route.params.clubID,
      announcements: [],
    };
  },
  methods: {},
  async mounted() {
    await this.$store.dispatch("ClubDetails/getAnnouncements", this.club_id);
    this.announcements = this.$store.state.ClubDetails.announcements;
  },
};
</script>

<style>
body {
  background: #f7f7ff;
  margin-top: 20px;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid transparent;
  border-radius: 0.25rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 6px 0 rgb(218 218 253 / 65%),
    0 2px 6px 0 rgb(206 206 238 / 54%);
}
.me-2 {
  margin-right: 0.5rem !important;
}
.badge.even-larger-badge {
  font-size: 0.9em;
}
</style>
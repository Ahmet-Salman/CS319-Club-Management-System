<template>
  <div>
    <br/>
    <br/>
     <div class="container">
      <div class="main-body">
        <div class="row">
          <div class="col-lg-8">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <h5 class="header d-flex align-items-center mb-3">
                      <b>Announcements</b>
                    </h5>
                    <ul
                      v-if="filteredAnn.length"
                      class="list-group list-group-flush"
                    >
                      <li
                        v-for="ann in filteredAnn"
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
                          Club: {{ ann.club.name }}
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
                            <h6 class="content">{{ ann.content }}</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <h4 v-if="!filteredAnn.length">
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
  data() {
    return {
        filteredAnn: [],
    };
  },
  
  methods: {
  },

  async mounted() {
      await this.$store.dispatch("Notifications/getAnnouncements");
      await this.$store.dispatch("Notifications/getClubIDs");
      this.$store.commit("Notifications/setFilteredAnnouncement");
      this.filteredAnn = this.$store.state.Notifications.filteredAnn;
  }
}
</script>

<style>
.header {
  font-size: 32px;
}

.content {
  padding: 1rem;
  width: 100%;
  box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08);
  background-color: #ffffff;
  border-radius: 0.5rem;
  border-left: 0 solid #00ff99;
  transition: border-left 300ms ease-in-out, padding-left 300ms ease-in-out;
}

.mainHeader {
    text-align: left;
    position: relative;
    left: 0.5cm;
    top: 0.9cm;
}

.myHr {
    border: none;
    height: 2px;
    background-color: black;
}
</style>
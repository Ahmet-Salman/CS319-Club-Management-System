<template>
  <div class="container">
    <div class="text-center mt-5">
      <h1>Event Creation Form For Club {{ $route.params.clubID }}</h1>
    </div>
    <div class="row">
      <div class="col-lg-7 mx-auto">
        <div class="card mt-2 mx-auto p-4 bg-light">
          <div class="card-body bg-light">
            <div class="container">
              <form id="contact-form" role="form">
                <div class="controls">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Name of the Event *</label>
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          required="required"
                          v-model="name"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          >Location of The Event *</label
                        >
                        <input
                          type="text"
                          name="surname"
                          class="form-control"
                          required="required"
                          v-model="location"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Time of The Event *</label>
                        <input v-model="time" type="datetime-local" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label
                          >Description of The Event *</label
                        >
                        <textarea
                          name="message"
                          class="form-control"
                          placeholder="Write your message here."
                          rows="4"
                          required="required"
                          v-model="description"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <input
                        type="submit"
                        @click.prevent="$store.dispatch('ManageClubs/CreateEvent')"
                        class="btn btn-outline-secondary mr-1 btn-block"
                        value="Create Event"
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
import swal from 'sweetalert';
export default {
    computed: {
        name: {
            get(){},
            set(newVal) {
                this.$store.commit('ManageClubs/setEventName', newVal)
                // console.log(newVal)
            }
        },
        location: {
            get(){},
            set(newVal) {
                this.$store.commit('ManageClubs/setEventLocation', newVal)
            }
        },
        time: {
            get(){},
            set(newVal) {
                    this.$store.commit('ManageClubs/setEventDate', newVal)
            }
        },
        description: {
            get(){},
            set(newVal) {
                this.$store.commit('ManageClubs/setEventDescription', newVal)

            }
        },
    }
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
}

h1 {
  margin-bottom: 40px;
}

label {
  color: #333;
}

.btn-send {
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  width: 80%;
  margin-left: 3px;
}

.help-block.with-errors {
  color: #ff5050;
  margin-top: 5px;
}
</style>
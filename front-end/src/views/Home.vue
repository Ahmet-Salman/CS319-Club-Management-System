<template>
    <div class="homeContainer">
        <link href='https://fonts.googleapis.com/css?family=Alex Brush' rel='stylesheet'>
        <div class="clubsContainer card">
            <h1 style="text-align: left; color: black;"><b style="font-family: 'Alex Brush'; font-size: 50px;">Your Clubs</b></h1>
            <br>
            <h2 v-if="this.Clubs.length == 0">
               <b>You have no enrolled Club</b> &#129300;
            </h2>
            <h2 class="className" v-for="item in Clubs" :key="item.name">
                {{item.name}}
                <button class="classButton btn btn-outline-dark mr-0" @click="this.$router.push(`/clubDetails/${item.id}`)">Go to Club</button>
                <button class="classLeaveButton btn btn-outline-danger mr-1" @click="leaveTheClub(item.id)">Leave the Club</button>
                <hr>
            </h2>
        </div>
        <div class="eventsContainer card">
            <h1 style="text-align: left; color: black;"><b style="font-family: 'Alex Brush'; font-size: 50px;">Club Events</b></h1>
            <div>
                <h1 v-if="this.CurrentEvents.length == 0">
                    <b>There are no event to show</b> &#128557;
                </h1>
                <div v-for="item in CurrentEvents" :key="item.title">
                    <h1 style="color: black;" class="eventClubName" v-if="this.getTheClub(`${item.club}`)">
                        {{this.ClubWithID}}
                    </h1>
                    <h1 class="eventTitle" style="color: black;">
                        <b style="font-size: 24px;">Event Name:&nbsp;</b>{{item.title}}
                    </h1>
                    <hr style="position: relative; bottom: 1cm;">
                    <p class="eventDesc" style="position: relative; bottom: 1cm;">
                        <div style="float: left;"><b>Event Description:&nbsp;</b></div>
                        {{item.description}}
                    </p>
                    <div style="position: relative; bottom: 1cm;">
                        <div class="eventDate" style="color: white;">
                            <div style="float: left;"><b>Date:&nbsp;</b></div>
                            {{new Date(item.date).getDate()}}/{{new Date(item.date).getMonth()}}/{{new Date(item.date).getFullYear()}} at {{new Date(item.date).getHours()}}:{{new Date(item.date).getMinutes()}}
                        </div>
                        <div class="eventLocation" style="color:white;">
                            <div style="float: left;"><b>Location:&nbsp;</b></div>
                            {{item.location}}
                        </div>
                        <br><br><br>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import store from "@/store/index";
export default {
  name: "Home",
  data() {
    return {
      clubEvents: [],
      AllClubs: [],
      Clubs: [],
      ClubEvents: [],
      userID: sessionStorage.getItem("userID"),
      CurrentEvents: [],
      ClubIDs: [],
      ClubWithID: "",
    };
  },
  methods: {
    getTheClub(id) {
      for (let i = 0; i < this.AllClubs.length; i++) {
        if (id == this.AllClubs[i].id) {
          this.ClubWithID = this.AllClubs[i].name;
          return true;
        }
      }
      return false;
    },

    leaveTheClub(clubID) {
      this.$store.dispatch("AllClubs/leaveClub", clubID);
    },
  },

  async mounted() {
    await this.$store.dispatch("Home/setAllClubs");
    await this.$store.dispatch("Home/getAllUsersClubs");
    this.AllClubs = this.$store.state.Home.AllClubs;
    this.Clubs = this.$store.state.Home.Clubs;

    await this.$store.dispatch("Home/getAllEvents", this.club_id);
    this.clubEvents = this.$store.state.Home.AllEvents;

    for (let i = 0; i < this.Clubs.length; i++) {
      this.ClubIDs[i] = this.Clubs[i].id;
    }

    let k = 0;
    for (let i = 0; i < this.clubEvents.length; i++) {
      for (let j = 0; j < this.ClubIDs.length; j++) {
        if (this.ClubIDs[j] == this.clubEvents[i].club) {
          this.CurrentEvents[k] = this.clubEvents[i];
          k++;
        }
      }
    }
    k = 0;

    if (localStorage.getItem("reloaded")) {
      localStorage.removeItem("reloaded");
    } else {
      localStorage.setItem("reloaded", "1");
      location.reload();
    }
  },
};
</script>

<style>
.homeContainer {
  box-sizing: border-box;
}

.clubsContainer {
  float: left;
  border-radius: 20px;
  width: 48.5%;
  border: 3px solid black;
  padding: 10px;
  position: relative;
  left: 1%;
  top: 0.5cm;
}

.eventsContainer {
  float: right;
  border-radius: 20px;
  width: 48.5%;
  border: 3px solid black;
  padding: 10px;
  position: relative;
  right: 1%;
  top: 0.5cm;
}

.myHr {
  border: none;
  height: 2px;
  background-color: black;
}

.className {
    color: black;
    font-size: 40px;
    letter-spacing: -2px;
    text-align: left;
    position: relative;
    bottom: 0.5cm;  
}

.classButton {
    float: right;
    position: relative;
    top: 0.2cm;
    right: 0.5cm;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px; 
}
.classButton:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px rgba(128, 15, 180, 0.705);
}

.classLeaveButton {
    float: right;
    position: relative;
    top: 0.2cm;
    right: 0.65cm;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    color: black;
    border-color: black;
}
.classLeaveButton:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px rgba(255, 28, 28, 0.747);
}

.classSeperator {
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
}

.eventClubName {
  float: left;
}

.eventTitle {
  text-align: right;
}

.eventDesc {
  text-align: left;
  padding: 1rem;
  width: 100%;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
    0 5px 15px 0 rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  border-radius: 0.5rem;
  border-left: 0 solid #00ff99;
  transition: border-left 300ms ease-in-out, padding-left 300ms ease-in-out;
}

.eventDate {
    float: right;
    padding: 1rem;
    width: auto;
    box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08);
    background-color: #3c70ff;
    border-radius: 0.5rem;
    border-left: 0 solid #00ff99;
    transition: border-left 300ms ease-in-out, padding-left 300ms ease-in-out;
}

.eventLocation {
    float: left;
    padding: 1rem;
    width: auto;
    box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08);
    background-color: #1755ff;
    border-radius: 0.5rem;
    border-left: 0 solid #00ff99;
    transition: border-left 300ms ease-in-out, padding-left 300ms ease-in-out;
}
</style>

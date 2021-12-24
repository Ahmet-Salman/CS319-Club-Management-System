<template>
    <div class="homeContainer">
        <div class="clubsContainer">
            <h1 style="text-align: left">Your Clubs<hr class="myHr"></h1>
            <h2 class="className" v-for="item in Clubs" :key="item.name">
                {{item.name}}
                <button class="classButton" @click="this.$router.push(`/clubDetails/${item.id}`)">Go to Club</button>
                <hr class="classSeperator">
            </h2>
        </div>
        <div class="eventsContainer">
            <h1 style="text-align: right">Club Events<hr class="myHr"></h1>
            <div>
                <div v-for="item in CurrentEvents" :key="item.title">
                    <h1 class="eventClubName" v-if="this.getTheClub(`${item.club}`)">
                        {{this.ClubWithID}}
                    </h1>
                    <h1 class="eventTitle">
                        {{item.title}}
                    </h1>
                    <hr>
                    <p class="eventDesc">
                        {{item.description}}
                    </p>
                    <div class="eventDate">
                        {{item.date}}
                        <div class="eventLocation">
                            {{item.location}}
                        </div>
                    </div>
                    <br>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
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
                    this.ClubWithID = this.AllClubs[i].name
                    return true
                }
            }
            return false
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
    font-family: Georgia, sans-serif;
    font-size: 55px;
    letter-spacing: -2px;
    text-align: left;
    position: relative;
    bottom: 0.5cm;  
}

.classButton {
    float: right;
    font-size: 30px;
    position: relative;
    top: 0.4cm;
    right: 0.5cm;
    display: inline-block;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    border-radius: 8px;
    padding: 14px 24px;
    border: none;
    transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
    background: rgb(0, 162, 255);
    color: #fff;
                
}

.classSeperator {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}

.eventClubName {
    float: left;
}

.eventTitle {
    text-align: right;
}

.eventDesc {
    text-align: left;
}

.eventDate {
    text-align: right;
}

.eventLocation {
    float: left;
}
</style>

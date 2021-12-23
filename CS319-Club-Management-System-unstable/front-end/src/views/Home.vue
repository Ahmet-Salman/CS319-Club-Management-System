<template>
    <div class="homeContainer">
        <div class="clubsContainer">
            <h1 style="text-align: left">Your Clubs<hr class="myHr"></h1>
        </div>
        <div class="eventsContainer">
            <h1 style="text-align: right">Club Events<hr class="myHr"></h1>
        </div>
    </div>
</template>

<script>
export default {

}
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
</style>
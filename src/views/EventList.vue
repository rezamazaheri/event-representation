<template>
  <div class="events">
    <h1>Events For Good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1">&#60; Prev Page</router-link>

      <router-link
        id="page-next"
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage">Next Page &#62;</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable prettier/prettier */
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService.js";
import Nprogress from "nprogress";

export default {
  name: "EventList",
  props: {
    page: {
      type: Number
    }
  },
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
      totalEvents: 0,
    };
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    Nprogress.start();
    EventService.getEvents(3, parseInt(routeTo.query.page || 1))
      .then( response => { 
        next(comp => {
          comp.events = response.data,
          comp.totalEvents = response.headers["x-total-count"]
        })
      })
      .catch(() => {
        next({ name: "NetworkError"});
      })
      .finally(() => {
        Nprogress.done();
      })
  },
  beforeRouteUpdate(routeTo) {
    Nprogress.start();
    EventService.getEvents(3, parseInt(routeTo.query.page || 1))
      .then( response => { 
        this.events = response.data,
        this.totalEvents = response.headers["x-total-count"]
      })
      .catch(() => {
        return { name: "NetworkError"}
      })
      .finally(() => {
        Nprogress.done();
      })
  },
  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.totalEvents / 3);
      return this.page < totalPages;
    }
  }
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style>

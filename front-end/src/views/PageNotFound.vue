<template>
<div>
  <tr v-for="clubs in AllManagerClub" :key="clubs.id" class="table-info">
        <td>{{clubs.name}}</td>
        <td>{{clubs.catagory}}</td>
        <td>{{clubs.manager}}</td>
        <td style="color: white" class="bg-danger">Manager</td>
        <td>
          <router-link to="/manage" type="button" class="btn btn-outline-secondary mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-clipboard-check"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
              />
              <path
                d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
              />
              <path
                d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
              />
            </svg>
            Manage
          </router-link>
          <button type="button" class="btn btn-outline-dark mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-info-circle"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
              />
            </svg>
            Details
          </button>

          <button type="button" class="btn btn-outline-primary mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
              />
            </svg>
            Delete
          </button>
        </td>
      </tr>
  <h1> Page not found</h1>
  </div>
</template>

<script>
export default {
name: "ListAllClubs",
  data(){
    return {
      AllClubs: [
            { id: 1, name: 'Club1', catagory: 'catagory1', manager: 'Person1' },
            { id: 2, name: 'Club2', catagory: 'catagory2', manager: 'Person2' },
            { id: 5, name: 'Club5', catagory: 'catagory5', manager: 'Person5' },
            { id: 7, name: 'Club7', catagory: 'catagory7', manager: 'Person7' },
            { id: 9, name: 'Club9', catagory: 'catagory9', manager: 'Person9' },
            { id: 11, name: 'Club11', catagory: 'catagory11', manager: 'Person11' },
        ],
        AllMemberClub: [
            { id: 3, name: 'Club3', catagory: 'catagory3', manager: 'Person3' },
            { id: 6, name: 'Club6', catagory: 'catagory6', manager: 'Person6' },
            { id: 12, name: 'Club12', catagory: 'catagory12', manager: 'Person12' },
        ],
        AllManagerClub: [
            { id: 4, name: 'Club4', catagory: 'catagory4', manager: 'Person4' },
            { id: 8, name: 'Club8', catagory: 'catagory8', manager: 'Person8' },
        ],
        pendingRequests: [
            { id: 13, name: 'Club13', catagory: 'catagory13', manager: 'Person13' },
            { id: 14, name: 'Club14', catagory: 'catagory14', manager: 'Person14' },
            { id: 15, name: 'Club15', catagory: 'catagory15', manager: 'Person15' },
            { id: 16, name: 'Club16', catagory: 'catagory16', manager: 'Person16' },
        ]
    }
  },
}
</script>

<style>

</style>
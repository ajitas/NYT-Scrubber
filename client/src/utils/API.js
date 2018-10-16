import axios from "axios";


export default {
      save: function(obj) {
        return axios.post("/api/articles",obj)
      },
   
      delete: function(id) {
        return axios.delete("/api/articles/" + id);
      },

      findAll: function(topic, startYear, endYear) {
        return axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://www.nytimes.com/search?endDate=${endYear}1231&query=${topic}&sort=best&startDate=${startYear}0101`,);
      },

      getAll: function(){
          return axios.get("/api/articles");
      }

    }

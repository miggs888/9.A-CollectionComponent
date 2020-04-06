Vue.component ('sauce-data', {
  template: `<div class="sauce-container" v-cloak>
          <ul>
              <li>{{name}}</li>
              <li>{{variation}}</li>
              <li>{{heat}}</li>
              <li>{{bottle}}</li>
              <li>{{manufacturer}}</li>
              <li>{{location}}</li>
            </ul>
  </div>`, 
  props: ['name', 'variation', 'heat', 'bottle', 'manufacturer', 'location']
})
var mySaucesArray = [
  {
    name: "Tapatio",
    variation: "Original",
    heat: "4 of 5",
    bottle: "5 oz",
    manufacturer: "Tapatio Foods INC",
    location: "Vernon, CA"
  },
  {
    name: "Mike\'s Hot Honey",
    variation: "Original",
    heat: "3 of 5",
    bottle: "12 oz",
    manufacturer: "Mike\'s Hot Honey INC",
    location: "Brooklyn, NY"
  },
  {
    name: "Texas Pete",
    variation: "Original",
    heat: "3 of 5",
    bottle: "12 oz",
    manufacturer: "TW Garner Food INC",
    location: "Winston-Salem, NC"
  },
  {
    name: "Frank\'s Red Hot",
    variation: "Buffalo",
    heat: "4 of 5",
    bottle: "12 oz",
    manufacturer: "French\'s Food Company LLC",
    location: "Springfield, MO"
  },
  {
    name: "Cholula",
    variation: "Chipotle",
    heat: "4 of 5",
    bottle: "5 oz",
    manufacturer: "Cholula Food Company",
    location: "Mexico"
  },
  
];

var vm = new Vue({
  el:"#app",
  data: {
    sauceList: mySaucesArray, 
    newSauceObj: {
      name: "",
      variation: "",
      heat: "",
      bottle: "",
      manufacturer: "",
      location: ""

    }
  }, 
  methods: {
    submitHandler: () => {
      console.log('submitted');
      vm.sauceList = vm.sauceList.concat(vm.newSauceObj);
      vm.resetForm();
    },
    resetForm: () => {
      vm.newSauceObj = {
        name: "",
        variation: "",
        heat: "",
        bottle: "",
        manufacturer: "",
        location: ""
      };
    },
  }
});
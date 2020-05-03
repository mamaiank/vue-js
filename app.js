const test = new Vue({
  el: "#vue-app",
  data: {
    name: "Piya",
    age: 28,
    job: "PG",
    message: "Hello Vue!",
    website: "https://www.google.com/",
    pets: [],
    gender: "",
    like: false,
    products: ["สบู่", "ขนม", "แป้ง"],
    products_obj: [{ name: "สบู่" }, { name: "ขนม" }, { name: "แป้ง" }],
    new_data: {
      name_data: "",
      salary: 0,
    },
    emp_group: [
      {
        emp_name: "สมพร",
        salary: 5000,
      },
      {
        emp_name: "สมศรี",
        salary: 5000,
      },
    ],
  },
  methods: {
    getName: function () {
      return this.name;
    },
    setName: function (n) {
      return (this.name = n);
    },
    addAge: function () {
      this.age++;
      console.log(this.age);
    },
    subtractAge: function () {
      this.age--;
      console.log(this.age);
    },
    clickLike: function () {
      this.like = !this.like;
    },
    addEmp: function () {
      this.emp_group.push({
        emp_name: this.new_data.name_data,
        salary: this.new_data.salary,
      });
      this.new_data.name_data = "";
      this.new_data.salary = 0;
    },
    showMessage: function () {
      console.log("ok");
    },
  },
  computed: {
    summation_salary: function () {
      const result = this.emp_group.reduce((sum, number) => {
        return sum + Number(number.salary);
      }, 0);
      return result;
    },
  },
  watch: {
    summation_salary: function () {
      this.showMessage();
    },
  },
});

const post = new Vue({
  el: "#post-app",
  data: { title: "", message: "" },
  methods: {},
  computed: {},
  watch: {},
});
const comment = new Vue({
  el: "#comment-app",
  data: { text: "test" },
  methods: {},
  computed: {},
  watch: {},
});
const likeSystem = new Vue({
  el: "#like-system-app",
  data: {
    like: false,
  },
  methods: {
    clickLike: function () {
      this.like = !this.like;
    },
  },
  computed: {},
  watch: {},
});

Vue.component("nk", {
  data: function () {
    return {
      count: 0,
    };
  },
  template:
    "<button type='button' v-on:click='count++'>Click ({{count}})</button>",
});
Vue.component("post", {
  props: ["title", "subtitle"],
  template: "<h1>{{title}} | {{subtitle}}</h1>",
});
Vue.component("showview", {
  props: {
    title: { type: String, required: true },
    subtitle: { type: String },
    view: { type: Number, default: 0 },
  },
  template: "<h1>{{title}} | {{subtitle}} | {{view}}</h1>",
});
const testComponent = new Vue({
  el: "#test-component-app",
  data: {
    title: "Test Component",
  },
});

Vue.component("showcomment", {
  props: ["comment"],
  template: "<p>{{comment}}</p>",
});

const dataComponent = new Vue({
  el: "#dataComponent",
  data: {
    newComment: "",
    comments: ["สวัสดี", "ทักทาย"],
  },
  methods: {
    addComment: function () {
      this.comments.push(this.newComment);
      this.newComment = "";
    },
  },
});

const food = {
  template: "#foodarea",
};

const testslot = new Vue({
  el: "#testslot",
  components: {
    foodApp: food,
  },
});

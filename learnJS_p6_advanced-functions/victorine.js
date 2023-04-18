const nomination = {
  reason: "!has(points)",
  data: [
    { name: "aboba_1", gender: undefined },
    { name: "aboba_2", gender: undefined },
  ],

  why: function () {
    this.data.forEach(function (person) {
      console.log(person.name + " : " + this["reason"]);
    });
  },

  whyWithArrow() {
    this.data.forEach((person) =>
      console.log(`${person.name} : ${this["reason"]}`)
    );
  },
};

nomination.whyWithArrow();
nomination.why();

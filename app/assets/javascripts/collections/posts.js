JA.Collections.Posts = Backbone.Collection.extend({
  model: JA.Models.Post,

  initialize: function (postsData) {
    console.log("Collection initialized with: ", postsData);
  },

  render: function () {
    console.log("rendering content");

    return this;
  }
});
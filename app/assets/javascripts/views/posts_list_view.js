JA.Views.PostsListView = Backbone.View.extend({
  initialize: function () {
    console.log("posts lists view initialized");

    var renderCallback = this.render.bind(this);
    this.collection.on("add", renderCallback);
    this.collection.on("change", renderCallback);
    this.collection.on("remove", renderCallback);
  },

  render: function () {
    var that = this;

    console.log("PostsListView rendering content");
    console.log("this.el: ", this.el);
    console.log("this.$el: ", this.$el);

    var renderedContent = JST["posts/list"]({
      posts: that.collection
    });
    this.$el.html(renderedContent);

    return this;
  }
});
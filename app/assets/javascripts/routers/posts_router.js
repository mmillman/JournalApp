JA.Routers.PostsRouter = Backbone.Router.extend({
  // events: {
  //   "click button#new-post": "new"
  // },

  initialize: function (rootEl, posts) {
    this.$rootEl = $(rootEl);
    this.posts = posts;
    console.log("router created with el: ", rootEl);
  },

  routes: {
    "": "index",
    "posts/new": "new",
    "posts/:id": "show"
  },

  index: function () {
    var that = this;
    console.log("routed to index!");

    this.$rootEl.empty();

    var postListView = JA.Views.PostsListView({
      collection: that.posts
    })

    this.$rootEl.html(postListView.render().$el);
  },

  new: function () {
    var that = this;
    console.log("routed to new");

    var newPostView = JA.Views.NewPostView({
      collection: that.posts
    });

    this.$rootEl.html(newPostView.render().$el);
  },

  show: function (id) {
    // var that = this;
    console.log("routed to show");

    var post = this.posts.get(id);

    var postDetailView = new JA.Views.PostDetailView({
      model: post
    });

    this.$rootEl.html(postDetailView.render().$el);
  }
});
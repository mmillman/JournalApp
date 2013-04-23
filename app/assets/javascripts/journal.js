window.JA = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function ($sidebar, $content, postsData) {
    console.log("JA initialized!");
    console.log("postsData: ", postsData);

    var posts = new JA.Collections.Posts(postsData);

    new JA.Routers.PostsRouter($content, posts);
    this.installSidebar($sidebar, posts);

    console.log("history start!")
    Backbone.history.start();
  },

  installSidebar: function ($sidebar, posts) {
    console.log("installing sidebar!");

    var postsListView = new JA.Views.PostsListView({
      collection: posts
    });

    $sidebar.html(postsListView.render().$el);

  }

};
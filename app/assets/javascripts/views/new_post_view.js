JA.Views.NewPostView = Backbone.Views.extend({
  events: {
    "click button.submit": "submit"
  },

  render: function () {
    var renderedContent = JST["posts/new"]();

    this.$el.html(renderedContent);

    return this;
  },

  submit: function () {
    var that = this;

    var post = new TD.Models.Post({
      title: that.$("input[name=post\\[title\\]]").val(),
      body: that.$("textarea[name=post\\[body\\]]").val()
    });

    this.collection.add()
    this.$el.find("")
  }
});
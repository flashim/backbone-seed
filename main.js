require.config({
  baseUrl: './',
  paths: {
    'jquery': 'libs/prod/jquery-1.9.1',
    'underscore': 'libs/prod/underscore',
    'Backbone': 'libs/prod/backbone',
    'app': 'app/app'
  },

  shim: {
    'underscore': {
      exports: '_'
    },
    'Backbone': {
      exports: 'Backbone'
    }
  }

});
requirejs([
  'jquery', 'underscore', 'Backbone', 'app'
], function ($, _, Backbone, App) {

  //App.init();
  $('#loaderStatus').html('We have now loaded jQuery...');

  var model = new Backbone.Model({
    data: [{
        text: "Google",
        href: "http://google.com"
      },
      {
        text: "Facebook",
        href: "http://facebook.com"
      },
      {
        text: "Youtube",
        href: "http://youtube.com"
      }
    ]
  });
  var View = Backbone.View.extend({
    initialize: function () {
      this.template = $('#list-template');
    },
    el: '#container',
    events: {
      "click button": "render"
    },
    render: function () {
      var data = this.model.get('data');
      console.log(this.$el.find('#list'));
      //this.$el.find('#list').empty();
      //console.log("this.$el.find('#list') cleared");
      for (var i = 0, l = data.length; i < l; i++) {
        var li = this.template.clone().find('a').attr('href', data[i].href).text(data[i].text).end();
        this.$el.find('ul').append(li);
      }
    }
  });
  var view = new View({
    model: model
  });


});
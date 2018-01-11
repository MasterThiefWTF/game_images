import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

/*var img_data = [
    {
        img_src: '/p5.jpg',
        game_title: 'Black Desert Online',
        game_genre: 'MMO',
        game_price: '$9.99'
    },
    {
        img_src: '/p7.jpg',
        game_title: 'Dark Souls III',
        game_genre: 'RPG',
        game_price: '$59.99'
    },
    {
        img_src: '/p9.jpg',
        game_title: 'Garrys Mod',
        game_genre: 'Indie',
        game_price: '$9.99'
    },
    {
        img_src: '/p11.jpg',
        game_title: 'Watch Dogs 2',
        game_genre: 'Action',
        game_price: '$59.99'
    },
];*/

Template.images.helpers({images:Images.find()});

//Template.images.helpers({images:img_data});
Template.images.events({
    'click .js-del-image':function(event){
        var image_id = this._id;
        console.log(image_id);
        $("#"+image_id).hide('slow',function(){
            Images.remove({"_id":image_id});
            if(Images.find().count() < 1){
                if(confirm('Apakah anda ingin membuat starter data ?') == true) {
                    Images.insert({
                        img_src: '/p5.jpg',
                        game_title: 'Black Desert Online',
                        game_genre: 'MMO',
                        game_price: '$9.99'
                        });
                    Images.insert({
                        img_src: '/p7.jpg',
                        game_title: 'Dark Souls III',
                        game_genre: 'RPG',
                        game_price: '$59.99'
                        });
                    Images.insert({
                        img_src: '/p9.jpg',
                        game_title: 'Garrys Mod',
                        game_genre: 'Indie',
                        game_price: '$9.99'
                        });
                    Images.insert({
                        img_src: '/p11.jpg',
                        game_title: 'Watch Dogs 2',
                        game_genre: 'Action',
                        game_price: '$59.99'
                        });
                }
            }
        });
    }
});

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

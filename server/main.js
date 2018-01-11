import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
if(Images.find().count() == 0){
    Images.insert(
        {
        img_src: '/p5.jpg',
        game_title: 'Black Desert Online',
        game_genre: 'MMO',
        game_price: '$9.99'
        });
    Images.insert(
        {
        img_src: '/p7.jpg',
        game_title: 'Dark Souls III',
        game_genre: 'RPG',
        game_price: '$59.99'
        });
    Images.insert(
        {
        img_src: '/p9.jpg',
        game_title: 'Garrys Mod',
        game_genre: 'Indie',
        game_price: '$9.99'
        });
    Images.insert(
        {
        img_src: '/p11.jpg',
        game_title: 'Watch Dogs 2',
        game_genre: 'Action',
        game_price: '$59.99'
        });
}
});
var answer_key = {
  '1a': ['Ariella','Nina','Melissa','Katie'],
  '1b': ['Michal', 'Yitz', 'Michael','Ariella'],
  '1c': ['Inna','Batya','Nate','Ilan'],
  '1d': ['Katie','Ilan','Ben','David'],
  '1e': ['Kelly','Ariel','David', 'Melissa'],
  '2a': ['Ariel','Michal','Nina','Michael'],
  '2b': ['Ariella','Melissa','Nate','Nina'],
  '2c': ['David','Yitz','Ilan','Batya'],
  '2d': ['Kelly','Inna','Batya','Ben'],
  '2e': ['Katie','Michael','Ben','Inna'],
  '3a': ['David','Yitz','Michael','Nina'],
  '3b': ['Katie','Ariel','Nate','Ariella'],
  '3c': ['Kelly','Inna','Batya','Ben'],
  '3d': ['Ariella','Nina','Melissa','Michal'],
  '3e': ['Michal','Ilan','Ben','Ariel'],
  '4a': ['Katie','David','Ben','Nate'],
  '4b': ['Ariel','Batya','Ilan','Yitz'],
  '4c': ['Michal','Yitz','Nate','Kelly'],
  '4d': ['Kelly','Inna','Nina','Melissa'],
  '4e': ['Ariella','Melissa','Michael','Michal'],
  '5a': ['Katie','Michal','Ilan','David'],
  '5b': ['Melissa','Michael','Nate','Yitz'],
  '5c': ['Ariel','Ariella','Ben','Kelly'],
  '5d': ['Inna','Batya','Yitz','Ilan'],
  '5e': ['Kelly','Nina','David','Inna'],
  '6a': ['Batya','Nate','Ben','Katie'],
  '6b': ['Ariella','Nina','Melissa','Nate'],
  '6c': ['Kelly','Michal','Yitz','Ariel'],
  '6d': ['Ariel','Inna','David','Michael'],
  '6e': ['Katie','Michael','Ilan','Batya']
};

var answer_person = {
  'Katie': "You are a resourceful individual who will fight to survive.  Although you may not know how to build a shelter, you are excellent at making it up as you go along.",
  'Kelly': "You're the new one in the group.  No one really knows who you are yet.  You’re a mystery to all of those around you, but you are really good at punching zombies.",
  'Ariel': "You are the skeptic.  Until the disaster actually happens, you don't think it will.  Zombies?  Nah, they don't exist.  They couldn't take over the world.",
  'Michal': "You are the healer.  You may not have modern medicine to help you, but you will find a way to keep your friends alive, no matter how hard it takes.",
  'Ariella': "You are the loner.  You prefer to go it alone, without anyone to hold you back.  Unfortunately it means that if you get injured, you’re on your own, pal.",
  'Inna': "You are a true leader, even if you aren’t directly in charge.  People may be taken aback by your intensity, but they know you will lead them to safety, even if you yell at them.",
  'Batya': "You are the expert.  You know how to build a shelter, cook a rabbit you caught in the woods, and shoot a zombie in the head.  People think you’re pretty badass, but you are just trying to survive.",
  'Nina': "You are the paranoid one.  No matter how many people tell you the shelter is secure, you refuse to believe them.  But hey, you’re still alive, so you’re probably doing something right.",
  'Melissa': "You will survive the apocalypse.  You manage to stay silent while everyone else is fighting over food and end up getting the best pick when no one else is looking.",
  'David': "You are the plucky comic relief.  You make funny jokes to relieve the tension of trying to survive day to day in the end of the world.",
  'Yitz': "You are loyal to your group until the end.  Unfortunately, this means that you don’t tell them when you get bitten by a zombie, leading you to vanish in the night to protect them before you eat their brains.",
  'Michael': "You get eaten first.  Your group mates throw you under the bus, or more accurately, throw you to the zombies so they can escape.",
  'Ilan': "You are the conspirator.  You talk with other members of the group behind the leaders back, trying to sway them to your side.  You attempt to stage a coup, but it may not end up going the way you think it will.",
  'Nate': "You are the fearless leader of the group.  You will lead them through good times and bad times, and you will probably decide who the first person to get eaten is when you resort to cannibalism.",
  'Ben': "You are the enigma.  One moment you’ll be protecting a little girl from danger, the next you’ll be raiding another group’s camp for food.  Who are you?  We may never know."
}

$(document).ready(function() {

  $(".check_img").css('background-image', "url('unchecked.png')");

  $('label').click(function(){
    $(this).parent().siblings().find('.check_img')
      .css('background-image', "url('unchecked.png')")
      .css('background-size', '77%');
    $(this).parent().siblings().css('background-color', '#f2f2f2');
    $(this).parent().css('background-color','#8ac5ff');
    $(this).css('background-color','#8ac5ff');
    $(this).children().prop('checked','true');

    $(this).find('.check_img')
      .css('background-image', "url('checked.png')")
      .css('background-size', '90%');
  });

  $('#submit').click(function(){
    var chosen_list = [];
    var chosen = $('input[type=radio]:checked')
      .each(function(){
        chosen_list.push($(this).val());
      });
      
    var outcomes = {};
    for (var i = 0; i < chosen_list.length; i++) {
      var possible = answer_key[chosen_list[i]];
      for (var j = 0; j < possible.length; j++) {
        if (outcomes[possible[j]]) {
          outcomes[possible[j]] += 1;
        }
        else {
          outcomes[possible[j]] = 1;
        }
      }
    }

    var max = [];
    var max_num = 0;
    outcome_k = Object.keys(outcomes);
    for (var i = 0; i < outcome_k.length; i++) {
      var k = outcome_k[i];
      if (outcomes[k] > max_num) {
        max_num = outcomes[k];
      }
    }
    for (var i = 0; i < outcome_k.length; i++) {
      var k = outcome_k[i];
      if (outcomes[k] == max_num){
        max.push(k);
      }
    }

    // console.log(max);
    // console.log(max_num);

    $("#question_form").css('display','none');
    $("#answers").css('display','block');

    var name = max[Math.floor(Math.random()*max.length)];

    $("#yougot").html('You got: ' + name);
    $("#desc").html(
      '<img src="img/' + name.toLowerCase() + '.jpg" alt="' + name +'">'
      + "<p>" +
      answer_person[name]
      + "</p>"
    );
  });

  $("#reset").click(function(){
    $("#question_form").css('display','block');
    $('#answers').css('display','none');
    $("#yougot").html('');
    $("#desc").html('');
    $(".check_img").css('background-image', "url('unchecked.png')");
    $('input[type=radio]').prop('checked','false');
    $('label').css('background-color', '#f2f2f2');
    $('li').css('background-color', '#f2f2f2');

  });


});
var answer_key = {
  '1a': ['Ariella','Nina','Melissa'],
  '1b': ['Michal', 'Yitz', 'Michael','Ariella'],
  '1c': ['Inna','Batya','Nate'],
  '1d': ['Katie','Ilan','Ben','David'],
  '1e': ['Kelly','Ariel','David', 'Melissa'],
  '2a': ['Ariel','Michal','Nina','Michael'],
  '2b': ['Ariella','Melissa','Nate'],
  '2c': ['David','Yitz','Ilan'],
  '2d': ['Kelly','Inna','Batya','Ben'],
  '2e': ['Katie','Michael','Ben','Inna'],
  '3a': ['David','Yitz','Michael','Nina'],
  '3b': ['Katie','Ariel','Nate'],
  '3c': ['Kelly','Inna','Batya'],
  '3d': ['Ariella','Nina','Melissa'],
  '3e': ['Michal','Ilan','Ben','Ariel'],
  '4a': ['Katie','David','Ben'],
  '4b': ['Ariel','Batya','Ilan'],
  '4c': ['Michal','Yitz','Nate','Kelly'],
  '4d': ['Kelly','Inna','Nina'],
  '4e': ['Ariella','Melissa','Michael','Michal'],
  '5a': ['Katie','Michal','Ilan'],
  '5b': ['Melissa','Michael','Nate','Yitz'],
  '5c': ['Ariel','Ariella','Ben'],
  '5d': ['Inna','Batya','Yitz','Ilan'],
  '5e': ['Kelly','Nina','David'],
  '6a': ['Batya','Nate','Ben','Katie'],
  '6b': ['Ariella','Nina','Melissa','Nate'],
  '6c': ['Kelly','Michal','Yitz'],
  '6d': ['Ariel','Inna','David'],
  '6e': ['Katie','Michael','Ilan']
};

$(document).ready(function() {

  $(".check_img").css('background-image', "url('unchecked.png')");

  $('label').click(function(){
    $(this).parent().siblings().find('.check_img')
      .css('background-image', "url('unchecked.png')")
      .css('background-size', '77%');
    $(this).parent().siblings().css('background-color', '#f2f2f2');
    $(this).parent().css('background-color','#8ac5ff');
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

    console.log(outcomes);

  })

});
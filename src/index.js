var budgetForm = $("#budget-form"),
    savingForm = $("#saving-form"),
    billsForm = $("#bills-form"),
    interestForm = $("#interest-form");

var appendToList = function(formName) {
    var $form = $("#" + formName + "-form"),
    term = $form.find( "input[name='" + formName + "']" ).val(),
    url = $form.attr( "action" );
    $("." + formName + "-list").append("<li><a href='//"+ term + "'>" + term + "</a>" + "</li>" );
    $form.find( "input[name='" + formName + "']" ).val("");
};

savingForm.submit(function(e) {
  e.preventDefault();
  appendToList("saving");
});

billsForm.submit(function(e) {
  e.preventDefault();
  appendToList("bills");
});

interestForm.submit(function(e) {
  e.preventDefault();
  appendToList("interest");
});

budgetForm.submit(function(e) {
  e.preventDefault();
  appendToList("budget");
});

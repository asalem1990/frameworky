$(function () {
  $("[rel='import']").each(function () {
    var component = $(this);
    var template = component[0].import.querySelector('template');
    var clone = document.importNode(template.content, true);
    $($(this).attr("ref")+"-template").append(clone);
  });
});
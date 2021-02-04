function options(on){

var dom = document.getElementByID('myForm');

for(var index = 0; index < dom.colorButton.length; index++){
  if(dom.colorButton[index].checked){
  }
}


}
<script type="text/javascript">
  $(function() {
    $('input[type="radio"]').bind('change', function (v) {

      if($(this.is(':checked')) {
        $(this).parent().addClass('active');
      } else {
        $(this).parent().removeClass('active');
      }
    });
  });
</script>

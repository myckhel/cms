const resetForm = (element) => {
  $(element).trigger("reset");
}

function loadElement(element,bool){
  $(element).prop('disabled', bool);
  let $this = $(element);
  var loadingText = '<i class="fa fa-circle-o-notch fa-spin"></i>';
  if (bool) {
    $this.data('original-text', $($this).html());
    $this.html(loadingText);
  }else{
    $this.html($this.data('original-text'))
  }
}

const toggleAble = (element,bool) => {
  $(element).prop('disabled', bool);
  let $this = $(element);
  var loadingText = '<i class="fa fa-circle-o-notch fa-spin"></i> loading...';
  if (bool) {
    $this.data('original-text', $($this).html());
    $this.html(loadingText);
  }else{
    $this.html($this.data('original-text'))
  }
}

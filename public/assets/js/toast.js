// toast
$(function($){
    successToast = function() {
        $.toast({
            heading: 'Success',
            text: 'This is just a sample article. Specifies how the output will look.',
            showHideTransition: 'fade',
            icon: 'success',
            loaderBg: 'rgba(255,255,255,.8)',
            position: 'top-right'
        });
    };
    errorToast = function() {
        $.toast({
            heading: 'Error',
            text: 'This is just a sample article. Specifies how the output will look.',
            showHideTransition: 'fade',
            icon: 'error',
            loaderBg: 'rgba(255,255,255,.8)',
            position: 'top-right'
        });
    };
    infoToast = function() {
        $.toast({
            heading: 'Info',
            text: 'This is just a sample article. Specifies how the output will look.',
            showHideTransition: 'fade',
            icon: 'info',
            loaderBg: 'rgba(255,255,255,.8)',
            position: 'top-right'
        });
    };
    warningToast = function() {
        $.toast({
            heading: 'Warning',
            text: 'This is just a sample article. Specifies how the output will look.',
            showHideTransition: 'fade',
            icon: 'warning',
            loaderBg: 'rgba(255,255,255,.8)',
            position: 'top-right'
        });
    };
    toastPosition = function(pos) {
        resetToastPos();
        $.toast({
          heading: 'Position',
          text: 'This is just a sample article. Specifies how the output will look',
          position: String(pos),
          icon: 'success',
          stack: false,
          loaderBg: '#f96868'
        })
    };
     resetToastPos = function() {
        $('.jq-toast-wrap').removeClass('mid-center bottom-left bottom-right top-left top-right');
        $(".jq-toast-wrap").css({
            "top": "",
            "bottom": "",
            "left": "",
            "right": ""
        }); 
    }
});
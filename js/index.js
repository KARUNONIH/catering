$('.dropify').dropify({
    tpl: {
        wrap: '<div class="dropify-wrapper rounded-xl"></div>',
        errorLine:       '<p class="dropify-error"></p>',
        message:'<div class="dropify-message rounded-xl"><p class="text-2xl pb-2">Pilih Gambar</p></div>',

    }
});


    $(document).on('click', '#profileubah', function() {
        $("#profile").click();
    });

    $(document).on('click', '#ubahusername', function() {
        $("#username").focus();
    });

    $(document).on('click', '#ubahemail', function() {
        $("#email").focus();
    });

    $(document).on('click', '#ubahpassword', function() {
        $("#password").focus();
    });

    $(document).on('click', '#ubahnomor', function() {
        $("#nomor").focus();
    });

    $(document).on('click', '#ubahalamat', function() {
        $("#alamat").focus();
    });


const chooseFile = document.getElementById("profile");
const imgPreview = document.getElementById("preview");


    chooseFile.addEventListener("change", function () {
        getImgData();
    });
    function getImgData() {
        const files = chooseFile.files[0];
        if (files) {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(files);
          fileReader.addEventListener("load", function () {
            imgPreview.style.display = "block";
            imgPreview.innerHTML = '<img src="' + this.result + '" class="w-[123px] h-[123px] rounded-xl"/>';
          });    
        }
      }
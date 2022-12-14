var select = document.getElementById("select");
var searchInput = document.getElementById("searchInput");
var searchButton = document.getElementById("searchButton");
var insertLib = document.getElementById("insertLib");
var insertLibButton = document.getElementById("insertLibButton");
var insertBook = document.getElementById("insertBook");
var selectI = document.getElementById("selectI");
var searchResult = document.getElementById("searchResult");
var bookName = document.getElementById("bookName");
var auterName = document.getElementById("auterName");
var bookClass = document.getElementById("bookClass");
var rowNumber = document.getElementById("rowNumber");
var bookSection = document.getElementById("bookSection");
var submitAddBook = document.getElementById("submitAddBook");
var newB = document.getElementById("newB");
var newR = document.getElementById("newR");
var oldR = document.getElementById("oldR");
var searchLibForm = document.getElementById("searchLibForm");
var searchInput = document.getElementById("searchInput");
var libs = [];



function lib_add() {
    if (localStorage.getItem("libs") !== null) {

        libs = JSON.parse(localStorage.getItem("libs"));
        if (JSON.parse(localStorage.getItem("libs")).length == 0) {
            select.innerHTML += '<option>' + insertLib.value + '</option>\n';
            selectI.innerHTML += '<option>' + insertLib.value + '</option>\n';
            libsName.innerHTML += '<option>' + insertLib.value + '</option>\n';
            libs.push(insertLib.value);
            localStorage.setItem("libs", JSON.stringify(libs));
            // to make a dynamic varible
           // window['MyLib_' + insertLib.value] = [];
            window[insertLib.value] = [];

            // console.log(window['MyLib_'+insertLib.value]);
            localStorage.setItem("selectLib", JSON.stringify(select.innerHTML));
          //  localStorage.setItem("myLib_" + insertLib.value, JSON.stringify(window['MyLib_' + insertLib.value]));
          localStorage.setItem(insertLib.value, JSON.stringify(window[insertLib.value]));
            insertLib.value = "";
        } else {

            if (JSON.parse(localStorage.getItem("libs").includes(insertLib.value))) {
                alert(`هذه المكتبة (${insertLib.value}) موجودة بالفعل`);
            } else {
                select.innerHTML += '<option>' + insertLib.value + '</option>\n';
                selectI.innerHTML += '<option>' + insertLib.value + '</option>\n';
                libsName.innerHTML += '<option>' + insertLib.value + '</option>\n';
                libs.push(insertLib.value);
                localStorage.setItem("libs", JSON.stringify(libs));
                // to make a dynamic varible
               // window['MyLib_' + insertLib.value] = [];
               window[insertLib.value] = [];
                //  console.log(window['MyLib_'+insertLib.value]);
                localStorage.setItem("selectLib", JSON.stringify(select.innerHTML));
              //  localStorage.setItem("myLib_" + insertLib.value, JSON.stringify(window['MyLib_' + insertLib.value]));
              localStorage.setItem(insertLib.value, JSON.stringify(window[insertLib.value]));
                insertLib.value = "";
            }

        }

    } else {
        select.innerHTML += '<option>' + insertLib.value + '</option>\n';
        selectI.innerHTML += '<option>' + insertLib.value + '</option>\n';
        libsName.innerHTML += '<option>' + insertLib.value + '</option>\n';
        libs.push(insertLib.value);
        localStorage.setItem("libs", JSON.stringify(libs));
        // to make a dynamic varible
       // window['MyLib_' + insertLib.value] = [];
        window[insertLib.value] = [];

        //  console.log(window['MyLib_'+insertLib.value]);
        localStorage.setItem("selectLib", JSON.stringify(select.innerHTML));
      //  localStorage.setItem("myLib_" + insertLib.value, JSON.stringify(window['MyLib_' + insertLib.value]));
        localStorage.setItem(insertLib.value, JSON.stringify(window[insertLib.value]));
        insertLib.value = "";

    }

}

function electChange(select) {
    if (select.value != "choose") {
       // var lib = JSON.parse(localStorage.getItem("myLib_" + select.value));
        var lib = JSON.parse(localStorage.getItem(select.value));
        //  console.log(lib);
        if (newB.checked == true) {
            insertBook.onsubmit = (form) => {
                form.preventDefault();

                lib.push({ "BookName": bookName.value, "BookAutor": auterName.value, "BookClass": bookClass.value, "BookRow": rowNumber.value, "BookSection": bookSection.value });
                //  console.log(lib);
              // localStorage.setItem("myLib_" + select.value, JSON.stringify(lib));
                localStorage.setItem(select.value, JSON.stringify(lib));
                bookName.value = "";
                auterName.value = "";
                bookClass.value = "";
                rowNumber.value = "";
                bookSection.value = "";
                searchResult.innerHTML = '<h3 style="color:seagreen;">تم التسجيل بنجاح</h3>';
                setTimeout(() => {
                    searchResult.innerHTML = "";
                }, 4000);


            }

        }
        else if (oldR.checked == true) {

            if (lib.length == 0) {
                searchResult.innerHTML = '<h3 style="color:red; text-align:center;">مكتبة فارغة</h3>';
            } else {
                searchResult.innerHTML = "";
                searchLibForm.onsubmit = (form) => {
                    form.preventDefault();
                   // lib = JSON.parse(localStorage.getItem("myLib_" + select.value));
                    lib = JSON.parse(localStorage.getItem(select.value));
                    // console.log(lib);

                    searchResult.innerHTML = "";
                    if (searchInput.value.length >= 3) {
                        lib.forEach(element => {
                            //  searchResult.innerHTML = "";
                            // console.log(element);
                            if (element.BookName.toLowerCase().search(searchInput.value.toLowerCase()) != -1 || element.BookAutor.toLowerCase().search(searchInput.value.toLowerCase()) != -1 || element.BookClass.toLowerCase().search(searchInput.value.toLowerCase()) != -1) {
                                searchResult.innerHTML += '<div class="container card-header shadow p-3 mb-5 bg-white rounded"><h2> اسم الكتاب: <br>' + element.BookName + '</h2> <h3 style="color:darkred;"> اسم المؤلف: <br>' +
                                    element.BookAutor + '</h3><p style="color:blue;">كلمات مفتاحية:<br>' + element.BookClass +
                                    '</p><h2>الكتاب في الصف: ' + element.BookRow + '</h2><h2>الكتاب في القطاع: ' + element.BookSection + '</h2></div>';

                            }


                        });
                    } else {

                    }
                }


            }

        }
    }
}


function disable2() {
    if (newR.checked == true) {
        let pass = prompt("أدخل كلمة المرور >> Aladdin << لإنشاء قاعدة بيانات جديدة");
        if (pass == "Aladdin") {
            searchResult.innerHTML = "";
            select.disabled = true;
            searchInput.disabled = true;
            searchButton.disabled = true;
            insertLib.disabled = false;
            insertLibButton.disabled = false;

            bookName.disabled = true;
            auterName.disabled = true;
            bookClass.disabled = true;
            rowNumber.disabled = true;
            bookSection.disabled = true;
            submitAddBook.disabled = true;
            selectI.disabled = true;
            searchInput.value = "";
        } else {

            alert("كلمة مرور غير صحيحة");
            oldR.checked = true;
            select.disabled = false;
            searchInput.disabled = false;
            searchButton.disabled = false;
            insertLib.disabled = true;
            insertLibButton.disabled = true;

            bookName.disabled = true;
            auterName.disabled = true;
            bookClass.disabled = true;
            rowNumber.disabled = true;
            bookSection.disabled = true;
            submitAddBook.disabled = true;
            selectI.disabled = true;
        }

    } else if (newB.checked == true) {
        let pass = prompt("أدخل كلمة المرور >> Aladdin << لإدراج  كتاب جديد");
        if (pass == "Aladdin") {
            searchResult.innerHTML = "";
            select.disabled = true;
            searchInput.disabled = true;
            searchButton.disabled = true;
            insertLib.disabled = true;
            insertLibButton.disabled = true;

            bookName.disabled = false;
            auterName.disabled = false;
            bookClass.disabled = false;
            rowNumber.disabled = false;
            bookSection.disabled = false;
            submitAddBook.disabled = false;
            selectI.disabled = false;
            searchInput.value = "";
            electChange(selectI);
        } else {
            alert("كلمة مرور غير صحيحة");
            oldR.checked = true;
            select.disabled = false;
            searchInput.disabled = false;
            searchButton.disabled = false;
            insertLib.disabled = true;
            insertLibButton.disabled = true;

            bookName.disabled = true;
            auterName.disabled = true;
            bookClass.disabled = true;
            rowNumber.disabled = true;
            bookSection.disabled = true;
            submitAddBook.disabled = true;
            selectI.disabled = true;
        }

    } else if (oldR.checked == true) {
        select.disabled = false;
        searchInput.disabled = false;
        searchButton.disabled = false;
        insertLib.disabled = true;
        insertLibButton.disabled = true;

        bookName.disabled = true;
        auterName.disabled = true;
        bookClass.disabled = true;
        rowNumber.disabled = true;
        bookSection.disabled = true;
        submitAddBook.disabled = true;
        selectI.disabled = true;
        electChange(select);
    }

}

onload = () => {
    if (localStorage.getItem("selectLib") !== null) {
        select.innerHTML = JSON.parse(localStorage.getItem("selectLib"));
        selectI.innerHTML = JSON.parse(localStorage.getItem("selectLib"));
        libsName.innerHTML = JSON.parse(localStorage.getItem("selectLib"));
    }
    /* else {
         var myLib = ['<option value="choose">اختر مكتبتك</option>'];
     } 
     myLib.forEach(element => {
         select += element;
     }); */
}
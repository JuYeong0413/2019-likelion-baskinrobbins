// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function isValid() {
    var checkboxes = document.getElementsByName("flavor");  
    var numberOfCheckedItems = 0;  
    for(var i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked)  
            numberOfCheckedItems++;
    }
    if(numberOfCheckedItems == parseInt(document.getElementById("num").value)) {
        alert("더 이상 고를 수 없습니다!");
        
        return false;
    } else return true;
}

function check1() {
    if(document.getElementById("check1").checked == true) {
        document.getElementById("check1").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check1").checked == false) {
                document.getElementById("check1").checked = true;
            } else document.getElementById("check1").checked = false;
        }
    }
}

function check2() {
    if(document.getElementById("check2").checked == true) {
        document.getElementById("check2").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check2").checked == false) {
                document.getElementById("check2").checked = true;
            } else document.getElementById("check2").checked = false;
        }
    }
}

function check3() {
    if(document.getElementById("check3").checked == true) {
        document.getElementById("check3").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check3").checked == false) {
                document.getElementById("check3").checked = true;
            } else document.getElementById("check3").checked = false;
        }
    }
}

function check4() {
    if(document.getElementById("check4").checked == true) {
        document.getElementById("check4").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check4").checked == false) {
                document.getElementById("check4").checked = true;
            } else document.getElementById("check4").checked = false;
        }
    }
}

function check5() {
    if(document.getElementById("check5").checked == true) {
        document.getElementById("check5").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check5").checked == false) {
                document.getElementById("check5").checked = true;
            } else document.getElementById("check5").checked = false;
        }
    }
}

function check6() {
    if(document.getElementById("check6").checked == true) {
        document.getElementById("check6").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check6").checked == false) {
                document.getElementById("check6").checked = true;
            } else document.getElementById("check6").checked = false;
        }
    }
}

function check7() {
    if(document.getElementById("check7").checked == true) {
        document.getElementById("check7").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check7").checked == false) {
                document.getElementById("check7").checked = true;
            } else document.getElementById("check7").checked = false;
        }
    }
}

function check8() {
    if(document.getElementById("check8").checked == true) {
        document.getElementById("check8").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check8").checked == false) {
                document.getElementById("check8").checked = true;
            } else document.getElementById("check8").checked = false;
        }
    }
}

function check9() {
    if(document.getElementById("check9").checked == true) {
        document.getElementById("check9").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check9").checked == false) {
                document.getElementById("check9").checked = true;
            } else document.getElementById("check9").checked = false;
        }
    }
}

function check10() {
    if(document.getElementById("check10").checked == true) {
        document.getElementById("check10").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check10").checked == false) {
                document.getElementById("check10").checked = true;
            } else document.getElementById("check10").checked = false;
        }
    }
}

function check11() {
    if(document.getElementById("check11").checked == true) {
        document.getElementById("check11").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check11").checked == false) {
                document.getElementById("check11").checked = true;
            } else document.getElementById("check11").checked = false;
        }
    }
}

function check12() {
    if(document.getElementById("check12").checked == true) {
        document.getElementById("check12").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check12").checked == false) {
                document.getElementById("check12").checked = true;
            } else document.getElementById("check12").checked = false;
        }
    }
}

function check13() {
    if(document.getElementById("check13").checked == true) {
        document.getElementById("check13").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check13").checked == false) {
                document.getElementById("check13").checked = true;
            } else document.getElementById("check13").checked = false;
        }
    }
}

function check14() {
    if(document.getElementById("check14").checked == true) {
        document.getElementById("check14").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check14").checked == false) {
                document.getElementById("check14").checked = true;
            } else document.getElementById("check14").checked = false;
        }
    }
}

function check15() {
    if(document.getElementById("check15").checked == true) {
        document.getElementById("check15").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check15").checked == false) {
                document.getElementById("check15").checked = true;
            } else document.getElementById("check15").checked = false;
        }
    }
}

function check16() {
    if(document.getElementById("check16").checked == true) {
        document.getElementById("check16").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check16").checked == false) {
                document.getElementById("check16").checked = true;
            } else document.getElementById("check16").checked = false;
        }
    }
}

function check17() {
    if(document.getElementById("check17").checked == true) {
        document.getElementById("check17").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check17").checked == false) {
                document.getElementById("check17").checked = true;
            } else document.getElementById("check17").checked = false;
        }
    }
}

function check18() {
    if(document.getElementById("check18").checked == true) {
        document.getElementById("check18").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check18").checked == false) {
                document.getElementById("check18").checked = true;
            } else document.getElementById("check18").checked = false;
        }
    }
}

function check19() {
    if(document.getElementById("check19").checked == true) {
        document.getElementById("check19").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check19").checked == false) {
                document.getElementById("check19").checked = true;
            } else document.getElementById("check19").checked = false;
        }
    }
}

function check20() {
    if(document.getElementById("check20").checked == true) {
        document.getElementById("check20").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check20").checked == false) {
                document.getElementById("check20").checked = true;
            } else document.getElementById("check20").checked = false;
        }
    }
}

function check21() {
    if(document.getElementById("check21").checked == true) {
        document.getElementById("check21").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check21").checked == false) {
                document.getElementById("check21").checked = true;
            } else document.getElementById("check21").checked = false;
        }
    }
}

function check22() {
    if(document.getElementById("check22").checked == true) {
        document.getElementById("check22").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check22").checked == false) {
                document.getElementById("check22").checked = true;
            } else document.getElementById("check22").checked = false;
        }
    }
}

function check23() {
    if(document.getElementById("check23").checked == true) {
        document.getElementById("check23").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check23").checked == false) {
                document.getElementById("check23").checked = true;
            } else document.getElementById("check23").checked = false;
        }
    }
}

function check24() {
    if(document.getElementById("check24").checked == true) {
        document.getElementById("check24").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check24").checked == false) {
                document.getElementById("check24").checked = true;
            } else document.getElementById("check24").checked = false;
        }
    }
}

function check25() {
    if(document.getElementById("check25").checked == true) {
        document.getElementById("check25").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check25").checked == false) {
                document.getElementById("check25").checked = true;
            } else document.getElementById("check25").checked = false;
        }
    }
}

function check26() {
    if(document.getElementById("check26").checked == true) {
        document.getElementById("check26").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check26").checked == false) {
                document.getElementById("check26").checked = true;
            } else document.getElementById("check26").checked = false;
        }
    }
}

function check27() {
    if(document.getElementById("check27").checked == true) {
        document.getElementById("check27").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check27").checked == false) {
                document.getElementById("check27").checked = true;
            } else document.getElementById("check27").checked = false;
        }
    }
}

function check28() {
    if(document.getElementById("check28").checked == true) {
        document.getElementById("check28").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check28").checked == false) {
                document.getElementById("check28").checked = true;
            } else document.getElementById("check28").checked = false;
        }
    }
}

function check29() {
    if(document.getElementById("check29").checked == true) {
        document.getElementById("check29").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check29").checked == false) {
                document.getElementById("check29").checked = true;
            } else document.getElementById("check29").checked = false;
        }
    }
}

function check30() {
    if(document.getElementById("check30").checked == true) {
        document.getElementById("check30").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check30").checked == false) {
                document.getElementById("check30").checked = true;
            } else document.getElementById("check30").checked = false;
        }
    }
}

function check31() {
    if(document.getElementById("check31").checked == true) {
        document.getElementById("check31").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check31").checked == false) {
                document.getElementById("check31").checked = true;
            } else document.getElementById("check31").checked = false;
        }
    }
}

function check32() {
    if(document.getElementById("check32").checked == true) {
        document.getElementById("check32").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check32").checked == false) {
                document.getElementById("check32").checked = true;
            } else document.getElementById("check32").checked = false;
        }
    }
}

function check33() {
    if(document.getElementById("check33").checked == true) {
        document.getElementById("check33").checked = false;
        return;
    }
    else {
        if(isValid()){
            if(document.getElementById("check33").checked == false) {
                document.getElementById("check33").checked = true;
            } else document.getElementById("check33").checked = false;
        }
    }
}
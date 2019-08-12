/*
author: deb
*/

/*
this function validates all the input fields in the validation.html file
*/
validate = () => {

    /* Function for validating the userid inputs 
    */
    var userid = document.getElementById('userid');
    if (userid.value === "" || userid.value.length < 5 || userid.value.length > 12) {
        alert("user id is Required and must be of length 5-12");
    }

    /* Function for validating the password 
    */
    var password = document.getElementById('pass');
    if (password.value === "" || password.value.length < 7 || userid.value.length > 12) {
        alert("password is Required and must be of length 7-12");
    }

    /* Function for validating the name
    */

    var name = document.getElementById('name');
    var alphabet = /^[A-Za-z]+$/;
    if (name.value.match(alphabet)) {
        return true;
    }
    else {
        alert("name is required and should be alphabets only");
    }

    /* Function for validating the zip 
    */
    var zip = document.getElementById('zip');
    var num = /^[1-9]+$/;
    if (zip.value.match(num)) {
        return true;
    }
    else {
        alert("zip is required and must be numeric only");
    }

    /* Function for validating the email 
    */
    var email = document.getElementById('email');
    var emailaddress = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(emailaddress)) {
        return true;
    }
    else {
        alert("email required. Must be a valid email");
    }

    /* Function for validating country
    */

    var selectedcountry = document.getElementById("selected-country");
    var invalid = selectedcountry.value =="(please select a country)";
    if (invalid){
        alert("Country required. Must select a country");
    }
}

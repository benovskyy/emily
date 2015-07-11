$ (document).ready (function () {
    $ ('.login-form').on ('submit', function (evt) {
        $ ('.login-form').addClass ('form-disable');
        $ ('.welcome').addClass ('welc-down');
        return false;
    });
});

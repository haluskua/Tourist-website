$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /* click even on toggle menu  */

    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse')
    })
})
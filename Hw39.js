$(document).ready(function(){
    $('*').css({
        'margin': '0',
        'padding': '0',
        'box-sizing': 'border-box'
    })
    $('.screen').css({
        'height': '100%',
        'background': 'black',
        'padding': '10px 0'
    })
    $('p').css({
        'font-family': 'sans-serif',
        'font-weight': 'bold',
        'color': 'white'
    })
    $('.what').css('margin', '10px 5px')
    $('.task').css({
        'background': 'gray',
        'width': '300px',
        'padding': '5px'
    })
    $('.task input').css({
        'width': '290px',
        'background': 'black',
        'color': 'white',
        'border': '1px solid white',
        'border-radius': '5px'
    })
    $('.task button').css({
        'width': '290px',
        'height': '20px',
        'background': '#f5a402',
        'color': 'white',
        'border': '1px solid #b85300',
        'margin-top': '5px'
    })
    // $('.i1').keypress(function(index){
    //     $('.b1').html = index
    // })
    $('.i2').css({
        'width': '190px',
        'margin-right': '10px'
    })
    $('.displace').css({
        'width': '80px',
        'height': '30px',
        'background': 'black',
        'border': '4px solid darkgray',
        'padding': '5px',
        'font-size': '0.65rem'
    })
    $('.t2a').css({
        'display': 'flex'
    })
    // $('.displace').click(function(){
    //     $('.b2').html = $('.i2').value
    // })
    $('.t3 .task').css({
        'display': 'flex',
        'justify-content': 'center',
        'flex-wrap': 'wrap'
    })
    $('#t3a').css({
        'font-size': '0.75rem'
    })
    $('.b3').css({
        'width': '150px',
        'height': '30px',
        'background': 'black',
        'border': '4px solid darkgray',
        'padding': '5px',
        'font-size': '0.65rem',
        'color': 'white'
    })
    $('#n1').click(function(){
        $('.t3 div').addClass('active')
        console.log(document.querySelector('.t3 div'))
    })
    $('.t4 .task, .t5 .task, .t6 .task').css({
        'display': 'flex',
        'justify-content': 'center',
        'flex-wrap': 'wrap'
    })
    $('#t4a, #t5a, #t6a').css('font-size', '0.75rem')
    $('#n2').click(function(){
        $('.t4 div').removeClass('active')
        console.log(document.querySelector('.t4 div'))
    })
    $('#n3').click(function(){
        $('.t5 div').toggleClass('active')
        console.log(document.querySelector('.t5 div'))
    })
    $('#t6a').css({
        'margin': '0 100px',
        'text-align': 'center'
    })
    $('#n4').click(function(){
        $('.t6 div').toggleClass('active')
    })
    $('#t6b').click(function(){
        if($('.t6 div').hasClass('active')){
            alert('Да, есть')
        }else{
            alert('Нет')
        }
    })
    $('.p1').css({
        'width': '300px',
        'height': '150px',
        'background': 'purple',
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center'
    })
    $('.p2').css({
        'width': '250px',
        'height': '125px',
        'background': 'cyan',
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center'
    })
    $('.p3').css({
        'width': '200px',
        'height': '100px',
        'background': 'pink',
        'display': 'flex',
        'justify-content': 'space-around',
        'align-items': 'center'
    })
    $('.p3 button').css({
        'width': '50px', 
        'height': '35px'
    })
    $('#t9a div, #t10a div').css({
        'width': '30px',
        'height': '30px',
        'background': 'darkgray',
        'display': 'inline-block'
    })
    // $('#t9b').click(function(){
    //     $('#t9a div').find(".box").css('background', 'orange')
    // })
    $('.i10').css({
        'width': '290px'
    })
    $('#t10b').css({
        'margin-left': '25%'
    })
    $('.t11 .task, .t12 .task, .t13 .task').css({
        'display': 'flex',
        'align-items': 'center',
        'padding-bottom': '60px'
    })
    $('.t11 input, .t12 input, .t13 input').css({
        'width': '190px',
        'height': '38px',
        'margin-right': '10px',
        'margin-left': '-40px'
    })
    $('#t11a, #t12a, #t13a').css({
        'width': '90px',
        'height': '38px'
    })
    $('.i11, #t11a, .i12, #t12a, .i13, #t13a').css({
        'margin-bottom': '-90px'
    })
    $('#t11a').click(function(){
        $('.i11').attr('placeholder', 'Введите ваше имя...')
    })
    $('#t12a').click(function(){
        $('.i12').attr('type', 'date')
    })
    $('#t13a').click(function(){
        $('.i13').removeAttr('placeholder')
    })
})
$('.active').css('background', 'orange')
document.querySelector('.i1').addEventListener('input', function(){
    document.querySelector('.b1').innerHTML = this.value
})
document.querySelector('.displace').addEventListener('click', () => {
    document.querySelector('.b2').innerHTML = document.querySelector('.i2').value
})
document.querySelector('#t7a').addEventListener('click', () => {
    if(document.querySelector('.p1').style.background == 'purple'){
        document.querySelector('.p1').style.background = 'orange'
    }else{
        document.querySelector('.p1').style.background = 'purple'
    }
})
document.querySelector('#t7b').addEventListener('click', () => {
    if(document.querySelector('.p2').style.background == 'cyan'){
        document.querySelector('.p2').style.background = 'orange'
    }else{
        document.querySelector('.p2').style.background = 'cyan'
    }
})
document.querySelector('#t7c').addEventListener('click', () => {
    if(document.querySelector('.p3').style.background == 'pink'){
        document.querySelector('.p3').style.background = 'orange'
    }else{
        document.querySelector('.p3').style.background = 'pink'
    }
})
document.getElementById('t10b').addEventListener('click', () => {
    document.querySelectorAll('#t10a div')[+(document.querySelector('.i10').value)].className = 'active'
})
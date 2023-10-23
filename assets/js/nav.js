            
    // index > aside menu
    // fetch('aside.html')
    //     .then(response => response.text())
    //     .then(data => {
    //     document.getElementById('asideContainer').innerHTML = data;
    // });
    // index > header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('header').innerHTML = data;

    });
    fetch('footer_nav.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('footer_nav').innerHTML = data;

    });
    fetch('mypage_nav.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('mypage_nav').innerHTML = data;

    });






                                 




<?php require_once($_SERVER['DOCUMENT_ROOT'].'/inc/dochead.php'); ?>
<link rel="stylesheet" href="/assets/css/main.css">
<link rel="stylesheet" type="text/css" href="/assets/slick/slick.css"/>
</head>
<body>
    <?php require_once($_SERVER['DOCUMENT_ROOT'].'/inc/header.php'); ?>
    
    <div id="visual">
        <ul class="jumbo-slide">
            <li class="first">
                <div class="slogan">
                    <h2>Best &amp; First <strong>Consulting Group</strong></h2>
                    <p>고객 중심의 맞춤 컨설팅으로 신뢰와 사랑에 보답하겠습니다.</p>
                </div>
            </li>
            <li class="second">
                <div class="slogan">
                    <h2>Best &amp; First <strong>Consulting Group</strong></h2>
                    <p>고객 중심의 맞춤 컨설팅으로 신뢰와 사랑에 보답하겠습니다.</p>
                </div>
            </li>
            <li class="third">
                <div class="slogan">
                    <h2>Best &amp; First <strong>Consulting Group</strong></h2>
                    <p>고객 중심의 맞춤 컨설팅으로 신뢰와 사랑에 보답하겠습니다.</p>
                </div>
            </li>
        </ul>
    </div>
    
    <main id="content">
        <section class="business">
            <div class="container">
                <div class="section-header">
                    <h3>주요업무</h3>
                    <p>비즈키컨설팅은 고객중심의 맞춤 컨설팅을 제공합니다.</p>
                </div>
                <div class="section-content">
                    <ul class="row">
                        <li class="col-12 col-lg-4">
                            <figure>
                                <img src="/assets/images/main/img_xs_business01.jpg" class="img-fluid d-lg-none" alt="">
                                <figcaption>
                                    <dl>
                                        <dt>경영컨설팅</dt>
                                        <dd>비즈키컨설팅은 강소기업의 성공 파트너로서<br>귀사의 발전과 도약을 지원합니다.</dd>
                                    </dl>
                                </figcaption>
                            </figure>
                            <div class="btn-area">
                                <a href="#" class="btn btn-more" role="button">자세히보기</a>
                            </div>
                        </li>
                        <li class="col-12 col-lg-4">
                            <figure>
                                <img src="/assets/images/main/img_xs_business02.jpg" class="img-fluid d-lg-none" alt="">
                                <figcaption>
                                    <dl>
                                        <dt>기술컨설팅</dt>
                                        <dd>연구개발 지원사업 참여, 전략적 추진, 사업화의<br>지원으로 기술 가치를 배가시켜 드립니다.</dd>
                                    </dl>
                                </figcaption>
                            </figure>
                            <div class="btn-area">
                                <a href="#" class="btn btn-more" role="button">자세히보기</a>
                            </div>
                        </li>
                        <li class="col-12 col-lg-4">
                            <figure>
                                <img src="/assets/images/main/img_xs_business02.jpg" class="img-fluid d-lg-none" alt="">
                                <figcaption>
                                    <dl>
                                        <dt>창업컨설팅</dt>
                                        <dd>아이디어의 새싹을 거목으로 키워내서<br>풍성한 열매를 맺도록 지원합니다.</dd>
                                    </dl>
                                </figcaption>
                            </figure>
                            <div class="btn-area">
                                <a href="#" class="btn btn-more" role="button">자세히보기</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </main>

    <?php require_once($_SERVER['DOCUMENT_ROOT'].'/inc/footer.php'); ?>
    <?php require_once($_SERVER['DOCUMENT_ROOT'].'/inc/docfoot.php'); ?>
    <script type="text/javascript" src="/assets/slick/slick.min.js"></script>
    <script src="/assets/js/main.js"></script>
    <script>
        (function($){
            $(document).ready(function(){
                $('.jumbo-slide').slick({
                    lazyLoad: 'ondemand',
                    dots: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 6000
                });
            });
            /*
            $(document).on('click', '#quick-nav .btn-top', function(e) {
                $('html, body').stop().animate({
                    scrollTop: 0
                });
                e.preventDefault();
            });
            */
        })(jQuery);
    </script>
</body>
</html>
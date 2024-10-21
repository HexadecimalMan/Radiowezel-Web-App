import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function News() {
    document.title = "Aktualności - Radiowęzeł";
    return (
        <div class="mt-5">
            <div class="row text-center mx-auto pt-5">
                <h1>Najnowsze wiadomości i&nbsp;informacje</h1>
            </div>
            <div class="row mx-auto pt-5 px-4">
                <div class="col-lg-3 ">
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 ">
                    <div class="card mb-3">
                        <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 ">
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 ">
                    <div class="card mb-3">
                        <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
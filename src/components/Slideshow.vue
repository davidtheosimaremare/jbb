<template>
    <div>
        <div class="container slideshow">
            <div class="title-slideshow">
                <h2>Slideshow Component</h2>
                <div class="desc-slideshow w-50">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo
                        consequat.</p>
                </div>
            </div>
            <div id="carouselExampleControlsNoTouching" class="carousel slideshow-hero slide" data-bs-touch="false">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://placehold.co/600X400" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://placehold.co/600x400" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://placehold.co/600x400" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.slideshow-hero {
    margin: 80px 0 !important;
    border-radius: 50% !important;
}

.title-slideshow {

    margin: 80px 0;
}

.slideshow-hero img {
    border-radius: 20px;
}
</style>
import React from 'react';

function Footer(){
    const footertag = `
    <div class="d-flex flex-column h-100">
    
    
        <footer class="w-100 py-4 flex-shrink-0 bg-white ">
            <div class="container py-4">
                <div class="row gy-4 gx-5">
                    <div class="col-lg-4 col-md-6">
                        <h5 class="h1 ">Mechanic site</h5>
                        <p class="fw-bolder  text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                        
                    </div>
                    <div class="col-lg-2 col-md-6">
                        <h5 class="text-white mb-3">Quick links</h5>
                        <ul class="list-unstyled text-muted">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/signup">Get started</a></li>
                            <li><a href="/about">FAQ</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-6">
                        <h5 class="text-white mb-3">Quick links</h5>
                        <ul class="list-unstyled text-muted">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/signup">Get started</a></li>
                            <li><a href="/about">FAQ</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <h5 class="text-white mb-3">Newsletter</h5>
                        <p class="fw-bold  text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>`
    return (
        <div dangerouslySetInnerHTML={{ __html: footertag }} />
    );
}

export default function FooterComponent(){
    return(
        <>
            <Footer/>
        </>
    )
}
const navbar_data = [
   {
       brand:"Insurance",

       url1:"/index.html",
       label1:"Health Insurance",
   }
];
function navbar_template(navbar) {
   return `
    <ul class="menu-list">
        <li><i class="fas fa-band-aid fa-4x color-secondary"></i></li>
        <li> <h3>(555)555-5555</h3></li>
    </ul>
 `;
}
document.getElementById("navbar-basic").innerHTML = `${navbar_data.map(navbar_template).join('')}`;



const footer_data = [
   {
       url1:      ["https://www.facebook.com"],
       txt1:       ["www.mylinks.com"],
   },
];
function footer_template(foot) {
    return `
    <section class="section padd-64">
     <div class="grid set-cols-1">
       <ul class="column center-vertical-between center-items"">
           <li><i class="fas fa-star"></i></li>
           <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, dolor perspiciatis. Obcaecati labore ab quod qui, animi sed fugit, possimus voluptatum hic ipsum ea aut non dolor molestiae odit? Nisi.</p></li>
           <li>
                <ul>
                    <li><a href="/">link 1</a></li>
                 </ul>
           </li>
       </ul>
     </div>
    </section>
`;
}
document.getElementById("footer-basic").innerHTML = `${footer_data.map(footer_template).join('')}`;

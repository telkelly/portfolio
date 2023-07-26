import photo from '../imgs/girl.png';

const About = () => {
    return (
        <div class="main-info">
            <div class="personal-photo">
                 <img class="photo" src={photo}/> 
            </div>

            <div class="about-person">
                <h3 class="person-title">
                    Front-end Developer
                </h3>
                <h1>Kelly Teller</h1>
                <p class="description">Vestibulum sollicitudin eros eget libero lobortis, ac luctus justo lacinia. Suspendisse blandit est quis nibh convallis, ac convallis enim sagittis. Suspendisse leo massa, pretium non accumsan a, hendrerit sollicitudin lorem. Nulla facilisi. Vivamus ac nulla luctus, auctor ligula nec, interdum justo. Suspendisse orci elit, consequat quis tincidunt et, lacinia at ante. Curabitur ac vestibulum lacus, sed condimentum lectus. Nam eleifend semper nulla dignissim condimentum. Pellentesque feugiat, justo a mattis congue, sem erat pretium ante, et egestas massa purus et lectus.</p>
                <div class="info-btn">
                <button>Contact me</button>
                </div>
            </div>
        </div>
    )
}

export default About
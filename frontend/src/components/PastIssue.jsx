import React from "react";

class PastIssue extends React.Component {

    render() {
        return (
            <div class="page-margin">
                <h1>On bread</h1>
                <h4>August 28, 2021</h4>
                <br></br>
                <br></br>

                <div>
                    <div class="card" >
                        <div class="card-header">
                            <h2><p class="card-title">What bread did you eat today?</p></h2>
                        </div>
                        <div class="card-body">
                            <p class="card-text"><strong>Pidgey: </strong>I had some plain white bread today -
                                I recently been thinking about trying some whole-wheat since I read an article
                                that says it's better for your health. Just need to get over the taste! </p>
                            <br></br>
                            <p class="card-text"><strong>Kiwi: </strong>I had some pineapple bread. It was surprisingly good </p>
                            <br></br>
                            <p class="card-text"><strong>Tweety: </strong>This morning I baked some sourdough! Just waiting for it
                                to cool so I can have it with dinner!</p>
                            <div class="container">
                                {/* <img class="bread-img" src="bread.jpg"></img> */}
                                <img class="bread-img" src="https://milkandpop.com/wp-content/uploads/2021/01/sourdough-artisan-bread-baked-without-a-dutch-oven.jpg" alt="bread"></img>
                            </div>
                        </div>
                    </div>

                    <div class="card" >
                        <div class="card-header">
                            <h2><p class="card-title">Share your favourite bread recipe!</p></h2>
                        </div>
                        <div class="card-body">
                            <p class="card-text"><strong>Kiwi: </strong> This link is my favourite banana bread recipe: </p>
                            <br></br>
                            <p class="card-text"><strong>Tweety: </strong>I like this one for sourdough: </p>
                            <br></br>
                            <p class="card-text"><strong>Pidgey: </strong>I've never made bread before but I've always wanted to
                                try this recipe: </p>
                        </div>
                    </div>

                    <div class="card" >
                        <div class="card-header">
                            <h2><p class="card-title">Good places to fly to?</p></h2>
                        </div>
                        <div class="card-body">
                            <p class="card-text"><strong>Tweety: </strong>I love flying over the East Coast! The air is so mild and
                                helps the complexion of my feathers. </p>
                            <br></br>
                            <p class="card-text"><strong>Kiwi: </strong>I recommend flying over New York. There is always food on the ground
                                if you ever want to have a quick snack :0 </p>
                            <br></br>
                            <p class="card-text"><strong>Pidgey: </strong>You guys should try flying over the Hudson River, the views are so pretty there.</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default PastIssue;
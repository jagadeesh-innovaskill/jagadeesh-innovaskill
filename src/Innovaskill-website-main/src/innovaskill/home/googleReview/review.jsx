import './review.css';


function Review(){


return(<>
    <div className="review-main-div">

        <div className="review-head">
            <h1> Our Reviews </h1>
        </div>

        <div className="review-body">
            <iframe src='https://widgets.sociablekit.com/google-reviews/iframe/25397403' frameBorder={0} ></iframe>
        </div>
    </div>
</>)
}
export default Review;
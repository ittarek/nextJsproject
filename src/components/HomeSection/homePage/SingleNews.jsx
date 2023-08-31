

const SingleNews = ({singleNews}) => {
const {title, image_url,thumbnail_ur,details} = singleNews
        return (
        <div className=" container mx-auto">
  
    

            <div className="card mx-auto my-5 w-full glass">
  <figure><img src={image_url} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{details}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleNews;
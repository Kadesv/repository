export default function PageOne() {
  return (
    <>
      <div className="hero-section" >
        <div className="image-section">
          <img src="https://eyu-gen.github.io/Blog-Preview-Card/image.png" />

        </div>
        <div className="tag-section">
          <h2>Learning</h2>
        </div>
        <div className="title-section">
          <h1>HTML & CSS foundations</h1>
        </div>
        <div className="p-section">
          <p>These languages are the backbone of every wbsite, defining structure, content, and presentation.</p>

        </div>
        <div
          className="creator-section">
          <div className="user-image">
            <img src="" id="profile" />
          </div>
          <div className="user-username">
            <p> Yugin Paudel </p>
          </div>
        </div>
      </div>
    </>
  );
}

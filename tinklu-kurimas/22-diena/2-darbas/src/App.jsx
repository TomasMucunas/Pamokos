import Header from "./components/Header";
import PostContent from "./components/PostContent";
import PostImage from "./components/PostImage";
import Box from "./components/Box";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Header title="Labas, aš mokausi" link="src/assets/js.jpg" />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <PostContent title="Post Title" text="Post content text goes here." />
        </div>
        <div className="col-6">
          <PostImage src="src/assets/post-image.jpg" />
        </div>
      </div>
      <div className="row">
        <Box color="red" />
        <Box color="blue" />
        <Box color="green" />
      </div>
    </div>
  );
}

export default App;

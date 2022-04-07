import { useContext } from 'react';
import { FeedContext } from '../../App';
import { IPost } from '../Post/Post';

export interface ICreatePostFormProps {
}

export function CreatePostForm (props: ICreatePostFormProps) {

  
//const [post,setPost] = useState({heading:"", body:"",authorName:""});
const {posts, setPosts} = useContext(FeedContext);

function handleSubmit(e) {
    const form = e.target;
    const tempPost = {
        heading: form.heading.value,
        body: form.body.value,
        authorName: 'mahdude',
        authorId:3
    }
    setPosts([...posts, tempPost]);
    e.preventDefault();
}
  return (
    <div className="post-form">
        <form onSubmit={handleSubmit}>
        <label>
          Post heading:
          <input name="heading" type="text"/>
        </label>
        <label>
          Post:
          <input name="body" type="text" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

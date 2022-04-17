import { useAuth0 } from '@auth0/auth0-react';
import { useContext } from 'react';
import { FeedContext } from '../../App';
import { useMutation } from '@apollo/client';
import { CREATE_POST } from '../../Queries';
// import { IPost } from '../Post/Post';

// export interface ICreatePostFormProps {
// }

export function CreatePostForm (
  // props: ICreatePostFormProps
) {

  
//const [post,setPost] = useState({heading:"", body:"",authorName:""});
const {posts, setPosts} = useContext(FeedContext);
const {user} = useAuth0();

function handleSubmit(e) {
  const [addPost, { data, loading, error }] = useMutation(CREATE_POST);
  if (user) {
    const form = e.target;
    const tempPost = {
        heading: form.heading.value,
        body: form.body.value,
        authorName: user?.name,
        authorId:user?.sub
    }
   // setPosts([...posts, tempPost]);
   if (loading) return 'Submitting...';
   if (error) return `Submission error! ${error.message}`;
   addPost({variables: {body: form.body.value, authorId: user?.sub, heading: form.heading.value}}) 
   e.preventDefault();}
    else {e.preventDefault()}
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

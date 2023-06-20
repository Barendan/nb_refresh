import Head from 'next/head'
import { Container, TextArea, Confirm, Button, Header, Form, Dimmer, Loader, Message } from 'semantic-ui-react'


function PostDetailPage(props) {
  
  // Make function in another file that will fetchpostbyid
  // useRouter from next to get the id and pass it into function ^
  // Get data and use the data inside the slug page
  
  return (
    <>
      {/* {console.log('show slug props:', props)} */}
      <Head>
        {/* <title>{props.post.title}</title> */}
        {/* <meta name="description" content={props.post.excerpt} /> */}
      </Head>
      
      <Container fluid className="Home">
        <Container className="item-container">
            <Header size="huge" className="item-header">
                {/* {blog.getPost.title}
                <Header.Subheader>
                    <i>{blog.getPost.createdAt}</i>
                </Header.Subheader> */}
            </Header>
            {/* <TextArea className="item-body" value={blog.getPost.body}/> */}
            
        </Container>

{/* 
        <Confirm
            open={open}
            content='Are you sure you want to delete this post?'
            cancelButton='Nevermind'
            confirmButton="Delete it"
            onCancel={() => setOpen(false)}
            onConfirm={handleDelete}
        /> */}
    </Container>

    </>
  )
}

// export function getStaticProps(context) {
//   const { params } = context;
//   const { slug } = params;

//   console.log('param:', params)

//   // const postData = getPostData(slug);
//   // return {
//   //   props: {
//   //     post: postData
//   //   },
//   //   revalidate: 600
//   // }
// }

export default PostDetailPage
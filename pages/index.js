import DefaultLayout from '@layouts/default'
import Link from 'next/link'
import {getConfig, getAllPosts} from '@api'

export default function Blog(props) {
    return (
        <DefaultLayout title={props.title} description={props.description}>
            <hr/>
            <div>
                {props.posts.map(function (post) {
                    return (
                        <div className='col p-4 d-flex flex-column position-static'>
                            <strong className='d-inline-block mb-2 text-primary'>Hello</strong>
                            <h3 className='mb-0'>{post.title}</h3>
                            <div className='mb-1 text-muted'>13-321-2</div>
                            <Link href={'/posts/' + post.slug}>Continue reading</Link>
                        </div>
                    )
                })}
            </div>
        </DefaultLayout>
    )
}

export async function getStaticProps() {
    const config = await getConfig()
    const allPosts = await getAllPosts()

    return {
        props: {
            posts: allPosts,
            title: config.title,
            description: config.description
        }
    }
}
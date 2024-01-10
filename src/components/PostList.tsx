import AuthContext from 'context/AuthContext';
import {collection, deleteDoc, doc, getDocs} from 'firebase/firestore'
import {db} from 'firebaseApp'
import {useContext, useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import { toast } from 'react-toastify';
interface PostsListProps {
    hasNavigation? : boolean;
}

type TabType = 'all' | 'any';

export interface PostProps {
    id?: string;
    title: string;
    email : string;
    summary : string;
    content : string;
    createdAt: string;
    updatedAt? : string;
    uid : string;
}

export default function PostList ( {hasNavigation = true } : PostsListProps ) {
    const [activeTab, setActiveTab] = useState<TabType>("all");
    const [ posts, setPosts] = useState<PostProps[]>([])
    const { user } = useContext(AuthContext)

    const getPosts = async ()=>{
        const datas = await getDocs(collection(db, "posts"));
        //  setPosts([]); 로 삭제를 누를 때마다 게시글이 더 늘어나는 오류 해결
        setPosts([]);
        datas?.forEach((doc)=>{
            const dataObj = {...doc.data(), id: doc.id}
            setPosts((prev: any) => [...prev, dataObj as PostProps])
        })
    }

    const handleDelete = async (id : string) =>{
        const confirm = window.confirm("해당 게시글을 삭제하시겠습니까?")
        if (confirm && id) {
            await deleteDoc(doc(db, "posts", id))
            toast.success("게시글을 삭제했습니다.")
            //  getPosts() 변경된 posts 리스트를 다시 가져오지 않는 오류 해결
            getPosts();
        }
    }

    useEffect(()=>{
        getPosts()
    },[])


    return(
        <>
       {hasNavigation && 
          (<div className='post__navigation'>
                <div className='post__navigation--action'>전체</div>
                <div>나의 글</div>
            </div>)
        }
         <div className="post__list">
                { posts?.length > 0 ? 
                posts?.map((post, index)=>(
                    <div key={post?.id} className='post__box'>
                        <Link to={`/posts/${post?.id}`}>
                            <div className='post__profile-box'>
                                <div className='post__profile'/>
                                <div className='post__author-name'>{post?.email}</div>
                                <div className='post__date'>{post?.createdAt}</div>
                            </div>
                            <div className='post__title'>
                                {post?.title}
                            </div>
                            <div className='post__text'>
                                {post?.summary}
                            </div>
                            </Link>
                            { post?.email === user?.email && (
                            <div className='post__utils-box'>
                            <div className='post__delete' role="presentation" onClick={()=>handleDelete(post.id as string)}>삭제</div>
                            <Link to={`/posts/edit/${post?.id}`} className="post__edit">수정</Link>
                        </div>
                            )}
                    </div>
                )) : <div className='post__no-post'>게시글이 없습니다.</div>}
            </div>
            </>
    )
}
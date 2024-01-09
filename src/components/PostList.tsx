import {Link} from "react-router-dom"
interface PostsListProps {
    hasNavigation? : boolean;
}

export default function PostList ( {hasNavigation = true } : PostsListProps ) {
    return(
        <>
       {hasNavigation && 
          (<div className='post__navigation'>
                <div className='post__navigation--action'>전체</div>
                <div>나의 글</div>
            </div>)
        }
         <div className="post__list">
                {[...Array(10)].map((e,index)=>(
                    <div key={index} className='post__box'>
                        <Link to={`/poste/${index}`}>
                            <div className='post__profile-box'>
                                <div className='post__profile'/>
                                <div className='post__author-name'>패스트캠퍼스</div>
                                <div className='post__date'>2024.01.05</div>
                            </div>
                            <div className='post__title'>
                        게시글 {index}
                            </div>
                            <div className='post__text'>
AKMU is a South Korean brother and sister duo, consisting of Lee Chan-hyuk and Lee Su-hyun. He belongs to YG Entertainment. Previously, they were active as Akdong Musician, but since September 2019, they changed the group name to AKMU. Akdong Musician participated in SBS's audition program "K-Pop Star 2" and won.
                            </div>
                        <div className='post__utils-box'>
                            <div className='post__delete'>삭제</div>
                            <div className='post__edit'>수정</div>
                        </div>
                        </Link>
                    </div>
                ))}
            </div>
            </>
    )
}
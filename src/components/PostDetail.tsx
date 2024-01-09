import {Link} from 'react-router-dom'

export default function PostDetail() {
    return(
        <>
        <div className="post__detail">
            <div className="post__box">
                <div className="post__title">
                    Lorem ipsum dolor sit amet, consectetur adipisching elit.
                </div>
                <div className="post__profile-box">
                                <div className='post__profile'/>
                                <div className='post__author-name'>패스트캠퍼스</div>
                                <div className='post__date'>2024.01.05</div>
                        </div>
                        <div className='post__utils-box'>
                            <div className='post__delete'>삭제</div>
                            <div className='post__edit'><Link to={`/posts/edit/1`}>수정</Link></div>
                            </div>
                            <div className='post__text'>
AKMU is a South Korean brother and sister duo, consisting of Lee Chan-hyuk and Lee Su-hyun. He belongs to YG Entertainment. Previously, they were active as Akdong Musician, but since September 2019, they changed the group name to AKMU. Akdong Musician participated in SBS's audition program "K-Pop Star 2" and won.
                </div>
            </div>
        </div>
        </>
    )
}